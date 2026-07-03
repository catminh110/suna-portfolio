import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Orbit } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

const Hero = () => {
  const words = ["Full Stack Developer", "Cosmic Creator", "UI/UX Enthusiast", "React Specialist"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = words[currentWordIndex];
    let timer;

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setDisplayedText(activeWord.substring(0, displayedText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      // Writing text
      timer = setTimeout(() => {
        setDisplayedText(activeWord.substring(0, displayedText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === activeWord) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center w-full">
        {/* Intro Text */}
        <div className="md:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/35 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-purple-300 tracking-wide uppercase">Welcome to my universe</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-glow">Suna</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl text-gray-300 font-medium h-[40px] flex items-center"
          >
            I'm a&nbsp;<span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 pr-1 animate-pulse">{displayedText}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed"
          >
            A passionate developer focused on crafting beautiful, interactive digital systems. I build responsive frontends and resilient backends under the starry grid.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25 cursor-pointer transform hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 pt-4 text-gray-400"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="mailto:contact@suna.dev" className="hover:text-cyan-400 transition-colors" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Twitter">
              <TwitterIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Orbit Art Element */}
        <div className="md:col-span-5 flex justify-center items-center relative py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center"
          >
            {/* Spinning background rings */}
            <div className="absolute inset-0 rounded-full border border-purple-500/10 animate-spin" style={{ animationDuration: '25s' }} />
            <div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/20 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
            <div className="absolute inset-12 rounded-full border border-white/5 animate-spin" style={{ animationDuration: '60s' }} />

            {/* Glowing Core Sphere */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-purple-600/30 via-indigo-900/40 to-cyan-500/30 blur-[10px] absolute animate-pulse-glow flex items-center justify-center">
              {/* Inner core art */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent flex items-center justify-center relative">
                <div className="absolute w-24 h-24 rounded-full bg-cyan-400/10 blur-[15px]" />
                {/* Floating CSS astronaut badge or element */}
                <div className="relative animate-float text-cyan-400">
                  <Orbit className="w-20 h-20 opacity-90 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating Orbits (mini planets) */}
            <div className="absolute top-[10%] left-[20%] w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-[20%] right-[15%] w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4] animate-float" style={{ animationDelay: '3s' }} />
            <div className="absolute bottom-[10%] left-[10%] w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899] animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
