import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          About Me
        </h2>

        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl 
                        border border-white/20 shadow-md 
                        hover:shadow-indigo-500/40 hover:scale-[1.02] 
                        transition duration-300">
          <p className="text-lg leading-8 text-center text-gray-200">
            I am a{" "}
            <span className="font-semibold text-indigo-400">
              Full Stack Developer
            </span>{" "}
            experienced in building web applications using{" "}
            <span className="text-indigo-300">.NET Core</span>,{" "}
            <span className="text-indigo-300">Angular</span>,{" "}
            <span className="text-indigo-300">Java</span>, and{" "}
            <span className="text-indigo-300">SQL</span>. Skilled in converting
            Figma designs into responsive interfaces and developing{" "}
            <span className="text-indigo-300">REST APIs</span> with{" "}
            <span className="text-indigo-300">JWT authentication</span>.
          </p>

          <p className="text-lg leading-8 text-center text-gray-200 mt-6">
            I have strong knowledge of{" "}
            <span className="text-indigo-300">OOP</span>,{" "}
            <span className="text-indigo-300">
              Data Structures & Algorithms
            </span>
            ,{" "}
            <span className="text-indigo-300">MVC architecture</span>, and{" "}
            <span className="text-indigo-300">Repository Patterns</span>, with
            hands-on experience working in{" "}
            <span className="text-indigo-300">Agile environments</span> to
            deliver scalable and maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}
