import React from 'react'
// import "../styles/JournalSection.css"
import { Link } from 'react-router-dom'

const JournalSection = () => {
   
    return (
        <div className='bg-base-300 my-20 p-10'>

        <div className='lg:flex justify-center gap-10'>
        <div className='my-auto '>
                <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Sukin_Journal_Heading_2-01_2500x2500_6e692e60-90cb-4cd0-9006-a6f1d09fe1c4_360x.png?v=1613561992' alt='hey' className='w-80 lg:w-72' />
                <p className='mt-4 text-lg lg:w-10/12'> Discover the world of natural through our 
                    eyes! From skincare tips,lifestyle and 
                    environmental hacks to inspirational
                    interviews! Explore it all.</p>

                <Link to={`/journal/april`}>
                    <button className='bg-black rounded  text-base-200 py-2 px-1 my-4'> READ THE JOURNAL </button>
                </Link>
            </div>

            <div className='hidden md:block'>

                <Link to={`/journal/april`}>
                    <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/400x400_blog_540x.jpg?v=1652511342' alt='hey' className='w-[900px] h-[320px] rounded-xl' />
                </Link>
                <p className='my-2 text-lg'>PROTECTIVE HAIRCARE STYLE AND TIPS </p>
            </div>
            <div>
            <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/BBQ_1200x440_7b63676b-f505-4b21-9192-e1b43a53be32_540x.jpg?v=1625596357' alt='hey' className='h-[320px] rounded-xl' />
                <p className='my-2 text-lg'> SUKINS GUIDE TO A BACKYARD BBQ</p>

            </div>
        </div>
        </div>
    )
}

export default JournalSection