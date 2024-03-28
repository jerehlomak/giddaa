import React from 'react'
import { PiWarningCircle } from "react-icons/pi";

const Card = ({ number, text, sm }) => {
  return (
    <div className={`relative rounded-md bg-white shadow-box-shadow p-4 min-w-[250px] h-[150px] min-h-[150px] flex flex-col items-center justify-center ${sm}`}>
      <span className='absolute top-2 right-2'>
        <PiWarningCircle size={20} />
      </span>
      <p className='text-[1.8rem] font-bold'>{number}</p>
      <p className='text-xs capitalize'>{text}</p>
    </div>
  )
}

export default Card