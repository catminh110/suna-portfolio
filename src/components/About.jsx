import React from 'react';
import { Cpu, Code2, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const cards = [
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Model Development",
      description: "Designing and training custom neural networks for diverse scientific research topics."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      title: "AI Research",
      description: "Analyzing academic papers and implementing architectures to solve complex topics."
    },
    {
      icon: <Code2 className="w-6 h-6 text-pink-400" />,
      title: "Data Engineering",
      description: "Cleaning dataset pipelines and query manipulation using Python and MS SQL."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
      title: "Continuous Growth",
      description: "Constantly expanding skills in deep learning, math, and general software frameworks."
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Discover
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-glow">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Contents Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Biography Block */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Who is Cát Minh?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I am a third-year Artificial Intelligence student approaching graduation. While I am still building my professional industry experience, I possess solid core skills to develop AI systems and research projects in various domains.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Driven by curiosity and continuous self-improvement, I dedicate myself daily to refining my technical skills and expanding my knowledge. I am committed to polishing my understanding of neural networks, data modeling, and mathematical algorithms to solve real-world problems.
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-purple-500 pl-4 space-y-1">
                <div className="text-2xl font-extrabold text-white">3+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="border-l-2 border-cyan-400 pl-4 space-y-1">
                <div className="text-2xl font-extrabold text-white">1 Year</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Project Development Exp</div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glassmorphism p-6 rounded-2xl flex flex-col items-start text-left space-y-4 hover:neon-border-purple transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {card.icon}
                </div>
                <h4 className="text-lg font-semibold text-white tracking-wide">
                  {card.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
