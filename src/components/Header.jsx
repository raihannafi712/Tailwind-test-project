import React from 'react'
import { MdEmail  } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebook, FaInstagram , FaLinkedinIn , FaTwitter } from "react-icons/fa6";




const Header = () => {
  return (
    <header className='bg-black'>
      <div className='max-w-container mx-auto'>
        <div className='lg:flex py-2 font-popins font-normal text-[12px] text-[#fff] '>
          <div className='w-full lg:w-1/4 flex justify-center lg:justify-start gap-3 items-center'>
            <MdEmail />
            <h3>mail@yourcompany.com</h3>
          </div>
          <div className='w-full lg:w-1/4 flex justify-center lg:justify-start py-1 lg:py-0 gap-3 items-center'>
            <FaPhone />
            <h3>+896 120 5889 (Toll free)</h3>
          </div>
          <div className='lg:w-1/2 text-end'>
            <div className='flex justify-center mt-1 lg:justify-end gap-3'>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
