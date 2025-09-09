import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      href: "mailto:vivekkushwaha2727@gmail.com",
      icon: <FaEnvelope className="text-red-500 text-2xl" />,
      label: "vivekkushwaha2727@gmail.com",
    },
    {
      href: "tel:+919752155989",
      icon: <FaPhone className="text-green-500 text-2xl" />,
      label: "+91-9752155989",
    },
    {
      href: "https://github.com/vivekkushwaha27",
      icon: <FaGithub className="text-gray-800 text-2xl" />,
      label: "github.com/vivekkushwaha27",
      target: "_blank",
    },
    {
      href: "https://www.linkedin.com/in/vivek2727",
      icon: <FaLinkedin className="text-blue-600 text-2xl" />,
      label: "linkedin.com/in/vivek2727",
      target: "_blank",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 tracking-wide">
          Get in <span className="text-blue-400">Touch</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {contacts.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.target || "_self"}
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 
              bg-white/10 backdrop-blur-lg px-6 py-5 rounded-2xl 
              shadow-lg border border-white/20 
              hover:shadow-blue-500/40 hover:scale-105 
              transition duration-300"
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
