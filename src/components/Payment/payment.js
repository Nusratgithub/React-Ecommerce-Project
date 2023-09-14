// // import { Elements } from '@stripe/react-stripe-js';
// // import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';
// import { useLoaderData, useNavigation } from 'react-router-dom';
// import CheckoutForm from './CheckoutForm';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51NFXHcHfF00l8aZzH9D9hxSN2625I71Bm4e7HCXmmXy1EkQ8Dx1kKEhK34a0Gu3fgcDvLGXcmOfLOwIHiWxegtcu00lEMgcifU');
// console.log(stripePromise)

// const Payment = () => {
//     // const order = useLoaderData();
//     // console.log(order);
//     // const {serviceName,price} = order;
//     // const navigation = useNavigation();
    
//     // if(navigation.state === "loading"){
//     //     return <Loading></Loading>
//     // }
//     return (
//         <div className='container mx-auto my-20  border shadow rounded py-8 lg:w-7/12'>
//             <h3 className="text-2xl px-10">Payment for </h3>
//             <p className="text-xl px-10 mb-5">Please pay  for car service</p>
//             <div className='px-10 pt-2'>
//              <CheckoutForm/>
             
               
//             </div>
//         </div>
//     );
// };

// export default Payment;