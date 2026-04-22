import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-8 py-12" id="howitworks">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8"
        >
            <h2 className="text-[2.75rem] md:text-6xl text-forest leading-[1.1] md:leading-tight">
                <span className="font-serif italic"><span className="drop-cap">P</span>icnic Moments</span> <br/>
                <span className="font-serif italic">in the Open Air</span>
            </h2>
            <div className="max-w-sm text-left">
                <p className="text-[13px] text-mutedGrey mb-6 leading-relaxed">
                    date.mates is a space to slow down and enjoy the simple<br className="hidden md:block"/>
                    things — a beautifully set up picnic, sunlight on your skin,<br className="hidden md:block"/>
                    and gathering with loved ones on warm grass.
                </p>
                <a href="#packages" className="inline-flex items-center gap-2 px-6 py-2.5 bg-sage text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition">
                    See Our Packages <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[400px]">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="w-full md:w-2/3 h-[300px] md:h-full bg-gray-200 rounded-[2.5rem] overflow-hidden relative group"
            >
                <img src="/assets/images/IMG_1053_jpg.jpg" alt="Picnic setup flatlay" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition duration-500">
                    <span className="text-white font-bold tracking-widest text-2xl drop-shadow-lg flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-md"><circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.9"/></svg>
                        date.mates
                    </span>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="w-full md:w-1/3 h-[300px] md:h-full bg-dustyRose rounded-[2.5rem] p-10 flex flex-col justify-between text-white relative overflow-hidden transition hover:shadow-lg"
            >
                <div className="absolute -right-10 -bottom-10 w-64 h-64 border-[40px] border-white/10 rounded-full pointer-events-none"></div>
                <div className="text-[80px] font-serif leading-none mt-4 opacity-80 drop-shadow-sm font-semibold">“</div>
                <h3 className="font-serif text-3xl md:text-4xl italic leading-[1.1] mb-2 md:mb-6 relative z-10 pr-4 md:pr-8 drop-shadow-md">
                    Because the best stage is the earth itself
                </h3>
            </motion.div>
        </div>
        <div className="mt-24 border-t border-gray-200 pt-20">
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center font-serif text-3xl md:text-5xl text-forest italic mb-16"
            >
                <span className="drop-cap">H</span>ow It Works
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-gray-200 z-0"></div>
                
                {/* Step 1 */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="relative z-10 flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
                        <span className="font-swash text-3xl text-forest mt-2">1</span>
                    </div>
                    <h4 className="font-serif text-xl text-forest italic mb-3">Curate Your Moment</h4>
                    <p className="text-[12px] text-mutedGrey leading-relaxed max-w-[250px]">
                        Select your favorite picnic setup, then add board games and extra items to your cart.
                    </p>
                </motion.div>
                
                {/* Step 2 */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="relative z-10 flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
                        <span className="font-swash text-3xl text-forest mt-2">2</span>
                    </div>
                    <h4 className="font-serif text-xl text-forest italic mb-3">Secure Your Booking</h4>
                    <p className="text-[12px] text-mutedGrey leading-relaxed max-w-[250px]">
                        Open your cart, choose your date and duration, and checkout easily via WhatsApp.
                    </p>
                </motion.div>
                
                {/* Step 3 */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="relative z-10 flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mb-6 shadow-md text-white">
                        <span className="font-swash text-3xl mt-2">3</span>
                    </div>
                    <h4 className="font-serif text-xl text-forest italic mb-3">Arrive & Enjoy</h4>
                    <p className="text-[12px] text-mutedGrey leading-relaxed max-w-[250px]">
                        Show up to your beautiful, ready-made stage. We handle the setup, styling, and cleanup.
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default HowItWorks;
