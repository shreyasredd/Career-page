import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Image URLs for the culture section
const cultureImages = [
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80",
];

const cultureValues = [
  "Open-door leadership",
  "Cross-functional learning",
  "Transparent communication",
  "Inclusive and diverse teams"
];

const Culture = () => {
  const sectionRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const contentRef = useScrollAnimation<HTMLDivElement>({ delay: 200, direction: 'left' });
  const imageRefs = cultureImages.map((_, index) => 
    useScrollAnimation<HTMLDivElement>({ 
      delay: 400 + (index * 150),
      direction: 'right',
      distance: 30
    })
  );

  return (
    <section ref={sectionRef} id="culture" className="py-16 bg-supporting-light section-fade">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div ref={contentRef} className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">
              🌟 Our Culture — Where People Thrive
            </h2>
            <p className="text-lg text-secondary-dark mb-6">
              We believe that great ideas come from great teams. Our culture is centered on collaboration, 
              creativity, and ownership. Whether you're working from the office or remotely, 
              you'll feel part of something bigger.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">What sets us apart:</h3>
              <ul className="space-y-3">
                {cultureValues.map((value, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-secondary-dark"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mr-3"></span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            
            <blockquote className="border-l-4 border-accent pl-4 italic text-primary">
              "Culture isn't just a buzzword here — it's how we grow together."
            </blockquote>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {cultureImages.map((img, index) => (
              <div 
                key={index} 
                ref={imageRefs[index]}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <img 
                  src={img} 
                  alt={`Company culture ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
