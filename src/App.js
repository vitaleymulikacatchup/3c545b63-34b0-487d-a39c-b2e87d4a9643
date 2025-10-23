import React, { useState } from 'react';
import Header from './components/Header';
import WeatherMain from './components/WeatherMain';
import WeatherGrid from './components/WeatherGrid';
import Footer from './components/Footer';
import CookieModal from './components/CookieModal';
import WeatherInformer from './components/WeatherInformer';

function App() {
  const [showCookieModal, setShowCookieModal] = useState(true);

  return (
    <div className="min-h-screen bg-sinoptik-gray">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <WeatherMain />
        <WeatherGrid />
        <WeatherInformer />
      </main>
      <Footer />
      {showCookieModal && (
        <CookieModal onClose={() => setShowCookieModal(false)} />
      )}
    </div>
  );
}

export default App;