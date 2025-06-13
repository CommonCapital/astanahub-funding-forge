
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, DollarSign, Calendar, Target, Zap } from 'lucide-react';

const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    duration: '',
    category: '',
    image: null
  });

  const categories = [
    'DeFi & Finance',
    'Gaming & NFTs',
    'Infrastructure',
    'Social Impact',
    'Innovation',
    'Education'
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Launch Your Campaign
          </h1>
          <p className="text-muted-foreground text-lg">
            Bring your Web3 project to life with the power of decentralized crowdfunding
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="gradient-border p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Target className="mr-3 h-6 w-6 text-blue-400" />
                Campaign Details
              </h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-foreground">Campaign Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter your campaign title"
                    className="mt-2 bg-input border-border"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-foreground">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your project, goals, and how funds will be used..."
                    className="mt-2 min-h-32 bg-input border-border"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="goal" className="text-foreground">Funding Goal (₸)</Label>
                    <Input
                      id="goal"
                      type="number"
                      placeholder="5000000"
                      className="mt-2 bg-input border-border"
                      value={formData.goal}
                      onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration" className="text-foreground">Duration (days)</Label>
                    <Input
                      id="duration"
                      type="number"
                      placeholder="30"
                      className="mt-2 bg-input border-border"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-foreground">Category</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={formData.category === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({...formData, category})}
                        className={formData.category === category ? 
                          "bg-gradient-to-r from-blue-600 to-purple-600" : 
                          "border-border hover:bg-accent"
                        }
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="gradient-border p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Upload className="mr-3 h-6 w-6 text-purple-400" />
                Media & Assets
              </h2>
              
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">Upload Campaign Image</p>
                <p className="text-muted-foreground text-sm">Drag & drop or click to select (JPG, PNG, GIF up to 10MB)</p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="gradient-border p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                Quick Tips
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Clear, compelling titles get 40% more backers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Include detailed roadmap and milestones</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>High-quality visuals increase funding by 60%</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Realistic goals have higher success rates</span>
                </li>
              </ul>
            </Card>

            <Card className="gradient-border p-6">
              <h3 className="text-xl font-semibold mb-4">Campaign Preview</h3>
              <div className="space-y-4">
                <div className="aspect-video bg-input rounded-lg flex items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium">{formData.title || 'Your Campaign Title'}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {formData.description?.substring(0, 100) || 'Your campaign description will appear here...'}
                  </p>
                </div>
                <div className="flex justify-between text-sm">
                  <span>₸{formData.goal || '0'} goal</span>
                  <span>{formData.duration || '0'} days</span>
                </div>
              </div>
            </Card>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 glow-blue">
              <DollarSign className="mr-2 h-5 w-5" />
              Launch Campaign
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
