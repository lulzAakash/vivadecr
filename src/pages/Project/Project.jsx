import React from 'react'
import Layout from '../../components/Layout'
import ServiceCard from '../Services/ServiceCard'
import Living from '../Services/Living.json'

const Project = () => {
    return (
        <Layout>
            <div className="w-full  sm:w-auto flex flex-wrap ">
                <div className="h-full w-full justify-center items-center flex-1 "
                    style={{
                        // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))'
                    }}
                >
                    <div className='w-full items-center  flex flex-col sm:mt-20 mt-10 mb-10 md:mb-20' >
                        <h2 className='w-full text-2xl md:text-left md:pl-44 px-8 md:px-0 text-black font-semibold md:text-4xl' >Projects</h2>
                        <h2 className='w-full text-xl md:text-left md:pl-44 px-8 md:px-0 text-black sm:my-5 mt-5  md:text-3xl' >Developed by Shiddant Decor</h2>
                        <p class=" text-base md:text-lg md:mr-80 md:pl-44 px-8 md:px-0 my-6 md:my-0 md:text-left">Embark on a visual journey through our diverse portfolio of projects. Each one is a testament
                            to our commitment to creativity, innovation, and client satisfaction. From residential sanctuaries to dynamic commercial spaces, our projects reflect our dedication to turning
                            visions into reality. Explore the artistry and attention to detail that define our work, where every project is a unique story of design excellence.
                        </p>
                    </div>

                    {/* <div className='w-full '>
                        <ServiceCard item={Lighting} />
                    </div> */}
                    <div className="flex flex-wrap md:px-32 px-4 md:mb-20 mb-10">
                        {
                            Living.map((d) => (
                                <div key={d.id} className="lg:w-1/2 md:h-[500px] h-[350px]  sm:w-1/2 p-4">
                                    <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full md:h-[400px] h-[300px] rounded-lg object-cover object-center" src={d.imgUrl} />
                                        <div className="px-8 py-10 relative z-[3] w-full md:h-[400px] h-[300px] rounded-lg border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Project
