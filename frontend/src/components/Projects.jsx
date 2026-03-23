import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Quiz Based App Game',
      description: 'A responsive React interface for quizzes with question randomization, countdown timers, and automatic score calculation. Integrated REST APIs for user authentication and leaderboard data.',
      tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'API'],
      github: 'https://github.com/Sapna615/QuizApp', // Replace with your actual repo link
      // link: "#",
      date: 'Jul’ 25 – Aug’ 25',
      image: '/quiz.png', // Add your quiz app image path
    },
    {
      title: 'Travel and Tourism',
      description: 'An engaging tourism platform with destination discovery features, interactive UI elements, and a MySQL database for managing user profiles and booking records.',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP'],
      github: 'https://github.com/Sapna615/Tourism', // Replace with your actual repo link
      // link: '#', 
      date: 'Apr’ 25',
      image: 'https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg', // Add your tourism project image path
    },
    {
      title: 'Online Pet Adoption & Welfare',
      description: 'Designed user-friendly pet adoption interfaces with informational pet-care modules and donation options. Enhanced with JavaScript-based dynamic elements and responsive forms.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Sapna615/Adoption', // Replace with your actual repo link
      date: 'Dec’ 23',
      image: '/pet.png', // Add your pet adoption image path
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card-3d group flex flex-col h-full"
            >
              <div className="aspect-[16/10] bg-slate-50 rounded-t-3xl overflow-hidden relative group-hover:bg-white transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <Code size={70} className="absolute inset-0 m-auto text-slate-200 group-hover:scale-110 group-hover:text-indigo-100 transition-all duration-700 ease-out" style={{display: 'none'}} />
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                  <Calendar size={14} className="text-indigo-500" />
                  <span className="text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                    {project.date}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-slate-900 font-black text-2xl mb-4 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-widest font-black text-indigo-500 bg-indigo-50/50 px-3 py-1.5 rounded-lg border border-indigo-100/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-8 pt-6 border-t border-slate-50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                    <Github size={20} /> Code
                  </a>
                  {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                    <ExternalLink size={20} /> Demo
                  </a> */}
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
