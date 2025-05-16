import React from 'react';
import { Button } from './ui/button';
const Navbar = () => {
  return <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-roboto font-bold text-primary text-2xl">FinxBridge</h1>
          
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-secondary-dark hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-secondary-dark hover:text-primary transition-colors">Solutions</a>
          <a href="#" className="text-secondary-dark hover:text-primary transition-colors">About</a>
          <a href="#" className="text-primary font-medium transition-colors border-b-2 border-primary">Careers</a>
          <a href="#" className="text-secondary-dark hover:text-primary transition-colors">Contact</a>
        </div>
        
        <Button className="bg-primary hover:bg-primary-light text-white">
          Get Started
        </Button>
      </div>
    </nav>;
};
export default Navbar;