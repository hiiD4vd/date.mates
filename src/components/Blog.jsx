import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="max-w-[1400px] mx-auto px-8 py-20" id="dateideas">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-200 pb-8"
        >
            <div>
                <h2 className="text-[2.75rem] md:text-6xl text-forest leading-[1.1] md:leading-tight">
                    <span className="font-serif italic"><span className="drop-cap">D</span>ate Ideas</span> <br className="hidden md:block"/>
                    <span className="font-serif italic"> & Journal</span>
                </h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-gray-50 transition">
                Read All Entries
            </a>
        </motion.div>

        {loading ? (
            <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest"></div>
            </div>
        ) : articles.length === 0 ? (
            <div className="text-center text-gray-500 italic">No published articles yet. Write one in Notion!</div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <motion.div 
                        key={article.id} 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                        className="group cursor-pointer"
                    >
                        <Link to={`/blog/${article.slug}`}>
                            <div className="w-full h-[280px] bg-gray-100 rounded-[2rem] overflow-hidden mb-6 relative">
                                <img 
                                    src={article.cover} 
                                    alt={article.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold tracking-widest uppercase text-forest">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-3">{article.date}</p>
                                <h3 className="font-serif text-2xl text-forest leading-tight mb-3 group-hover:text-goldenGlow transition-colors duration-300">
                                    {article.title}
                                </h3>
                                <p className="text-[12px] text-mutedGrey leading-relaxed mb-4">
                                    {article.excerpt}
                                </p>
                                <span className="text-[11px] font-bold tracking-widest uppercase text-forest border-b border-forest pb-1 group-hover:border-goldenGlow group-hover:text-goldenGlow transition-all duration-300">
                                    Read Article
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        )}
        
        <div className="mt-10 md:hidden flex justify-center">
             <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-gray-50 transition">
                Read All Entries
            </a>
        </div>
    </section>
  );
};

export default Blog;
