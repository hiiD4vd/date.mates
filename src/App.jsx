import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import OurStory from './components/OurStory';
import ProductCatalog from './components/ProductCatalog';
import Testimonials from './components/Testimonials';
import LocationFooter from './components/LocationFooter';
import FAB from './components/FAB';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen bg-bgLight text-primary font-sans antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <HowItWorks />
      <OurStory />
      <ProductCatalog />
      <Testimonials />
      <Blog />
      <LocationFooter />
      <FAB />
    </div>
  );
}

export default App;
