import React from 'react'
import { IoIosArrowDropup } from "react-icons/io";
import { family_3, remote1, remote } from '../assets';

const NaijaRemote = () => {
  return (
    <div className='bg-[#F3FAF2] py-16'>
      <div className="container mx-auto flex flex-col gap-10 md:flex-row">
        <div className="w-full md:w-1/2 space-y-4">
          <div className='bg-white h-24 w-24 flex rounded-full items-center justify-center'>
            <img src={remote} alt="remote" className='h-[60%] w-[60%]' />
          </div>
          <h1 className='text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] text-[#335F32] font-[900] tracking-wider'>Naija Remote Workers</h1>
          <p>
          Do you work from <s>home?</s> Your own Home? With Giddaa, that’s possible. You don’t need to have all the money at once to buy a house to become a homeowner. Leverage your job flexibility working remotely and your current earning capacity to build equity in a home of your own.
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
        <div className="w-[80vw] h-[70vh] md:h-[80vh] lg:h-[90vh] md:w-1/2 rounded-full">
          <img className='w-full h-full object-cover rounded-full' src={remote1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NaijaRemote