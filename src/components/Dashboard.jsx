import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Rocket, Layers } from 'lucide-react';
const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-background min-h-[600px]">
      <div className="container mx-auto px-4">
        {projects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center text-center p-20 glass-card rounded-3xl"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-6">
              <Layers size={32} />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">Projects Coming Soon</h3>
            <p className="text-slate-500 max-w-md">
              We're currently updating our portfolio. Please check back later to explore our latest works and innovations.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden glass-card rounded-2xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full primary-gradient opacity-10 flex items-center justify-center">
                        <Rocket size={40} className="text-primary opacity-20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-primary">
                        <ExternalLink size={18} />
                      </div>
                    </div>

                  {project.category && (
                    <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-md border border-accent/20">
                      {project.category}
                    </span>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                      <Rocket size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-all group/link"
                  >
                    View Project
                    <div className="w-5 h-5 primary-gradient rounded-full flex items-center justify-center text-white group-hover/link:translate-x-1 transition-transform">
                      <ExternalLink size={10} />
                    </div>
                  </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
