import React from 'react'
import longimg from './longimg.png'

function  Long() {
    return (
        <div className="mt-40 mx-24">
            <div className="grid grid-cols-2 gap-4 ">
                <div className=" h-52">
                    <div className="pl-10 pt-10">
                        <h1 className="tracking-wide font-black text-2xl">Dolanan laptop dulu</h1>
                        <span className="">It is a long established fact that a reader will be distracted by the readable co
                            ntent of a page when looking at its layout. The point of using Lorem Ipsum is that....</span>
                        <div className="flex justify-between mt-10">
                            <span className="text-gray-400">Bambang</span>
                            <span className="text-gray-400">Sutrisno</span>
                        </div>
                    </div>

                </div>

                <div className=" flex justify-end h-52">
                    <img className="h-full" src={longimg}  alt="gambar long"/>
                </div>
            </div>
                
        </div>
    )
}

export default Long
