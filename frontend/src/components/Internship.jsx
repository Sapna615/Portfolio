import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink, Github } from 'lucide-react';

const Internship = () => {
  const experiences = [
    {
      company: 'EdiGlobe',
      role: 'Web Development Intern',
      project: 'College Management System',
      description: [
        'Developed a college management website to store and organize student records, course details, and academic information.',
        'Added secure login and registration functionality for students and administrators.',
        'Built backend APIs to handle student data, course information, and fee management between the frontend and database.',
        'Managed structured data storage for student profiles, course records, and fee details to ensure smooth system operation.',
      ],
      tech: ['ReactJS', 'NodeJS', 'JAVA', 'REST API'],
      location: 'Remote/India',
      period: 'Internship',
      // github: 'https://github.com/Sapna615',
      certificate:"https://drive.google.com/file/d/158t6yWhsjENRNY8gSczACQOmBCWiCAsj/view", // Placeholder for Internship Certificate
    },
  ];

  return (
    <section id="internship" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900">
            WORK <span className="text-indigo-600">HISTORY</span>
          </h2>
          <div className="w-24 h-2 bg-indigo-600 rounded-full"></div>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-3d p-10 md:p-16 relative overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2.5 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100"><Building2 size={18} className="text-indigo-500" /> {exp.company}</span>
                    <span className="flex items-center gap-2.5 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100"><MapPin size={18} className="text-indigo-500" /> {exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-100">
                  <Calendar size={16} /> {exp.period}
                </div>
              </div>

              <div className="mb-12">
                <h4 className="text-indigo-600 font-black mb-8 uppercase tracking-widest text-xs">Project: {exp.project}</h4>
                <ul className="space-y-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-6 text-slate-600 leading-relaxed font-medium">
                      <span className="text-indigo-200 font-black text-2xl flex-shrink-0 leading-none">0{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-10 border-t border-slate-50">
                <div className="flex flex-wrap gap-3.5">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white border border-slate-200 text-slate-500 text-xs font-black rounded-xl uppercase tracking-widest hover:border-indigo-400 hover:text-indigo-600 transition-all cursor-default shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  {exp.github && (
                    <a 
                      href={exp.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-black text-xs uppercase tracking-widest transition-colors"
                    >
                      <Github size={18} /> Repository
                    </a>
                  )}
                  {exp.certificate && (
                    <a 
                      href={exp.certificate} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-black text-xs uppercase tracking-widest transition-colors"
                    >
                      View Proof <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
