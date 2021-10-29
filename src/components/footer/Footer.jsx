import React from 'react'
import { navigationItems } from '../header/headjsx/head-data'
import { BodyNav } from '../body/bodyContent'

const Footer = () => {
    return (
        <div className="bg-gray-700 text-white">
            <div className="py-6 mt-8 flex justify-between mx-auto container">
                <div className="shop_logo">
                    <div className="header_logo font-semibold text-3xl">
                        <h1 className="header_logo-text ">
                            <span className="text-red-600">E</span>
                            -shop
                        </h1>
                    </div>
                </div>
                <div className="shop">
                    <div>
                        <h2 className="text-base font-bold pb-3">Shop</h2>
                    </div>
                    <div className="navigation_middle">
                        <div className="flex flex-col">
                            {navigationItems.map((navigationLists, index) => {
                                const { title, url, navList } = navigationLists

                                return (
                                    <li
                                        key={index}
                                        className="list-none ml-4 font-sans text-lg font-medium"
                                    >
                                        <a
                                            href={url}
                                            className={(navList, 'text-sm')}
                                        >
                                            {title}
                                        </a>
                                    </li>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="links">
                    <div>
                        <h2 className="text-base font-bold pb-3">Links</h2>
                    </div>
                    <div className="flex flex-col">
                        {BodyNav.map((navigationList, index) => {
                            const { title, url, navList } = navigationList
                            return (
                                <li
                                    key={index}
                                    className="list-none font-sans font-normal"
                                >
                                    <a
                                        href={url}
                                        className={(navList, 'text-sm')}
                                    >
                                        {title}
                                    </a>
                                </li>
                            )
                        })}
                    </div>
                </div>
                <div className="contact">
                    <h2 className="text-base font-bold pb-3">Contact</h2>
                    <div className="text-sm">
                        <p>+233 558 670 19</p>
                        <p>eshop@email.com</p>
                        <p>Ashongman Estate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
