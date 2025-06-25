export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight">
          My Portfolio
        </h1>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a
            href="#about"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
