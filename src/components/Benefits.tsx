import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
const benefitsList = [{
  title: "Comprehensive Health Coverage",
  description: "Medical, dental, and vision plans for you and your family"
}, {
  title: "Flexible Work Environment",
  description: "Hybrid and remote work options"
}, {
  title: "Generous Paid Time Off",
  description: "Because balance matters"
}, {
  title: "Learning & Development",
  description: "Sponsored certifications, training, and mentorship"
}, {
  title: "Performance Bonuses",
  description: "Recognizing and rewarding your hard work"
}, {
  title: "Wellness Programs",
  description: "Yoga, fitness sessions, and mental health support"
}, {
  title: "Employee Stock Options (ESOP)",
  description: "Be part of the success you help build"
}, {
  title: "Collaborative Technology",
  description: "Access to cutting-edge tools and tech stack"
}];
const Benefits = () => {
  return <section id="benefits" className="py-16 bg-white section-fade">
      <div className="container mx-auto px-4 py-[40px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            🏆 Why Work With Us? — Company Benefits
          </h2>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            We value our people. Here's what you can expect at FinxBridge:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((benefit, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-secondary-dark">{benefit.description}</p>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary-light text-white" onClick={() => document.getElementById('culture')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Explore Our Culture →
          </Button>
        </div>
      </div>
    </section>;
};
export default Benefits;