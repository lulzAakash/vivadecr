import React, { useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
    initial: {
        x: -200,
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

const About = () => {
    const ref = useRef()

    return (
        <section className="flex items-center bg-stone-50 w-full font-poppins sm:pt-14 sm:pb-20">
            <motion.div className="justify-center flex-1 w-full py-4 mx-auto lg:py-4 md:px-6"
                variants={variants}
                initial='initial'
                whileInView='animate'
            >
                <div className="px-4 mb-10 md:text-center md:mb-20">
                    <p className="mb-2 text-2xl font-semibold text-orange-500 ">
                        About Us
                    </p>
                    <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl ">
                        What we do
                    </h2>
                    <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                        <div className="flex-1 h-2 bg-orange-200">
                        </div>
                        <div className="flex-1 h-2 bg-orange-400">
                        </div>
                        <div className="flex-1 h-2 bg-orange-300">
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center lg:px-32 w-full">
                    <motion.div className="w-full px-4 mb-10 lg:w-1/2 flex justify-center lg:mb-0"
                        variants={variants}

                    >
                        <img src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg" alt=""
                            className="relative object-cover border-2 lg:w-[500px] w-full h-96 rounded-tr-3xl rounded-bl-3xl" />
                    </motion.div>
                    <motion.div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 "
                        variants={variants}

                    >
                        <motion.h2
                            className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-orange-500 00 " variants={variants}>
                            We are providing a better facility
                        </motion.h2>
                        <motion.p className="mb-4 text-base leading-7 text-gray-500 " variants={variants}>
                            We believe in transforming spaces into captivating experiences. Our team of passionate designers 
                            merges creativity with functionality, delivering interiors that reflect your unique style and enhance your daily life.
                        </motion.p>
                        <ul className="mb-10">
                            <motion.li className="flex items-center mb-4 text-base " variants={variants}>
                                <span className="mr-3 text-orange-500  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                </span>
                                Every project is a canvas, and we tailor our designs to align with your vision and lifestyle.
                            </motion.li>
                            <motion.li className="flex items-center mb-4 text-base " variants={variants}>
                                <span className="mr-3 text-orange-500 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                </span>
                                We obsess over the details, ensuring every element harmonizes seamlessly within the space.
                            </motion.li>
                            <motion.li className="flex items-center mb-4 text-base " variants={variants}>
                                <span className="mr-3 text-orange-500  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                </span>
                                We collaborate closely with you, turning your ideas into stunning, functional realities.
                            </motion.li>
                        </ul>
                        <Link to='/about'
                            className="px-4 py-3 text-orange-700 transition-all transform border border-orange-500 hover:bg-orange-600 00 -500 ay-100 orange-500  hover:text-gray-100" variants={variants}>
                            Discover more
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>

    )
}

export default About
