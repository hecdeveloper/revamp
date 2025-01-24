import { useState } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-4xl font-bold text-blue-600">D</span>
              <span className="ml-2 text-xl font-semibold">Devseo</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#technologies" className="text-gray-700 hover:text-blue-600">Technologies</a>
            <a href="#clients" className="text-gray-700 hover:text-blue-600">Clients</a>
            <a href="#methodology" className="text-gray-700 hover:text-blue-600">Methodology</a>
            <a href="#locations" className="text-gray-700 hover:text-blue-600">Locations</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-700 hover:text-blue-600">
                <Linkedin size={20} />
              </a>
              <a href="mailto:devseo.com" 
                 className="text-gray-700 hover:text-blue-600">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
            <a href="#technologies" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Technologies</a>
            <a href="#clients" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Clients</a>
            <a href="#methodology" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Methodology</a>
            <a href="#locations" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Locations</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}