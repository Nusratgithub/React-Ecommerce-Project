import React from 'react';
import { useSelector } from 'react-redux';

const CartTotal = (props) => {

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const cardName = form.card.value;
    const creditNumber = form.credit.value;
    console.log(name,email, password,cardName,creditNumber);
  }
    let cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.map(item => {
        return item.quantity * item.price;
    }).reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);



    return (
        <div className='gap-16 lg:flex my-20 lg:mx-20'>
            <div className="lg:w-1/2 rounded-xl shadow-2xl my-10 lg:my-0 p-10">
            <form className="w-full" onSubmit={handleSubmit}>
              <h1 className='text-3xl tracking-wide uppercase text-center font-bold mb-3'>Billing Address</h1>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full  px-3 md:mb-0">
      <label className="block text-md uppercase text-gray-700 font-semibold mb-2">
        Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="your name" name='name' required/>
    </div>

  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase text-gray-700 text-md font-semibold mb-2">
        email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='email' type="text" placeholder="your email" required/>
    </div>
    <div className="w-full px-3">
      <label className="block uppercase text-gray-700 text-md font-semibold mb-2">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" type="password" placeholder="*************" required/>
    </div>
  </div>
  <h1 className='text-2xl font-bold mb-4'>Payment</h1>
  <div className="w-full mb-3">
      <label className="block uppercase text-gray-700 text-md font-semibold mb-2">
        Name on card
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='card' type="text" placeholder="your card name" required/>
    </div>
    <div className="w-full">
      <label className="block uppercase text-gray-700 text-md font-semibold mb-2">
        credit card number
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='credit' type="number" placeholder="your card number" required/>
    </div>
    <button className='btn bnt-outline text-white w-full text-center  mt-4 text-lg font-semibold rounded hover:bg-white hover:text-black border-1-black'>Continue to checkout</button>
            </form>
         </div>
         <div className='lg:w-1/2 h-96 rounded-xl shadow-2xl space-y-6 '>
         <button className='btn bnt-outline text-white w-full text-center  mt-4 text-lg font-semibold rounded hover:bg-white hover:text-black border-1-black'>Order Summary</button>
            <div className='flex mt-3 justify-center items-center gap-32 text-2xl font-semibold'>
                <p className=''> SUBTOTAL </p>
                <p> ${Math.round(totalPrice)}</p>
            </div>

            <div className='flex justify-center gap-32 text-xl font-medium'>
                <p> SHIPPING </p>
                <p> $20 </p>
            </div>

            <div className='flex justify-center gap-32 text-xl font-medium'>
                <p> INCL, TAX  </p>
                <p> $15 </p>
            </div>

          <hr className='w-80 mx-auto border border-10'/>

            <div className='flex justify-center gap-36 text-xl font-medium'>
                <p> TOTAL</p>
                <p>${Math.round(totalPrice + 20 + 15)}</p>
            </div>

            </div>        

         

        </div>
    )
}

export default CartTotal

