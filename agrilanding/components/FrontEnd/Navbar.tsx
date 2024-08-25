'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'

export default function () {

    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "Pages", path: "/pages" },
    ]

    return (
        <nav className="bg-white w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link href="/">
                    <h2 className="font-bold text-xl">Agrivista Farms</h2>
                </Link>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-10 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-black font-semibold hover:text-gray-600">
                                        <a href={item.path} className="block mr-20">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <div className='gap-x-6 md:flex md:space-y-0'>
                            <Button className="bg-[#204E51] w-[90px]">
                                Login
                            </Button>
                            <Button className="border border-[#204E51] text-[#204E51]" variant='ghost'>
                                Sign Up
                            </Button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}