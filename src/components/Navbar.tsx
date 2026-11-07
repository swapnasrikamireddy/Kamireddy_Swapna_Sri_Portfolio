import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/85 backdrop-blur-md border-b border-indigo-950/40 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-pink flex items-center justify-center font-display font-bold text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            SK
          </div>
          <span className="font-display font-semibold tracking-tight text-white group-hover:text-brand-purple transition-colors">
            {personalInfo.name}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-brand-purple border-b border-brand-purple pb-1'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 bg-gradient-to-r from-brand-purple to-brand-pink text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Let's Talk
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-lg border-b border-indigo-950/50 py-6 px-6 shadow-xl transition-all duration-300">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left font-sans text-base font-medium transition-colors cursor-pointer ${
                    activeSection === item.id ? 'text-brand-purple' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-pink text-white text-sm font-semibold uppercase tracking-wider py-3 rounded-full cursor-pointer"
              >
                Let's Talk
                <ArrowRight size={14} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
