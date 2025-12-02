import React from "react";

const experiences = [
  {
    company: "Logimonk Technologies",
    role: "Junior Software Engineer",
    duration: "Feb 2025 - Oct 2025",
    description: [
      "Developed responsive Angular UIs from Figma designs using Bootstrap and Angular Material, creating reusable Angular components that reduced code by 20%.",
      "Built 15+ secure RESTful APIs using .NET Core and Entity Framework Core, improving data retrieval performance by 30% and ensuring secure user access via JWT authentication."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 
              rounded-2xl shadow-lg p-6 hover:shadow-blue-500/40 transition duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400">{experience.company}</h3>
              <p className="text-lg mb-2 text-blue-300">{experience.role}</p>
              <p className="text-sm text-gray-400 mb-4">{experience.duration}</p>

              <ul className="list-disc pl-6 space-y-2">
                {experience.description.map((desc, idx) => (
                  <li key={idx} className="text-sm text-white">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
