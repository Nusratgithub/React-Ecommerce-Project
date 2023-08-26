import React from 'react'
import u20bg from "../assets/u20bg.png";
import "../styles/Under20.css";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import filterBtn from "../assets/filterBtn.png";
import sortBtn from "../assets/sortBtn.png"
import { useState } from 'react';
import { store } from "../productsStore/Store";
import HoverImage from 'react-hover-image/build';
import JournalSection from "./JournalSection"
import Features2 from './Features2';

import { FaShippingFast } from "react-icons/fa"
import { FaLock } from 'react-icons/fa';
import { BsCurrencyDollar } from "react-icons/bs";
import better from "../assets/better.jpeg";
import SPFooter from './SPFooter';



const Under10 = () => {
    const [filter, SetFilter] = useState(false);

    const [sort, SetSort] = useState(false);

    const [bodyLotionShow, SetBodyLotionShow] = useState(false);

    const [bodyScrubShow, SetBodyScrubShow] = useState(false);

    const [bodyWashShow, SetBodyWashShow] = useState(false);

    const [allShow, SetAllShow] = useState(true);

    const [lowTOHigh, SetLowTOHigh] = useState(false);




    const filterShowHandler = () => {
        SetFilter(!filter)

    }

    const toggleSortHandler = () => {
        SetSort(!sort)
    }


    const bodyLotionHandler = () => {
        SetBodyLotionShow(true);
        SetAllShow(false)

        SetBodyScrubShow(false);
        SetBodyWashShow(false);
    }

    const bodyScrubHandler = () => {
        SetBodyScrubShow(true)
        SetAllShow(false)

        SetBodyLotionShow(false);
        SetBodyWashShow(false)
    }

    const bodyWashHandler = () => {
        SetBodyWashShow(true)
        SetAllShow(false)

        SetBodyLotionShow(false)
        SetBodyScrubShow(false)
    }

    const allShowHandler = () => {
        SetAllShow(true)

        SetBodyWashShow(false)
        SetBodyLotionShow(false)
        SetBodyScrubShow(false)
    }



    var bodyLotionProducts = store.filter(product => product.type.includes('bodyLotion'));

    var bodyScrubProducts = store.filter(produt => produt.type.includes("bodyScrub"));

    var bodyWashProducts = store.filter(product => product.type.includes("bodywash"));

    var under40Products = store.filter(product => product.price > 16 && product.price < 40)


    const bgAddHandler = (e) => {

        e.target.classList.add("whi");
       

    }

    const bgRemoveHandler = (e) => {
        e.target.classList.remove("whi");
        


    }








    return (
        <div className='container mx-auto '>
        <p className=' '>  </p>

  
        <div className='u20Hold '>
            <img src={u20bg} className=" h-[300px]
            " />
        </div>

        <div className='u20HeadingHold gap-2 justify-center relative flex flex-col'>
            <p className='u20Heading'> Under $40 </p>
            <p className='u20Desc'> Shop Sukin natural and vegan collection of skincare and hair care gifts under $40.</p>
        </div>

        <div className='filterSortHold flex flex-row gap-8 absolute text-left'>

            <img src={filterBtn} className=" w-36  cursor-pointer scale" onClick={filterShowHandler} />

            {/*<img src={sortBtn} className=" w-36 cursor-pointer scale" onClick={toggleSortHandler} />*/}
        </div>

        <div className='filterOptionsHold relative'>
            {filter && <div className='flex rounded-xl gap-8 justify-center items-center flex-col boxSh absolute  lg:ml-[31%]'>
                <p className='scale cursor-pointer scale' onClick={bodyLotionHandler}> Body Lotion</p>
                <p className='scale cursor-pointer' onClick={bodyWashHandler}> Body Wash </p>
                <p className='scale cursor-pointer' onClick={bodyScrubHandler}> Body Scrub </p>
                <p className='scale cursor-pointer text-white' onClick={allShowHandler}> All Products </p>

            </div>}
        </div>


        { /* ALL PRODUCTS */}


        {allShow && <div className="grid bottom-32 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 relative  justify-center text-center">
            {under40Products.map((item) => {

                if (item.type.includes("all")) {
                    return (
                        <div className='card w-full bg-base-100 shadow-2xl  '>
                            <Link to={`/${item.id}`}>
                                <figure className="p-5">
                                    <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} 
                                    className="" />
                                </figure>

                            </Link>
                            <div className="card-body items-center text-center">
                                <h2 className="text-lg  font-semibold">{item.name}</h2>


                                <Link to={`/${item.id}`}>
                                    <div className="">
                                        {/* <p className='btnLine relative bg-black h-8'>  </p> */}
                                        <h2 className="text-xl mb-2">Price: ${item.price}</h2>
                                        <button className="btn btn-primary knmBtn " onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>Know More </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
        }


        {/* BODY LOTION  */}

        {bodyLotionShow && 
        <div className="grid bottom-32 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 relative  justify-center text-center">
            {bodyLotionProducts.map((item) => {

                if (item.type.includes("all")) {
                    return (
                        <div className='card w-full bg-base-100 shadow-2xl  '>
                            <Link to={`/${item.id}`}>
                                <figure className="p-5">
                                    <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} 
                                    className="" />
                                </figure>

                            </Link>
                            <div className="card-body items-center text-center">
                                <h2 className="text-lg  font-semibold">{item.name}</h2>


                                <Link to={`/${item.id}`}>
                                    <div className="">
                                        {/* <p className='btnLine relative bg-black h-8'>  </p> */}
                                        <h2 className="text-xl mb-2">Price: ${item.price}</h2>
                                        <button className="btn btn-primary knmBtn " onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>Know More </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
        }


        {/* BODY WASH */}

        {bodyWashShow && 
        <div className="grid bottom-32 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 relative  justify-center text-center">
            {bodyWashProducts.map((item) => {

                if (item.type.includes("all")) {
                    return (
                        <div className='card w-full bg-base-100 shadow-2xl  '>
                            <Link to={`/${item.id}`}>
                                <figure className="p-5">
                                    <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} 
                                    className="" />
                                </figure>

                            </Link>
                            <div className="card-body items-center text-center">
                                <h2 className="text-lg  font-semibold">{item.name}</h2>


                                <Link to={`/${item.id}`}>
                                    <div className="">
                                        {/* <p className='btnLine relative bg-black h-8'>  </p> */}
                                        <h2 className="text-xl mb-2">Price: ${item.price}</h2>
                                        <button className="btn btn-primary knmBtn " onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>Know More </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
        }


        { /* BODY SCRUB */}

        {bodyScrubShow && 
        <div className="grid bottom-32 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 relative  justify-center text-center">
            {bodyScrubProducts.map((item) => {

                if (item.type.includes("all")) {
                    return (
                        <div className='card w-full bg-base-100 shadow-2xl  '>
                            <Link to={`/${item.id}`}>
                                <figure className="p-5">
                                    <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} 
                                    className="" />
                                </figure>

                            </Link>
                            <div className="card-body items-center text-center">
                                <h2 className="text-lg  font-semibold">{item.name}</h2>


                                <Link to={`/${item.id}`}>
                                    <div className="">
                                        {/* <p className='btnLine relative bg-black h-8'>  </p> */}
                                        <h2 className="text-xl mb-2">Price: ${item.price}</h2>
                                        <button className="btn btn-primary knmBtn " onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>Know More </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
        }

               <div className='flex bottom-0 gap-10 justify-center items-center'>
                <FaShippingFast className='w-16 h-20' />
                <p> 2 DAY DELIVERY </p>
                <FaLock className='w-12 h-16' />
                <p> secure checkout </p>
                <BsCurrencyDollar className='w-16 h-20' />
                <p> royalty points </p>
                <img src={better} className="w-20" />
                <p> easy returns </p>
            </div>
            
        <div className='mt-10'>
            <SPFooter />
        </div>





    </div >


    )

}


export default Under10;