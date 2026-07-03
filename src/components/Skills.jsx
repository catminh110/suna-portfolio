import React from 'react';
import { Sparkles, Cpu, Database, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Deep Learning",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      skills: ["PyTorch", "TensorFlow & Keras", "Machine Learning", "Deep Learning", "Computer Vision (OpenCV)", "NLP & Hugging Face"]
    },
    {
      title: "Languages & Database",
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      skills: ["Python", "Microsoft SQL Server", "SQL Queries", "C++", "NumPy & Pandas", "Scikit-Learn"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5 text-pink-400" />,
      skills: ["Git & GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "Linux Shell", "Docker"]
    }
  ];

  return (
    <section 
      id="skills" 
      className="relative py-24 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-glow">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glassmorphism p-8 rounded-2xl border border-white/5 flex flex-col hover:neon-border-cyan transition-all duration-300 relative group"
            >
              {/* Top Neon Border Glow on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-6 text-left">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/30 text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
