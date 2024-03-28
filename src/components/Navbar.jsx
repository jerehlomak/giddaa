import { GoSearch } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { logo, hero_bg } from '../assets';
import { logoutUser } from "../features/userSlice";
import { useState } from "react";

const Navbar = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const logoutUserHandler = () => {
    dispatch(logoutUser())
    setShowNav(false)
  }
  const [showNav, setShowNav] = useState(false)
  const navStyle = 'no-underline text-[#8c8c8c] hover:text-[#335F32] hover:font-semibold transition-all duration-300'
  return (
    <div className='bg-[#F2F2F2] '>
      <div className='container h-[14vh] flex justify-between items-center'>
        <div className='flex gap-8'>
          <img src={logo} alt="logo" />
          <span className='bg-[#fff] hidden md:flex flex-1 space-x-2 items-center w-full rounded-full py-1 px-4'>
            <input className='outline-none text-xs w-full' type="text" placeholder='Search for Properties, Developers, Banks' />
            <GoSearch size={24} />
          </span>
        </div>
        <ul className='hidden lg:flex gap-8 items-center text-[16px]'>
          <li>
          <NavLink className={navStyle} to="/">Home</NavLink>
          </li>
          <li>
          <NavLink className={navStyle}  to="/service">Properties</NavLink>
          </li>
          <li>
          <NavLink className={navStyle}  to="/about">Developers</NavLink>
          </li>
          <li>
          <NavLink className={navStyle}  to="/about">Mortgage Banks</NavLink>
          </li>
          <li>
          <NavLink className={navStyle}  to="/about">Consult an Expert</NavLink>
          </li>
        </ul>
        <div className='relative hidden bg-[#335F32] md:flex items-center justify-center h-10 w-10 rounded-full'>
          <FaRegBell color='white' className='' size={24} />
          <span className='absolute flex items-center justify-center top-0 -right-2 h-5 w-5 text-[#335F32] bg-white rounded-full'>9</span>
        </div>
        <span className='block cursor-pointer lg:hidden' onClick={() => setShowNav(!showNav)}>
          <CiMenuBurger size={24} color='#335F32'  />
        </span>

        </div>

        {showNav && (
          <nav className="sidebar-container md:hidden"> 
          <FaTimes 
              size={28} 
              className="absolute text-white cursor-pointer top-8 right-5"
              onClick={() => setShowNav(false)}
            />
            <ul className='flex flex-col gap-6 text-center'>  
              <li onClick={() => setShowNav(false)} >
              <NavLink className='text-[#f0f0f0] font-semibold no-underline text-[1.7rem]' to="/">Home</NavLink>
              </li>
              <li>
              <NavLink className='text-[#f0f0f0] font-semibold no-underline text-[1.7rem]'  to="/service">Properties</NavLink>
              </li>
              <li>
              <NavLink className='text-[#f0f0f0] font-semibold no-underline text-[1.7rem]'  to="/about">Developers</NavLink>
              </li>
              <li>
              <NavLink className='text-[#f0f0f0] font-semibold no-underline text-[1.7rem]'  to="/about">Mortgage Banks</NavLink>
              </li>
              <li>
              <NavLink className='text-[#f0f0f0] font-semibold no-underline text-[1.7rem]'  to="/about">Consult an Expert</NavLink>
              </li>
              {
                user ? (
                  <>
                  <li>
              <NavLink className='text-[#f0f0f0] font-semibold no-underline text-[1.7rem]'  to="/developer/transaction/get-summary">Dashboard</NavLink>
              </li>
              <button 
                className="text-white text-[1.4rem] bg-[#335F32] px-4 py-2 rounded-md"
                onClick={logoutUserHandler}
              >
                Logout
              </button>
                  </>
                ) : (
                  <li>
              <NavLink className='text-[#f0f0f0] font-semibold no-underline text-[1.7rem]'  to="/account/login">Login</NavLink>
              </li>
                )
              }
            </ul>
          </nav>
        )}
    </div>
  )
}

export default Navbar