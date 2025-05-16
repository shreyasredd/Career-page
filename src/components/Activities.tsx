
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const activities = [
  {
    icon: "🧩",
    title: "Game Days & Competitions",
    description: "Monthly team competitions and game sessions to foster team spirit"
  },
  {
    icon: "🏞️",
    title: "Team Outings, Retreats & Treks",
    description: "Regular offsite activities to relax, bond and recharge"
  },
  {
    icon: "🧁",
    title: "Festival Celebrations & Cultural Events", 
    description: "Celebrating diversity through cultural events and festivals"
  },
  {
    icon: "📣",
    title: "Hackathons & Innovation Days",
    description: "Challenging your creativity and problem-solving skills"
  },
  {
    icon: "📸",
    title: "Fun Fridays & Surprise Appreciation Days",
    description: "Special recognition and fun activities to end the week"
  }
];

const Activities = () => {
  return (
    <section className="py-16 bg-white section-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            🎉 Life at FinxBridge — Moments We Cherish
          </h2>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            We work hard, and we celebrate harder! Our employee engagement activities keep the workplace vibrant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 overflow-hidden border-t-4 border-primary"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">{activity.title}</h3>
                <p className="text-secondary-dark">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-secondary hover:bg-primary text-white"
            onClick={() => document.getElementById('testimonials')?.scrollIntoView({behavior: 'smooth'})}
          >
            View Our Gallery →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
