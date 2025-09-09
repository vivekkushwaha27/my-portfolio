import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center px-6"
    >
      {/* Glass Card */}
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg hover:shadow-2xl transition max-w-3xl">
        
        {/* Animated Intro */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Vivek Kushwaha
          </span>
        </h1>

        {/* Profession */}
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed mx-auto">
          Full Stack Developer | .NET | Angular | Java
        </p>

        {/* Call to Action */}
        <button className="mt-8 px-10 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transition transform duration-300">
          🚀 View My Work
        </button>
      </div>
    </section>
  );
}
