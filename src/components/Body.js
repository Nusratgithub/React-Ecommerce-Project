

import React from 'react'
import "../styles/Body.css";
import { useState } from 'react';
import { store } from '../productsStore/Store';
import HoverImage from "react-hover-image/build"
import { Link } from 'react-router-dom';

const Body = () => {

    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);


    const showHandler = () => {
        setShow(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)
    }

    const showHandler2 = () => {
        setShow2(true)
        setShow(false)
        setShow3(false)
        setShow4(false)

    }

    const showHandler3 = () => {
        setShow3(true)
        setShow(false)
        setShow2(false)
        setShow4(false)
    }

    const showHandler4 = () => {
        setShow4(true)
        setShow(false)
        setShow2(false)
        setShow3(false)
    }


    const dontShowHandler = () => {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)
    }
    return (
        <div className='container mx-auto'>
            <div className=''>

            <div className="bg-base-200 h-14  py-4 my-10 justify-center px-[4%] flex gap-10">
            <div className='  w-56 ' onClick={showHandler}>
                    <p className=' font-semibold hover-underline-animation'>BODY</p>
                </div>

                <div className=' w-56' onClick={showHandler2}>
                    <p className=' font-semibold hover-underline-animation'>HAIR</p>
                </div>

                <div className=' w-52' onClick={showHandler3}>
                    <p className=' font-semibold hover-underline-animation'>TRAVEL</p>
                </div>



                <div className='' onClick={showHandler4}>
                    <p className=' font-semibold hover-underline-animation'>NEW</p>
                </div>

          </div>

            {show && <div className='lg:flex gap-10 justify-center'>
            <div className='my-auto px-4 lg:px-0 lg:space-y-1 gap-5 lg:text-xl lg:w-5/12 flex lg:flex-col' onMouseLeave={dontShowHandler}>
                <p>   Body Wash </p>
                <p>   Body Scrub </p>
                <p>   Body Lotions </p>
                <p>   Body Oil </p>
                <p>   Hand Wash </p>
                <p>   Hand Creams </p>


            </div>
                 <div className='flex gap-5 lg:my-auto px-4 lg:px-0 my-12'>
                    {store.map((item) => {
                        if (item.type == "navbar-BodyType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>

                                    <div key={item.id} className="my-auto">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg}
                                         className="w-[1000px]" />
                                        <p className=' text-center'> {item.name} </p>
                                    </div>

                                </Link>)
                        }
                    })}
                </div> 

            </div>}
            {show2 && <div className='lg:flex gap-20 justify-center'>
            <div className='my-auto px-4 lg:px-0 lg:space-y-2 gap-5 lg:text-xl lg:w-5/12 flex lg:flex-col' onMouseLeave={dontShowHandler}>
            <p className=' font-bold text-xl'>  CATEGORY </p>
                    <p>  Shampoos </p>
                    <p>  Conditioners </p>
                    <p>  Treatments </p>
            </div>
            <div className='my-auto px-4 lg:px-0 lg:space-y-2 gap-5 lg:text-xl lg:w-5/12 flex lg:flex-col' onMouseLeave={dontShowHandler}>
            <p className='font-bold'>  HAIR CONCERN </p>
                    <p>  Deep Cleanse </p>
                    <p>  Oily </p>
                    <p>  Dry </p>
                    <p>  Volume </p>
                    <p>   Normal </p>
            </div>
                 <div className='flex gap-5 lg:my-auto px-4 lg:px-0 my-12'>
                    {store.map((item) => {
                        if (item.type == "navbar-HairType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>

                                    <div key={item.id} className="my-auto">
                                        <img src={item.primaryImage} 
                                         className="w-[1000px]" />
                                        <p className=' text-center'> {item.name} </p>
                                    </div>

                                </Link>)
                        }
                    })}
                </div> 

            </div>}
            {show3 && <div className='lg:flex gap-20 justify-center'>
           
                 <div className='flex gap-5 lg:my-auto px-4 lg:px-0 my-12'>
                    {store.map((item) => {
                        if (item.type == "navbar-TravelType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>

                                    <div key={item.id} className="my-auto">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg}
                                         className="w-[1000px]" />
                                        <p className=' text-center'> {item.name} </p>
                                    </div>

                                </Link>)
                        }
                    })}
                </div> 

            </div>}
            {show4 && <div className='lg:flex gap-20 justify-center'>
            <div className='my-auto px-4 lg:px-0 gap-10 lg:space-y-5 lg:text-xl lg:w-5/12 flex lg:flex-col' onMouseLeave={dontShowHandler}>
            <p className='font-bold text-xl'>  CATEGORY </p>
            <p>  Brightening Range </p>
            <p>  Facial Masks </p>
            <p>  Rosehip Range </p>
            <p>Shop All New Arrivals</p>
            </div>
                 <div className='flex gap-5 lg:my-auto px-4 lg:px-0 my-12'>
                    {store.map((item) => {
                        if (item.type == "navbar-NewType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>

                                    <div key={item.id} className="my-auto">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg}
                                         className="w-[1000px]" />
                                        <p className=' text-center'> {item.name} </p>
                                    </div>

                                </Link>)
                        }
                    })}
                </div> 

            </div>}

            </div>








        </div>
    )
}

export default Body
