// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const CheckoutForm = ({ order }) => {
    // const [cardError, setCardError] = useState('');
    // const [success, setSuccess] = useState('');
    // const [processing, setProcessing] = useState(false);
    // const [transactionId, setTransactionId] = useState('');
    // const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate()

    // const stripe = useStripe();
    // const elements = useElements();
    // const { price, email, _id,customer } = order;

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("https://genius-car-server-nu-ten.vercel.app/create-payment-intent", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify({ price }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setClientSecret(data.clientSecret));
    // }, [price]);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!stripe || !elements) {
    //         return
    //     }

    //     const card = elements.getElement(CardElement);
    //     if (card === null) {
    //         return;
    //     }

    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card
    //     });

    //     if (error) {
    //         console.log(error);
    //         setCardError(error.message);
    //     }
    //     else {
    //         setCardError('');
    //     }
    //     setSuccess('');
    //     setProcessing(true);
    //     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
    //         clientSecret,
    //         {
    //             payment_method: {
    //                 card: card,
    //                 billing_details: {
    //                     name: customer,
    //                     email: email
    //                 },
    //             },
    //         },
    //     );
    //     console.log(paymentIntent)

    //     if (confirmError) {
    //         setCardError(confirmError.message);
    //         return;
    //     }
    //     if (paymentIntent.status === "succeeded") {
    //         console.log('card info', card);
    //         // store payment info in the database
    //         const payment = {
    //             price,
    //             transactionId: paymentIntent.id,
    //             email,
    //             bookingId: _id
    //         }
    //         fetch('https://genius-car-server-nu-ten.vercel.app/payments', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             },
    //             body: JSON.stringify(payment)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.insertedId) {
    //                     alert('payment successfully')
    //                     setSuccess('Congrats! your payment completed');
    //                     setTransactionId(paymentIntent.id);
    //                     navigate('/orders')
    //                 }
    //             })
    //     }
    //     setProcessing(false);


    // }

    return (
        <>
            <form>
                {/* <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                /> */}
                <button
                    className='btn btn-sm mt-4 '
                    type="submit"
                    >
                  Pay
                </button>
            </form>
            <p className="text-red-500 my-2"></p>
            {
              <div>
                    <p className='text-green-500 my-3'></p>
                    <p>Your transactionId: 
                        <span className='font-bold'></span>
                        </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;