import React from 'react'
import { avatar } from '../assets'

const FAQ = () => {
  return (
    <>
      <div className='w-full bg-[#F3FAF2] py-8 px-4 flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-[#335F32] text-[2rem] font-bold'>
          Get Started
        </h1>
        <p className='md:max-w-[800px] text-center'>
          We are on a mission to empower income earning Nigerians to own their first homes before they turn 50 years old. Create an account and join the mission. It’s gonna be a long but fulfilling ride. Let’s Go! 🏎️
        </p>
        <button className='p-4 rounded-full bg-[#335F32] text-white'>Create an Account</button>
      </div>
      <div className='w-full py-8 px-4 flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-[#335F32] text-[2rem] font-bold'>
          Frequently Asked Questions
        </h1>
        <div className='flex flex-col items-center gap-2'>
          <div className=''>
            <img src={avatar} alt="avatar" />
          </div>
          <p className='font-bold text-[0.85rem]'>CHAT WITH KEMI</p>
        </div>
        <p className='text-center'> Is there something you’ll like to know ? Ask Kemi, our conversational chatbot</p>
        <button className='px-4 py-3 rounded-full bg-[#335F32] text-white'>Ask Kemi</button>
      </div>
    </>
  )
}

export default FAQ