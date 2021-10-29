import React from 'react'
import shoe from './wengang-zhai-_fOL6ebfECQ-unsplash.jpg'

const BottomSection = () => {
    return (
        <div className="container py-6 mx-auto">
            <div className="heroSection h-96 rounded-2xl relative overflow-hidden flex items-center">
                <div className="absolute top-1/3 ml-20">
                    <div className="text-xl font-sans font-semibold flex flex-col ">
                        <span>Latest stylish shoe</span>
                        <span className="text-sm font-normal pt-2">
                            Men 2020 collection shoe
                        </span>
                    </div>
                    <button className="flex mt-3 items-center bg-red-600 text-white py-2 px-5">
                        See All
                    </button>
                </div>
                <div>
                    <img
                        src={shoe}
                        alt="headphone1"
                        className="w-full max-h-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default BottomSection
