import { FaCode } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    { title: "Project 1", description: "A responsive portfolio built with React and Tailwind CSS." },
    { title: "Project 2", description: "A weather app that shows real-time forecasts using an API." },
    { title: "Project 3", description: "An e-commerce frontend with cart, filters, and product pages." },
    
  ];

  return (
    <section className="py-20 px-6 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-left group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <FaCode size={24} />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors">
                  #{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
