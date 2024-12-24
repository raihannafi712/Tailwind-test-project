import React from 'react'
import learn1 from "../assets/learn.png"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"

const Learn = () => {
  return (
    <section className='py-[136px] bg-[#F0F0F0] '>
        <div className='max-w-container mx-auto'>
            <div className=' lg:flex'>
                <div className='w-full lg:w-1/2 text-center lg:text-start bg-[#F40404] text-[#ffff] font-popins font-bold text-[36px] py-[100px] px-[74px] '>
                    <h3>Learn more about our company</h3>
                </div>
                <div className='w-full lg:w-1/2 lg:pl-[210px] py-[165px] bg-no-repeat'  style={{ backgroundImage: `url(${learn1})`}}>
                  <div className='text-center lg:text-start'>
                    <a className="px-[30px] py-[14px] text-[12px] bg-[#fff] text-[#F40404] font-popins font-normal lg:text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">LEARN MORE</a>
                  </div>
                </div>
            </div>
            <div className='flex lg:py-[117px] py-[50px] justify-center flex-wrap '>
              <div>
                <img src={logo1} alt="logo" />
              </div>
              <div>
                <img src={logo2} alt="logo" />
              </div>
              <div>
                <img src={logo3} alt="logo" />
              </div>
              <div>
                <img src={logo4} alt="logo" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Learn