import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++', percentage: 85 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'C', percentage: 75 },
        { name: 'PHP', percentage: 70 },
        { name: 'Python', percentage: 65 },
        { name: 'Java', percentage: 60 }
      ],
      color: 'bg-indigo-600',
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React JS', percentage: 85 },
        { name: 'Node JS', percentage: 75 }
      ],
      color: 'bg-pink-500',
    },
    {
      title: 'Technologies',
      skills: [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 85 },
        { name: 'Tailwind CSS', percentage: 80 },
        { name: 'REST API', percentage: 75 }
      ],
      color: 'bg-blue-500',
    },
    {
      title: 'Tools/Platforms',
      skills: [
        { name: 'MySQL', percentage: 80 },
        { name: 'MongoDB', percentage: 70 },
        { name: 'Git', percentage: 85 },
        { name: 'GitHub', percentage: 85 }
      ],
      color: 'bg-emerald-500',
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem-Solving', percentage: 90 },
        { name: 'Team Player', percentage: 85 },
        { name: 'Adaptability', percentage: 80 }
      ],
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
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-800 font-semibold text-sm">{skill.name}</span>
                      <span className="text-slate-600 font-bold text-sm">{skill.percentage}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full ${category.color} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
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
