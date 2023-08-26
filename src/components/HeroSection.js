import React from 'react'
// import "../styles/HeroSection.css"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"


const HeroSection = () => {
    return (
        <div className='lg:mx-20 my-10'>

            <p className='text-3xl font-semibold italic text-center'>WELCOME TO OUR STORE</p>
            <br />
       
            <p className='text-center text-xl lg:w-6/12 mx-auto'> The self care brand that's setting a new standard. Natural products, to help
                you feel good in your own body. </p>


        <div className='lg:flex justify-center items-center gap-10 my-4'>
        <div className='flex gap-5'>
                <img src={one} className="w-36" />
                <div className='my-auto'>
                <p className='my-2'> Powered By Nature </p>
                <p className='my-2 '> Aliquam venenatis vel lorem id nuaer mollis eget. </p>
                </div>
            </div>

            <div className='flex gap-5'>
                <img src={two} className="w-36" />
                <div className='my-auto'>
                <p className='my-2'> Exceptional Quality </p>
                <p className='my-2 '> Nulla tincidunt gravida augue, eget pellentesque.</p>
                </div>
            </div>

            <div className='flex gap-5'>
                <img src={three} className="w-36" />
                <div className='my-auto'>
                <p className='my-2'> Skin First Formulas </p>                
                <p className='my-2 '> Aliquam sed diam fringilla, loborti sorci nec </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HeroSection