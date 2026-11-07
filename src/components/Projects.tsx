import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, FolderGit2, Sparkles, Terminal, BarChart3, Navigation } from 'lucide-react';
import { projectsData } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'AI / ML' | 'Data Visualization'>('All');
  const [, setHoveredId] = useState<string | null>(null);

  const categories: ('All' | 'Full Stack' | 'AI / ML' | 'Data Visualization')[] = [
    'All',
    'Full Stack',
    'AI / ML',
    'Data Visualization',
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'All') return true;
    return proj.category === filter;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'ai-internship':
        return <Sparkles className="text-pink-400" size={22} />;
      case 'codesentinel':
        return <Terminal className="text-emerald-400" size={22} />;
      case 'review-analysis':
        return <BarChart3 className="text-amber-400" size={22} />;
      case 'smartfare':
        return <Navigation className="text-cyan-400" size={22} />;
      default:
        return <FolderGit2 className="text-brand-purple" size={22} />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-brand-dark/10">
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-brand-blue tracking-widest uppercase font-mono mb-2"
          >
            Featured Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight"
          >
            Showcasing <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink bg-clip-text text-transparent">Key Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base font-sans max-w-xl mx-auto"
          >
            A curated portfolio of full-stack systems, machine learning pipelines, code analysis tools, and algorithmic engines
          </motion.p>
        </div>

        {/* Categories Tab Pill Filter */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sans text-xs md:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-purple to-brand-pink border-transparent text-white shadow-md shadow-purple-500/15'
                  : 'bg-brand-card/35 text-gray-400 border-indigo-950/70 hover:text-white hover:border-indigo-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-brand-card/40 backdrop-blur-md border border-indigo-950/80 rounded-2xl p-7 transition-all duration-300 hover:border-indigo-500/30 flex flex-col justify-between group relative min-h-[460px] shadow-lg shadow-black/20"
              >
                {/* Visual Top Glow */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${project.accentColor} rounded-t-2xl`} />

                <div>
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-950/60 border border-indigo-900/40 flex items-center justify-center shrink-0">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-brand-purple transition-colors duration-200 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-indigo-400 font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description List */}
                  <ul className="space-y-2.5 my-5 text-gray-300 font-sans text-xs md:text-sm">
                    {project.description.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-brand-purple mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-indigo-950/45 border border-indigo-950/70 text-indigo-300 text-[11px] font-mono px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Bar (Category and GitHub button cleanly separated) */}
                  <div className="border-t border-indigo-950/80 pt-4 flex items-center justify-between gap-3 min-h-[52px]">
                    <span className="text-xs font-semibold text-gray-400 font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                    
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-indigo-950/70 hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-pink hover:text-white text-indigo-200 border border-indigo-800/60 hover:border-transparent text-xs font-bold tracking-wide py-2.5 px-4 rounded-xl transition-all shadow-sm active:scale-95"
                      >
                        <Github size={15} />
                        <span>See on GitHub</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-amber-400/80 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg">
                        Tableau Analytics
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
