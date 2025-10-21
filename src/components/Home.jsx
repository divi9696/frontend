import React from "react";

const Home = ({ onStart }) => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen text-white px-6 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')",
      }}
    >
      <div className="bg-black/40 p-8 rounded-2xl max-w-xl animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-md text-gradient text-linear-to-r from-yellow-400 to-yellow-600">
          Welcome to Createch
        </h1>
        <p className="text-base sm:text-lg mb-8 opacity-90">
          Where Creative Minds Interact each other to form a Good Product
        </p>
        <button
          onClick={onStart}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          See Our Team 
        </button>
      </div>
    </div>
  );
};

export default Home;
