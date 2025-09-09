import React from "react";

const skills = [
  // Languages
  "C#",
  "Java",
  "TypeScript",
  "JavaScript",
  "SQL",
  "HTML",
  "CSS",

  // Frameworks & Libraries
  "Angular",
  "Bootstrap",
  "Material UI",
  ".NET Core",
  "Entity Framework Core",
  "Spring Boot (Basic)",

  // Databases
  "MySQL",
  "SQL Server",
  "PostgreSQL",

  // Tools
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "Visual Studio",

  // Other
  "OOP",
  "DSA",
  "MVC",
  "Repository Pattern",
  "Agile",
  "Java JDBC",
  "REST APIs",
  "JWT Authentication",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-4 py-3 
              bg-white/10 backdrop-blur-lg rounded-xl 
              border border-white/20 shadow-md 
              hover:shadow-blue-500/40 hover:scale-105 
              transition duration-300 text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
