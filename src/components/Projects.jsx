import React from "react";
import { FaDesktop, FaDatabase, FaCogs } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      icon: <FaDesktop className="text-red-400 text-2xl" />,
      name: "Quiz Application",
      desc: "Full-stack quiz platform with secure login, real-time quizzes, leaderboard & analytics dashboard.",
      tech: [".NET Core", "EF Core", "SQL Server", "Angular", "Angular Material", "Bootstrap"],
    },
    {
      icon: <FaCogs className="text-green-400 text-2xl" />,
      name: "Resource Sharing Application",
      desc: "Role-based educational resources sharing application with CRUD operations, dashboards & notifications.",
      tech: [".NET Core", "EF Core", "JWT Auth", "Angular", "Bootstrap", "SQL Server"],
    },
    {
      icon: <FaDatabase className="text-blue-400 text-2xl" />,
      name: "Test Knowledge",
      desc: "Java desktop app to manage attend quizes and get score.",
      tech: ["Java", "Swing", "JDBC", "MySQL"],
    },
    {
      icon: <FaDatabase className="text-blue-400 text-2xl" />,
      name: "Weather Forecasting",
      desc: "Weather forecasting project.",
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wide">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-3 bg-white/10 backdrop-blur-lg 
              border border-white/20 rounded-xl px-6 py-5 shadow-md 
              hover:shadow-blue-500/40 hover:scale-105 transition duration-300"
            >
              <div className="flex items-center space-x-4">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>

              <p className="text-sm text-gray-300">{item.desc}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-600/80 text-white px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
