import React from 'react';
import Footer from '../Components/Common/Footer';

const EcoBanner = () => {
  return (
    <div>
      <div className="relative  min-h-screen flex flex-col lg:flex-row items-center bg-gray-900 text-white">
      <div className="flex flex-col   justify-center items-start p-8 lg:p-16 lg:w-1/2">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">The greenest way to search</h1>
        <p className="text-lg lg:text-2xl mb-8">You find what you need, we plant trees where they're needed</p>
        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-lg mb-4">Switch to Ecosia — it’s free</button>
        <a href="#" className="text-green-400">Looking for the Ecosia Browser?</a>
      </div>
      <div className="relative h-full  flex justify-center items-center lg:w-1/2 w-full">
        <img 
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1543348750-466b55f32f16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhdmUlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D" 
          alt="Woman watering plants"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 flex flex-col lg:flex-row justify-around items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🌱</span>
          <span className="text-lg lg:text-xl">207,070,662 trees planted by Ecosia</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 lg:mt-0">
          <span className="text-2xl">💰</span>
          <span className="text-lg lg:text-xl">€84,906,211 dedicated to climate action</span>
        </div>
      </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default EcoBanner;
