import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-8 pt-20 md:pt-28 pb-8">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-4 md:gap-6">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-3 md:pb-3"
            >
                <a href="#packages" className="px-5 py-2 border border-gray-300 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-cream transition hover:scale-105">
                    Book Picnic <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </a>
                <a href="#contact" className="px-5 py-2 bg-sage text-white rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-90 transition hover:scale-105 shadow-md">
                    Custom Request <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="flex flex-col items-start md:items-end"
            >
                <h1 className="text-left text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.8] md:leading-[0.75] text-forest mb-4">
                    <span className="font-serif italic relative z-10"><span className="drop-cap">Y</span>our Moment,</span><br/>
                    <span className="font-serif italic inline-block ml-10 md:ml-12">Made Effortless</span>
                </h1>
                <p className="text-[11px] md:text-[13px] text-mutedGrey max-w-[320px] text-left md:text-right leading-relaxed font-medium">
                    Premium aesthetic picnic setups and equipment rentals for your unforgettable outdoor dates and special occasions.
                </p>
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[400px] md:h-[550px] bg-gray-200 rounded-[2.5rem] overflow-hidden group"
        >
            <img src="/assets/images/4909310C-7E40-4B4B-9C58-479CDAD286EB - annisa nanda.jpeg" alt="Aesthetic picnic setup" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>

            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute top-[10%] md:top-1/4 left-6 md:left-[30%] text-white text-sm md:text-base font-light max-w-[200px] md:max-w-[250px] leading-relaxed drop-shadow-lg z-10 transition duration-500 hover:drop-shadow-2xl"
            >
                This is more than an<br/>event — it's date.mates.<br/><br/>
                <span className="md:ml-8">A moment to pause,</span><br/>
                <span className="md:ml-8">listen, and simply be.</span>
            </motion.div>

            <div className="invisible md:visible absolute bottom-10 right-10 flex gap-4 items-end z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="w-[300px] h-auto bg-white/20 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl p-5 text-white relative overflow-hidden transition-transform duration-500 hover:-translate-y-2"
                >
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-sm font-serif italic shadow-black/50 drop-shadow-md mb-1.5">Premium Quality</h4>
                                <div className="flex gap-0.5 text-goldenGlow drop-shadow-md">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/30 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/50 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_5px_#4ade80]"></span>
                                <span className="text-[9px] font-bold tracking-widest uppercase">Available</span>
                            </div>
                        </div>
                        
                        <p className="text-[12px] leading-relaxed opacity-95 drop-shadow-md font-medium italic mb-4">
                            "Flawless setup, beautiful attention to detail. The best outdoor escape ever."
                        </p>
                        
                        <div className="flex items-center justify-between border-t border-white/30 pt-4">
                            <span className="text-[10px] font-bold tracking-widest uppercase opacity-90 drop-shadow-md">Trusted by 1500+ happy customers</span>
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full border border-white bg-gray-200 overflow-hidden"><img src="/assets/images/4909310C-7E40-4B4B-9C58-479CDAD286EB - annisa nanda.jpeg" className="w-full h-full object-cover" alt="avatar"/></div>
                                <div className="w-6 h-6 rounded-full border border-white bg-gray-200 overflow-hidden"><img src="/assets/images/50A6778C-4A33-4B1F-9F2A-B527FB46B680 - annisa nanda.jpeg" className="w-full h-full object-cover" alt="avatar"/></div>
                                <div className="w-6 h-6 rounded-full border border-white bg-dustyRose flex justify-center items-center text-[8px] font-bold text-white shadow-sm">+</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  );
};

export default Hero;
