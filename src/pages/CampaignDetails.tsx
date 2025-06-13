
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Heart, Share2, Flag, Users, Calendar, Target, TrendingUp, MessageCircle } from 'lucide-react';

const CampaignDetails = () => {
  const [fundingAmount, setFundingAmount] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  const campaign = {
    title: "DeFi Protocol for Central Asia",
    description: "Revolutionary decentralized finance platform built specifically for Kazakhstan's growing crypto ecosystem. Our protocol will enable seamless cross-border payments, yield farming opportunities, and decentralized lending services tailored to the Central Asian market.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
    raised: 2500000,
    goal: 5000000,
    percentage: 50,
    backers: 234,
    daysLeft: 15,
    creator: {
      name: "Aibek Nazarbayev",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      campaigns: 5,
      successRate: 80
    }
  };

  const updates = [
    {
      id: 1,
      title: "Smart Contract Audit Completed",
      content: "We're excited to announce that our smart contracts have successfully passed the security audit...",
      date: "2 days ago",
      likes: 45
    },
    {
      id: 2,
      title: "Partnership with Local Banks",
      content: "Major milestone achieved! We've secured partnerships with three leading banks in Kazakhstan...",
      date: "1 week ago",
      likes: 78
    }
  ];

  const rewards = [
    {
      amount: 10000,
      title: "Early Supporter",
      description: "Get exclusive access to beta testing and a limited edition NFT badge",
      backers: 89,
      delivery: "March 2024"
    },
    {
      amount: 50000,
      title: "Premium Access",
      description: "All previous rewards plus premium features access for 1 year",
      backers: 45,
      delivery: "March 2024"
    },
    {
      amount: 100000,
      title: "Governance Token",
      description: "All previous rewards plus 1000 governance tokens for protocol voting",
      backers: 23,
      delivery: "April 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Campaign Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl md:text-4xl font-bold">{campaign.title}</h1>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "text-red-400 border-red-400" : ""}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                    {isLiked ? 'Liked' : 'Like'}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Creator Info */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={campaign.creator.avatar}
                  alt={campaign.creator.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{campaign.creator.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {campaign.creator.campaigns} campaigns • {campaign.creator.successRate}% success rate
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="mt-6">
                <Card className="gradient-border p-6">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-foreground leading-relaxed">
                      {campaign.description}
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-4">What We're Building</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Cross-border payment infrastructure</li>
                      <li>• Decentralized lending and borrowing</li>
                      <li>• Yield farming opportunities</li>
                      <li>• Mobile-first user experience</li>
                      <li>• Integration with local banking systems</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-4">Roadmap</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="font-medium">Q1 2024 - Smart Contract Development</h4>
                          <p className="text-muted-foreground">Core protocol development and testing</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="font-medium">Q2 2024 - Beta Launch</h4>
                          <p className="text-muted-foreground">Limited beta release for early supporters</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="font-medium">Q3 2024 - Public Launch</h4>
                          <p className="text-muted-foreground">Full public release and marketing campaign</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="updates" className="mt-6">
                <div className="space-y-6">
                  {updates.map((update) => (
                    <Card key={update.id} className="gradient-border p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">{update.title}</h3>
                        <span className="text-sm text-muted-foreground">{update.date}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{update.content}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          {update.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Comment
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="comments" className="mt-6">
                <Card className="gradient-border p-6">
                  <p className="text-center text-muted-foreground">Comments section coming soon...</p>
                </Card>
              </TabsContent>

              <TabsContent value="rewards" className="mt-6">
                <div className="space-y-6">
                  {rewards.map((reward) => (
                    <Card key={reward.amount} className="gradient-border p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">₸{reward.amount.toLocaleString()}</h3>
                          <h4 className="text-lg font-medium text-blue-400">{reward.title}</h4>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>{reward.backers} backers</p>
                          <p>Est. delivery: {reward.delivery}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{reward.description}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Funding Card */}
            <Card className="gradient-border p-6 sticky top-6">
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    ₸{campaign.raised.toLocaleString()}
                  </div>
                  <div className="text-muted-foreground mb-4">
                    raised of ₸{campaign.goal.toLocaleString()} goal
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${campaign.percentage}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold flex items-center justify-center">
                        <Users className="h-5 w-5 mr-1 text-blue-400" />
                        {campaign.backers}
                      </div>
                      <div className="text-sm text-muted-foreground">backers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold flex items-center justify-center">
                        <Calendar className="h-5 w-5 mr-1 text-purple-400" />
                        {campaign.daysLeft}
                      </div>
                      <div className="text-sm text-muted-foreground">days left</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Input
                    type="number"
                    placeholder="Enter amount (₸)"
                    value={fundingAmount}
                    onChange={(e) => setFundingAmount(e.target.value)}
                    className="bg-input border-border"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 glow-blue">
                    <Target className="mr-2 h-5 w-5" />
                    Back This Project
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    You will be charged only if the project reaches its funding goal
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="gradient-border p-6">
              <h3 className="font-semibold mb-4">Project Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span>DeFi & Finance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span>Almaty, Kazakhstan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created</span>
                  <span>15 days ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last update</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
