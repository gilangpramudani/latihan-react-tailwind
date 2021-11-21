import React from 'react'

function Contributors(props) {
    return (
        <div className="flex items-center mt-4">
            <img src={props.gambar} alt="halow"/>
            <div className="ml-4">
            <p className="text-lg text-gray-600 font-semibold">{props.nama}</p>
            <p className="mt-1 text-gray-400 text-sm">{props.jumlah} artikel</p>
            </div>
        </div>
    )
}

export default Contributors
