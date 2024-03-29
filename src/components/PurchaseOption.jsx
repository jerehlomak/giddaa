import React from 'react'
import { GrStatusGood } from "react-icons/gr";
import { FaLightbulb } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { IoIosPlayCircle } from "react-icons/io";


const PurchaseOption = ({ img, title, subTitle, description, features }) => {
  return (
    <div className='bg-[#f3f3f3] flex flex-col p-4 rounded-lg gap-2 text-[13px]'>
        <div className='flex items-center justify-between'>
          <img src={img} alt="" />
          <span className=''>
            <h1 className='capitalize text-center text-[1.35rem] text-[#335F32] font-semibold'>{title}</h1>
            <h5 className='text-center uppercase text-[.8rem]'>{subTitle}</h5>
          </span>
          <div>  
          </div>
        </div>
        <p>{description}</p>
        <span className='flex py-2 items-center gap-4'>
            <GrStatusGood size={20}/>
            <span>View Another Explanation</span>
            <FaLightbulb color='yellow' size={20} />
        </span>
        <div>
            <h3 className='text-center text-[1.1rem] text-[#335F32] font-semibold'>Features of {title}</h3>
            {features.map((feature, idx) => (
                <div className='flex gap-2 items-start justify-start py-1'>
                    <MdPlayArrow size={20} />
                    <span key={idx}>{feature}</span>
                </div>
            ))}
        </div>
        <div className='justify-self-end'>
        <button className='flex items-center bg-white  mx-auto gap-2 border-[1.5px] border-[#335F32] px-3 py-2 rounded-full'>
          <IoIosPlayCircle size={24} color='335F32' />
          <span className='uppercase text-xs'>watch the video to learn more</span>
        </button>
        </div>
    </div>
  )
}

export default PurchaseOption