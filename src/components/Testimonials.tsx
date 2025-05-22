import React from 'react';
import { Card, CardContent } from './ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Working here has been a career-defining experience. The support from mentors and opportunities to lead projects have helped me grow tremendously.",
    name: "Arjun.",
    title: "Data Scientist"
  },
  {
    quote: "It's the people that make the difference. I feel valued, challenged, and empowered every single day.",
    name: "Shreyas.",
    title: "Business Analyst"
  },
  {
    quote: "This is a place where ideas turn into reality. The leadership truly listens.",
    name: "Akhil.",
    title: "Product Manager"
  }
];

const Testimonials = () => {
  const sectionRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const headerRef = useScrollAnimation<HTMLDivElement>({ delay: 200 });
  const testimonialRefs = testimonials.map((_, index) => 
    useScrollAnimation<HTMLDivElement>({ 
      delay: 400 + (index * 200),
      direction: index % 2 === 0 ? 'left' : 'right',
      distance: 30
    })
  );

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 bg-supporting-light section-fade">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            💬 Employee Testimonials
          </h2>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            Hear from the people who make FinxBridge an amazing place to work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              ref={testimonialRefs[index]}
              className="bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="text-4xl text-accent mb-4">"</div>
                <p className="text-secondary-dark mb-4 italic">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-primary">– {testimonial.name}</p>
                  <p className="text-sm text-secondary-dark">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
