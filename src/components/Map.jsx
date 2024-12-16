import React from 'react'
import maps from "../assets/map.png"

const Map = () => {
  return (
    <section>
        <div className='flex justify-center items-center'>
            <img src={maps} alt="map" />
        </div>
        <div className='bg-[#F40404]'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between py-[46px] items-center '>
                <div>
                    <h3 className="text-[36px] font-bold font-popins text-white ">Want to join as member branch in your area?</h3>
                </div>
                <div>
                    <a className="py-[13px] px-[40px] text-white font-popins font-normal text-[16px] hover:bg-violet-600 border-2 border-white mr-[10px] hover:duration-700 hover:ease-in-out " href="#">CONTACT</a>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Map