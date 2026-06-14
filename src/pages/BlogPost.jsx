import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post?slug=${slug}`);
        if (!res.ok) {
          if (res.status === 404) throw new Error('Article not found');
          throw new Error('Failed to fetch article');
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-serif text-forest mb-4">Oops!</h1>
        <p className="text-gray-500 mb-8">{error || 'Article not found'}</p>
        <Link to="/" className="px-8 py-3 bg-sage text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-forest transition">
          Back to Home
        </Link>
      </div>
    );
  }

  const { metadata, markdown } = post;

  return (
    <article className="min-h-screen pt-28 pb-20 px-6 max-w-[900px] mx-auto">
      <Link to="/#dateideas" className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-forest transition mb-10">
        &larr; Back to Journal
      </Link>
      
      <header className="mb-12 text-center">
        <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold tracking-widest uppercase text-forest mb-6">
            {metadata.category}
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-forest leading-tight mb-6">
          {metadata.title}
        </h1>
        <p className="text-[12px] font-bold tracking-widest uppercase text-gray-400">
          {metadata.date}
        </p>
      </header>

      {metadata.cover && (
        <div className="w-full aspect-[21/9] md:aspect-[16/6] bg-gray-100 rounded-3xl overflow-hidden mb-16 relative">
          <img 
            src={metadata.cover} 
            alt={metadata.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="prose prose-lg prose-stone max-w-none 
        prose-headings:font-serif prose-headings:text-forest 
        prose-a:text-goldenGlow hover:prose-a:text-forest
        prose-img:rounded-2xl prose-img:shadow-sm">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {typeof markdown === 'string' ? markdown : ''}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;
