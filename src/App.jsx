import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProductCatalog from './components/ProductCatalog';
import Testimonials from './components/Testimonials';
import LocationFooter from './components/LocationFooter';
import FAB from './components/FAB';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <ProductCatalog />
      <Testimonials />
      <LocationFooter />
      <FAB />
    </div>
  );
}

export default App;
