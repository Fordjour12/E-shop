import React from 'react'
import { BodyNav, NewBodyImages, SoldBodyImages } from './bodyContent'
const Body = () => {
    return (
        <>
            <div className="container mx-auto ">
                <div className="flex ml-4 py-6">
                    {BodyNav.map((navigationList, index) => {
                        const { title, url, navList } = navigationList
                        return (
                            <li
                                key={index}
                                className="list-none ml-4 font-sans text-lg font-medium"
                            >
                                <a href={url} className={(navList, 'text-lg')}>
                                    {title}
                                </a>
                            </li>
                        )
                    })}
                    <a
                        href="#"
                        className="text-lg text-red-600 ml-4 cursor-pointer"
                    >
                        Sell all
                    </a>
                </div>
                <div>
                    <div className="newbdimgs flex gap-4 mx-auto ">
                        {NewBodyImages.map((newImages, index) => {
                            const { path, name, price } = newImages
                            return (
                                <ul key={index} className=" m-0 p-0">
                                    <div className="">
                                        <img
                                            src={path}
                                            className="max-w-full h-screen object-cover"
                                            alt={name}
                                        />
                                        <div className="m-3">
                                            <li className="mb-2">{name}</li>
                                            <li>{price}$</li>
                                        </div>
                                    </div>
                                </ul>
                            )
                        })}
                    </div>

                    <div className="newbdimgs flex gap-4 mx-auto mt-14">
                        {SoldBodyImages.map((soldImages, index) => {
                            const { path, name, price } = soldImages
                            return (
                                <ul key={index} className=" m-0 p-0">
                                    <div className="">
                                        <img
                                            src={path}
                                            className="max-w-full h-screen object-cover"
                                            alt={name}
                                        />
                                        <div className="m-3">
                                            <li className="mb-2">{name}</li>
                                            <li>{price}$</li>
                                        </div>
                                    </div>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body
