import React from 'react'
import Layout from '../../components/Layout'
import Lighting from './Ligtning.json'
import ServiceCard from './ServiceCard'

const Light = () => {
    return (
        <Layout>
            <div className="w-full  sm:w-auto flex flex-wrap ">
                <div className="h-full w-full justify-center items-center flex-1 "
                    style={{
                        // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))'
                    }}
                >
                    <div className='w-full items-center  flex flex-col md:flex-row sm:mt-20 mt-10 mb-10 md:mb-20' >
                        <h2 className='w-full text-2xl md:text-left md:pl-52 px-8 md:px-0 text-black font-semibold md:text-4xl' >Lighting Design</h2>
                        <p class=" text-base md:text-lg md:mr-44 px-8 md:px-0 my-6 md:my-0 md:text-left">Experience the brilliance of lighting design as we illuminate spaces with 
                        creativity and sophistication. Our showcase unveils a symphony of light, where each fixture is a carefully orchestrated piece enhancing the ambiance.
                        Illuminate your space with our cutting-edge designs, where every glow tells a story of elegance and innovation.
                        </p>
                    </div>



                    <div className='w-full '>
                        <ServiceCard item={Lighting} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Light
