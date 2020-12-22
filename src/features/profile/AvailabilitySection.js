import {useState, useEffect} from 'react';
import { DatePicker, Space, Select, TimePicker  } from 'antd';
import moment from 'moment';

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
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [currentAvailabilityRanges, setCurrentAvailabilityRanges] = useState([]);

  console.log(therapist);
  function handleChange(start, end){
    console.log(start, end)
  }

  useEffect(()=>{
    let timeRanges = therapist.availability_times.filter(av=>av.weekday==selectedDay.value).map(av=>{
      return [av.start_time, av.end_time]
    })
    setCurrentAvailabilityRanges(timeRanges)
    console.log(timeRanges)
  },[selectedDay])

  var time = "15:00:00";
  var formatted = moment(time, "HH");

  return(
    <Space direction="vertical" align="start">
      <Select defaultValue={selectedDay.value} style={{ width: 120 }} onChange={()=>{}}>
        {days.map(day=>{
          return(
            <Select.Option value={day.value}>{day.label}</Select.Option>
          )
        })}
      </Select>
      {currentAvailabilityRanges.map(range=>{
        return(
          <RangePicker value={[moment(range[0], 'HH'), moment(range[1], 'HH')]} format="HH" onChange={handleChange}/>
        )
      })}
      
    </Space>
  )
}

export default AvailabilitySection;
