import React from 'react'


function Card(props) {
    return (
        <div className="bg-white shadow-sm rounded-lg mb-5">
            <img className="object-cover rounded-t-lg" src={props.gambar} alt="jus"/>
            <div className="px-2 pb-2">
            <div className="flex justify-start pt-3">
                <span className="text-red-400 text-sm">{props.kategori}</span>
                <span className="text-gray-500 text-sm ml-3">{props.lama} minute read</span>
            </div>
            <p className="text-gray-700 mt-2 w-10/12">{props.deskripsi}</p>
            </div>
        </div>
    )
}

export default Card
