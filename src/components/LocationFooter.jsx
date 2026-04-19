import React from 'react';
import { motion } from 'framer-motion';

const LocationFooter = () => {
  return (
    <footer className="max-w-[1400px] mx-auto px-8 py-16 mt-10" id="contact">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 bg-gray-100 rounded-3xl overflow-hidden h-[350px] relative border border-gray-200 shadow-sm group"
        >
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311709235512!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1703648000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="date.mates Location Map"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            ></iframe>
            <div className="absolute bottom-6 md:bottom-auto md:top-6 left-6 right-6 md:right-auto bg-white/95 backdrop-blur-md px-6 py-5 rounded-2xl shadow-lg max-w-sm border border-gray-100 pointer-events-none">
                <h5 className="font-serif italic text-2xl text-forest mb-1">Our Base</h5>
                <p className="text-[10px] font-bold tracking-widest text-goldenGlow uppercase mb-3">Visit Us</p>
                <p className="text-[13px] text-mutedGrey leading-relaxed font-medium">Jl. Setiabudi No. 123<br/>Bandung, West Java, Indonesia</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-widest text-forest uppercase">Mon-Sun</span>
                    <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">09:00 - 18:00</span>
                </div>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-200 pb-16"
        >
            <div className="lg:col-span-5">
                <div className="mb-10">
                   <img src="/assets/logo/datemates logo transparent.png" alt="date.mates logo" className="h-[4.5rem] object-contain p-2 bg-sage rounded-xl" />
                </div>
                <h4 className="font-serif text-2xl italic mb-3 text-forest">Look outside for your date</h4>
                <p className="text-[12px] text-mutedGrey mb-8 w-3/4 leading-relaxed font-medium">
                    date.mates creates aesthetic picnics and beautiful setups for your daily escape. Subscribe to our letters for quick updates on new concepts!
                </p>
                
                <div className="flex items-center border border-gray-300 rounded-full p-1 max-w-sm">
                    <input type="email" placeholder="Your Email Address" className="bg-transparent border-none outline-none text-[12px] px-4 w-full placeholder-gray-400 font-medium" />
                    <button className="bg-sage text-white px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-gray-800 transition">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h5 className="font-serif italic text-xl mb-6 text-forest">To The Field</h5>
                    <ul className="space-y-4 text-[11px] font-bold tracking-widest text-forest uppercase">
                        <li><a href="#about" className="hover:text-goldenGlow transition">About Us</a></li>
                        <li><a href="#packages" className="hover:text-goldenGlow transition">Packages</a></li>
                        <li><a href="#" className="hover:text-goldenGlow transition">Gallery</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-serif italic text-xl mb-6 text-forest">For Everyone</h5>
                    <ul className="space-y-4 text-[11px] font-bold tracking-widest text-forest uppercase">
                        <li><a href="#" className="hover:text-goldenGlow transition">Community</a></li>
                        <li><a href="#" className="hover:text-goldenGlow transition">Guide & Safety</a></li>
                        <li><a href="#" className="hover:text-goldenGlow transition">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-serif italic text-xl mb-6 text-forest">Help & Update</h5>
                    <ul className="space-y-4 text-[11px] font-bold tracking-widest text-forest uppercase">
                        <li><a href="#" className="hover:text-goldenGlow transition">Find Us</a></li>
                        <li><a href="#" className="hover:text-goldenGlow transition">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase"
        >
            <p>&copy; {new Date().getFullYear()} DATE.MATES. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4 text-gray-400">
                <a href="https://www.instagram.com/date.mates/" target="_blank" rel="noopener noreferrer" className="hover:text-forest transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                <a href="#" className="hover:text-forest transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                <a href="#" className="hover:text-forest transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
            </div>
        </motion.div>
    </footer>
  );
};

export default LocationFooter;
