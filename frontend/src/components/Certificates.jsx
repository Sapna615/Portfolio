import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: 'Apr’ 25',
      link: '#', // Add your certificate URL here
    },
    {
      title: 'Object Oriented Programming',
      issuer: 'Neo',
      date: 'Dec’ 24',
      link: '#', // Add your certificate URL here
    },
    {
      title: 'Data Structures and Algorithms using C++',
      issuer: 'Training',
      date: 'Jul’ 24',
      link: '#', // Add your certificate URL here
    },
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 uppercase">
            MY <span className="text-indigo-600">CERTIFICATES</span>
          </h2>
          <div className="w-24 h-2 bg-indigo-600 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-3d p-10 flex flex-col justify-between group relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -z-10 group-hover:bg-indigo-100/50 transition-all duration-500"></div>
              
              <div className="mb-12">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-50 border border-slate-50 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Award size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-slate-900 font-black text-2xl mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{cert.title}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-emerald-500" /> {cert.issuer}
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <span className="text-slate-900 font-black text-xs uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{cert.date}</span>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-2 text-sm font-black uppercase tracking-widest">
                  View Proof <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
