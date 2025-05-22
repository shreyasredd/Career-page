
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Culture from '@/components/Culture';
import Activities from '@/components/Activities';
import Testimonials from '@/components/Testimonials';
import OpenPositions from '@/components/OpenPositions';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections with the section-fade class
    document.querySelectorAll('.section-fade').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Benefits />
        <Culture />
        <Activities />
        <Testimonials />
        <OpenPositions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
