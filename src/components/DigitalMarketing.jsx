import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Megaphone, BarChart3, Globe, Target, Share2, Zap, ArrowRight, MessageSquare, TrendingUp, Users, Award, ShieldCheck, ArrowLeft } from 'lucide-react';

const DigitalMarketing = ({ onBack }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacityParallax = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

    const services = [
        {
            title: "Social Media Strategy",
            description: "High-impact social campaigns that drive engagement and build brand loyalty across all platforms.",
            icon: <Share2 className="w-8 h-8" />,
            gradient: "from-blue-600 to-indigo-600",
            stats: "2.4M+ Reach"
        },
        {
            title: "SEO Optimization",
            description: "Strategic search engine optimization to place your brand at the top of search results.",
            icon: <Globe className="w-8 h-8" />,
            gradient: "from-emerald-500 to-teal-600",
            stats: "85% Growth"
        },
        {
            title: "Performance Ads",
            description: "Data-driven advertising campaigns (Meta, Google, LinkedIn) designed for maximum ROI.",
            icon: <Target className="w-8 h-8" />,
            gradient: "from-orange-500 to-rose-600",
            stats: "5.2x ROI"
        },
        {
            title: "Content Marketing",
            description: "Compelling storytelling and high-quality content production that converts followers into customers.",
            icon: <Megaphone className="w-8 h-8" />,
            gradient: "from-purple-500 to-violet-600",
            stats: "10k+ Leads"
        },
        {
            title: "Data Analytics",
            description: "Deep-dive performance tracking and market intelligence to refine your digital growth.",
            icon: <BarChart3 className="w-8 h-8" />,
            gradient: "from-rose-500 to-pink-600",
            stats: "100% Data-Driven"
        },
        {
            title: "Brand Automation",
            description: "Streamlined marketing workflows and CRM integration for seamless customer journeys.",
            icon: <Zap className="w-8 h-8" />,
            gradient: "from-amber-500 to-yellow-600",
            stats: "40% Time Saved"
        }
    ];

    const stats = [
        { label: "Client Growth", value: "250%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Active Users", value: "1.2M", icon: <Users className="w-5 h-5" /> },
        { label: "Awards Won", value: "12+", icon: <Award className="w-5 h-5" /> },
        { label: "Retention", value: "98%", icon: <ShieldCheck className="w-5 h-5" /> },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-[#F2EFE7] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                        x: [0, -100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px]"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onBack}
                    className="mt-32 mb-8 flex items-center gap-2 text-text-muted hover:text-primary font-bold transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </motion.button>

                {/* Hero Section */}
                <section className="pb-32">
                    <motion.div style={{ opacity: opacityParallax, y: yParallax }} className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-[0.2em] uppercase mb-10"
                        >
                            <Zap className="w-3 h-3 animate-pulse" />
                            Accelerated Marketing 2.0
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-text leading-[0.9] tracking-tighter mb-12"
                        >
                            The New Era of <br />
                            <span className="text-primary italic">Digital Influence.</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl md:text-2xl text-text-muted max-w-3xl leading-relaxed mb-16 font-medium"
                        >
                            We decode market behavior to engineer high-performance marketing ecosystems. 
                            From neural SEO to behavioral performance ads, we don't just find your audience—we captivate them.
                        </motion.p>

                        {/* Stats Bar */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/50 shadow-2xl"
                        >
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-2 text-primary mb-1">
                                        {stat.icon}
                                        <span className="text-3xl font-display font-black text-text">{stat.value}</span>
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* Services Grid */}
                <section className="pb-32">
                    <div className="flex items-end justify-between mb-16 px-4">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-text mb-4">Strategic <span className="text-primary">Capabilities</span></h2>
                            <p className="text-text-muted font-medium">Precision-engineered services to dominate your industry.</p>
                        </div>
                        <div className="hidden md:block h-[1px] flex-grow mx-12 bg-primary/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative"
                            >
                                <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 to-primary/0 rounded-[2.5rem] blur-xl group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative p-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white/80 shadow-xl group-hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-3 overflow-hidden">
                                    {/* Animated background gradient circle */}
                                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-[0.03] group-hover:opacity-[0.08] rounded-full blur-3xl transition-all duration-700 group-hover:scale-150`}></div>
                                    
                                    <div className={`bg-gradient-to-br ${service.gradient} w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-10 shadow-2xl transform transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-text mb-4 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-muted font-medium leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-black/5">
                                        <span className="text-xs font-black uppercase tracking-widest text-primary">{service.stats}</span>
                                        <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Ultra-Premium CTA */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="pb-40"
                >
                    <div className="relative rounded-[4rem] bg-text p-16 md:p-32 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,0,74,0.3),transparent_70%)]"></div>
                        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white mb-10"
                            >
                                <MessageSquare className="w-8 h-8" />
                            </motion.div>
                            <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-[0.9] tracking-tighter">
                                Ready to scale <br /> to your <span className="text-primary italic">Peak?</span>
                            </h2>
                            <p className="text-white/40 text-xl max-w-2xl mx-auto mb-16 font-medium">
                                We are currently accepting 3 new high-growth clients for 2026. 
                                Secure your digital dominance today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                <a 
                                    href="https://wa.me/9346608305"
                                    className="px-12 py-6 bg-primary text-white rounded-full font-black text-lg flex items-center gap-4 hover:scale-110 active:scale-95 transition-all shadow-[0_20px_50px_rgba(139,0,74,0.4)]"
                                >
                                    <span>Start Growth Journey</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <button className="px-10 py-6 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all border border-white/10 backdrop-blur-md">
                                    View Performance Audits
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default DigitalMarketing;
