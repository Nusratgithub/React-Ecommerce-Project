import React from 'react'
// import "../styles/GiftSets.css";
import { store } from '../productsStore/Store';
import HoverImage from 'react-hover-image/build';
import { Link } from 'react-router-dom';
const GiftSets = () => {
    return (
        <div className='container mx-auto my-20 px-4 lg:px-0'>

    <div className='lg:flex gap-5'>
          <div className='flex flex-col lg:my-5 mb-5 lg:mb-0 gap-5 lg:w-[20%]'>
          <p className='categoryText font-bold text-2xl'> CATEGORY </p>
<Link to={"/under20"} >
    <p className="hover:underline border w-full p-2 border-gray-400 rounded"> Under $20 </p>
</Link>

<Link to={"/under40"} >
    <p className="hover:underline border w-full p-2 border-gray-400 rounded"> Under $40 </p>
</Link>

<Link to={"/forher"} >
    <p className="hover:underline border w-full p-2 border-gray-400 rounded"> For Her </p>
</Link>

<Link to={"/forhim"} >
    <p className="hover:underline border w-full p-2 border-gray-400 rounded"> For Him </p>
</Link>

</div>

<div className='lg:flex fle-row gap-10 giftHold w-full '>

{store.map((item) => {
    if (item.type == "gift")
        return (
            <Link to={`/${item.id}`} key={item.id}>

                <div key={item.id} className="giftIndivitual">
                    <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="rounded-lg mb-6 w-full" />
                    <p className='giftName text-center text-md mb-2'> {item.name} </p>
                    <p className='giftPrice font-normal text-center' >${item.price} </p>
                </div>
            </Link>
        )
})}



</div>
          </div>
        </div>
    )
}
export default GiftSets