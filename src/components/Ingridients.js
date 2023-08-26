import React from 'react'
// import "../styles/Ingridients.css"

import ing1 from "../assets/ing1.png";
import ing2 from "../assets/ing2.png";
import ing3 from "../assets/ing3.png";
import ing4 from "../assets/ing4.png";
import ing5 from "../assets/ing5.png";
import ing6 from "../assets/ing6.png";


const Ingridients = () => {
    return (
        <div className='my-20 hidden md:block'>
            <p className=' text-3xl font-semibold italicbs text-center mb-16'> OUR INGRIDENTS </p>

           
            <div className='flex gap-32 justify-center items-center'>
            <div className=''>
                <img src={ing1} className="zoom2 h-20"/>
                <p className='text-xl my-4'>All Natural</p>
            </div>
            <div className=''>
                <img src={ing2} className="zoom2 h-20"/>
            <p className='text-xl my-4 '>Vegetables</p>
            </div>
            <div className=''>
                <img src={ing3} className="zoom2 h-20"/>
                <p className='text-xl my-4 ml-4'>Fruits</p>
            </div>
            <div className=''>
                <img src={ing4} className="zoom2 h-20"/>
                <p className='text-xl my-4 ml-3'>Vegan</p>
            </div>
            <div className=''>
                <img src={ing5} className="zoom2 h-20"/>
                <p className='text-xl my-4'>Essential Oils</p>
            </div>
            <div className=''>
                <img src={ing6} className="zoom2 h-20"/>
                <p className='text-xl my-4'>Botanical</p>
            </div>
            </div>

        </div>
    )
}

export default Ingridients