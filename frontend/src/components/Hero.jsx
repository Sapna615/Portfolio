import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Mail, FileDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-bold tracking-widest uppercase"
          >
            Web Developer & Engineer
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none text-slate-900 drop-shadow-sm">
            SAPNA <span className="text-indigo-600">RAI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Crafting high-performance digital experiences with modern technology and elegant design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="skills" smooth={true} duration={500} offset={-80}>
              <button className="btn-primary group flex items-center gap-3">
                Technical Skills <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn-secondary">
                View My Projects
              </button>
            </Link>
            {/* <a href="/sapnacv.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn-secondary flex items-center gap-2 text-indigo-600 border-indigo-100 hover:bg-indigo-50">
                <FileDown size={20} /> View CV
              </button>
            </a> */}
          </div>

          <div className="mt-20 flex items-center justify-center space-x-10">
            <a href="https://github.com/Sapna615" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/sapna-rai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sapnarai2005@gmail.com" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-300 hidden md:block"
      >
        <div className="w-7 h-12 border-2 border-slate-200 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ height: [8, 16, 8] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 bg-indigo-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
