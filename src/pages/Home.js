import React from 'react'
import Card from '../components/card/Card'
import Hero from '../components/hero/Hero'
import Judul from '../components/judul/Judul'
import Load from '../components/load/Load'
import Long from '../components/long/Long'
import Navbar from '../components/navbar/Navbar'
import Sign from '../components/sign/Sign'

//gambar
import curry from '../components/img/curry.jpg'
import noodles from '../components/img/noodles.jpg'
import stew from '../components/img/stew.jpg'

function Home() {
    return (
        <div className="text-gray-600 font-mono">
            <div className="grid md:grid-cols-4">
            <Navbar/>
            <main className="px-16 py-6 bg-gray-50 md:col-span-3">
                <Sign/>
                <div className="bg-gray-50">
                    <Judul nama="Resep Terbaru"/>
                    <div className="mt-5 grid lg:grid-cols-3 gap-10">
                    <Card gambar={curry} nama="Gudeg" pembuat="Bambangs"/>
                    <Card gambar={noodles} nama="Bakpia Ptuk" pembuat="Batubara"/>
                    <Card gambar={stew} nama="Apem Doraemon" pembuat="Nobitaru"/>
                    </div>
                </div>
                <div>
                    <Judul nama="Resep Populer"/>
                    <div className="mt-5 grid lg:grid-cols-3 gap-10">
                    <Card gambar={curry} nama="Gedang goreng" pembuat="Bambangs"/>
                    </div>
                </div>
                <Load/>
            </main>
            </div>
        </div>
    )
}

export default Home
