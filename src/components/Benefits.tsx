import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const benefitsList = [
  {
    title: "Comprehensive Health Coverage",
    description: "Medical, dental, and vision plans"
  },
  {
    title: "Flexible Work Environment",
    description: "Hybrid and remote work options"
  },
  {
    title: "Generous Paid Time Off",
    description: "Because work-life balance matters"
  },
  {
    title: "Learning & Development",
    description: "Sponsored certifications, training, and mentorship"
  },
  {
    title: "Performance Bonuses",
    description: "Recognizing and rewarding your hard work"
  },
  {
    title: "PF Accounts",
    description: "Provident Fund benefits with matched employer contribution"
  },
  {
    title: "Comp-OFF",
    description: "Extra hours? Earn time back with Comp-Offs!"
  },
  {
    title: "Collaborative Technology",
    description: "Access to cutting-edge tools and tech stack"
  }
];

const Benefits = () => {
  const sectionRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const headerRef = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const cardRefs = benefitsList.map((_, index) => 
    useScrollAnimation<HTMLDivElement>({ 
      delay: 300 + (index * 100),
      direction: index % 2 === 0 ? 'left' : 'right'
    })
  );
  const buttonRef = useScrollAnimation<HTMLDivElement>({ delay: 1200 });

  return (
    <section ref={sectionRef} id="benefits" className="py-16 bg-white section-fade">
      <div className="container mx-auto px-4 py-[40px]">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            🏆 Why Work With Us? — Company Benefits
          </h2>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            We value our people. Here's what you can expect at FinxBridge:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((benefit, index) => (
            <Card 
              key={index} 
              ref={cardRefs[index]}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-secondary-dark">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={buttonRef} className="mt-12 text-center">
          <Button 
            className="bg-primary hover:bg-primary-light text-white" 
            onClick={() => document.getElementById('culture')?.scrollIntoView({
              behavior: 'smooth'
            })}
          >
            Explore Our Culture →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;