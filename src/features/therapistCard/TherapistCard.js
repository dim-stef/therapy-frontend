import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import DatetimePicker from '../datetimePicker/DatetimePicker';

function TherapistCard({therapist}){
  const stripe = useStripe();

  async function handleClick(event){
    const response = await fetch(process.env.REACT_APP_API_URL +
      '/v1/create_checkout_session/', {method: 'POST'});

    const session = await response.json();
    const result = await stripe.redirectToCheckout({sessionId:session.sessionId});
    if(result.error){
      console.error(result.error.message)
    }
  }

  console.log(therapist)
  return(
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <div onClick={()=>{}}>
          <DatetimePicker therapist={therapist}/>
        </div>,
        /*<EllipsisOutlined key="ellipsis" />,*/
      ]}
    >
      <Skeleton loading={false} avatar active>
        <Card.Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={therapist.profile.name}
          description={therapist.bio.substring(0,70)}
        />
      </Skeleton>
    </Card>
  )
}

export default TherapistCard;
