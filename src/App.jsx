import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import LocationFooter from './components/LocationFooter';
import FAB from './components/FAB';

// Pages
import Home from './pages/Home';
import PackagesPage from './pages/PackagesPage';
import CartDrawer from './components/CartDrawer';
import BannerPreview from './pages/BannerPreview';

function App() {
  // Cek apakah user sedang membuka halaman khusus untuk screenshot banner
  const isBannerRoute = window.location.pathname === '/og-banner';

  if (isBannerRoute) {
    return (
      <Router>
        <Routes>
          <Route path="/og-banner" element={<BannerPreview />} />
        </Routes>
      </Router>
    );
  }

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-bgLight text-primary font-sans antialiased overflow-x-hidden">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<PackagesPage />} />
          </Routes>

          <LocationFooter />
          <FAB />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
