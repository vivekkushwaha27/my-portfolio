import React from "react";
import { FaAward, FaCertificate, FaTrophy, FaCode } from "react-icons/fa";

export default function Achievements() {
  const certifications = [
    {
      href: "https://drive.google.com/file/d/1PM_FDbXWqyM4mJ46jD0QzsGnBNoFJ9Nb/view?usp=drive_link",
      icon: <FaCertificate className="text-blue-600 text-2xl" />,
      label: "Developing Services using ASP.NET Core Web API – Infosys Springboard",
    },
    {
      href: "https://drive.google.com/file/d/15rotyQLRowg1EH9qp4INlx7ghT7ztlli/view?usp=drive_link",
      icon: <FaCertificate className="text-blue-600 text-2xl" />,
      label: "NPTEL: Java Programming – IIT Kharagpur",
    },
    {
      href: "https://drive.google.com/file/d/1EUo8AkbkTV0q9n6X0cYD8PonxYlT5tY5/view?usp=drive_link",
      icon: <FaCertificate className="text-green-600 text-2xl" />,
      label: "NPTEL: Data Structures & Algorithms using Java – IIT Kharagpur",
    },
    {
      href: "https://drive.google.com/file/d/1QqF4ckUqSRR6fnJUqViKzlCRJHYg7e-K/view?usp=drive_link",
      icon: <FaCertificate className="text-purple-600 text-2xl" />,
      label: "HackerRank: SQL",
    },
    {
      href: "https://drive.google.com/file/d/1UgC5l5yp4vaV3-wbupXkjozCbb-nwAtr/view?usp=drive_link",
      icon: <FaCertificate className="text-yellow-600 text-2xl" />,
      label: "Wipro TalentNext: Java Full Stack Development Course",
    },
    {
      href: "https://drive.google.com/file/d/1uF1SMd6Zrd5PauR5Bue9EjdKFq7OJt4o/view?usp=drive_link",
      icon: <FaCertificate className="text-yellow-600 text-2xl" />,
      label: "Communicatin skills by TCS iON",
    }
  ];

  const achievements = [
    {
      icon: <FaTrophy className="text-orange-500 text-2xl" />,
      label: "Winner of institute-level competitive coding competition",
    },
    {
      icon: <FaAward className="text-pink-500 text-2xl" />,
      label: "Top 5 teams in Techfest event orgnized by JIC Jabalpur",
    },
    {
      icon: <FaCode className="text-indigo-500 text-2xl" />,
      label: "Anchored a techfest event organized by the Shri Ram Group",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wide">
          Certifications <span className="text-blue-400">&</span> Achievements
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Certifications */}
          {certifications.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg 
              border border-white/20 rounded-xl px-6 py-5 shadow-md 
              hover:shadow-blue-500/40 hover:scale-105 transition duration-300"
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </a>
          ))}

          {/* Achievements */}
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg 
              border border-white/20 rounded-xl px-6 py-5 shadow-md 
              hover:shadow-blue-500/40 hover:scale-105 transition duration-300"
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
