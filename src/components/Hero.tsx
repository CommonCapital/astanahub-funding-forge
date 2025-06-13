
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Fund the future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  innovation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                AstanaHub Funding connects visionary creators with passionate backers to bring 
                groundbreaking projects to life in Kazakhstan and beyond.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8">
                Explore Projects
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <PlayCircle className="h-5 w-5 mr-2" />
                How it works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-1" />
                  <span className="text-2xl font-bold text-foreground">₸2.5M</span>
                </div>
                <p className="text-sm text-muted-foreground">Raised</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-1" />
                  <span className="text-2xl font-bold text-foreground">247</span>
                </div>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-purple-600 mr-1" />
                  <span className="text-2xl font-bold text-foreground">1.2K</span>
                </div>
                <p className="text-sm text-muted-foreground">Backers</p>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Project Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-border">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                  alt="Featured project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Smart City IoT Platform
                </h3>
                <p className="text-muted-foreground mb-4">
                  Revolutionizing urban infrastructure with AI-powered sensors
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">₸45,000 raised</span>
                    <span className="text-muted-foreground">75% funded</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">127 backers</span>
                    <span className="text-muted-foreground">12 days left</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
