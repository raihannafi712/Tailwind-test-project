import React from 'react'
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"

const Gallery = () => {
  return (
    <section>
      <div className='flex justify-between pb-7'>
        <div className='w-[24%] '>
          <img src={pic1} alt="pic1" />      
        </div> 
        <div className='w-[24%] '>
          <img src={pic2} alt="pic2" />      
        </div> 
        <div className='w-[24%] '>
          <img src={pic3} alt="pic3" />      
        </div> 
        <div className='w-[24%] '>
          <img src={pic4} alt="pic4" />      
        </div> 
      </div>
    </section>
  )
}

export default Gallery