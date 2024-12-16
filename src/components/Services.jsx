import React from 'react'
import right1 from "../assets/r1.png"
import left1 from "../assets/l1.png"
import right2 from "../assets/r2.png"

const Services = () => {
  return (
    <section>
        <div className='flex'>
            <div className='w-1/2 pl-96 pt-32'>
                <h3 className='text-black font-popins font-bold text-[64px]'>Our Services</h3>
                <p className='text-black font-popins font-medium text-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="w-1/2 pb-[120px] bg-no-repeat relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1] " style={{ backgroundImage: `url(${right1})`}} >
                <h3 className="text-white font-popins font-bold text-[36px] pt-[147px] pl-[116px] pb-[19px] ">Modern natural oil and gas refineries.</h3>
                <a className="py-[13px] px-[40px] ml-[116px]  bg-[#F40404] text-white font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">LEARN MORE</a>
            </div>
        </div>
        <div className='flex'>
            <div className="w-1/2 pb-[120px] bg-no-repeat relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1] " style={{ backgroundImage: `url(${left1})`}} >
                <h3 className="text-white font-popins font-bold text-[36px] pt-[147px] pl-[116px] pb-[19px] ">Supply of national industries.</h3>
                <a className="py-[13px] px-[40px] ml-[116px]  bg-[#F40404] text-white font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">LEARN MORE</a>
            </div>
            <div className="w-1/2 pb-[120px] bg-no-repeat relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1] " style={{ backgroundImage: `url(${right2})`}} >
                <h3 className="text-white font-popins font-bold text-[36px] pt-[147px] pl-[116px] pb-[19px] ">National fuel distribution and supply.</h3>
                <a className="py-[13px] px-[40px] ml-[116px]  bg-[#F40404] text-white font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out " href="#">LEARN MORE</a>
            </div>
        </div>
    </section>
  )
}

export default Services