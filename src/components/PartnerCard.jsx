import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

const PartnerCard = ({ img, name, position }) => {
  return (
    <div className='relative h-[400px] w-[320px] rounded-lg'>
      <img src={img} alt="partner" className='h-full w-full rounded-lg object-cover' />
      <span className='absolute top-5 right-8 h-10 w-10 rounded-full bg-white flex items-center justify-center'>
        <FaPlayCircle size={24} color='#335F32' />
      </span>
      <span className='absolute w-full bottom-0 p-4 text-white bg-black-rgba rounded-b-lg'>
          <p className='text-[18px] font-bold capitalize'>{name}</p>
          <p className='text-[10px]'>{position}</p>
      </span>
    </div>
  )
}

export default PartnerCard