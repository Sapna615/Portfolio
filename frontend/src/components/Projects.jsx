import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Water Intake Tracker',
      description: 'A simple and user-friendly web application designed to monitor daily water intake. It allows users to log water consumption and stay hydrated by tracking their progress throughout the day.',
      tech: ['ReactJS', 'NodeJS','MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/Sapna615/Water-Intake-Tracker',
      date: 'Dec\u2019 25',
      image: '/hy.png',
    },
    {
      title: 'Quiz Based App Game',
      description: 'A responsive React interface for quizzes with question randomization, countdown timers, and automatic score calculation.',
      tech: ['ReactJS', 'NodeJS', 'MongoDB','API'],
      github: 'https://github.com/Sapna615/QuizApp',
      date: 'Nov\u2019 25',
      image: '/quiz.png',
    },
    {
      title: 'Travel and Tourism',
      description: 'An engaging tourism platform with destination discovery features and MySQL database for managing user profiles.',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP'],
      github: 'https://github.com/Sapna615/Tourism',
      date: 'Apr\u2019 25',
      image: 'https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with product management, cart functionality, and payment integration.',
      tech: ['ReactJS', 'NodeJS', 'Express', 'MongoDB'],
      github: 'https://github.com/Sapna615/Ecommerce',
      date: 'Jan\u2019 26',
      image: '/ecommerce.png',
    },
    {
      title: 'AI Personalized Lyric Generator',
      description: 'A simple and user-friendly web application designed to monitor daily water intake. It allows users to log water consumption and stay hydrated by tracking their progress throughout the day.',
      tech: ['Html','CSS','JavaScript'],
      github: 'https://github.com/Sapna615/AI-Personalized-Lyric-generator',
      date: 'Apr\u2019 25',
      image: '/Ai.png',
    },
    {
      title: 'Online Pet Adoption',
      description: 'User-friendly pet adoption interfaces with pet-care modules and donation options.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Sapna615/Adoption',
      date: 'Dec\u2019 23',
      image: '/pet.png',
    },
  ];

  return (
    <section id="projects" className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 leading-none">
              MY <span className="text-indigo-600">PROJECTS</span>
            </h2>
            <div className="w-24 h-2 bg-indigo-600 rounded-full"></div>
          </motion.div>
          <p className="text-slate-500 mt-8 md:mt-0 max-w-sm text-lg font-medium leading-relaxed">
            A collection of engineering projects focused on scalability and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-3d group flex flex-col h-full"
            >
              <div className="aspect-[16/9] bg-slate-50 rounded-t-2xl overflow-hidden relative group-hover:bg-white transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <Code size={50} className="absolute inset-0 m-auto text-slate-200 group-hover:scale-110 group-hover:text-indigo-100 transition-all duration-700 ease-out" style={{display: 'none'}} />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm border border-slate-100">
                  <Calendar size={12} className="text-indigo-500" />
                  <span className="text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                    {project.date}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-slate-900 font-black text-lg mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[9px] uppercase tracking-wider font-bold text-indigo-500 bg-indigo-50/50 px-2 py-1 rounded border border-indigo-100/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-3 border-t border-slate-50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
