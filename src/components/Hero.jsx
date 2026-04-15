import React from 'react';

const Hero = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-8 pt-28 md:pt-36 pb-16">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-6">
            <div className="flex gap-3 md:pb-3">
                <a href="#packages" className="px-5 py-2 border border-gray-300 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-gray-50 transition">
                    Book Picnic <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </a>
                <a href="#contact" className="px-5 py-2 bg-primary text-white rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-90 transition">
                    Custom Request <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>
            <div className="flex flex-col items-start md:items-end">
                <h1 className="text-left md:text-right text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-primary mb-5">
                    <span className="font-serif italic"><span className="drop-cap">A</span>day of Sound, Sun,</span><br/>
                    <span className="font-serif italic">and Slow Living</span>
                </h1>
                <p className="text-[11px] md:text-[13px] text-textGray max-w-[320px] text-left md:text-right leading-relaxed font-medium">
                    Premium aesthetic picnic setups and equipment rentals for your unforgettable outdoor dates and special occasions.
                </p>
            </div>
        </div>

        <div className="relative w-full h-[400px] md:h-[550px] bg-gray-200 rounded-[2.5rem] overflow-hidden group">
            <img src="/assets/images/4909310C-7E40-4B4B-9C58-479CDAD286EB - annisa nanda.jpeg" alt="Aesthetic picnic setup" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>

            <div className="absolute top-[10%] md:top-1/4 left-6 md:left-[30%] text-white text-sm md:text-base font-light max-w-[200px] md:max-w-[250px] leading-relaxed drop-shadow-lg z-10 transition duration-500 hover:drop-shadow-2xl">
                This is more than an<br/>event — it's date.mates.<br/><br/>
                <span className="md:ml-8">A moment to pause,</span><br/>
                <span className="md:ml-8">listen, and simply be.</span>
            </div>

            <div className="invisible md:visible absolute bottom-10 right-10 flex gap-4 items-end z-10">
                <div className="w-[300px] h-[180px] bg-white/20 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl p-4 text-white relative overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden shadow-inner">
                                <img src="/assets/images/IMG_1020_jpg.jpg" className="w-full h-full object-cover" alt="Album Cover"/>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold shadow-black/50 drop-shadow-md">Sunday Morning</h4>
                                <p className="text-[10px] opacity-90 drop-shadow-md">date.mates playlist</p>
                            </div>
                        </div>
                        <div className="w-full bg-white/40 h-1.5 rounded-full mb-4 overflow-hidden">
                            <div className="w-1/3 bg-white h-full rounded-full relative shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-4">
                            <svg className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition" fill="currentColor" viewBox="0 0 24 24"><path d="M11 17l-5-5 5-5v10zm2-10v10l5-5-5-5z"/></svg>
                            <div className="w-10 h-10 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/60 transition cursor-pointer shadow-md">
                                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                            <svg className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition" fill="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5-5 5V7zM11 17V7l-5 5 5 5z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
