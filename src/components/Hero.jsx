import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40; // subtle intensity
      const y = (clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Staggered Text Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const fadeUpVars = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // 6 Glowing Orbs configuration
  const orbs = [
    { color: 'bg-indigo-600', size: 'w-[400px] h-[400px]', top: '10%', left: '10%', delay: 0 },
    { color: 'bg-violet-500', size: 'w-[500px] h-[500px]', top: '40%', left: '60%', delay: 2 },
    { color: 'bg-cyan-500', size: 'w-[450px] h-[450px]', top: '60%', left: '20%', delay: 4 },
    { color: 'bg-teal-400', size: 'w-[350px] h-[350px]', top: '20%', left: '80%', delay: 1 },
    { color: 'bg-indigo-500', size: 'w-[300px] h-[300px]', top: '80%', left: '80%', delay: 3 },
    { color: 'bg-cyan-400', size: 'w-[600px] h-[600px]', top: '50%', left: '50%', delay: 5 },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      {/* 1. Dark Ambient Base Layer */}
      <div className="absolute inset-0 bg-slate-950 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/50 to-black z-0 pointer-events-none" />

      {/* 2. Glowing Orbs Layer (Parallax) */}
      <motion.div 
        className="absolute inset-0 z-10 overflow-hidden select-none pointer-events-none"
        style={{ x: smoothX, y: smoothY }}
      >
        <div className="relative w-full h-full">
          {orbs.map((orb, i) => (
            <div 
              key={`orb-wrapper-${i}`}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: orb.top, left: orb.left }}
            >
              <motion.div
                animate={{
                  x: [0, 50, -30, 0],
                  y: [0, -50, 30, 0],
                  scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: orb.delay,
                }}
                className={`rounded-full blur-[80px] opacity-50 ${orb.color} ${orb.size} shadow-[0_0_100px_rgba(139,92,246,0.3)]`}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. Floating Particles Layer */}
      {mounted && (
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 2 + 'px',
                height: Math.random() * 3 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: 0.4,
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, (Math.random() - 0.5) * 60, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}


      {/* 4. Content Layer */}
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-30 text-center flex flex-col items-center"
      >
        
        {/* Animated Pill Component */}
        <motion.div 
          variants={fadeUpVars}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-10 border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-2xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Premium Saas Experience
          </span>
        </motion.div>

        {/* Direct Title Reveal */}
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            variants={fadeUpVars}
            className="text-5xl sm:text-7xl lg:text-[6rem] font-bold text-white font-display leading-[1.1] tracking-tight mb-8"
          >
            Designing the <br className="hidden sm:block" />
            <span className="animate-gradient-shift bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 bg-[size:200%_auto] text-transparent bg-clip-text inline-block pb-2">
              Future of Web.
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeUpVars}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-14"
          >
            A curated showcase of high-performance, aesthetically driven digital experiences 
            built for the 2026 standard. Calm, futuristic, and impressively minimal.
          </motion.p>
        </div>

        {/* Button Animation */}
        <motion.div
           variants={fadeUpVars}
           className="relative group"
        >
          {/* Outer glow layer */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
          
          <button 
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} 
            className="relative px-8 py-4 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 group-hover:border-white/20 group-hover:bg-black/80"
          >
            <span className="font-semibold text-white tracking-wide text-sm">Explore Portfolio</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#94A3B8] uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
           className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
