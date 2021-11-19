import React from 'react'

function Sign() {
    return (
        <div>
        <div className="flex justify-center md:justify-end text-yellow-300">
            <a className="btn border-yellow-300 md:border-2 hover:text-white hover:bg-yellow-300 transition-all ease-linear" href="#">Sign In</a>
            <a className="btn ml-2 border-yellow-300 md:border-2 hover:text-white hover:bg-yellow-300 transition-all ease-in-out" href="#">Sign Up</a>
        </div>
        {/* <div className="flex items-center justify-center h-52 bg-indigo-400">
            <div className="bg-red-500 h-4 w-6"></div>
            <div className="bg-blue-500 h-8 w-6"></div>
            <div className="bg-green-500 h-12 w-6"></div>
        </div> */}
        <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Resepnya</h2>
            <h3 className="text-2xl font-semibold">For Subaru</h3>
        </header>
        </div>
    )
}

export default Sign
