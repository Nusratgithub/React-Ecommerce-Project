import React from 'react';
import { useParams } from 'react-router-dom';
import { store } from '../productsStore/Store';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
// import "../styles/SinglePage.css";
import { AiFillStar } from "react-icons/ai";
import SinglePageFAQ from './SinglePageFAQ';

import AutoPlayMethods from './SingleAlsoLike';
import JournalSection from "./JournalSection"
import SearchBox from './SearchBox';
import Review1 from './Review1';

import better from "../assets/better.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import SPFooter from './SPFooter';
import {GiCardboardBoxClosed} from "react-icons/gi";
import { useToast } from '@chakra-ui/react'
import Marquee from "react-fast-marquee";


const SinglePage = () => {


  const params = useParams();

  const { id } = params;

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


  const prodClicked = store.find((item) => item.id === id)

  var { name, price, primaryImage, hoverImg } = prodClicked;


  let title = name;

  var image = primaryImage;

  let tempImage = image;

  



  const [activeImg, SetActiveImg] = useState(primaryImage);
  const [imgChnage, SetImgChange] = useState(false);



  const imgSrcTarget = (e) => {
    SetActiveImg(e.target.src);
    SetImgChange(true);

  }

  const defaultImageSrc = () => {
    SetActiveImg(primaryImage)
    SetImgChange(false)
  }


  let numOfRev = Math.floor(Math.random() * (4 - 4 + 1)) + 4;
  let reviews = Math.floor(Math.random() * (999 - 100 + 1) + 100);


    const toast = useToast()
  
  return (
    <div className=''>

      <div className="bg-base-200 h-14 py-4 my-8 px-[4%]">
        <BreadCrumb name={title} />
      </div>
      <div className='grid lg:grid-cols-2 gap-16'>
      <div className=''>
      <figure className='w-full lg:px-0 px-4'>
        {imgChnage === true ? <img src={activeImg} className=" h-96 w-full  cursor-pointer rounded-2xl singlePageMainPic" /> : <img src={image} className="h-96 w-full cursor-pointer rounded-2xl w-full" />}
      </figure>

      <div className='flex gap-5 lg:gap-5 my-4 lg:px-0 px-4'>
        <img src={hoverImg} className=" w-24 lg:w-36 h-32 cursor-pointer" onMouseEnter={imgSrcTarget} onMouseLeave={defaultImageSrc} />
        <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/NO_Lists_for_Site-SIG_21bc4fd3-c2b5-4e21-8244-1f0f61cce160_540x.png?v=1599504641' className='w-24 lg:w-36  h-32 cursor-pointer rounded-lg object-cover' onMouseEnter={imgSrcTarget} onMouseLeave={defaultImageSrc} />
        <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/anysiaalice_image_720x.jpg?v=1599504641' className=' w-24 lg:w-36  h-32 cursor-pointer object-cover' onMouseEnter={imgSrcTarget} onMouseLeave={defaultImageSrc} />
        <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/anysiaalice_quote-1_720x.jpg?v=1599504641' className=' w-24 h-32 lg:w-36  cursor-pointer object-cover' onMouseEnter={imgSrcTarget} onMouseLeave={defaultImageSrc} /> 
      </div>

      </div>
      <div className=''>
      <div className='pl-3 space-y-2'>
        <p className='font-semibold text-xl w-80'>Name: {name} </p>
        <p className='text-xl sp relative'>Price: ${price} </p>
      </div>
      <div className='p-3 space-y-2'>
        {numOfRev === 1 ? <div className='flex'>  <AiFillStar /> </div> : ""}
        {numOfRev === 2 ? <div className='flex'> <AiFillStar /> <AiFillStar />  </div> : ""}
        {numOfRev === 3 ? <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
        {numOfRev === 4 ? <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
        {numOfRev === 5 ? <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}

        <p className='font-semibold text-xl l1rem'>{Math.floor(Math.random() * (999 - 100 + 1) + 100)} Reviews</p>
      </div>

      <div className='pl-3' onClick={() =>
        toast({
          title: '',
          description: "Successfully Added",
          status: 'success',
          duration: 1500,
          isClosable: true,
        })
      }>
        <button className='bg-black text-white px-3 py-1  rounded hover:bg-white hover:text-black border border-black' onClick={addItemToCartHandler}> ADD TO CART </button>
      </div>
      <div className='my-4'>
        <SinglePageFAQ />
      </div>

  

      </div>
      </div>

      <p className='text-center my-10 italic font-semibold text-xl'> YOU MAY ALSO LIKE </p>
      <div >
      <AutoPlayMethods />
      </div>

      <SearchBox /> 


     {/* <div className=''>
        <FaShippingFast className='w-16 h-20 sv' />
        <FaLock className='w-12 h-16 sv2' />
        <BsCurrencyDollar className='w-16 h-20 sv' />
        <GiCardboardBoxClosed className='w-16 h-20 sv' />
      </div>

      <div className=''>
        <p> 2 DAY DELIVERY </p>
        <p> secure checkout </p>
        <p> royalty points </p>
        <p className='ml'>easy returns </p>
      </div> */}

      <div className=''>
        <SPFooter />
      </div> 

    </div>
  )
}

export default SinglePage;