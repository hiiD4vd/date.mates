import React from 'react';

const testimonials = [
  { id: 1, name: 'Sarah & James', text: 'Absolutely breathtaking! They transformed the park into our own magical world. The aesthetic was everything we dreamed of.', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80' },
  { id: 2, name: 'Nadia F.', text: 'The attention to detail is unmatched. Everything from the cutlery to the ambient lighting was thoughtfully curated.', rating: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
  { id: 3, name: 'Michael T.', text: 'A seamless experience. I just booked it, and they handled everything. Best anniversary surprise I could have given.', rating: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80' }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-darkgrey">What They Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex text-amber-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif italic text-gray-500 leading-relaxed mb-8">"{t.text}"</p>
              </div>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4 border" />
                <span className="font-sans font-bold text-darkgrey text-sm tracking-wide">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
