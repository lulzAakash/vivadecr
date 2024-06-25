import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const variants = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const HeroSection = () => {
  return (
    <div className="slide-container">
      <div className='h-[70vh] sm:h-[100vh] -mt-16' style={{
        backgroundImage: "url(" + "/bgImg6.webp" + ")",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.633),rgba(2, 2, 2, 0.633))',
      }}>
        <div className='flex flex-col justify-start items-center h-full w-full' style={{
          // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.533), rgba(2, 2, 2, 0.533))'
        }}>
          <motion.div className='flex text-black items-center justify-center pt-28 md:pt-32'
            variants={variants}
            initial='initial'
            whileInView='animate'
          >
            <div className='flex flex-col items-center justify-center '>
              <motion.h3 className='text-xl sm:text-3xl font-medium' variants={variants}>Customize Your</motion.h3>
              <motion.h2 className='text-4xl sm:text-7xl font-semibold my-4 sm:my-10' variants={variants}>DREAM HOUSE</motion.h2>
              <motion.p className='px-5 md:px-0 md:w-3/5 text-center sm:mb-10 mb-1 sm:text-lg' variants={variants}>
                Your home should tell the story of who you are, and be a collection of what you love.
              </motion.p>
              {/* <motion.p className='px-5 md:px-0 md:w-1/2 text-center mb-2 sm:mb-8 sm:text-lg' variants={variants}>
                Our architectural design guidelines help you to create outstanding interior experiences to your home within your budget and the committed timeliness.
              </motion.p> */}
              <motion.button className='bg-orange-600 hover:bg-orange-500 text-white sm:w-40 p-2 py-1 sm:py-2 mt-5 rounded-md' variants={variants} >Start Project</motion.button>
            </div>
            {/* <div className='w-1/3'>
              <img src="/hero1.webp" alt="" className='rounded-sm h-[40vh] mb-12' />
            </div> */}
          </motion.div>
          <motion.div className='flex justify-evenly items-center mt-14 sm:mt-16'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}

          >
            <motion.div className='flex items-center sm:text-5xl text-2xl sm:gap-x-12 gap-x-8 text-black sm:justify-between'

            >
              <p className='sm:w-40 text-center'>400+ <p className='sm:text-base text-xs w-full text-center text-slate-800 '>Project Complete</p></p>
              <p className='sm:w-40 text-center'>600+ <p className='sm:text-base text-xs w-full text-center text-slate-800'>Satisfied Clients</p></p>
              <p className='sm:w-40 text-center'>100+ <p className='sm:text-base text-xs w-full text-center text-slate-800'>Unique Styles</p></p>
            </motion.div>
            {/* <div className='w-1/3 mr-40 relative'>
              <div className='border-2 border-orange-600 w-28 h-28 absolute -left-4 -top-14 -z-10'></div>
              <img src="/hero2.webp" alt="" className='rounded-sm h-72 -mt-10' />
            </div> */}
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default HeroSection