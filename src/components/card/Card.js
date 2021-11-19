import React from 'react'

function Card(props) {
    return (
            <div className="card hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img className="w-full h-64 lg:h-32 object-cover" src={props.gambar} alt="gambar makanan"/>
                <div className="m-4">
                    <span className="font-bold">{props.nama}</span>
                    <span className="block text-gray-500 text-sm">{props.pembuat}</span>
                </div>
                <div className="badge flex items-center">
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    <span>26 menit</span>
                </div>
            </div>
    )
}

export default Card
