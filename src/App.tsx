/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  ShieldCheck, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Award,
  ChevronRight,
  Send,
  Menu,
  X,
  Download,
  Umbrella,
  Sprout,
  Users
} from 'lucide-react';
import { PORTFOLIO_DATA } from './constants';
import profileImg from './profile.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-teal-primary tracking-tighter">
          GG<span className="text-gray-400">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-600 hover:text-teal-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={PORTFOLIO_DATA.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 bg-teal-primary text-white rounded-full text-sm font-medium hover:bg-teal-secondary transition-all shadow-md hover:shadow-lg flex items-center space-x-2"
          >
            <ExternalLink size={14} />
            <span>View Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-600"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={PORTFOLIO_DATA.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 bg-teal-primary text-white rounded-xl font-medium flex items-center justify-center space-x-2"
              >
                <ExternalLink size={18} />
                <span>View Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-light">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-primary/5 -skew-x-12 transform translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-primary/10 text-teal-primary text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} />
            <span>Information Security Student</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Hi, I'm <span className="text-teal-primary">{PORTFOLIO_DATA.name}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            {PORTFOLIO_DATA.objective}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-teal-primary text-white rounded-xl font-semibold shadow-lg shadow-teal-primary/20 hover:bg-teal-secondary transition-all flex items-center space-x-2">
              <span>Get in Touch</span>
              <ChevronRight size={18} />
            </a>
            <div className="flex items-center space-x-4 ml-2">
              <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 text-gray-400 hover:text-teal-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={PORTFOLIO_DATA.github} target="_blank" rel="noopener noreferrer" className="p-3 text-gray-400 hover:text-teal-primary transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-white border-8 border-white">
            <img 
              src={profileImg} 
              alt="Profile" 
              className="w-full h-full object-contain transition-all duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/tech/800/800";
              }}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-primary/20 rounded-2xl -z-10 animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-teal-primary/30 rounded-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
    {subtitle && <p className="text-teal-primary font-medium">{subtitle}</p>}
    <div className="w-12 h-1 bg-teal-primary mt-4 rounded-full" />
  </div>
);

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic Background" />
        <div className="grid gap-8">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-primary/10 text-teal-primary rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                  <p className="text-teal-primary font-medium">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.location}</p>
                </div>
              </div>
              <div className="md:text-right">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full mb-2">
                  {edu.period}
                </span>
                <p className="text-lg font-bold text-teal-primary">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    { name: 'Programming', skills: PORTFOLIO_DATA.skills.languages, icon: <Code2 size={20} /> },
    { name: 'Tools & Security', skills: PORTFOLIO_DATA.skills.tools, icon: <ShieldCheck size={20} /> },
    { name: 'Core Coursework', skills: PORTFOLIO_DATA.skills.coursework, icon: <Briefcase size={20} /> },
    { name: 'Interpersonal', skills: PORTFOLIO_DATA.skills.interpersonal, icon: <Award size={20} /> },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Skills" subtitle="Technical & Professional Expertise" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center space-x-3 mb-6 text-teal-primary">
                {cat.icon}
                <h3 className="font-bold text-gray-900">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-lg border border-gray-100 shadow-sm">
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

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Projects" subtitle="Featured Work & Gallery" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass-card overflow-hidden flex flex-col"
              >
              <div className="relative h-48 overflow-hidden">
                <img 
                  key={project.image}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.title.replace(/\s+/g, '')}/800/450`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/40 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/40 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-teal-primary text-sm font-medium">{project.subtitle}</p>
                  </div>
                  {project.title.trim().toLowerCase().includes("umbrella") && (
                    <div className="flex flex-col items-center">
                      <div className="p-2.5 bg-teal-primary text-white rounded-xl shadow-md shadow-teal-primary/20 flex items-center justify-center">
                        <Umbrella size={22} strokeWidth={2.5} />
                      </div>
                      <span className="text-[8px] font-bold text-teal-primary mt-1 uppercase tracking-tighter">Umbrella</span>
                    </div>
                  )}
                  {project.title.trim().toLowerCase().includes("farm") && (
                    <div className="p-2.5 bg-teal-primary text-white rounded-xl shadow-md shadow-teal-primary/20 flex items-center justify-center">
                      <Sprout size={22} strokeWidth={2.5} />
                    </div>
                  )}
                  {project.title.trim().toLowerCase().includes("campus") && (
                    <div className="p-2.5 bg-teal-primary text-white rounded-xl shadow-md shadow-teal-primary/20 flex items-center justify-center">
                      <Users size={22} strokeWidth={2.5} />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      #{tech.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

const CertsAndAchievements = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <SectionHeading title="Certifications" />
          <div className="space-y-4">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="p-2 bg-teal-primary/10 text-teal-primary rounded-lg">
                  <Award size={20} />
                </div>
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading title="Achievements" />
          <div className="space-y-4">
            {PORTFOLIO_DATA.achievements.map((ach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="p-2 bg-teal-primary/10 text-teal-primary rounded-lg mt-0.5">
                  <Trophy size={20} />
                </div>
                <span className="text-sm font-medium text-gray-700">{ach}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Get in Touch" subtitle="Let's Connect" />
            <p className="text-gray-600 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through the form or my social handles.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-primary/10 text-teal-primary rounded-xl flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email</p>
                  <p className="font-bold text-gray-900">{PORTFOLIO_DATA.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-primary/10 text-teal-primary rounded-xl flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Phone</p>
                  <p className="font-bold text-gray-900">{PORTFOLIO_DATA.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 text-gray-400 hover:bg-teal-primary hover:text-white transition-all rounded-xl flex items-center justify-center">
                <Linkedin size={20} />
              </a>
              <a href={PORTFOLIO_DATA.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 text-gray-400 hover:bg-teal-primary hover:text-white transition-all rounded-xl flex items-center justify-center">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-primary/20 focus:border-teal-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-primary/20 focus:border-teal-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-primary/20 focus:border-teal-primary transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all ${isSent ? 'bg-green-500 text-white' : 'bg-teal-primary text-white hover:bg-teal-secondary shadow-lg shadow-teal-primary/20'}`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSent ? (
                  <><span>Message Sent!</span></>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-gray-dark text-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <a href="#" className="text-2xl font-bold text-teal-secondary tracking-tighter">
          GG<span className="text-gray-500">.</span>
        </a>
        <p className="text-gray-400 text-sm mt-2">© 2026 {PORTFOLIO_DATA.name}. All rights reserved.</p>
      </div>
      <div className="flex space-x-6">
        <a href={PORTFOLIO_DATA.linkedin} className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
        <a href={PORTFOLIO_DATA.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
        <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-teal-primary/30 selection:text-teal-primary">
      <Navbar />
      <Hero />
      <div id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                <img 
                  src="./src/achievement.jpg" 
                  alt="Gaurav Gunjan receiving achievement award" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if image isn't uploaded yet
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Years of</p>
                  <p className="text-sm font-bold text-gray-900">Academic Excellence</p>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading title="About Me" subtitle="My Journey" />
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a Computer Science student at Chandigarh University with a keen interest in Information Security and Cybersecurity. I am passionate about building secure systems and staying updated with modern security challenges. In parallel, I have a strong inclination toward Data Structures and Algorithms (DSA) and problem-solving, which helps me develop efficient and optimized solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Beyond academics, I actively participate in hackathons and challenges like the NASA Space Apps Challenge, constantly pushing the boundaries of my technical capabilities and problem-solving skills.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-light rounded-2xl">
                  <p className="text-2xl font-bold text-teal-primary">5+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase mt-1">Projects Completed</p>
                </div>
                <div className="p-4 bg-gray-light rounded-2xl">
                  <p className="text-2xl font-bold text-teal-primary">5+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase mt-1">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Education />
      <Skills />
      <Projects />
      <CertsAndAchievements />
      <Contact />
      <Footer />
    </div>
  );
}
