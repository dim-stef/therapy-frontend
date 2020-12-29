import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { DatePicker, Space } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import {getMySessions} from '../sessions/sessionSlice';
import axios from 'axios';
import moment from 'moment';

const { RangePicker } = DatePicker;


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

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function getDisabledHoursFromAvailability(times){
  // times are the therapists available hours
  // we want to return the rest of the hours that the therapist is not available
  // in order to disable them in antdesigns datepicker
  const hours = range(0, 24)
  const result = [];
  hours.forEach(hour=>{
    if(!times.includes(hour)){
      result.push(hour);
    }
  })
  return result;
}

function disabledDateTime(hours) {
  return {
    disabledHours: () => hours,//range(0, 24).splice(4, 20),
    //disabledMinutes: () => range(30, 60),
  };
}

function DatetimePicker({therapist, onOk}){
  const {sessions} = therapist;
  const history = useHistory();
  const dispatch = useDispatch();
  const [disabledHours, setDisabledHours] = useState([]);

  const notify = () => {
    toast("Your session has been requested, click here to view its status.", {
      onClick:()=>{
        history.push('/my_sessions');
      }
    });
  }

  // find which hours the therapists has appointments and disable them
  function handleSelect(date){
    
    // here we get the standard hours that the therapist has set
    // he is not available
    let _day = date.day();
    let foundDay = days.find(d=>d.value==_day)
    let available_times = therapist.availability_times.filter(availability=>availability.weekday==foundDay.value).map(availability=>{
      let startTime = parseInt(availability.start_time.substring(0, 2));
      let endTime = parseInt(availability.end_time.substring(0, 2)) + 1; // plus 1 to include the last hour
      return range(startTime, endTime);
    })
    available_times = available_times.flat()
    let standardDisabledHours = getDisabledHoursFromAvailability(available_times);
    
    // here we get the dynamic disabled hours that are occupied
    // by existing sessions
    let disabled = [];
    let day = date.date();
    sessions.forEach(session=>{
      let startDate = moment(session.start_date);
      let endDate = moment(session.end_date);
      if(startDate.date()==day){
        disabled.push(startDate.hour());
        //disabled.push(endDate.hour());
      }
    })

    // at the end we concat the two arrays together
    setDisabledHours(disabled.concat(standardDisabledHours));
  }

  async function handleCreateSession(dateString){
    try{
      let formData = new FormData();
      formData.append('start_date', dateString);
      formData.append('therapist', therapist.id);
      const url = process.env.REACT_APP_API_URL + '/v1/create_session/';
      let response = await axios.post(url, formData);
      console.log(response)
      if(response.status==200 || response.status==201){
        dispatch(getMySessions());
        notify();
      }
    }catch(e){

    }
  }

  function handleChange(date, dateString){
    let isoDate = date.toISOString()
    handleCreateSession(isoDate)
  }

  console.log(disabledHours);
  return(
    <Space direction="vertical" size={12}>
      <DatePicker
        onChange={handleChange}
        onSelect={handleSelect}
        onOk={onOk}
        placeholder="Buy a session"
        format="YYYY-MM-DD HH:mm"
        disabledTime={()=>disabledDateTime(disabledHours)}
        showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
      />
    </Space>
  )
}

export default DatetimePicker;
