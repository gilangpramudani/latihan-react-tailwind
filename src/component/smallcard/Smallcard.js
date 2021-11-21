import React from 'react'


function Smallcard(props) {
    return (
        <div className="bg-white rounded-sm shadow-sm flex items-center mb-3">
            <img className="h-auto" src={props.gambar} alt="ini buah"/>
            <div className="ml-5">
            <h4 className="text-md text-gray-700 font-semibold tracking-wide">{props.judul}</h4>
            <p className="text-sm text-gray-500 font-light tracking-wide">{props.deskripsi}</p>
            </div>
        </div>
    )
}

export default Smallcard
