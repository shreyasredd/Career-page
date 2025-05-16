import React from 'react';
import { Button } from './ui/button';
const Hero = () => {
  return <section className="bg-gradient-to-b from-supporting-light to-white py-16 md:py-[55px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Join Our Journey — Build the Future with Us
          </h1>
          <p className="text-lg md:text-xl text-secondary-dark mb-8 font-inter">
            At <span className="font-medium">FinxBridge</span>, we're more than just a workplace — 
            we're a thriving community of thinkers, creators, and innovators. 
            Whether you're a tech enthusiast, a problem solver, or someone who's passionate 
            about building impactful solutions, you'll find your place here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary-light text-white" onClick={() => document.getElementById('open-positions')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white" onClick={() => document.getElementById('benefits')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Explore Benefits
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;