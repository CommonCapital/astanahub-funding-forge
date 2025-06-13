
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, Zap, Globe, Shield } from 'lucide-react';

const Home = () => {
  const featuredCampaigns = [
    {
      id: 1,
      title: "DeFi Protocol for Central Asia",
      description: "Revolutionary decentralized finance platform built for Kazakhstan's growing crypto ecosystem",
      raised: "₸2,500,000",
      goal: "₸5,000,000",
      percentage: 50,
      backers: 234,
      daysLeft: 15,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Web3 Gaming Platform",
      description: "Next-generation blockchain gaming ecosystem with play-to-earn mechanics",
      raised: "₸1,800,000",
      goal: "₸3,000,000",
      percentage: 60,
      backers: 567,
      daysLeft: 22,
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "NFT Marketplace for Digital Art",
      description: "Curated platform for Kazakh digital artists to mint and trade unique NFTs",
      raised: "₸950,000",
      goal: "₸2,000,000",
      percentage: 47,
      backers: 123,
      daysLeft: 8,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Fund the Future
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The premier Web3 crowdfunding platform for innovative blockchain projects in Kazakhstan and Central Asia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 glow-blue">
                <Zap className="mr-2 h-5 w-5" />
                Explore Projects
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Launch Campaign
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="gradient-border p-6">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">₸15.2M</div>
              <div className="text-muted-foreground">Total Raised</div>
            </Card>
            <Card className="gradient-border p-6">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">342</div>
              <div className="text-muted-foreground">Active Projects</div>
            </Card>
            <Card className="gradient-border p-6">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">5.7K</div>
              <div className="text-muted-foreground">Backers</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Campaigns
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="gradient-border overflow-hidden hover:glow-blue transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{campaign.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>{campaign.raised} raised</span>
                      <span>{campaign.percentage}% funded</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${campaign.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{campaign.backers} backers</span>
                      <span>{campaign.daysLeft} days left</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose AstanaHub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="gradient-border p-8 text-center">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Secure & Transparent</h3>
              <p className="text-muted-foreground">Blockchain-powered transparency with smart contract security</p>
            </Card>
            <Card className="gradient-border p-8 text-center">
              <Globe className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Global Reach</h3>
              <p className="text-muted-foreground">Connect with investors worldwide while staying rooted in Central Asia</p>
            </Card>
            <Card className="gradient-border p-8 text-center">
              <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground">Instant transactions and real-time campaign updates</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
