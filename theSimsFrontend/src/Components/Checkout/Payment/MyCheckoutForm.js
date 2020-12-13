import React from 'react'
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';
import { Form } from 'antd'
import classes from '../Checkout.less'
import Text from 'antd/lib/typography/Text';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};
export default function Mycheckoutform(props) {

  const [error, setError] = useState(null);
  // const stripe = useStripe();
  // const elements = useElements();


  const stripeTokenHandler = (token) => {
    const paymentData = { token: token.id };

    // // Use fetch to send the token ID and any other payment data to your server.
    // // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // const response = await fetch('/charge', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(paymentData),
    // });

    // // Return and display the result of the charge.
    // return response.json();
  }

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  }

 

  return (

    <Form.Item 
    label="Card"
    name="cardInfo"
    className={classes.paymentFormItem}
    label={<Text strong>Card</Text>}
    >
      <CardElement
        id="card-element"
        options={CARD_ELEMENT_OPTIONS}
        onChange={handleChange}
      />
    </Form.Item>


  )





}
