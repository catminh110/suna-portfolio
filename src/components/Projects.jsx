import React from 'react';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './SocialIcons';

import taskBoardImg from '../assets/task_board.png';
import cyberShopImg from '../assets/cyber_shop.png';
import orbitTrackerImg from '../assets/orbit_tracker.png';

const Projects = () => {
  const projects = [
    {
      title: "Multimodal Drowsiness Detection",
      description: "A real-time safety system combining raw facial images (CNNs) and facial landmark indicators like EAR & MAR (MediaPipe Face Mesh) to classify driver fatigue. Logs runs on WandB.",
      image: cyberShopImg,
      tags: ["PyTorch", "MediaPipe", "OpenCV", "WandB", "Flask", "Python"],
      github: "https://github.com/catminh110",
      live: "https://github.com/catminh110"
    },
    {
      title: "Contextual Bandits LTR",
      description: "A reinforcement learning search recommendation system implementing the LinUCB contextual bandit algorithm for Learning to Rank (LTR). Simulates dynamic user click-through interactions.",
      image: orbitTrackerImg,
      tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
      github: "https://github.com/catminh110",
      live: "https://github.com/catminh110"
    },
    {
      title: "Adult Census Income Classifier",
      description: "An end-to-end machine learning classification pipeline predicting whether individuals exceed $50K/year in income. Features exploratory data analysis and deployment via Flask.",
      image: taskBoardImg,
      tags: ["Scikit-Learn", "Pandas", "NumPy", "Seaborn", "Flask", "Python"],
      github: "https://github.com/catminh110/Adult-Cencus-Income",
      live: "https://github.com/catminh110/Adult-Cencus-Income"
    }
  ];

  return (
    <section 
      id="projects" 
      className="relative py-24 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-glow">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism rounded-2xl border border-white/5 overflow-hidden flex flex-col group hover:neon-border-purple transition-all duration-300 h-full"
            >
              {/* Image Block */}
              <div className="relative aspect-video overflow-hidden border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-space-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-space-dark/80 hover:bg-purple-600 border border-white/10 hover:border-purple-400 text-white transition-all duration-300 cursor-pointer"
                    aria-label="GitHub Repo"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-space-dark/80 hover:bg-cyan-600 border border-white/10 hover:border-cyan-400 text-white transition-all duration-300 cursor-pointer"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Info Block */}
              <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-cyan-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
