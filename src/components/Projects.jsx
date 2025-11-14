import React from "react";
import { FaDesktop, FaDatabase, FaCogs } from "react-icons/fa";
import { FaPerson, FaTimeline } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      icon: <FaDesktop className="text-red-400 text-2xl" />,
      name: "SkillSphere",
      desc: "Developing a scalable online learning platform with secure role-based access, RESTful APIs for test management and automated results, and a responsive, high-performance user interface.",
      tech: ["Angular", ".NET Core", "EF Core", "SQL Server", "JWT", "Angular Material", "Bootstrap"],
    },
    {
      icon: <FaCogs className="text-green-400 text-2xl" />,
      name: " MailGuard AI",
      desc: " Developed a Python NLP-based spam detection system using Naive Bayes, achieving 92% accuracy and reducing processing time by 50% through optimized text preprocessing and vectorization.",
      tech: ["Python", "Artificial Intelligence (AI)", "Machine Learning (ML)", "Naive Bayes", "Streamlit"]
    },
    {
      icon: <FaTimeline className="text-blue-400 text-2xl" />,
      name: "QuizWhiz",
      desc: "Java desktop application for user registration, login, test-taking, and instant result generation. Admins can manage tests, monitor student progress, and handle student data efficiently.",
      tech: ["Java", "Swing", "JDBC", "MySQL"],
    },
    {
      icon: <FaDatabase className="text-blue-400 text-2xl" />,
      name: "Weather Forecasting",
      desc: "Show weather data where users can search by location to get a forecast for the current time and also view the next 5 days' forecasts.",
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
    },
    {
      icon: <FaPerson className="text-blue-400 text-2xl" />,
      name: "Personal Portfolio",
      desc: "Develop a professional and responsive personal portfolio for my personal branding.",
      tech: ["React","HTML", "CSS", "JavaScript"],
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
