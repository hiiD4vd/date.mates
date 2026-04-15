import React from 'react';

const testimonials = [
  { id: 1, name: 'Sarah & James', text: 'Absolutely breathtaking! They transformed the park into our own magical world.', rating: 5, avatar: '/assets/images/4909310C-7E40-4B4B-9C58-479CDAD286EB - annisa nanda.jpeg' },
  { id: 2, name: 'Nadia F.', text: 'The attention to detail is unmatched. Everything from the cutlery to the ambient lighting was thoughtfully curated.', rating: 5, avatar: '/assets/images/50A6778C-4A33-4B1F-9F2A-B527FB46B680 - annisa nanda.jpeg' },
  { id: 3, name: 'Michael T.', text: 'A seamless experience. I just booked it, and they handled everything. Best anniversary surprise I could have given.', rating: 5, avatar: '/assets/images/1F42A6DD-11EA-4256-8D99-C57D0DC2F04B.jpg' }
];

const Testimonials = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-8 py-16 text-primary">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <h2 className="font-serif text-[3.5rem] leading-tight mb-2">
                <span className="italic"><span className="drop-cap">W</span>hat They Say</span><br/>
                <span className="italic">Our Moments</span>
            </h2>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-gray-800 transition mb-4">
                View Gallery <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-7 bg-gray-200 rounded-[2.5rem] overflow-hidden relative h-[400px] md:h-full group">
                <img src="/assets/images/1e8e2f2d-fdd6-4588-b0a5-ad6ec83053ea.JPG" alt="Festival moments" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                
                <div className="absolute bottom-0 left-0 w-[90%] md:w-3/4 h-[120px] bg-accentGreen rounded-tr-[3.5rem] flex flex-col justify-center px-10 text-white shadow-[10px_-10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="font-serif text-[22px] md:text-[28px] italic mb-1 drop-shadow-sm leading-tight">"{testimonials[0].text}"</h3>
                    <div className="flex items-center gap-2 mt-2">
                        <img src={testimonials[0].avatar} className="w-6 h-6 rounded-full object-cover border border-white/50" alt={testimonials[0].name} />
                        <p className="text-[11px] opacity-90 drop-shadow-sm font-bold uppercase tracking-wider">— {testimonials[0].name}</p>
                    </div>
                </div>
            </div>
            
            <div className="md:col-span-5 grid grid-rows-none md:grid-rows-2 grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <div className="col-span-1 md:row-span-1 pt-6 md:pr-4 flex flex-col justify-center">
                    <div className="flex text-amber-500 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        ))}
                    </div>
                    <p className="text-[13px] text-textGray font-medium leading-relaxed italic mb-4">
                        "{testimonials[1].text}"
                    </p>
                    <div className="flex items-center gap-2">
                        <img src={testimonials[1].avatar} className="w-8 h-8 rounded-full object-cover" alt={testimonials[1].name} />
                        <p className="text-[11px] text-primary font-bold tracking-wider uppercase">— {testimonials[1].name}</p>
                    </div>
                </div>
                
                <div className="col-span-1 md:col-span-1 row-span-1 md:row-span-2 bg-accentPink rounded-[2.5rem] p-8 text-white relative flex flex-col justify-center overflow-hidden shadow-sm h-[320px] md:h-full transition hover:shadow-lg">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
                    
                    <div className="flex text-white mb-4 drop-shadow-md">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        ))}
                    </div>
                    <h3 className="font-serif text-2xl italic relative z-10 mb-4 drop-shadow-md leading-snug">
                        "{testimonials[2].text}"
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-4 relative z-10">
                        <img src={testimonials[2].avatar} className="w-10 h-10 rounded-full object-cover border-2 border-white/40 shadow-sm" alt={testimonials[2].name} />
                        <p className="text-[11px] font-bold tracking-widest uppercase drop-shadow-md">— {testimonials[2].name}</p>
                    </div>
                    
                    <div className="absolute bottom-6 right-6 w-8 h-8 opacity-90 drop-shadow-md">
                        <svg viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-1 md:row-span-1 bg-gray-200 rounded-[2.5rem] overflow-hidden relative h-[250px] md:h-full group">
                    <img src="/assets/images/228f6c06-96f6-4cfc-b9d3-f2d5eb85da9e.JPG" alt="Picnic basket" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 w-full bg-accentYellow text-white py-3 px-6 text-center shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-10 transition-transform duration-300 group-hover:-translate-y-1">
                        <span className="font-serif italic text-lg drop-shadow-sm">Aesthetic Detail</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
