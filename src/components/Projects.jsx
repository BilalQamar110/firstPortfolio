import { FaCode } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Responsive Portfolio",
      description: "A beautiful and responsive developer portfolio built with React and Tailwind CSS, featuring smooth scroll and dark mode support.",
      image: "/project1.jpeg",
      technologies: ["React", "Tailwind CSS", "Vite"],
    },
    {
      title: "Weather App",
      description: "Real-time weather forecast app using OpenWeatherMap API. Includes location-based data, icons, and temperature charts.",
      image: "/project2.PNG",
      technologies: ["React", "Axios", "API Integration"],
    },
    {
      title: "E-Commerce Frontend",
      description: "Modern e-commerce frontend with dynamic cart, filtering system, and styled product cards — ready to integrate with any backend.",
      image: "/project3.PNG",
      technologies: ["React", "Tailwind CSS", "Context API"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-left">
                {/* Icon + Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-blue-900 text-blue-400">
                    <FaCode size={24} />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">
                    #{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
