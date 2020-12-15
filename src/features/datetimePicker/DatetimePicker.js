import {useState} from 'react';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import axios from 'axios';

const { RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime(hours) {
  return {
    disabledHours: () => hours,//range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}


function DatetimePicker({therapist}){
  const {sessions} = therapist;
  const [disabledHours, setDisabledHours] = useState([]);

  // find which hours the therapists has appointments and disable them
  function handleSelect(date){
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
    setDisabledHours(disabled);
  }

  async function handleCreateSession(dateString){
    try{
      let formData = new FormData();
      formData.append('start_date', dateString);
      formData.append('therapist', therapist.id);
      const url = process.env.REACT_APP_API_URL + '/v1/create_session/';
      let response = await axios.post(url, formData);
      console.log(response)
    }catch(e){

    }
  }

  function handleChange(date, dateString){
    console.log(date, dateString);
    let isoDate = date.toISOString()
    handleCreateSession(isoDate)
  }

  console.log(disabledHours);
  return(
    <Space direction="vertical" size={12}>
      <DatePicker
        onChange={handleChange}
        onSelect={handleSelect}
        placeholder="Buy a session"
        format="YYYY-MM-DD HH:mm"
        disabledTime={()=>disabledDateTime(disabledHours)}
        showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
      />
    </Space>
  )
}

export default DatetimePicker;
