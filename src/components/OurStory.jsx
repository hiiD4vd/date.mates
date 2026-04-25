import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 mb-16" id="ourstory">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Image / Visual */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 relative group h-[500px]"
        >
            <img 
                src="/assets/images/IMG_1029_jpg.jpg" 
                alt="date.mates early days" 
                className="w-full h-full object-cover rounded-[3rem] shadow-sm transition duration-700 group-hover:scale-[1.02]" 
            />
            {/* Soft decorative element */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border border-goldenGlow/50 rounded-[3rem]"></div>
            <div className="absolute top-8 -right-4 w-24 h-24 bg-dustyRose rounded-full flex items-center justify-center rotate-12 shadow-md hover:rotate-0 transition duration-500">
                <span className="font-swash text-white text-2xl drop-shadow-sm">Since '20</span>
            </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-7/12"
        >
            <h2 className="text-4xl md:text-5xl text-forest leading-tight mb-8">
                <span className="font-serif italic"><span className="drop-cap">C</span>reate your dream dates</span> <br/>
                <span className="font-serif italic">come true!</span>
            </h2>
            
            <div className="space-y-6 text-[13.5px] text-mutedGrey leading-relaxed max-w-xl">
                <p>
                    date.mates started in 2020 from a simple idea — to make outdoor moments more special and effortless. From picnic setups to event styling, we help create memorable experiences for your special days ✨
                </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-serif italic text-2xl text-forest mb-6">Why choose date.mates?</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3 text-[12px] font-medium text-mutedGrey bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                        <span className="w-3 h-3 rounded-full bg-goldenGlow"></span> Aesthetic & curated styling
                    </li>
                    <li className="flex items-center gap-3 text-[12px] font-medium text-mutedGrey bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                        <span className="w-3 h-3 rounded-full bg-dustyRose"></span> Hassle-free & setup ready
                    </li>
                    <li className="flex items-center gap-3 text-[12px] font-medium text-mutedGrey bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                        <span className="w-3 h-3 rounded-full bg-sage"></span> Customizable based on needs
                    </li>
                    <li className="flex items-center gap-3 text-[12px] font-medium text-mutedGrey bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                        <span className="w-3 h-3 rounded-full bg-warmPeach"></span> Trusted by 1500+ happy customers
                    </li>
                </ul>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;
