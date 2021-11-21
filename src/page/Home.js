import React from 'react'
import Card from '../component/card/Card'
import Jumbotron from '../component/jumbotron/Jumbotron'
import Navbar from '../component/navbar/Navbar'

//gambar
import minuman1 from '../component/img/minuman1.png'
import minuman2 from '../component/img/minuman2.png'
import minuman3 from '../component/img/minuman3.png'
import Hero from '../component/hero/Hero'
import Contributors from '../component/contributors/Contributors'

import gambarwongsm1 from '../component/img/gambarwongsm1.png'
import gambarwongsm2 from '../component/img/gambarwongsm2.png'
import gambarwongsm3 from '../component/img/gambarwongsm3.png'
import gambarwongsm4 from '../component/img/gambarwongsm4.png'
import gambarwongsm5 from '../component/img/gambarwongsm5.png'
import Smallcard from '../component/smallcard/Smallcard'

import buah1 from '../component/img/buah1.png'
import buah2 from '../component/img/buah2.png'
import buah3 from '../component/img/buah3.png'
import Footer from '../component/footer/Footer'

function Home() {
    return (
        <div>
            <Navbar/>
            <main className="relative">
            <Jumbotron/>
            <div className="iniwrapernyacard mt-10 md:px-20">
                <div className="bg-gray-50 px-8 py-4">
                <h3 className="font-bold tracking-wide text-md text-gray-700 mb-8">Latest</h3>
                <div className="md:flex justify-center gap-10">
                    <Card gambar={minuman1} kategori="FRUIT" lama="25" deskripsi="Simple Juice Recipes to boost your immune system" />
                    <Card gambar={minuman2} kategori="SAYUR" lama="5" deskripsi="Simple Juice Recipes to boost your immune system" />
                    <Card gambar={minuman3} kategori="FRUIT" lama="15" deskripsi="Simple Juice Recipes to boost your immune system"/>
                </div>
                </div>
            </div>
            <div className="md:grid grid-cols-6 mt-10">
                <div className="h-full col-span-4">
                    <Hero/>
                </div>
                <div className="px-10 bg-white col-span-2 pt-12 bg-gray-50">
                    <h4 className="text-gray-600 font-bold tracking-wide text-lg">Top Contributors</h4>
                    <div className="my-10">
                        <Contributors gambar={gambarwongsm1} nama="Andrea Hirata" jumlah="124"/>
                        <Contributors gambar={gambarwongsm2} nama="Pamungkas" jumlah="120"/>
                        <Contributors gambar={gambarwongsm3} nama="Yo Sopo Anjir" jumlah="100"/>
                        <Contributors gambar={gambarwongsm4} nama="Kala Kula" jumlah="98"/>
                        <Contributors gambar={gambarwongsm5} nama="Supri Parji" jumlah="72"/>
                    </div>
                </div>
            </div>
            <div className="mt-10 md:px-20">
                <div className="bg-gray-50 md:px-8 py-6">
                    <h3 className="px-4 font-bold tracking-wide text-md text-gray-700 mb-8">Trending</h3>
                    <div className="lg:grid grid-cols-3 gap-6">
                        <Smallcard gambar={buah1} judul="Fruit juices to boost your immune" deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <Smallcard gambar={buah2} judul="Juice variations using avocado" deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        <Smallcard gambar={buah3} judul="Simple recipe strawberry juice" deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                    </div>
                </div>
            </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home
