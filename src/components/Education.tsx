import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Trophy, Star } from 'lucide-react';
import { educationData, certificationsData } from '../data';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-brand-dark/10">
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-brand-pink tracking-widest uppercase font-mono mb-2"
          >
            Education & Certs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight"
          >
            Academic <span className="bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue bg-clip-text text-transparent">Journey</span> & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base font-sans max-w-xl mx-auto"
          >
            A summary of academic milestones, coursework details, certifications, and national contests
          </motion.p>
        </div>

        {/* 2-Column Bento Grid: Left Education, Right Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start"
        >
          {/* Left Column: Education (7 cols on large screens) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
              <GraduationCap className="text-brand-purple" size={24} />
              Formal Education
            </h3>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-brand-card/40 backdrop-blur-md border border-indigo-950/80 p-8 rounded-2xl glow-purple hover:border-indigo-500/25 transition-all duration-300"
              >
                {/* College & Degree Title */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-display font-extrabold text-white leading-tight">
                      {edu.institution}
                    </h4>
                    <p className="text-sm font-semibold text-brand-purple mt-1">
                      {edu.degree}
                    </p>
                  </div>
                  {edu.gpa && (
                    <div className="bg-gradient-to-tr from-brand-purple to-brand-pink text-white text-xs font-extrabold px-3 py-1.5 rounded-xl text-center shrink-0 shadow-md">
                      CGPA: {edu.gpa} / 10
                    </div>
                  )}
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-brand-pink" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-brand-blue" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Coursework highlights */}
                <div className="border-t border-indigo-950/60 pt-6">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-3">
                    Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="bg-indigo-950/40 border border-indigo-900/50 text-indigo-200 text-xs font-sans font-medium px-3.5 py-1.5 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Right Column: Certifications & Honors (5 cols on large screens) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
              <Award className="text-brand-pink" size={24} />
              Certifications & Accomplishments
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, index) => {
                const isContest = cert.title.includes('FlipkartGrid') || cert.title.includes('Semi-Finalist');
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-brand-card/30 backdrop-blur-md border border-indigo-950/80 p-5 rounded-2xl hover:border-indigo-500/20 transition-all duration-200 flex items-start gap-4 glow-pink"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isContest 
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        : 'bg-brand-pink/10 text-brand-pink border border-brand-pink/30'
                    }`}>
                      {isContest ? <Trophy size={18} /> : <CheckCircle2 size={18} />}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-display font-bold text-white leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-brand-blue font-semibold mt-0.5">
                        {cert.issuer}
                      </p>
                      {cert.detail && (
                        <p className="text-xs text-gray-400 leading-relaxed font-sans mt-1.5">
                          {cert.detail}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
