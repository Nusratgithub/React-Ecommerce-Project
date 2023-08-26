import React from 'react'
import { store } from '../productsStore/Store'
// import "../styles/OurBestSellers.css"
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux-state/CartState'

import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


const OurBestSellers = (props) => {

    const { title, price, id, image } = props;

    const dispacth = useDispatch();

    const addItemToCartHandler = (e) => {

        dispacth(
            cartActions.addItemToCart({
                id,
                price,
                title,
                image,
            })
        )
    }

    const toast = useToast();




    return (
        <div>
            <div key={id}>

          <div className='p-[18px] zoom shadow-xl rounded-xl border border-[#E8E8E8]'>
            <Link to={`/${id}`}>
              <figure>
              <img className='rounded-xl w-full h-[360px] object-cover mb-5' src={image} alt={title} />
              </figure>
            </Link>
            <h3 className='text-text-body text-text-25 leading-leading-30 font-bold mb-5'>{title}</h3>
            <div className='flex justify-between items-center'>
                <p className='text-red-500 text-xl font-semibold leading-6'>Price: ${price}</p>
                <div className="card-actions" onClick={() =>
                            toast({
                                title: '',
                                description: "Successfully Added",
                                status: 'success',
                                duration: 1500,
                                isClosable: true,
                            })
                        }>
                            <button className="btn btn-outline" onClick={addItemToCartHandler}>Buy Now</button>
                        </div>
            </div>
        </div>

            </div>



        </div>
    )
}

export default OurBestSellers
