/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Particles from './components/Particles';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark text-slate-100 font-sans selection:bg-brand-purple selection:text-white overflow-x-hidden">
      {/* Background Starry Particles & Ambient Glows */}
      <Particles />

      {/* Main Layout Elements */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar />

        {/* Home / Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills & Toolkit Section */}
        <Skills />

        {/* Portfolio Projects Section */}
        <Projects />

        {/* Experience Timeline Section */}
        <Experience />

        {/* Education, Coursework & Credentials Section */}
        <Education />

        {/* Get in Touch & Feedback Section */}
        <Contact />
      </div>
    </div>
  );
}
