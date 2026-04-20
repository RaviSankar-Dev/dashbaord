import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

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
      <div className="flex justify-center items-center py-32">
        <div className="relative w-16 h-16">
           <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
           <div className="absolute inset-2 rounded-full border-b-2 border-text-muted animate-spin-reverse"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text tracking-tight">
            Selected <span className="text-primary">Works</span>
          </h2>
          <div className="hidden sm:flex items-center gap-2 text-sm text-text-muted">
            <span className="w-8 h-[1px] bg-primary/20"></span>
            <span>2026 Collection</span>
          </div>
        </div>

        {projects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center text-center py-32 bg-white rounded-[2rem] border border-primary/10 shadow-2xl"
          >
            <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center text-primary/20 mb-6 border border-primary/10 shadow-inner">
              <Code2 size={40} />
            </div>
            <h3 className="text-2xl font-display font-bold text-text mb-3">Awaiting Transmissions</h3>
            <p className="text-text-muted max-w-md">
              Projects are currently syncing. Please check back shortly for our latest deployments.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 1.11, 0.81, 0.99] }}
                  className="group block"
                >
                  {/* Card Image Wrapper */}
                  <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-white mb-6 border border-primary/10 shadow-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-40 z-10"></div>
                    
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-background">
                        <Code2 size={40} className="text-primary/10" />
                      </div>
                    )}

                    {/* Floating Hover Badge */}
                    <div className="absolute top-4 right-4 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    {/* Category Pill */}
                    {project.category && (
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-primary/80 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="px-2">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-display font-bold text-text group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
