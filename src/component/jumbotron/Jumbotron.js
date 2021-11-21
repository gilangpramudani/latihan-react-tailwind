import React from 'react'
function Jumbotron() {
    return (
        <div className="h-screen mt-10">
            <div className="h-full bg-jumbotronimg bg-cover md:grid md:grid-cols-2 flex items-center">
                <div className="hidden md:block isenisen">
                    
                </div>
                <div className="px-3 md:px-10">
                    <div className="w-full md:w-10/12 h-10 bg-blue-200 rounded-sm flex items-center justify-between px-3">
                        <div className="bg-white px-2">
                            <span className="uppercase font-semibold text-xs text-blue-500">New Recipe</span>
                        </div>
                        <span className="text-blue-500">Delicius fruit juice combination</span>
                        <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                    <h1 className="text-white md:text-gray-800 mt-8 text-7xl font-black">
                    Simple and
                    Tasty Juice 
                    Recipes
                    </h1>
                    <p className="text-red-50 mt-6 md:text-gray-600 w-9/12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
