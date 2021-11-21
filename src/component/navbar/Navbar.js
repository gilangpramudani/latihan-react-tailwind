import React from 'react'
import {useState} from'react'

function Navbar() {

    const[navbar, setNavbar]=useState(false)
    console.log(navbar)

    return (
        <div>
            <nav className="md:flex justify-between bg-white items-center fixed top-0 right-0 left-0 z-50 shadow-sm">
                <div className="flex items-center ml-4 md:ml-10 relative p-4">
                    <svg className="fill-current text-blue-500 h-7 w-7" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                    </svg>
                    <h1 className="text-blue-500 font-bold ml-3">
                        <a>JUICEDAILY</a>
                    </h1>
                    <div className="block md:hidden p-4 absolute right-0" onClick={()=>{setNavbar(!navbar)}}>
                    <svg className="h7 w-7" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </div>
                </div>
                <div className={`${navbar? 'block': 'hidden'} md:block font-light`}>
                    <ul className="md:flex text-gray-600">
                        <li className="py-2 md:py-0 px-4"><a>BROWSE</a></li>
                        <li className="py-2 md:py-0 px-4"><a>TRENDING</a></li>
                        <li className="py-2 md:py-0 px-4"><a>CONTRIBUTORS</a></li>
                        <li className="py-2 md:py-0 px-4"><a>COMUNITY</a></li>
                    </ul>
                </div>
                <div className="hidden md:block h-full bg-yellow-400 p-4">
                    <svg className=" h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
