import React from 'react'
import headphone1 from './c-d-x-PDX_a_82obo-unsplash.jpg'
import { AiOutlineSearch } from 'react-icons/ai'

const HeroSection = () => {
    return (
        <div className="container py-6 mx-auto ">
            <div className="heroSection h-80 rounded-2xl relative overflow-hidden py-6 flex items-center">
                <div className="absolute top-1/3 ml-20">
                    <div className="text-xl font-sans font-semibold flex flex-col ">
                        <span>Get the best Products</span>
                        <span>at your home</span>
                    </div>
                    <div className="flex mt-3 items-center bg-white py-2 px-3 rounded-2xl">
                        <AiOutlineSearch fontSize="20" />
                        <input
                            type="search"
                            name="searc-bar"
                            placeholder="Search your favorite product"
                            className="bg-none outline-none placeholder"
                        />
                    </div>
                </div>
                <div>
                    <img
                        src={headphone1}
                        alt="headphone1"
                        className="w-full max-h-full item-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
