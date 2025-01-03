import React from 'react'
import bg from "../assets/bg.png"

const Banner = () => {
  return (
    <section className=" bg-no-repeat bg-center bg-cover py-[257px] relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1]  " style={{ backgroundImage: `url(${bg})`}}>
        <div className='max-w-container mx-auto'>
            <h3 className="text-[30px] text-center lg:text-start lg:text-[64px] font-bold font-popins text-white mb-[30px] " >We exist since 1975 on the oil and gas industry.</h3>
            <div className='text-center lg:text-start '>
            <a className="py-[13px] px-[40px]  bg-[#F40404] text-white font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">LEARN MORE</a>
            </div>
        </div>
    </section>
  )
}

export default Banner