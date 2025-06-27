import { useState } from "react";
import { Menu, X } from "react-feather";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.PNG" alt="Logo" className="w-35 h-15 rounded-full" />
          
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-200 font-medium hover:text-blue-500 transition">
            About
          </a>
          
          <a href="#projects" className="text-gray-200 font-medium hover:text-blue-500 transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-200 font-medium hover:text-blue-500 transition">
            Contact
          </a>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-sm"
          >
            Github Profile
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-3">
          <a href="#about" className="block text-gray-200 font-medium hover:text-blue-500">
            About
          </a>
          <a href="#projects" className="block text-gray-200 font-medium hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="block text-gray-200 font-medium hover:text-blue-500">
            Contact
          </a>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-sm"
          >
            Github Profile
          </a>
        </div>
      )}
    </header>
  );
}
