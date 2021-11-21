import React from 'react'

//gambar
import gambarwongsm from '../img/gambarwongsm.png'

function Hero() {
    return (
        <div className="bg-heroimg bg-center bg-no-repeat h-full w-full px-4 py-8 md:pt-24 md:pl-20 ">
            <div>
                <h2 className="text-gray-800 font-semibold text-5xl tracking-wide md:w-7/12">Fruit combination for daily juice</h2>
            </div>
            <div className="mt-5 flex items-center">
                <img src={gambarwongsm} alt='gambar uwong' />
                <span className="text-lg text-gray-600 ml-3 font-bold">Bambang Sutrisno</span>
            </div>
            <div className="md:w-4/12 mt-4">
                <p className="text-md text-gray-600 font-light tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
        </div>
    )
}

export default Hero
