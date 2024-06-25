import React, { useContext, useState } from 'react'
import Sofas from './Sofas.json'
import Curtains from './Curtains.json'
import Blinds from './Blinds.json'
import Layout from '../../components/Layout'
import ProductCard from './ProductCard'

const Products = () => {

    const [active, setActive] = useState("item1")
    const [item1, setItem1] = useState(Sofas)
    const [item2, setItem2] = useState(Curtains)
    const [item3, setItem3] = useState(Blinds)

    const [bgcolor1, setbgcolor1] = useState("#dd6b20")
    const [bgcolor2, setbgcolor2] = useState("")
    const [bgcolor3, setbgcolor3] = useState("")

    return (
        <>
            <Layout>
                <div className="w-full sm:w-auto flex flex-wrap">
                    <div className="h-full w-full justify-center items-center flex-1 "
                        style={{
                            // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))'
                        }}
                    >
                        <div className='w-full items-center  flex flex-col md:flex-row sm:mt-20 mt-10' >
                            <h2 className='w-full text-2xl md:text-left md:pl-52 px-8 md:px-0 text-black font-semibold md:text-4xl' >Our <span className='text-orange-600 '>Products</span></h2>
                            <p class=" text-base md:mr-44 px-8 md:px-0 my-6 md:my-0 md:text-left">Unveil elegance and functionality in our meticulously curated product selection. From timeless classics to modern 
                            essentials, each piece is designed to enhance your lifestyle. Welcome to a world where quality meets style – where every product is a statement of refined living.</p>
                        </div>

                        <div className='flex sm:w-1/2 justify-center md:justify-start md:ml-48 flex-wrap  my-10 sm:mt-16 sm:mb-2 font-semibold sm:text-base'>
                            <button className="mx-3 px-4 py-4 cursor-pointer z-[2] text-gray-800  "
                                onClick={() => {
                                    setActive('item1')
                                    setbgcolor1('#dd6b20')
                                    setbgcolor2('')
                                    setbgcolor3('')

                                }} style={{ color: bgcolor1 }}>Sofas</button>
                            <button className="mx-3 px-4 py-4 cursor-pointer z-[2] text-gray-800  "
                                onClick={() => {
                                    setActive('item2')
                                    setbgcolor1('')
                                    setbgcolor2('#dd6b20')
                                    setbgcolor3('')

                                }} style={{ color: bgcolor2 }}>Curtains</button>
                            <button className="mx-3 px-4 py-4 cursor-pointer z-[2] text-gray-800  "
                                onClick={() => {
                                    setActive('item3')
                                    setbgcolor1('')
                                    setbgcolor2('')
                                    setbgcolor3('#dd6b20')
                                }} style={{ color: bgcolor3 }}>Blinds</button>

                            <div className='border-b-2 w-full sm:w-[320px] mx-8 md:-ml-80 '></div>
                        </div>

                        <div className='w-full '>
                            {active === 'item1' && <ProductCard item={item1} />}
                            {active === 'item2' && <ProductCard item={item2} />}
                            {active === 'item3' && <ProductCard item={item3} />}

                        </div>
                    </div>
                </div>

            </Layout >
        </>
    )
}

export default Products
