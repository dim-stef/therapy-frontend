import {useHistory} from 'react-router-dom';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import {CardElement, useStripe, Elements , useElements} from '@stripe/react-stripe-js';
import DatetimePicker from '../datetimePicker/DatetimePicker';
import axios from 'axios';

function TherapistCard({therapist}){
  const stripe = useStripe();
  const history = useHistory();
  
  async function handleClick(event){
    console.log(therapist);

    const response = await fetch(process.env.REACT_APP_API_URL +
      `/v1/create_checkout_session/${therapist.profile.stripe_id}/`, {method: 'POST'});

    console.log(response);
    const session = await response.json();
    const result = await stripe.redirectToCheckout({sessionId:session.sessionId});
    if(result.error){
      console.error(result.error.message)
    }
  }

  return(
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <div>
          <DatetimePicker therapist={therapist} onOk={handleClick}/>
        </div>,
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
