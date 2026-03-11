import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, ExternalLink, CheckCircle2, X } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'sapnarai2005@gmail.com',
      link: 'mailto:sapnarai2005@gmail.com',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sapna-rai',
      link: 'https://www.linkedin.com/in/sapna-rai',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/Sapna615',
      link: 'https://github.com/Sapna615',
    },
    {
      icon: <Phone size={24} />,
      label: 'Mobile',
      value: '+91 9569919257',
      link: 'tel:+919569919257',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const API_URL = 'https://portfolio-backend-hfjd.onrender.com/send-email';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setShowModal(true);
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Something went wrong.');
      }
    } catch (error) {
      alert(error.message || 'Failed to send message. Please try again.');
      console.error('Form Submission Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white border border-white p-12 md:p-16 rounded-[40px] max-w-lg w-full text-center shadow-2xl shadow-indigo-100"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={56} className="text-emerald-500" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
                SUCCESS!
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                Thank you for reaching out. <br /> <span className="text-indigo-600 font-bold">Sapna Rai</span> will get back to you soon.
              </p>
              
              <button 
                onClick={() => setShowModal(false)}
                className="btn-primary w-full py-5 rounded-3xl"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 uppercase">
              LET'S <span className="text-indigo-600 text-5xl md:text-7xl">CONNECT</span>
            </h2>
            <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full mb-10"></div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">Got a project <br /> in mind?</h3>
            <p className="text-slate-500 text-xl leading-relaxed mb-16 font-medium">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-3d p-8 group"
                >
                  <div className="text-indigo-400 mb-6 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-500">
                    {info.icon}
                  </div>
                  <h4 className="text-slate-400 font-black mb-1 uppercase tracking-widest text-[10px]">{info.label}</h4>
                  <p className="text-slate-900 font-black text-xs break-words">{info.value}</p>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="card-3d p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50/50 rounded-bl-full -z-10"></div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-black text-slate-400 ml-2">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-slate-50/50 border border-slate-100 p-5 rounded-2xl text-slate-900 focus:bg-white focus:border-indigo-400 focus:shadow-xl focus:shadow-indigo-50 outline-none transition-all font-bold placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-black text-slate-400 ml-2">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full bg-slate-50/50 border border-slate-100 p-5 rounded-2xl text-slate-900 focus:bg-white focus:border-indigo-400 focus:shadow-xl focus:shadow-indigo-50 outline-none transition-all font-bold placeholder:text-slate-300"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest font-black text-slate-400 ml-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-slate-50/50 border border-slate-100 p-5 rounded-2xl text-slate-900 focus:bg-white focus:border-indigo-400 focus:shadow-xl focus:shadow-indigo-50 outline-none transition-all font-bold placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest font-black text-slate-400 ml-2">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full bg-slate-50/50 border border-slate-100 p-5 rounded-2xl text-slate-900 focus:bg-white focus:border-indigo-400 focus:shadow-xl focus:shadow-indigo-50 outline-none transition-all font-bold placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full py-5 rounded-3xl flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      Send Message 
                      <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
            © 2026 SAPNA RAI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-12">
            <a href="https://github.com/Sapna615" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all text-xs font-black uppercase tracking-widest flex items-center gap-3">
              GitHub <ExternalLink size={14} />
            </a>
            <a href="https://www.linkedin.com/in/sapna-rai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all text-xs font-black uppercase tracking-widest flex items-center gap-3">
              LinkedIn <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
