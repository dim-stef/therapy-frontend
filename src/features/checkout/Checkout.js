import React from 'react';
import ReactDOM from 'react-dom';
import {Elements, useStripe} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51Hx0mAIOSAQCOqoS3RDqi3pP9fMeOyRTMBLpfMQUj3CkRC677cCzgyvOjgUGU9UeU6SVGuQn8tmDvZKvTQNMmUGL00N7DBS8GZ");

function Checkout() {
  const stripe = useStripe();
  return (
    <div className="App-container">
      <Elements stripe={stripe}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
