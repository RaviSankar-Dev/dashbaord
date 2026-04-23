import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import DigitalMarketing from './components/DigitalMarketing';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text selection:bg-primary/20 selection:text-primary">
      <Header onHome={() => setCurrentView('home')} />
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero onDigitalMarketing={() => setCurrentView('marketing')} />
            <Services />
            <Dashboard />
          </>
        ) : (
          <DigitalMarketing onBack={() => setCurrentView('home')} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
