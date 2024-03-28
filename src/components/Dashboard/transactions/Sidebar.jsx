import React from 'react'
import { TbMoneybag } from "react-icons/tb";

import { logo } from '../../../assets'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../features/userSlice';

const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <aside className='hidden md:flex md:flex-col p-4 w-64 h-screen fixed overflow-y-auto bg-[#f0f0f0]'>
        <Link to='/'>
          <img className='' src={logo} alt="logo" />
        </Link>
        <div className='w-full mt-8 space-y-8'>
            <NavLink to='/developer/transaction/get-summary' className='links flex gap-1 items-center justify-center'>
                <TbMoneybag size={32} />
                <span className='w-full text-xs font-semibold'>TRASNSACTIONS & EARNINGS</span>
            </NavLink>
            <button onClick={() => dispatch(logoutUser())} className='px-4 py-2 rounded-md text-white bg-[#335F32] uppercase duration-300 transition-all'>
              logout
            </button>
        </div>
    </aside>
  )
}

export default Sidebar