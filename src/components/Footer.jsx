import React from 'react'
import logo from "../assets/logolast.png"
import { MdEmail  } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FaFacebook, FaInstagram , FaLinkedinIn , FaTwitter } from "react-icons/fa6";
import cert1 from "../assets/cert1.png"
import cert2 from "../assets/cert2.png"

const Footer = () => {
  return (
    <section className='bg-[#1F1F1F]'>
        <div className='max-w-container mx-auto'>
            <div className='py-44 flex justify-between'>
                <div className='w-[20%] '>
                    <img className='mb-[33px]' src={logo} alt="logo" />                   
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[15px] '><span className='pr-[10px]'><MdEmail /></span>mail@yourcompany.com</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[15px]'><span className='pr-[10px]'><FaPhone /></span>+896 120 5889 (Toll free)</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[34px]'><span className='pr-[10px]'><GrMapLocation /></span>101 Baker Street, New York, USA, 12345</h3>
                    <div className='flex justify-start gap-3 text-[#F40404] '>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
                <div className='w-[20%] '>                 
                    <h3 className='flex items-center text-[16px] font-bold font-popins text-white pb-[21px] '>Company</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[14px]'>Home</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[14px]'>About</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[14px]'>Services</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[14px]'>Gallery</h3>
                </div>
                <div className='w-[20%] '>                 
                    <h3 className='flex items-center text-[16px] font-bold font-popins text-white pb-[21px] '>Others</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[14px]'>Blog</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[14px]'>Contact</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[14px]'>Terms & Conditions</h3>
                    <h3 className='flex items-center text-[14px] font-normal font-popins text-white pb-[14px]'>Privacy Policy</h3>
                </div>
                <div className='w-[20%] '>                 
                    <h3 className='flex items-center text-[16px] font-bold font-popins text-white pb-[21px] '>Certificate</h3>
                    <div className='flex justify-between '>
                        <img src={cert1} alt="cert" />
                        <img src={cert2} alt="cert" />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#282828]'>
            <div className='max-w-container mx-auto py-[55px] '>
                <h3 className='flex items-center text-[16px] font-medium font-popins text-[#6C6C6C]'>© Copyright 2022 by AltDesain Studio – All right reserved.</h3>
            </div>
        </div>
    </section>
  )
}

export default Footer