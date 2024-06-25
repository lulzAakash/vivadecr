import React from 'react'

const Review = () => {
  return (
    <div className='relative flex flex-col flex-wrap xl:py-20 pb-96  mb-56 sm:mb-20 lg:mb-0 -mt-20 md:-mt-0 px-5 sm:px-10 lg:px-24 lg:ml-12'>
      <div className='relative w-full h-[500px] flex md:flex-row  flex-col-reverse justify-evenly'>
        <img src="/hero2.webp" alt="" className='lg:w-[550px] hidden lg:block -mt-10 sm:-mt-0' />
        <h2 className='px-4 lg:px-0 lg:text-5xl md:text-4xl text-3xl md:mb-0 sm:mb-10 -mt-64 md:mt-10 lg:-mt-0 lg:ml-10 lg:w-1/2'>What Our Customers Say About US</h2>
      </div>
      <div className='absolute h-auto justify-center lg:w-[70vw] top-60 lg:left-80 bg-white pr-6 p-0 md:p-5 -mt-10 sm:-mt-20 md:-mt-28 lg:mt-0 lg:h-[400px] flex gap-10 lg:flex-nowrap flex-wrap'>
        <div className='bg-black text-white lg:w-1/3 p-10'>
          <p className='md:text-6xl text-5xl font-mono'>“</p>
          <p className='md:mb-10 mb-5  text-sm'>Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!</p>
          <p className=''>name</p>
        </div>
        <div className='bg-black text-white lg:w-1/3 p-10'>
          <p className='md:text-6xl text-5xl font-mono'>“</p>
          <p className='md:mb-10 mb-5  text-sm'>Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!</p>
          <p className=''>name</p>
        </div>
        <div className='bg-black text-white lg:w-1/3 p-10'>
          <p className='md:text-6xl text-5xl font-mono'>“</p>
          <p className='md:mb-10 mb-5  text-sm'>Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!</p>
          <p className=''>name</p>
        </div>
      </div>
      {/* <div>
        <p>our success is measured not just by our designs but by the satisfaction of our clients.</p>
        <h2>Drop A Line </h2>
      </div> */}
    </div>
  )
}

export default Review
