import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, FileText, Sparkles, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '9.4', label: 'Cumulative CGPA', sub: 'SRM University AP' },
    { value: '4+', label: 'Flagship Projects', sub: 'AI, Web & Algorithms' },
    { value: '2', label: 'Internships', sub: 'CCC Digital & SRM Research' },
    { value: 'GRiD 8.0', label: 'Semi-Finalist', sub: 'National Flipkart Contest' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Radiant Background Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center mt-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Availability Status Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-indigo-200 uppercase font-sans">
              Available for Internships & AI Engineering Roles
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white mb-4"
          >
            <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Subtitle / Developer Focus */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-display font-medium text-gray-300 mb-6 max-w-2xl flex items-center gap-2 justify-center"
          >
            <Sparkles className="text-brand-pink w-5 h-5 animate-pulse" />
            {personalInfo.title}
          </motion.p>

          {/* Short Bio */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 font-sans text-base md:text-lg max-w-3xl leading-relaxed mb-10"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3.5 items-center mb-20 max-w-3xl"
          >
            <button
              onClick={handleScrollToProjects}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold tracking-wide px-7 py-3.5 rounded-xl shadow-lg shadow-purple-500/15 hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-sm"
            >
              View Projects
              <ArrowRight size={16} />
            </button>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-200 border border-indigo-800/50 hover:border-indigo-600/80 font-semibold tracking-wide px-6 py-3.5 rounded-xl backdrop-blur-sm hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-sm"
            >
              <Linkedin size={16} className="text-brand-blue" />
              LinkedIn Profile
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-indigo-950/40 hover:bg-indigo-900/50 text-gray-200 border border-indigo-800/50 hover:border-indigo-600/80 font-semibold tracking-wide px-6 py-3.5 rounded-xl backdrop-blur-sm hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="/assets/aistudio/image_15a6569d.png"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-indigo-950/40 hover:bg-indigo-900/50 text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/60 font-semibold tracking-wide px-6 py-3.5 rounded-xl backdrop-blur-sm hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-sm"
            >
              <FileText size={16} />
              View Resume
            </a>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl px-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-brand-card/35 backdrop-blur-md border border-indigo-950/60 p-6 rounded-2xl glow-purple text-center hover:border-indigo-500/40 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-center min-h-[140px]"
              >
                <div className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2 bg-gradient-to-r from-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-200 uppercase tracking-wider font-display mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-indigo-400 font-mono">
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.6, y: 10 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
            className="mt-20 flex flex-col items-center gap-2 text-xs font-mono text-gray-500 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>scroll</span>
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
