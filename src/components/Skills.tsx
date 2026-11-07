import { motion } from 'motion/react';
import { Code2, Globe, Wrench, Cpu, Check } from 'lucide-react';
import { skillCategories, softSkills } from '../data';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={22} className="text-brand-purple" />;
      case 'Globe':
        return <Globe size={22} className="text-brand-pink" />;
      case 'Wrench':
        return <Wrench size={22} className="text-brand-blue" />;
      case 'Cpu':
        return <Cpu size={22} className="text-emerald-400" />;
      default:
        return <Code2 size={22} className="text-brand-purple" />;
    }
  };

  const getBorderColor = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return 'border-brand-purple/20 hover:border-brand-purple/60 group-hover:glow-purple';
      case 'Globe':
        return 'border-brand-pink/20 hover:border-brand-pink/60 group-hover:glow-pink';
      case 'Wrench':
        return 'border-brand-blue/20 hover:border-brand-blue/60 group-hover:glow-blue';
      case 'Cpu':
        return 'border-emerald-500/20 hover:border-emerald-500/60 group-hover:glow-emerald';
      default:
        return 'border-brand-purple/20 hover:border-brand-purple/60';
    }
  };

  const getBgColor = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return 'bg-brand-purple/5';
      case 'Globe':
        return 'bg-brand-pink/5';
      case 'Wrench':
        return 'bg-brand-blue/5';
      case 'Cpu':
        return 'bg-emerald-500/5';
      default:
        return 'bg-brand-purple/5';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-brand-dark/20">
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-brand-pink tracking-widest uppercase font-mono mb-2"
          >
            Skills & Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight"
          >
            My <span className="bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue bg-clip-text text-transparent">Technical Toolkit</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base font-sans max-w-xl mx-auto"
          >
            A comprehensive set of capabilities for building modern, intelligent full-stack applications
          </motion.p>
        </div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
        >
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group bg-brand-card/40 backdrop-blur-md border ${getBorderColor(
                cat.iconName
              )} p-6 rounded-2xl transition-all duration-300 flex flex-col`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getBgColor(cat.iconName)} border border-indigo-950`}>
                  {getIcon(cat.iconName)}
                </div>
                <h3 className="text-lg font-display font-bold text-white tracking-wide">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Sub-list */}
              <div className="flex flex-wrap gap-2.5 flex-grow">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-indigo-950/30 border border-indigo-900/40 hover:border-indigo-600/50 text-indigo-200 text-xs font-mono px-3 py-1.5 rounded-lg transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section (Matching video filter/pills) */}
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap justify-center items-center gap-3 bg-brand-card/20 backdrop-blur-md border border-indigo-950/60 p-4 rounded-3xl max-w-3xl mx-auto"
          >
            {softSkills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="flex items-center gap-1.5 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 hover:from-brand-purple/20 hover:to-brand-pink/20 border border-brand-purple/20 hover:border-brand-purple/50 text-indigo-100 text-xs font-semibold tracking-wide py-2 px-4 rounded-full transition-all duration-200"
              >
                <Check size={12} className="text-brand-pink" />
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
