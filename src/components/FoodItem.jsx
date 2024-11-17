import React from 'react'
import images from '../assets/assets'


const FoodItem = () => {
  return (
    <div className='h-[85%] w-[50%] pt-20 '>

   <img src={images.image1} className='h-[70%] w-[100%] pl-10' alt="" />
    <div className='pl-10 pt-5 '>
    <h1 className='text-[16px] font-semibold pt-2'>Thai special chiken  </h1>
   <p className='pt-2'><img src={images.non_veg} className='h-4' alt="" /></p>
   <p className='font-bold pt-2 '>109$</p>
   <p className='font-light text-sm pt-2'>Fresh burst of Thai flavours and sauces in a flaky paratha, chicken strips and vegetables</p>
 
    </div>
    </div>
  ) 
}

export default FoodItem