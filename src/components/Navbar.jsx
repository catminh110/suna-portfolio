import React, { useState, useEffect } from 'react';
import { Menu, X, Orbit, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy active page marker
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space-dark/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 cursor-pointer font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 transition-all duration-300"
        >
          <Orbit className="h-6 w-6 text-cyan-400 animate-spin-slow" style={{ animationDuration: '10s' }} />
          <span>CATMINH.DEV</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 hover:text-cyan-400 cursor-pointer ${
                activeSection === item.id ? 'text-cyan-400' : 'text-gray-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[73px] w-full bg-space-dark/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 md:hidden overflow-hidden ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-lg font-medium py-2 border-b border-white/5 cursor-pointer transition-colors ${
                activeSection === item.id ? 'text-cyan-400' : 'text-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
