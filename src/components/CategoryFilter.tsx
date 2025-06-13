
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Lightbulb, Gamepad2, Heart, Leaf, Music } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Projects', icon: null },
  { id: 'technology', name: 'Technology', icon: Smartphone },
  { id: 'design', name: 'Design', icon: Lightbulb },
  { id: 'games', name: 'Games', icon: Gamepad2 },
  { id: 'social', name: 'Social Impact', icon: Heart },
  { id: 'environment', name: 'Environment', icon: Leaf },
  { id: 'arts', name: 'Arts & Music', icon: Music },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="py-8 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`flex items-center space-x-2 ${
                  activeCategory === category.id 
                    ? "bg-gradient-to-r from-blue-600 to-blue-700" 
                    : "hover:bg-blue-50 hover:border-blue-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {IconComponent && <IconComponent className="h-4 w-4" />}
                <span>{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
