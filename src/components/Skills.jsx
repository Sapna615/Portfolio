import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'JavaScript', 'C', 'PHP', 'Python', 'Java'],
      color: 'bg-indigo-600',
    },
    {
      title: 'Frameworks',
      skills: ['React JS', 'Node JS'],
      color: 'bg-pink-500',
    },
    {
      title: 'Technologies',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'REST API'],
      color: 'bg-blue-500',
    },
    {
      title: 'Tools/Platforms',
      skills: ['MySQL', 'MongoDB', 'Git', 'GitHub'],
      color: 'bg-emerald-500',
    },
    {
      title: 'Soft Skills',
      skills: ['Problem-Solving', 'Team Player', 'Adaptability'],
      color: 'bg-orange-500',
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900">
              TECHNICAL <span className="text-indigo-600">SKILLS</span>
            </h2>
            <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-3d p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                <h3 className="text-slate-900 font-bold uppercase tracking-widest text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 bg-slate-50 border border-slate-100 text-slate-600 text-sm font-bold rounded-2xl hover:bg-white hover:border-indigo-200 hover:text-indigo-600 hover:shadow-lg transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
