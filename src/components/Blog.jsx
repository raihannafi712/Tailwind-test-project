import React from 'react'
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"

const Blog = () => {
  return (
    <section className='lg:py-[120px]'>
        <div className='max-w-container mx-auto'>
            <div className='lg:flex justify-between'>
                <div className="w-full lg:w-[25%] mb-3 lg:mb-0 text-center lg:text-start pb-[25px] relative z-[1] after:absolute after:top-0 after:left-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1]  " style={{ backgroundImage: `url(${blog1})`}}>
                    <h3 className="pt-[75px] px-[46px] text-[24px] font-bold font-popins text-white mb-[52px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                    <div className='text-center lg:text-start'>
                        <a className="lg:ml-[46px]  px-[30px] py-[14px] bg-white bg-opacity-50 text-[#fff] font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">Read more</a>
                    </div>
                </div>
                <div className="w-full lg:w-[25%] mb-3 lg:mb-0 text-center lg:text-start pb-[25px] relative z-[1] after:absolute after:top-0 after:left-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1]  " style={{ backgroundImage: `url(${blog2})`}}>
                    <h3 className="pt-[75px] px-[46px] text-[24px] font-bold font-popins text-white mb-[52px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                    <div className='text-center lg:text-start'>
                        <a className="lg:ml-[46px]  px-[30px] py-[14px] bg-white bg-opacity-50 text-[#fff] font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">Read more</a>
                    </div>
                </div>
                <div className="w-full lg:w-[25%] mb-3 lg:mb-0 text-center lg:text-start pb-[25px] relative z-[1] after:absolute after:top-0 after:left-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1]  " style={{ backgroundImage: `url(${blog3})`}}>
                    <h3 className="pt-[75px] px-[46px] text-[24px] font-bold font-popins text-white mb-[52px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                    <div className='text-center lg:text-start'>
                        <a className="lg:ml-[46px]  px-[30px] py-[14px] bg-white bg-opacity-50 text-[#fff] font-popins font-normal text-[16px] hover:bg-violet-600 hover:duration-700 hover:ease-in-out  " href="#">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog