import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import OurStory from '../components/OurStory';
import ProductCatalog from '../components/ProductCatalog';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <OurStory />
      <ProductCatalog />
      <Testimonials />
      <Blog />
    </>
  );
};

export default Home;
