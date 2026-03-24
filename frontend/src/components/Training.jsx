import React from 'react';
import { motion } from 'framer-motion';
import { Code, Calendar, Award, Target } from 'lucide-react';

const Training = () => {
  const training = [
    {
      title: "Data Structures and Algorithms using C++",
      duration: "Jul' 24",
      description: "Hands-on training focused on developing interactive quiz applications for learning data structures and algorithms",
      link: "https://drive.google.com/file/d/1TqMcBisSXCxQiP4uQU6mHf5oJYtShEUu/view",
      highlights: [
        "Crafted quiz-style questions to practice data structures and algorithm concepts through problem-solving exercises",
        "Simulated web-like navigation and user interaction to create a structured flow between different quiz questions and response"
      ],
      type: "technical"
    }
  ];

  return (
    <section id="training" className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 leading-none">
              MY <span className="text-indigo-600">TRAINING</span>
            </h2>
            <div className="w-24 h-2 bg-indigo-600 rounded-full"></div>
          </motion.div>
          <p className="text-slate-500 mt-8 md:mt-0 max-w-sm text-lg font-medium leading-relaxed">
            Professional training and certifications to enhance technical skills and knowledge.
          </p>
        </div>

        <div className="w-full">
          {training.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card-3d group"
            >
              <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-100 hover:border-indigo-200 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-indigo-100 rounded-2xl text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                      <Code size={32} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-black text-slate-900 mb-2 md:mb-0 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{item.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-slate-700 font-medium">{item.organization}</span>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2 text-slate-600 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>Crafted quiz-style questions to practice data structures and algorithm concepts through problem-solving exercises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>Simulated web-like navigation and user interaction to create a structured flow between different quiz questions and response</span>
                      </li>
                    </ul>
                    {item.link && (
                      <div className="mt-6">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                        >
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
