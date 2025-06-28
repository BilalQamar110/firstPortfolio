import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiDjango,
  SiDotnet,
  SiMysql,
  SiJsonwebtokens,
  SiPostgresql,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function SkillItem({ icon, label, color }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 flex items-center space-x-2 hover:border-blue-500 transition">
      <span className={`text-xl`} style={{ color }}>{icon}</span>
      <span className="text-gray-200 text-sm">{label}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">🛠 Skills</h2>
        <p className="text-center text-gray-400 mb-10">
          Technologies and Languages I've worked with:
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend */}
          <div className="border border-blue-600 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <SkillItem icon={<FaReact />} label="React.js" color="#61DBFB" />
              
              <SkillItem icon={<SiTailwindcss />} label="Tailwind CSS" color="#38BDF8" />
              <SkillItem icon={<FaHtml5 />} label="HTML5" color="#E44D26" />
              <SkillItem icon={<FaCss3Alt />} label="CSS3" color="#264de4" />
              <SkillItem icon={<FaJs />} label="JavaScript" color="#f0db4f" />
              
            </div>
          </div>

          {/* Backend */}
          <div className="border border-blue-600 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              Backend
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              
              <SkillItem icon={<FaNodeJs />} label="Node.js" color="#3C873A" />
              <SkillItem icon={<SiMysql />} label="MySQL" color="#00758F" />
              
              <SkillItem icon={<FaGitAlt />} label="Git" color="#F1502F" />
            </div>
          </div>

          {/* Languages */}
          <div className="border border-blue-600 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              Different Languages
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              
              <SkillItem icon={<SiC />} label="C" color="#A8B9CC" />
              <SkillItem icon={<SiCplusplus />} label="C++" color="#00599C" />
              <SkillItem icon={<FaPhp />} label="PHP" color="#8892BE" />
              <SkillItem icon={<FaDatabase />} label="SQL" color="#00758F" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
