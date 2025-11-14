// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6"
    >
      {/* Glass Card */}
      <motion.div
        className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg hover:shadow-2xl transition max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Vivek Kushwaha
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          className="text-xl md:text-2xl mt-4 text-indigo-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Full Stack Developer | .NET Core | Angular | Java
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="max-w-2xl mt-6 text-gray-300 leading-relaxed mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Crafting modern, scalable, and responsive web applications with 
          clean user interfaces and efficient backend architectures.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#projects"
          className="mt-10 px-10 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transition transform duration-300 inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          🚀 View My Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
