import React from 'react'
import { AiFillStar } from "react-icons/ai"
import feel from "../assets/feel.png";


const Review1 = (props) => {
    const starCalc = props.starCalc;
    const reviewes = props.rev;
    const oneDigit = Math.floor(Math.random() * 10);


    return (
        <div>

              <div className=''>
                <small className="text-gray-500 text-3xl font-semibold"> {starCalc}.{oneDigit} </small>
                {starCalc === 1 ? <div className='flex fs30 starLine'>  <AiFillStar /> </div> : ""}
                {starCalc === 2 ? <div className='flex fs30 starLine'> <AiFillStar /> <AiFillStar />  </div> : ""}
                {starCalc === 3 ? <div className='flex fs30 starLine'> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                {starCalc === 4 ? <div className='flex fs30 starLine'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                {starCalc === 5 ? <div className='flex fs30 starLine'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                <p className=''> {reviewes} Reviews </p>
                <div className='lg:w-4/12 '>
            <img src={feel} className="" />
            </div>
            </div>
            
        </div>
    )
}

export default Review1