
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Share2, Clock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  raised: string;
  goal: string;
  percentage: number;
  backers: number;
  daysLeft: number;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  raised,
  goal,
  percentage,
  backers,
  daysLeft,
  category,
}) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border overflow-hidden bg-white">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {description}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-foreground">{raised} raised</span>
              <span className="text-muted-foreground">of {goal}</span>
            </div>
            
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{backers} backers</span>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>{daysLeft} days left</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            Back this project
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
