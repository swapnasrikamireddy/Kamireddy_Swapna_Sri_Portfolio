import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      type: 'email',
      label: 'Email Address',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      accent: 'text-brand-purple bg-brand-purple/10 border-brand-purple/20 hover:border-brand-purple/50 shadow-purple-500/5',
    },
    {
      type: 'phone',
      label: 'Phone Number',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      icon: Phone,
      accent: 'text-brand-pink bg-brand-pink/10 border-brand-pink/20 hover:border-brand-pink/50 shadow-pink-500/5',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn Profile',
      value: 'Swapna Kamireddy',
      href: personalInfo.linkedin,
      icon: Linkedin,
      accent: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20 hover:border-brand-blue/50 shadow-blue-500/5',
    },
    {
      type: 'github',
      label: 'GitHub Username',
      value: 'swapnasrikamireddy',
      href: personalInfo.github,
      icon: Github,
      accent: 'text-gray-300 bg-gray-500/10 border-gray-500/20 hover:border-gray-500/50 shadow-white/5',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Decorative Blur Spheres */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-brand-purple tracking-widest uppercase font-mono mb-2"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight"
          >
            Let's <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">Connect</span> & Collaborate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base font-sans max-w-xl mx-auto"
          >
            Open to internship opportunities, research collaborations, and interesting open-source initiatives
          </motion.p>
        </div>

        {/* Form and Contact Detail grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Block: Contact Methods (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const IconComp = method.icon;
                const isCopyable = method.type === 'email' || method.type === 'phone';
                const isCopied = copiedText === method.type;

                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    key={method.type}
                    className={`bg-brand-card/40 backdrop-blur-md border p-5 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-md ${method.accent.split(' ').slice(4).join(' ')}`}
                  >
                    <a
                      href={method.href}
                      target={method.type !== 'email' && method.type !== 'phone' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group/item flex-grow cursor-pointer"
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${method.accent.split(' ').slice(0, 4).join(' ')}`}>
                        <IconComp size={20} className="group-hover/item:scale-110 transition-transform" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs text-indigo-400 font-mono block mb-0.5">
                          {method.label}
                        </span>
                        <span className="text-sm md:text-base font-display font-bold text-white group-hover/item:text-brand-purple transition-colors">
                          {method.value}
                        </span>
                      </div>
                    </a>

                    {/* Copy Button for Email & Phone */}
                    {isCopyable && (
                      <button
                        onClick={() => handleCopy(method.value, method.type as 'email' | 'phone')}
                        className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-900/40 hover:border-indigo-600/50 hover:bg-indigo-950/80 text-gray-400 hover:text-white transition-all cursor-pointer"
                        title="Copy to Clipboard"
                      >
                        {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Subtext Card */}
            <div className="bg-brand-card/25 border border-indigo-950/60 p-6 rounded-2xl text-left hidden lg:block">
              <h4 className="text-sm font-display font-bold text-white mb-2">
                Based in Amaravati, AP, India
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Happy to work remotely or relocate for promising on-site/hybrid opportunities. Let's arrange a call to chat more about how I can bring value to your engineering team.
              </p>
            </div>
          </div>

          {/* Right Block: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-card/45 backdrop-blur-md border border-indigo-950/80 p-8 rounded-3xl glow-purple text-left h-full"
            >
              <h3 className="text-xl font-display font-extrabold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-gray-400 font-sans mb-6">
                Fill out the secure form below to drop me an instant line. I'll get back to you within 24 hours!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider block mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-indigo-950/20 border border-indigo-900/50 hover:border-indigo-800 focus:border-brand-purple/80 text-white placeholder-gray-600 text-sm px-4 py-3.5 rounded-xl outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider block mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-indigo-950/20 border border-indigo-900/50 hover:border-indigo-800 focus:border-brand-purple/80 text-white placeholder-gray-600 text-sm px-4 py-3.5 rounded-xl outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider block mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hey Swapna, I'd love to discuss an internship role or collaboration with you..."
                    className="w-full bg-indigo-950/20 border border-indigo-900/50 hover:border-indigo-800 focus:border-brand-purple/80 text-white placeholder-gray-600 text-sm px-4 py-3.5 rounded-xl outline-none resize-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="send-message-btn"
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-pink disabled:from-indigo-950/40 disabled:to-indigo-950/40 disabled:border-indigo-900/30 text-white font-semibold tracking-wide py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/15 transition-all cursor-pointer active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : isSuccess ? (
                      <>
                        <Check size={18} className="text-emerald-400" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Feedback States */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs font-sans text-center"
                  >
                    Thank you, {formData.name || 'friend'}! Your message was transmitted successfully. I will reach out to you as soon as possible!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

        {/* Beautiful Footer */}
        <div className="mt-24 pt-8 border-t border-indigo-950/50 text-center text-xs text-gray-500 font-mono">
          <p className="mb-2">
            © {new Date().getFullYear()} Swapna Sri Kamireddy. Built with React, Tailwind CSS & Framer Motion.
          </p>
          <p className="text-gray-600">
            SRM Institute of Science and Technology, AP • B.Tech Computer Science Undergrad
          </p>
        </div>
      </div>
    </section>
  );
}
