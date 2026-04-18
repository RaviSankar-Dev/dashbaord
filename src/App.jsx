import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
