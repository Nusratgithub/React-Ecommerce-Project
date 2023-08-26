import React from 'react'
import cartgif from "../assets/cartGif.gif";
// import "../styles/BestSellers.css";


const EmptyCart = () => {
    return (
        <div className=' text-center mt-10 h-full'>

            <div id='fs'>
                <p className=' text-3xl fof uppercase ' id='fs'>Cart Is Empty Maybe Order Something :) </p>
            </div>

            <img src={cartgif} className="mx-auto" />
        </div>
    )
}

export default EmptyCart