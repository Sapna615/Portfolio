import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Training', to: 'training' },
    { name: 'Projects', to: 'projects' },
    { name: 'Internship', to: 'internship' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Contact', to: 'contact' },
    { name: 'Resume', to: '/sapna cv.pdf', isExternal: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-200' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="home" smooth={true} className="text-xl font-bold tracking-tighter cursor-pointer text-slate-900">
          SAPNA<span className="text-indigo-600">RAI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.name}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-indigo-600 hover:text-indigo-800"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link"
                activeClass="text-indigo-600 font-bold"
                spy={true}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 py-6 px-6 flex flex-col space-y-4 shadow-xl">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.name}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="nav-link text-indigo-600"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="nav-link"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
