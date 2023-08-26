import React from 'react'
import GooglePayButton from "@google-pay/button-react";
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useEffect } from 'react';
import CartAdditonalFeatures from './CartAdditonalFeatures';
import CartPageFaq from './CartPageFaq';
import Features2 from './Features2';
import { useSelector } from 'react-redux';

const CartTotal = (props) => {

    let finapPr = props.totalPr + 20 + 15;

    let cartItems = useSelector((state) => state.cart.items);

    let cartLen = cartItems.length;

    const totalPrice = cartItems.map(item => {
        return item.quantity * item.price;
    }).reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);



    return (
        <div className='cartTotalMainParent gap-20 lg:flex my-20 py-5 px-5 mx-auto'>
            <div>
            <div className='flex flex-row gap-36 font-semibold text-2xl mt-8  gap6rem'>
                <p className=' ml-14'> SUBTOTAL </p>
                <p> ${Math.round(totalPrice)}</p>
            </div>

            <div className='headingHold mobTextSize2 mt-10 fof flex flex-col gap-12 ml-16 mr-4 font-medium text-xl'>
                <p> SHIPPING </p>
                <p> INCL, TAX  </p>
            </div>

            <div className='calcHold mobTextSize relative fof flex flex-col gap-12 font-medium text-xl'>
                <p> $20 </p>
                <p> $15 </p>
            </div>

            <div className=' relative totLine'>
                <p className=' text-gray-300'> ________________________________________________________ </p>
            </div>

            <div className='ctActualToatal fof text-xl font-medium relative'>
                <p> TOATL  ${Math.round(totalPrice + 20 + 15)}</p>
            </div>

            </div>



            <div className='w-full mt-10'>
                <PayPalScriptProvider>
                    <PayPalButtons aria-label='BUY WITH PAYPAL' 
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "200",
                                    },
                                },
                            ],
                        });
                    }}>

                    </PayPalButtons>
                </PayPalScriptProvider>
            </div>

         

        </div>
    )
}

export default CartTotal

