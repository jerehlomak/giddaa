import React from 'react'
import { IoIosArrowDropup } from "react-icons/io";
import { desktop, private_sector } from '../assets';

const PrivateSector = () => {
  return (
    <div className='py-16'>
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 space-y-4">
          <div className='bg-[#f5f5de] h-24 w-24 flex rounded-full items-center justify-center'>
            <img src={desktop} alt="private sector" className='h-[60%] w-[60%]' />
          </div>
          <h1 className='text-[2.8rem] font-[900] text-[#b5d8c1] tracking-wider'>Private Sector Workers</h1>
          <p>
          Whether you’re a doctor, nurse, banker, tech bro or sis, or work in another industry in the private sector, Giddaa assists individuals looking to purchase property without straining their budget or breaking the bank. In the face of rising property prices, we empower middle-class individuals, like you, to achieve homeownership!
          </p>
          <div className='space-y-2'>
            <span className='flex items-center gap-2 text-[#335F32]'>
              <IoIosArrowDropup size={20} />
              <p>
                Work From “Your Own Home”
              </p>
            </span>
            <p className='max-w-[300px] bg-white rounded-md p-2 border-[1px] border-[#d8d8d8] text-[.9rem]'>
              Though Giddaa is a self-service platform, you can reach out to someone from our team; we have people in Canada and Nigeria who will happily jump in a virtual meeting with you.
            </p>
          </div>

        </div>
        <div className="w-full h-full md:w-1/2">
          <img src={private_sector} className='w-full h-full object-cover' alt="private Sector workers" />
        </div>
      </div>
    </div>
  )
}

export default PrivateSector