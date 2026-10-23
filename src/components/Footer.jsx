import React from 'react';
import { Orbit, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="relative py-12 border-t border-white/5 bg-space-dark z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleScrollTo('home')}
          aria-label="Scroll to top"
          className="flex items-center gap-2 cursor-pointer font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 transition-all duration-300"
        >
          <Orbit className="h-5 w-5 text-cyan-400" />
          <span>CATMINH.DEV</span>
        </button>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <button type="button" onClick={() => handleScrollTo('home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
          <button type="button" onClick={() => handleScrollTo('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
          <button type="button" onClick={() => handleScrollTo('skills')} className="hover:text-white transition-colors cursor-pointer">Skills</button>
          <button type="button" onClick={() => handleScrollTo('projects')} className="hover:text-white transition-colors cursor-pointer">Projects</button>
          <button type="button" onClick={() => handleScrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</button>
        </div>

        {/* Social Badges */}
        <div className="flex items-center gap-6 text-gray-400">
          <a href="https://github.com/catminh110" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/catminh110/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="mailto:catminhcaotran26102005@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} CATMINH.DEV. All rights reserved. Created with cosmic energy.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
