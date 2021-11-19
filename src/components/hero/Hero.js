import React from 'react'
import imagehero from './heroimg.png'

function Hero() {
    return (
        <div className="hero-wraper">
            <div className="grid grid-rows-2 grid-flow-col gap-10 mx-24 mt-20">
                <div className="row-span-2">
                <div className="flex flex-wrap justify-center w-4/6 relative">
                        <h1 className="text-4xl mt-20 ml-10 font-black tracking-wider">Mari membuat kopi hangat</h1>
                        <h2 className="text-xl mt-5 ml-10 ">Ketika mimpimu yang begitu indah tak pernah terwujud</h2>
                    </div>
                </div>

                <div className="row-span-2 ">
                    <div className="flex justify-end">
                    <img className="w-70 h-auto" src={imagehero} alt="ini gambar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
