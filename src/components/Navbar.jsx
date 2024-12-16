import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className='bg-[#F40404]'>
        <div className='max-w-container mx-auto'>
            <div className='flex items-center py-10'>
            <div className='w-1/3'>
                <img className='cursor-pointer ' src={logo} alt="logo" />
            </div>
            <div className='w-2/3'>
                <ul className='flex font-popins font-semibold text-[16px] text-white capitalize '>
                    <li className='mx-6'>
                        <a 
                        className="relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                        href="#">
                            Home
                        </a>
                    </li>
                    <li className='mx-6'>
                    <a 
                        className="relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                        href="#">
                            About
                        </a>
                    </li>
                    <li className='mx-6 relative group'>
                        <a 
                            className="relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                            href="#">
                            Services
                        </a>
                        {/* <ul className='bg-transparent absolute opacity-0 z-10 left-[-55px] top-[50px] w-[200px]  text-black text-center '>
                            <li>Jobs</li>
                            <li>Jobs</li>
                            <li>Jobs</li>
                            <li>Jobs</li>
                        </ul> */}
                    </li>
                    <li className='mx-6'>
                    <a 
                        className="relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                        href="#">
                            Gallery
                        </a>
                    </li>
                    <li className='mx-6'>
                    <a 
                        className="relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full "
                        href="#">
                            Blog
                        </a>
                    </li>
                    <li className='mx-16 '>
                        <a className='border-2 px-[31px] py-[13px] border-white text-white hover:bg-violet-600 hover:duration-700 hover:ease-in-out ' href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar