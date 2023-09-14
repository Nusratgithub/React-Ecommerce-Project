import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/cara.png'

const navLinks = [
    {
        id: "home",
        title: "Best Sellers",
        path: '/bestSeller'
    },
    {
        id: "about",
        title: "Gift Sets",
        path: '/giftSets'
    },
    {
        id: "services",
        title: "Shop Range",
        path: '/shopRange'
    },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="mx-auto container ">
            <div className="relative flex p-4  bg-base-200 items-center justify-between">
                <Link
                    to="/"
                    aria-label="Genius Car"
                    title="Genius Car"
                    className="inline-flex items-center"
                >
                    <img src={logo} alt="Genius Car Logo" />
                </Link>
                <ul className="items-center hidden text-xl gap-20 lg:flex">
                    {
                        navLinks.map(navItem => (
                            <li key={navItem.id}>
                                <Link
                                    to={navItem.path}
                                    aria-label={navItem.title}
                                    title={navItem.title}
                                    className="font-semibold text-xl text-theme-body transition-colors duration-200 hover:text-red-500 text-lg leading-21"
                                >
                                    {navItem.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/cart"
                                className="font-semibold transition-colors duration-200 text-black text-lg leading-21 border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white"
                            >
                                Cart
                            </Link>
                        </li>
                  
                    </ul>
                </div>
                <div className="lg:hidden flex items-center space-x-2">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-theme-body" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-50">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Genius Car"
                                            title="Genius Car"
                                            className="inline-flex items-center"
                                        >
                                            <img src={logo} alt="Genius Car Logo" />
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-red-500" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                     </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                       
                                        {
                                            navLinks.map(navItem => (
                                                <li key={navItem.id}>
                                                    <Link
                                                        to={navItem.path}
                                                        aria-label={navItem.title}
                                                        title={navItem.title}
                                                        className="font-semibold text-theme-body transition-colors duration-200 hover:text-red-500 text-lg leading-21"
                                                    >
                                                        {navItem.title}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className="items-center mt-6 lg:mt-0 space-x-8 lg:flex">
                        <li className='w-[400px]'>
                            <Link
                                to="/cart"
                                className="font-semibold  duration-200 text-black text-lg leading-21 border w-[600px] border-black px-4 py-2 rounded-md hover:bg-black hover:text-white"
                            >
                                Cart
                            </Link>
                        </li>
                  
                    </ul>
                  
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;