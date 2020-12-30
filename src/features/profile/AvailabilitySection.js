import {useState, useEffect} from 'react';
import { DatePicker, Space, Select, TimePicker, Button } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {getUserData} from '../authentication/authenticationSlice';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const { RangePicker } = TimePicker;

const days = [
  {
    value:'1', label:'Monday'
  },
  {
    value:'2', label:'Tuesday'
  },
  {
    value:'3', label:'Wednesday'
  },
  {
    value:'4', label:'Thursday'
  },
  {
    value:'5', label:'Friday'
  },
  {
    value:'6', label:'Saturday'
  }, 
  {
    value:'7', label:'Sunday'
  },
]

function AvailabilitySection({therapist}){
  const dispatch = useDispatch();
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [currentAvailabilityRanges, setCurrentAvailabilityRanges] = useState(therapist.availability_times);
  const [loading, setLoading] = useState(false);

  function handleChange(value, value_str, range){

    if(value){
      setCurrentAvailabilityRanges(ranges=>{
        // doing some js magic here to assign new properties on the existing
        // "currentAvailabilityRanges" array

        let newRanges = [...ranges];
        let rangeIndex = newRanges.findIndex(r=>r.id==range.id);

        let newRange = newRanges[rangeIndex];

        // the above variable contains read-only properties so we clone it to skip this problem
        let clone = JSON.parse(JSON.stringify(newRange));
        clone.start_time = value_str[0] + ':00:00';
        clone.end_time = value_str[1] + ':00:00';

        newRanges[rangeIndex] = clone;
        return newRanges;
      })
    }else{

    }
  }
  
  function handleDayChange(value){
    setSelectedDay(days.find(d=>d.value==value))
  }

  function handleRemoveRange(range){
    setCurrentAvailabilityRanges(ranges=>{
      let newRanges = [...ranges];
      let rangeIndex = newRanges.findIndex(r=>r.id==range.id);
      if (rangeIndex > -1) {
        newRanges.splice(rangeIndex, 1);
      }
      return newRanges;
    })
  }

  function handleAddTime(){
    setCurrentAvailabilityRanges(ranges=>{
      let newRanges = [...ranges];
      let newTimeRange = {
        start_time:"00",
        end_time:"00",
        weekday:selectedDay.value,
        id: uuidv4(),
      }
      newRanges.push(newTimeRange)
      return newRanges;
    })
  }

  async function handleUpdateTimes(){
    try{
      const url = `${process.env.REACT_APP_API_URL}/v1/therapists/${therapist.id}/availability/`;
      let formData = new FormData();
      currentAvailabilityRanges.forEach(data=>{
        formData.append('available_times', JSON.stringify(data))
      })
      //formData.append('available_times', currentAvailabilityRanges)
      let data = {
        available_times:currentAvailabilityRanges
      }
      setLoading(true);
      let response = await axios.post(url,data);
      setLoading(false);
      dispatch(getUserData());
    }catch(e){
      setLoading(false);
      console.error(e);
    }
  }

  function onCalendarChange(date1,date2){
    console.log(date1,date2);
  }
  return(
    <Space direction="vertical" align="start">
      <Select defaultValue={selectedDay.value} style={{ width: 120 }} onChange={handleDayChange}>
        {days.map(day=>{
          return(
            <Select.Option value={day.value}>{day.label}</Select.Option>
          )
        })}
      </Select>
      {currentAvailabilityRanges.filter(av=>av.weekday==selectedDay.value).map((range, i)=>{
        return(
          <div key={i} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <RangePicker value={[moment(range.start_time, 'HH'), moment(range.end_time, 'HH')]} 
            format="HH" onChange={(start, end)=>handleChange(start, end, range)} onCalendarChange={onCalendarChange}/>
            <CloseCircleFilled style={{marginLeft:5, color:'#cacaca'}} onClick={()=>handleRemoveRange(range)}/>
          </div>
        )
      })}
      <Button type="dashed" onClick={handleAddTime}>Add more times</Button>
      <Button type="primary" loading={loading} onClick={handleUpdateTimes}>Save</Button>
    </Space>
  )
}

export default AvailabilitySection;
