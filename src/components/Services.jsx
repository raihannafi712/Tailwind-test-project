import React from 'react'
import right1 from "../assets/r1.png"
import left1 from "../assets/l1.png"
import right2 from "../assets/r2.png"

const Services = () => {
  return (
    <section>
        <div className='lg:flex'>
            <div className='w-full lg:w-1/2 lg:pl-96 lg:pt-32 pb-3 lg:pb-0'>
                <h3 className='text-black font-popins font-bold lg:text-[64px] text-[40px] text-center lg:text-start '>Our Services</h3>
                <p className='text-black font-popins font-medium lg:text-[16px] text-[12px] text-center lg:text-start'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="w-full lg:w-1/2 mb-3 lg:mb-0  pb-[120px] bg-no-repeat relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1] " style={{ backgroundImage: `url(${right1})`}} >
                <h3 className="text-white font-popins font-bold lg:text-[36px] text-[24px] lg:pt-[147px] pt-[90px] lg:pl-[116px] text-center lg:text-start pb-[19px] ">Modern natural oil and gas refineries.</h3>
                <div className='text-center lg:text-start'>
                <a className="py-[13px] px-[40px] lg:ml-[116px]  bg-[#F40404] text-white font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">LEARN MORE</a>
                </div>
            </div>
        </div>
        <div className='lg:flex'>
            <div className="w-full lg:w-1/2 mb-3 lg:mb-0 pb-[120px] bg-no-repeat relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1] " style={{ backgroundImage: `url(${left1})`}} >
                <h3 className="text-white font-popins font-bold lg:text-[36px] text-[24px] lg:pt-[147px] pt-[90px] text-center lg:text-start lg:pl-[116px] pb-[19px] ">Supply of national industries.</h3>
                <div className='text-center lg:text-start'>
                <a className="py-[13px] px-[40px] lg:ml-[116px]  bg-[#F40404] text-white font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">LEARN MORE</a>
                </div>
            </div>
            <div className="w-full lg:w-1/2  pb-[120px] bg-no-repeat relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1] " style={{ backgroundImage: `url(${right2})`}} >
                <h3 className="text-white font-popins font-bold lg:text-[36px] text-[24px] lg:pt-[147px] pt-[90px] text-center lg:text-start lg:pl-[116px] pb-[19px] ">National fuel distribution and supply.</h3>
                <div className='text-center lg:text-start'>
                <a className="py-[13px] px-[40px] lg:ml-[116px]  bg-[#F40404] text-white font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">LEARN MORE</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services