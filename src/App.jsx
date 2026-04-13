import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DecorationSet from './components/DecorationSet';
import ProductCatalog from './components/ProductCatalog';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import LocationFooter from './components/LocationFooter';
import FAB from './components/FAB';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <DecorationSet />
      <ProductCatalog />
      <Testimonials />
      <Blog />
      <LocationFooter />
      <FAB />
    </div>
  );
}

export default App;
