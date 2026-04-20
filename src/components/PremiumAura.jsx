import React, { useMemo, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const PremiumAura = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Mouse movement tracking for liquid parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 60, stiffness: 120, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Scroll depth shift
  const scrollYProgress = useTransform(scrollY, [0, 1000], [0, 1]);
  const depthY1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const depthY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const depthY3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 60;
      const y = (clientY / window.innerHeight - 0.5) * 60;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Spec-defined Aurora Lights (Adapted for Murray & Alabaster)
  const auroraLights = [
    { color: '#8B004A', size: 'w-[800px] h-[600px]', initial: { x: '10%', y: '10%' }, duration: 25, delay: 0 },
    { color: '#a61a65', size: 'w-[900px] h-[700px]', initial: { x: '50%', y: '40%' }, duration: 30, delay: 2 },
    { color: '#E7C697', size: 'w-[800px] h-[600px]', initial: { x: '80%', y: '20%' }, duration: 28, delay: 4 },
  ];

  // Spec-defined Light Beams
  const beams = [
    { color: '#8B004A', angle: 45, top: '20%', left: '10%', duration: 40 },
    { color: '#1a1a1a', angle: -45, top: '40%', left: '80%', duration: 45 },
    { color: '#8B004A', angle: 30, top: '70%', left: '30%', duration: 50 },
    { color: '#1a1a1a', angle: 135, top: '10%', left: '70%', duration: 35 },
  ];

  // Spec-defined Particles (Dark dust for light background)
  const particles = useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-[#F2EFE7]" />;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Base Layer + Noise Texture */}
      <div className="absolute inset-0 bg-[#F2EFE7]">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-multiply">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* 2. Futuristic Grid Glow Layer */}
      <motion.div 
        className="absolute inset-0 opacity-[0.08]"
        style={{ y: depthY1 }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #8B004A 1px, transparent 1px), linear-gradient(to bottom, #8B004A 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      {/* 3. Neural Aurora Lights Layer */}
      <motion.div 
        className="absolute inset-0 mix-blend-multiply"
        style={{ x: smoothMouseX, y: smoothMouseY }}
      >
        {auroraLights.map((light, i) => (
          <motion.div
            key={`aurora-${i}`}
            className={`absolute ${light.size} rounded-[100%]`}
            style={{
              backgroundColor: light.color,
              left: light.initial.x,
              top: light.initial.y,
              filter: 'blur(200px)',
              opacity: 0.15,
              y: i % 2 === 0 ? depthY2 : depthY3,
            }}
            animate={{
              x: [0, 80, -60, 0],
              y: [0, -40, 60, 0],
              scale: [1, 1.1, 0.9, 1],
              borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "40% 60% 70% 30%"]
            }}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: light.delay,
            }}
          />
        ))}
      </motion.div>

      {/* 4. Rotating Light Beams Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {beams.map((beam, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute h-[200%] w-[1px] opacity-[0.05]"
            style={{
              backgroundColor: beam.color,
              boxShadow: `0 0 100px 20px ${beam.color}`,
              left: beam.left,
              top: beam.top,
              filter: 'blur(120px)',
              rotate: beam.angle,
            }}
            animate={{
              rotate: [beam.angle, beam.angle + 360],
            }}
            transition={{
              duration: beam.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* 5. Light Dust Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={`particle-${p.id}`}
            className="absolute bg-primary rounded-full opacity-[0.1]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.05, 0.15, 0.05],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PremiumAura;
