import React from 'react'
import { useSelector } from 'react-redux';
import Cart from './Cart';
import CartPageFaq from './CartPageFaq';
import EmptyCart from './EmptyCart';


const CartHold = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartLen = cartItems.length;

    const totalPrice = cartItems.map(item => {
        return item.quantity * item.price;
    }).reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);


    return (
        <div className='container mx-auto'>
            {/*<p className=' font-bold text-2xl fof'>CART TOAL ${totalPrice} </p>*/}
            {cartLen === 0 ? <EmptyCart /> : <>
            <h3 className="text-3xl font-semibold lg:text-left my-5 text-center">You have {cartLen} Cart Item</h3>
    <div className='lg:flex gap-20'>
    <div className='w-full'>
    <table className="min-w-full max-w-full">
        <thead className="bg-gray-400  w-full mx-auto text-white border">
          <tr className="text-center p-10 mx-auto">
            <th className="p-3">Image</th>
            <th className="">Name</th>
            <th className="">Price</th>
            <th className="">Quantity</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody>
           {cartItems.map((item) => (
                            <Cart
                                key={item.id}
                                item={{
                                    id: item.id,
                                    title: item.name,
                                    quantity: item.quantity,
                                    total: item.totalPrice,
                                    price: item.price,
                                    image: item.picture,
                                    cartLength: cartItems.length,
                                }}
                            />
                       
                    ))}
        </tbody>
      </table>
    </div>
    </div>
      <CartPageFaq/>
                 
            </>}





        </div>
    )
}

export default CartHold;