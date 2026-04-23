import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-slate-900 leading-tight">
              DESIGNING <span className="text-indigo-600">IMPACTFUL</span> <br /> EXPERIENCES
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-8 font-medium">
              I am a Computer Science student at Lovely Professional University, passionate about merging engineering precision with creative design.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-12">
              My approach focuses on building robust systems that are not only efficient but also intuitive to use. I believe every line of code is an opportunity to solve a real-world problem.
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div className="card-3d p-6">
                <h4 className="text-indigo-600 font-bold mb-1 uppercase tracking-widest text-xs">Location</h4>
                <p className="text-slate-900 font-bold">Punjab, India</p>
              </div>
              <div className="card-3d p-6">
                <h4 className="text-indigo-600 font-bold mb-1 uppercase tracking-widest text-xs">Degree</h4>
                <p className="text-slate-900 font-bold">B.Tech CSE</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-90 md:h-130 card-3d overflow-hidden p-2 flex items-center justify-center mx-auto">
               <img 
                 src="/linkedin.jpeg" 
                 alt="Sapna Rai"
                 className="w-full h-full object-cover rounded-full"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextElementSibling.style.display = 'flex';
                 }}
               />
               <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                 <div className="text-indigo-600/10 font-black text-[200px] select-none absolute -z-10">SR</div>
                 <div className="text-slate-900 font-black text-9xl relative z-10 drop-shadow-2xl">SR</div>
               </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
