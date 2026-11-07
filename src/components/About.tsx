import { motion } from 'motion/react';
import { User, GraduationCap, Code2, Target } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const cards = [
    {
      title: 'Who I Am',
      description: `I am ${personalInfo.name} — a Computer Science Engineering student passionate about engineering intelligent web architectures and AI solutions. With dual internship experience at CCC Digital India and SRM University AP, I bridge modern full-stack development with predictive machine learning and NLP.`,
      icon: User,
      color: 'border-brand-purple/40 hover:border-brand-purple text-brand-purple bg-brand-purple/5',
      glow: 'glow-purple',
    },
    {
      title: 'Academic Background',
      description: `I am pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering at SRM Institute of Science and Technology, Amaravati (August 2024 - May 2028). I maintain a high academic standing with a 9.4 / 10 CGPA, excelling in Data Structures, OOP, DBMS, OS, Networks, and ML.`,
      icon: GraduationCap,
      color: 'border-brand-pink/40 hover:border-brand-pink text-brand-pink bg-brand-pink/5',
      glow: 'glow-pink',
    },
    {
      title: 'Technical Interests',
      description: 'My core technical interests include building full-stack applications with MERN (MongoDB, Express, React, Node.js), developing AI recommendation platforms, NLP-driven resume parsing, Python static code analysis, and algorithmic optimization using graph theory and dynamic programming.',
      icon: Code2,
      color: 'border-brand-blue/40 hover:border-brand-blue text-brand-blue bg-brand-blue/5',
      glow: 'glow-blue',
    },
    {
      title: 'Career Goals',
      description: 'Driven to engineer scalable software products and production AI systems. As a Flipkart GRiD 8.0 National Semi-Finalist and MongoDB certified engineer, I aspire to collaborate in high-impact engineering environments solving challenging real-world problems.',
      icon: Target,
      color: 'border-amber-500/40 hover:border-amber-500 text-amber-500 bg-amber-500/5',
      glow: 'glow-blue',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 -right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />
      
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
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight"
          >
            A glimpse into <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">my journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base font-sans max-w-xl mx-auto"
          >
            Interests, background, and aspirations driving my development
          </motion.p>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`bg-brand-card/30 backdrop-blur-md border ${card.color.split(' ')[0]} ${card.color.split(' ')[1]} p-8 rounded-2xl ${card.glow} hover:scale-[1.02] transition-all duration-300 flex flex-col`}
              >
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color.split(' ')[3]} bg-opacity-10 border border-current`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white tracking-wide">
                    {card.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed flex-grow">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
