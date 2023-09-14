import React from 'react'
import { useSelector } from 'react-redux'
import { cartActions } from '../redux-state/CartState'
import { useDispatch } from 'react-redux'
import { MdAdd } from "react-icons/md";
//import { GrFormSubtract } from "react-icons/gr"
import { RiSubtractFill } from "react-icons/ri"
import { Link } from 'react-router-dom';


const Cart = (props) => {

  const { title, quantity, price, id, image, total, cartLength } = props.item;



  const cartList = useSelector((state) => state.cart.items);



  const dispacth = useDispatch();


  const totalPrice = cartList.map(item => {
    return item.quantity * item.price;
  }).reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);




  const removeItemFromCartHandler = () => {
    dispacth(cartActions.removeItemFromCart(id))
  }

  const addItemToCartHandler = () => {
    dispacth(
      cartActions.addItemToCart({
        id,
        price,
        title,
        image,
      })
    )
  }


  return (
    <tr className="text-center">
    <td className="p-3 flex items-center gap-2">
      <button onClick={() => removeItemFromCartHandler(id)} className="btn btn-circle btn-outline btn-xs btn-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <img className='w-20 rounded' src={image} alt="" />
    </td>
    <td className="lg:p-4 pt-3 pl-5">
      <p>{title}</p>
    </td>
    <td className="p-3">
      <p>${price}</p>
    </td>
    <td className='flex bg-black text-white flex-column mt-10 p-1 lg:py-2 border rounded-md'>
          <div className=' flex flex-row gap-5 mx-auto'>
            <RiSubtractFill className='my-auto text-3xl text-white  cursor-pointer my-auto' onClick={removeItemFromCartHandler} />
            <p className=' text-2xl my-auto'> {quantity} </p>
            <MdAdd className=' text-3xl my-auto' onClick={addItemToCartHandler} />
          </div>
        </td>
    <td className="p-3 mt-2">
    {
        <Link
        to='/payment/:id'
    >
        <button
            className='btn btn-sm'
        >Pay</button>
    </Link>                              
    }
   </td>
  </tr>


  )
}

export default Cart

