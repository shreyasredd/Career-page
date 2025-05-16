
import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const categories = [
  "All",
  "Technology & Engineering",
  "Data Science & Analytics",
  "Product & UX Design",
  "Sales, Marketing & Business Ops",
  "Project & Program Management"
];

const jobOpenings = [
  {
    title: "Senior Backend Developer",
    location: "Remote",
    type: "Full-time",
    category: "Technology & Engineering",
    description: "Design and develop scalable API solutions for our fintech platform"
  },
  {
    title: "UX/UI Designer",
    location: "New York",
    type: "Full-time",
    category: "Product & UX Design",
    description: "Create user-centric designs for our digital banking experiences"
  },
  {
    title: "Data Analyst",
    location: "Remote",
    type: "Full-time",
    category: "Data Science & Analytics",
    description: "Analyze financial data and create actionable insights"
  },
  {
    title: "Product Manager",
    location: "San Francisco",
    type: "Full-time",
    category: "Project & Program Management",
    description: "Lead product strategy and roadmap for our financial solutions"
  },
  {
    title: "Marketing Specialist",
    location: "Chicago",
    type: "Full-time",
    category: "Sales, Marketing & Business Ops",
    description: "Drive marketing campaigns for our fintech products"
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    category: "Technology & Engineering",
    description: "Build responsive web interfaces using React and modern frontend technologies"
  },
];

const OpenPositions = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredJobs = selectedCategory === "All" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === selectedCategory);
  
  return (
    <section id="open-positions" className="py-16 bg-white section-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            🚀 We're Hiring — Join Our Team
          </h2>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            We're growing fast and looking for passionate minds to join us.
            Explore our open roles across different departments.
          </p>
        </div>
        
        <div className="mb-8 overflow-x-auto">
          <Tabs defaultValue="All" className="max-w-3xl mx-auto">
            <TabsList className="flex flex-wrap justify-center mb-8 bg-supporting-light p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-between items-start">
                        <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                        <span className="bg-supporting-yellow text-secondary text-xs py-1 px-2 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      
                      <p className="text-secondary-dark mb-4">{job.description}</p>
                      
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-primary-light">
                          {job.location}
                        </span>
                        <Button size="sm" className="bg-secondary hover:bg-primary text-white">
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-12 bg-supporting-light rounded-lg p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-4">
            💡 Didn't Find the Role You're Looking For?
          </h3>
          <p className="text-secondary-dark mb-6">
            We're always looking for talent. Drop your resume at
            <br />
            <a href="mailto:careers@finxbridge.com" className="text-primary font-medium">
              careers@finxbridge.com
            </a>
          </p>
          <Button className="bg-primary hover:bg-primary-light text-white">
            Submit Your Resume →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
