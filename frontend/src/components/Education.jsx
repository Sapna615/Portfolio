import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      address: "Punjab, India",
      cgpa: "6.91",
      duration: "Aug' 23 - Present",
      type: "bachelor"
    },
    {
      degree: "Intermediate",
      field: "Science Stream (PCM)",
      institution: "MJRP Public School",
      address: "Ghazipur, Uttar Pradesh",
      percentage: "69.5%",
      duration: "Mar' 21 - Mar' 22",
      type: "intermediate"
    },
    {
      degree: "Matriculation",
      field: "Secondary Education",
      institution: "MJRP Public School",
      address: "Ghazipur, Uttar Pradesh",
      percentage: "87%",
      duration: "Mar' 19 - Mar' 20",
      type: "highschool"
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 leading-none">
              MY <span className="text-indigo-600">EDUCATION</span>
            </h2>
            <div className="w-24 h-2 bg-indigo-600 rounded-full"></div>
          </motion.div>
          <p className="text-slate-500 mt-8 md:mt-0 max-w-sm text-lg font-medium leading-relaxed">
            My academic journey and educational background in technology and science.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card-3d group"
            >
              <div className="p-2 md:p-4 bg-white rounded-3xl border border-slate-100 hover:border-indigo-200 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-2xl ${
                        edu.type === 'bachelor' ? 'bg-indigo-100 text-indigo-600' :
                        edu.type === 'intermediate' ? 'bg-purple-100 text-purple-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        <GraduationCap size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-slate-600 font-medium text-lg mb-1">
                          {edu.field}
                        </p>
                        <p className="text-slate-800 font-bold text-xl mb-3">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 mb-2">
                          <MapPin size={16} />
                          <span className="text-sm font-medium">{edu.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar size={16} />
                          <span className="text-sm font-medium">{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center md:items-end">
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={20} className="text-indigo-500" />
                      <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                        {edu.cgpa ? 'CGPA' : 'Percentage'}
                      </span>
                    </div>
                    <div className="text-4xl font-black text-indigo-600">
                      {edu.cgpa || edu.percentage}
                    </div>
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

export default Education;
