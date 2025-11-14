import React from "react";

const skillCategories = {
  Frontend: ["Angular", "Bootstrap", "Material UI", "HTML", "CSS", "TypeScript", "JavaScript", "React"],
  Backend: ["C#", "Java", ".NET Core", "ASP.NET Core Web API", "Entity Framework Core", "Spring Boot (Basic)", "REST APIs", "JWT Authentication"],
  Databases: ["MySQL", "SQL Server", "PostgreSQL", "SQL", "MongoDB"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Visual Studio"],
  Other: ["OOP", "DSA", "MVC", "Repository Pattern", "Agile", "Java JDBC"],
};

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(skillCategories).map(([category, items], index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 
              rounded-2xl shadow-lg p-6 hover:shadow-blue-500/40 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>

              <div className="grid grid-cols-2 gap-3">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 bg-white/10 rounded-lg text-sm 
                    border border-white/20 text-center hover:bg-blue-500/20 
                    transition duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
