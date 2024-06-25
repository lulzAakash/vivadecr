import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { IoIosRocket } from "react-icons/io";
import { TbBulbFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const variants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
}

const Section = () => {
    return (
        <div className='flex flex-wrap w-full h-auto md:pb-24 pb-10  pt-10 gap-y-10 bg-stone-50 justify-evenly px-4 lg:px-16 sm:px-8'>
            
            <motion.div className='h-auto lg:w-2/5 flex flex-col gap-y-6'
                variants={variants}
                initial='initial'
                whileInView='animate'
            >
                <motion.h2 className='text-3xl md:text-4xl mb-3 font-semibold' variants={variants}>Designing Your Dream in Three Simple Steps</motion.h2>
                <div className='flex flex-col gap-y-8'>
                    <motion.div className=' flex md:gap-x-10 gap-x-5'>
                        <motion.div className=' text-2xl bg-black h-12 text-white px-3 py-3 w-[50px]' style={{borderRadius:'50%'}} variants={variants}><IoIosRocket />
                            <div className='mt-5 ml-3 md:h-14 h-20 w-[2.3px] bg-slate-400'></div>
                        </motion.div>
                        <motion.div variants={variants}>
                            <motion.h3 className='font-medium text-lg mb-3' variants={variants} whileHover={{y:-10, transition:{duration:0.2}}}>Start Project</motion.h3>
                            <motion.p className='text-sm md:text-base'  variants={variants} whileHover={{y:-10, transition:{duration:0.2}}}>Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience</motion.p>
                        </motion.div>                    
                    </motion.div>
                    <motion.div className=' flex md:gap-x-10 gap-x-5'>
                        <motion.div className=' text-2xl bg-black h-12 text-white px-3 py-3 w-[50px]' style={{borderRadius:'50%'}} variants={variants}><TbBulbFilled />
                            <div className='mt-5 ml-3 md:h-14 h-16 w-[2.3px] bg-slate-400'></div>
                        </motion.div>
                        <motion.div>
                            <motion.h3 className='font-medium text-lg mb-3' variants={variants} whileHover={{y:-10, transition:{duration:0.2}}}>Craft</motion.h3>
                            <motion.p className='text-sm md:text-base'  variants={variants} whileHover={{y:-10, transition:{duration:0.2}}}>Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space</motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div className=' flex md:gap-x-10 gap-x-5'>
                        <motion.div className=' text-2xl bg-black h-12 text-white px-3 py-3 w-[50px]' style={{borderRadius:'50%'}} variants={variants}><TiTick />
                           
                        </motion.div>
                        <motion.div >
                            <motion.h3 className='font-medium text-lg mb-3' variants={variants} whileHover={{y:-10, transition:{duration:0.2}}}>Execute</motion.h3>
                            <motion.p className='text-sm md:text-base'  variants={variants} whileHover={{y:-10, transition:{duration:0.2}}}>Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space</motion.p>     
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div className='lg:w-1/3  w-full' >
                <motion.img src="/hero1.webp" alt="" className='h-full w-full rounded-sm' 
                    initial={{y:100, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.5}}
                />
            </motion.div>
        </div>
    )
}

export default Section
