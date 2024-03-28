import React from 'react'
import { FaWhatsapp, FaArrowRight, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { whatsapp } from '../assets';

const Footer = () => {

  const footer_link = 'text-[1rem] no-underline text-white'
  
  return (
    <div className='w-full bg-[#335F32] pt-16 pb-4 flex flex-col gap-4'>
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        <div className='bg-[#f3faf2] px-4 py-3 rounded-full flex flex-col items-center'>
          <div className='flex'>
            <img src={whatsapp} alt="whatsapp" />
          </div>
          <div className='flex items-center gap-2'>
            <span className='bg-[#0dc143] p-3 rounded-full'>
              <FaWhatsapp size={24} color='white' />
            </span>
            <p className='text-[#5daa77] font-bold'>Join Our WhatsApp Community</p>
            <FaArrowRight size={24} color='#5daa77' />
          </div>
        </div>
        <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-[#f3faf2]">
          <div className='space-y-2'>
            <h4 className='font-bold text-[1.3rem]'>Developers</h4>
            <Link to='' className={footer_link}>Join as a Developer</Link>
          </div>
          <div className='space-y-2'>
            <h4 className='font-bold text-[1.3rem]'>Banks</h4>
            <Link to='' className={footer_link}>Join as a Bank</Link>
          </div>
          <div className='space-y-2 flex flex-col'>
            <h4 className='font-bold text-[1.3rem]'>Legal</h4>
            <Link to='' className={footer_link}>Privacy Policy</Link>
            <Link to='' className={footer_link}>Terms & Conditions</Link>
          </div>
          <div className='space-y-2 flex flex-col'>
            <h4 className='font-bold text-[1.3rem]'>Contact Us</h4>
            <Link to='' className={footer_link}>info@giddaa.com</Link>
            <Link to='' className={footer_link}>WhatsApp</Link>
            <Link to='' className={footer_link}>Book a Meeting</Link>
            <Link to='' className={footer_link}>+234 809 762 1791</Link>
          </div>
          <div className='space-y-2 flex flex-col'>
            <h4 className='font-bold text-[1.3rem]'>Site Navigation</h4>
            <Link to='' className={footer_link}>Properties</Link>
            <Link to='' className={footer_link}>Developers</Link>
            <Link to='' className={footer_link}>Banks</Link>
          </div>
        </div>
        <div className="flex gap-4">
          <Link className='bg-white h-10 w-10 flex items-center justify-center rounded-full'>
            <FaLinkedinIn color='#335F32' size={24} />
          </Link>
          <Link className='bg-white h-10 w-10 flex items-center justify-center rounded-full'>
            <FaTwitter color='#335F32' size={24} />
          </Link>
          <Link className='bg-white h-10 w-10 flex items-center justify-center rounded-full'>
            <FaInstagram color='#335F32' size={24} />
          </Link>
          <Link className='bg-white h-10 w-10 flex items-center justify-center rounded-full'>
            <FaTiktok color='#335F32' size={24} />
          </Link>
          <Link className='bg-white h-10 w-10 flex items-center justify-center rounded-full'>
            <FaFacebookF color='#335F32' size={24} />
          </Link>
        </div>
      </div>
      <hr className='mt-4' />
      <p className='text-[#f3faf2] mx-auto'>PROPERTY OF GIDDAA INC.</p>
    </div>
  )
}

export default Footer