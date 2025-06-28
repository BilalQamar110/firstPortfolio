import React from "react";

const educationData = [
  {
    degree: "BS Computer Science",
    institution: "Virtual University of Pakistan",
    duration: "2022 – 2026",
    description:
      "Studied data structures, web development, OOP, databases, and software engineering with a strong focus on hands-on projects.",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "Government College of Commerce Chichawatni",
    duration: "2019 – 2020",
    description:
      "Focused on Math, Economics and Computer science. Achieved excellent academic performance.",
  },
  {
    degree: "Matriculation (Science)",
    institution: "Govt.Rai Niaz High School",
    duration: "2017 – 2018",
    description:
      "Laid the foundation of my education with core science subjects. Participated in academic competitions and group projects.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          🎓 My Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 border-l-4 border-blue-500 shadow-lg p-6 rounded-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {edu.degree}
              </h3>
              <p className="text-gray-200">{edu.institution}</p>
              <p className="text-sm text-gray-400 italic mb-2">
                {edu.duration}
              </p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
