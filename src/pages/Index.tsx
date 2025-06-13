
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryFilter />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default Index;
