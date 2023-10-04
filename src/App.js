import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import { Cta } from './components/Cta';


    const App = () => {
  return (
    <div>
          <Navbar />
          <Hero />
          <Features />
          <Testimonials />
          <Cta />
        
         
    </div>
  )
}

export default App;
