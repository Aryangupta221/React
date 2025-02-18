import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative flex flex-col sm:flex-row items-center text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                
                {/* Left Content */}
                <div className="relative z-10 w-full sm:w-1/2 px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 text-center sm:text-left">
                    <div className="max-w-xl space-y-6">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            RO Services
                            <span className="block text-4xl">Pure & Healthy Water</span>
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-700">
                            We provide the best RO water purification services to keep your family safe and healthy.
                        </p>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/contact"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Contact Us
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                    <img 
                        className="w-full sm:w-3/4 object-cover rounded-lg shadow-lg" 
                        src="https://img77.uenicdn.com/image/upload/v1671728230/business/558d8877-bfea-4881-be51-e399640c5a1a.jpg" 
                        alt="RO Services Banner" 
                    />
                </div>

            </aside>

            {/* Additional Image Section */}
            <div className="grid place-items-center sm:mt-20">
                <img 
                    className="sm:w-96 w-48 rounded-lg shadow-md" 
                    src="data:image/jpeg;base64,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" 
                    alt="Service Image" 
                />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Pure Water, Healthy Life
            </h1>
        </div>
    );
}
