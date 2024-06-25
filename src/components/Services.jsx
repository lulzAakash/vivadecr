import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
    initial: {
        x: -300,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
}

const variants2 = {
    initial: {
        y: 50,
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

const Data = [
    {
        "id": "1",
        "img": "icon1.png",
        "title": "Lighting Design",
        "description": "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
    },
    {
        "id": "2",
        "img": "icon2.png",
        "title": "Interior Design",
        "description": "From concept to completion, we oversee every detail to bring your vision to life efficiently",
    },
    
]

const Services = () => {

    return (
        <div className="w-full text-black flex flex-wrap bg-white mb-24" >
            <div className='w-full flex items-center ml-10 md:ml-32'>
                <div className='h-[2.4px] bg-black w-16 md:w-20'></div>
                <h2 className=' text-3xl ml-4 md:ml-6 font-semibold md:text-4xl my-20'>Our <span className='text-orange-600'>Services</span></h2>
            </div>
            <div className='flex justify-center items-center md:gap-x-20 gap-y-8 md:gap-y-0 flex-wrap' >
                {Data && Data.map((e) => {
                    //   console.log(element);
                    return <div className="flex md:pl-8 md:w-1/4 items-center flex-wrap justify-center" key={e.id}>
                        <motion.div className='flex md:flex-row flex-col items-center justify-evenly md:gap-y-0 gap-y-5 '
                            variants={variants2}
                            initial='initial'
                            whileInView='animate'
                        >
                            <motion.div className='w-40 flex justify-center items-center '>
                                <img src={e.img} alt="" className='w-16 h-14 md:mr-8' />
                            </motion.div>
                            <motion.div className='ml-5 '>
                                <motion.p className='font-bold mb-5 ' variants={variants2}>{e.title}</motion.p>
                                <motion.p className='' variants={variants2}>{e.description}</motion.p>
                            </motion.div>
                        </motion.div>
                    </div>
                })}

                <motion.div className='flex flex-wrap w-full h-auto md:mt-24 mt-10 gap-y-10 justify-evenly px-4 lg:px-16 sm:px-8'
                    variants={variants}
                    initial='initial'
                    whileInView='animate'
                >
                    <motion.div className='lg:w-1/3 h-80 md:h-96 w-full'
                        variants={variants}
                    >
                        <img src="/hero2.webp" alt="" className='h-full w-full rounded-lg' />
                    </motion.div>
                    <motion.div className='h-auto lg:w-2/5 flex flex-col gap-y-6'
                        variants={variants}
                        initial='initial'
                        whileInView='animate'
                    >
                        <motion.h2 className='text-3xl md:text-4xl font-semibold' variants={variants}>Designing Your Dream With Brilliance</motion.h2>
                        <motion.p variants={variants}>
                            Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience.
                        </motion.p>
                        <motion.p className='font-medium text-lg' variants={variants}>Living Room Interior Design</motion.p>
                        <motion.p className='font-medium text-lg' variants={variants}>Commercial Office Room Interior Design</motion.p>
                        <Link to='/services'  variants={variants}
                            className="px-4 py-3 w-36 text-orange-700 transition-all transform border border-orange-500 hover:bg-orange-600 00 -500 ay-100 orange-500  hover:text-gray-100">
                            Discover more
                        </Link>
                    </motion.div>
                </motion.div>
            </div>


        </div>
    )
}

export default Services
