import React from 'react';

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
            {/* About Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">About Us</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Providing clean and safe drinking water with reliable RO services.
                </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-12">
                {/* Left: Image */}
                <div className="w-full sm:w-1/2">
                    <img 
                        src="https://img77.uenicdn.com/image/upload/v1671728230/business/558d8877-bfea-4881-be51-e399640c5a1a.jpg" 
                        alt="RO Services" 
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
                    <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        We are dedicated to delivering high-quality **Reverse Osmosis (RO) water purification services** 
                        to ensure your home or business has access to **safe and healthy drinking water**. Our expert team 
                        provides **installation, maintenance, and repair services** with a commitment to excellence.
                    </p>

                    <ul className="mt-6 space-y-3 text-gray-700">
                        <li className="flex items-center">
                            ✅ **Affordable & Reliable RO Services**
                        </li>
                        <li className="flex items-center">
                            ✅ **Experienced Technicians & Quick Support**
                        </li>
                        <li className="flex items-center">
                            ✅ **100% Customer Satisfaction Guarantee**
                        </li>
                        <li className="flex items-center">
                            ✅ **Advanced Filtration Technology**
                        </li>
                    </ul>
                </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
                <p className="mt-4 text-gray-700">
                    📍 **Anika Market, Rajnagar Extension, Ghaziabad**  
                    📞 **Ajit Gupta: 8808477999**
                </p>
            </div>
        </div>
    );
}
