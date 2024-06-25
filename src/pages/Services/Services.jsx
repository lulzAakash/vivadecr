import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center h-full w-full mt-10 md:mt-20' style={{
                // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.633), rgba(2, 2, 2, 0.633))'
            }}>
                <h2 className='md:text-5xl text-3xl text-black  font-semibold'>Our Services</h2>
                <p className='text-black md:text-lg mt-8 font-medium  md:w-[600px] text-center px-5'>"Your Vision, Our Expertise. Unleash the potential of your space with our bespoke interior design services." </p>
            </div>
            {/* </div> */}
            <section className="text-gray-600 body-font">
                <div className="container md:px-28 px-4 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-8">
                            <div className="rounded-lg md:h-96 h-72 overflow-hidden">
                                <img alt="content" src='/Lighting/img3.webp' className="object-cover object-center h-full w-full" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Lighting design</h2>
                            <p className="leading-relaxed text-base">Welcome to the world of Lighting Design – where innovation meets elegance
                                Lightning Design is more than aesthetics; it's a journey through intuitive interfaces, responsive layouts, and cohesive visuals.

                                <p className='font-medium mt-2'>Click now to see the various ligting Design</p>
                            </p>
                            <Link to='/lighting'><button className="flex mx-auto mt-6 text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded">Learn More</button></Link>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-8">
                            <div className="rounded-lg md:h-96 h-72 overflow-hidden">
                                <img alt="content" src='/hero2.webp' className="object-cover object-center h-full w-full" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Interior design</h2>
                            <p className="leading-relaxed text-base">Elevate your living spaces with our innovative and personalized
                                interior design solutions. Our team of experienced designers is dedicated to transforming your vision into reality.
                                <p className='font-medium mt-2'> Click now and let the artistry of various interior design unfold before your eyes. Your dream space awaits you!</p>
                            </p>
                            <Link to='/interior'><button className="flex mx-auto mt-6 text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded">Learn More</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Services
