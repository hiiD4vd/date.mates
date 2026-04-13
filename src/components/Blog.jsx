import React from 'react';
import { Calendar } from 'lucide-react';

const blogPosts = [
  { id: 1, title: 'Rekomendasi Unique Date Ideas di Bandung', date: 'February 5, 2023', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Tips Persiapan Piknik Romantis untuk Pemula', date: 'March 12, 2023', image: 'https://images.unsplash.com/photo-1414441549419-58b9074094a3?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Ide Kejutan Anniversary Pasangan Tersayang', date: 'April 20, 2023', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600&q=80' },
];

const Blog = () => {
  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-darkgrey">Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-[400px]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                <div className="flex items-center text-white/80 text-sm mb-3 font-medium">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-white font-serif leading-snug group-hover:text-peach transition-colors">
                  {post.title}...
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
