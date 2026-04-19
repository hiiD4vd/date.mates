import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LocationFooter from './components/LocationFooter';
import FAB from './components/FAB';

// Pages
import Home from './pages/Home';
import PackagesPage from './pages/PackagesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bgLight text-primary font-sans antialiased overflow-x-hidden">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>

        <LocationFooter />
        <FAB />
      </div>
    </Router>
  );
}

export default App;
