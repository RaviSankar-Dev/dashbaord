import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Smartphone, Palette, Cloud, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "AI & Neural Solutions",
    icon: <Cpu className="w-8 h-8" />,
    description: "Developing intelligent, data-driven systems and neural architectures tailored for complex enterprise automation.",
    features: ["Predictive Analytics", "Deep Learning", "Process Automation"]
  },
  {
    title: "Enterprise App Dev",
    icon: <Smartphone className="w-8 h-8" />,
    description: "High-performance iOS and Android applications built for massive scale and seamless user experiences.",
    features: ["Cross-platform Dev", "Real-time Sync", "Edge Performance"]
  },
  {
    title: "Elite UI/UX Design",
    icon: <Palette className="w-8 h-8" />,
    description: "Human-centric design systems that define and elevate brand ecosystems through luxury aesthetics.",
    features: ["Luxury Branding", "User Research", "Interactive Prototyping"]
  },
  {
    title: "Cloud & Cyber Infra",
    icon: <Cloud className="w-8 h-8" />,
    description: "Scalable backend architectures with integrated security protocols and high-availability cloud solutions.",
    features: ["Architecture Design", "Cybersecurity", "Cloud Migration"]
  }
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#F2EFE7]/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="max-w-3xl mb-16 px-4 border-l-4 border-primary">
          <h2 className="text-3xl md:text-5xl font-display font-black text-text uppercase tracking-tight mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-text-muted font-medium">
            We bridge the gap between abstract technical complexity and tangible business impact. 
            Delivering high-performance digital infrastructure for the 2026 standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-primary/10 shadow-xl hover:shadow-primary/20 transition-all duration-500 flex flex-col h-full relative"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              <h3 className="text-xl font-display font-black text-text mb-4 uppercase tracking-tighter">
                {service.title}
              </h3>
              
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow font-medium">
                {service.description}
              </p>

              {/* Minimal Feature List */}
              <ul className="space-y-3 pt-6 border-t border-primary/5">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-xs font-bold text-primary/80 uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative accent */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity">
                <Cpu size={80} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #8E2E2E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </section>
  );
};

export default Services;
