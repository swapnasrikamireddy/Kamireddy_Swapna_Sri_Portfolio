import { motion } from 'motion/react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';
import { experienceData } from '../data';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-brand-dark/20">
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-brand-purple tracking-widest uppercase font-mono mb-2"
          >
            Work History
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight"
          >
            Professional <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base font-sans max-w-xl mx-auto"
          >
            A timeline of my internships and research contributions in full-stack engineering and AI
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connection Line */}
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-purple via-brand-pink to-indigo-950" />

          {/* Timeline Nodes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Outer Timeline Dot Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-[11px] top-6 w-6 h-6 rounded-full bg-brand-dark border-4 border-brand-purple flex items-center justify-center z-10 shadow-lg shadow-purple-500/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Left Column Content Spacer for desktop */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Right Column Content Card (Timeline Body) */}
                  <div className="w-full md:w-1/2 px-6 pl-12 md:px-12">
                    <div className="bg-brand-card/45 backdrop-blur-md border border-indigo-950/80 p-6 rounded-2xl glow-purple hover:border-indigo-500/30 hover:scale-[1.01] transition-all duration-300">
                      
                      {/* Card Header Info */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-pink flex items-center justify-center text-white font-display font-bold text-sm shadow-md shrink-0">
                          {exp.logoText}
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-display font-extrabold text-white leading-snug">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-semibold text-brand-purple">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Metadata row */}
                      <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mb-5">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-brand-pink" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-brand-blue" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Responsibilities bullets */}
                      <ul className="space-y-2.5 text-gray-300 font-sans text-xs md:text-sm leading-relaxed mb-5">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex gap-2">
                            <span className="text-brand-pink mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tools tagbar */}
                      <div className="flex flex-wrap gap-1.5 border-t border-indigo-950/60 pt-4">
                        {exp.tech.map((tool) => (
                          <span
                            key={tool}
                            className="bg-indigo-950/40 border border-indigo-900/40 text-indigo-300 text-[10px] font-mono px-2 py-1 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
