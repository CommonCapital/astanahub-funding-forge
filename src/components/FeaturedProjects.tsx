
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "AI-Powered Kazakh Language Learning App",
    description: "Revolutionary mobile app using artificial intelligence to teach Kazakh language with personalized lessons and cultural immersion.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    raised: "₸125,000",
    goal: "₸200,000",
    percentage: 62,
    backers: 89,
    daysLeft: 23,
    category: "Technology"
  },
  {
    title: "Sustainable Urban Farming Platform",
    description: "Smart hydroponic systems for apartment dwellers in Almaty and Astana, promoting local food production and environmental sustainability.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    raised: "₸78,500",
    goal: "₸150,000",
    percentage: 52,
    backers: 156,
    daysLeft: 18,
    category: "Environment"
  },
  {
    title: "Digital Art Museum for Central Asia",
    description: "Interactive virtual museum showcasing contemporary art from Kazakhstan, Kyrgyzstan, and Uzbekistan with AR exhibitions.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    raised: "₸203,000",
    goal: "₸300,000",
    percentage: 68,
    backers: 234,
    daysLeft: 31,
    category: "Arts & Culture"
  },
  {
    title: "Smart Public Transport App",
    description: "Real-time bus and metro tracking app for major Kazakhstani cities with integrated payment and route optimization.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    raised: "₸156,800",
    goal: "₸250,000",
    percentage: 63,
    backers: 312,
    daysLeft: 15,
    category: "Technology"
  },
  {
    title: "Traditional Crafts E-commerce Platform",
    description: "Online marketplace connecting traditional Kazakh artisans with global customers, preserving cultural heritage through commerce.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
    raised: "₸89,200",
    goal: "₸180,000",
    percentage: 50,
    backers: 167,
    daysLeft: 27,
    category: "Social Impact"
  },
  {
    title: "Youth Coding Bootcamp Initiative",
    description: "Free programming education program for underserved communities across Kazakhstan, focusing on mobile and web development.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    raised: "₸234,500",
    goal: "₸350,000",
    percentage: 67,
    backers: 445,
    daysLeft: 22,
    category: "Education"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover Amazing Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cutting-edge technology to social impact initiatives, explore innovative projects 
            that are shaping the future of Kazakhstan and Central Asia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 hover:bg-blue-50 hover:border-blue-200"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
