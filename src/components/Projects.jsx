import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './SocialIcons';

const Projects = () => {
  const projects = [
    {
      title: "Multimodal Drowsiness Detection",
      description: "A real-time safety system combining raw facial images (CNNs) and facial landmark indicators like EAR & MAR (MediaPipe Face Mesh) to classify driver fatigue. Logs runs on WandB.",
      highlights: [
        "Fuses CNN visual features with real-time MediaPipe Face Mesh EAR/MAR indicators.",
        "Tracks experiment metrics and training diagnostics via Weights & Biases (WandB)."
      ],
      tags: ["PyTorch", "MediaPipe", "OpenCV", "WandB", "Flask", "Python"],
      github: "https://github.com/catminh110/multimodal-drowsiness-detection"
    },
    {
      title: "Contextual Bandits LTR",
      description: "A reinforcement learning search recommendation system implementing the LinUCB contextual bandit algorithm for Learning to Rank (LTR). Simulates dynamic user click-through interactions.",
      highlights: [
        "Implements the LinUCB algorithm to balance exploration and exploitation in ranking.",
        "Optimizes online click-through rate (CTR) across simulated user feedback loops."
      ],
      tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
      github: "https://github.com/catminh110/Bandits_LTR_RT"
    },
    {
      title: "Causal Fairness Engine",
      description: "An algorithmic research framework for measuring and auditing fairness in machine learning predictions using causal inference models, causal graphs, and counterfactual reasoning.",
      highlights: [
        "Constructs structural causal graphs to trace bias propagation paths.",
        "Evaluates counterfactual fairness and audits model predictions systematically."
      ],
      tags: ["Causal Inference", "Python", "NetworkX", "ML Fairness", "Jupyter"],
      github: "https://github.com/catminh110/causal-fairness-engine"
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
              {/* Info Block */}
              <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-400 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors pt-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-gray-300/90 border-l-2 border-purple-500/40 pl-3 py-0.5 flex-grow">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

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
