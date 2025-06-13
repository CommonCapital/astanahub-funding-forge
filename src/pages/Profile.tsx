
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Settings, TrendingUp, Heart, Wallet, Edit3, MapPin, Globe } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('campaigns');

  const userCampaigns = [
    {
      id: 1,
      title: "DeFi Protocol for Central Asia",
      status: "Active",
      raised: "₸2,500,000",
      goal: "₸5,000,000",
      percentage: 50,
      backers: 234,
      daysLeft: 15
    },
    {
      id: 2,
      title: "Web3 Education Platform",
      status: "Completed",
      raised: "₸1,200,000",
      goal: "₸1,000,000",
      percentage: 120,
      backers: 89,
      daysLeft: 0
    }
  ];

  const backedCampaigns = [
    {
      id: 3,
      title: "NFT Marketplace for Digital Art",
      amount: "₸50,000",
      status: "Active",
      percentage: 67
    },
    {
      id: 4,
      title: "Blockchain Gaming Platform",
      amount: "₸25,000",
      status: "Completed",
      percentage: 100
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Profile Header */}
        <Card className="gradient-border p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0">
                <Edit3 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Aibek Nazarbayev</h1>
                  <p className="text-muted-foreground mb-2">Web3 Entrepreneur & Blockchain Developer</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Almaty, Kazakhstan
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      aibek.dev
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
              
              <p className="text-foreground mb-4">
                Passionate about building decentralized solutions for Central Asia. 
                5+ years in blockchain development, focused on DeFi and Web3 infrastructure.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">5</div>
                  <div className="text-sm text-muted-foreground">Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">₸8.2M</div>
                  <div className="text-sm text-muted-foreground">Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">12</div>
                  <div className="text-sm text-muted-foreground">Backed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">847</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="campaigns" className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" />
              My Campaigns
            </TabsTrigger>
            <TabsTrigger value="backed" className="flex items-center">
              <Heart className="mr-2 h-4 w-4" />
              Backed Projects
            </TabsTrigger>
            <TabsTrigger value="wallet" className="flex items-center">
              <Wallet className="mr-2 h-4 w-4" />
              Wallet
            </TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Your Campaigns</h2>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                Create New Campaign
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {userCampaigns.map((campaign) => (
                <Card key={campaign.id} className="gradient-border p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{campaign.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>{campaign.raised} raised</span>
                      <span>{campaign.percentage}% funded</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${Math.min(campaign.percentage, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{campaign.backers} backers</span>
                      <span>{campaign.daysLeft > 0 ? `${campaign.daysLeft} days left` : 'Completed'}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backed" className="space-y-6">
            <h2 className="text-2xl font-semibold">Projects You've Backed</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {backedCampaigns.map((campaign) => (
                <Card key={campaign.id} className="gradient-border p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{campaign.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Your contribution: {campaign.amount}</span>
                      <span>{campaign.percentage}% funded</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${Math.min(campaign.percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <h2 className="text-2xl font-semibold">Wallet & Transactions</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="gradient-border p-6">
                <h3 className="text-xl font-semibold mb-4">Wallet Balance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>KZT Balance</span>
                    <span className="text-2xl font-bold">₸125,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ETH Balance</span>
                    <span className="text-2xl font-bold">2.45 ETH</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    Top Up Wallet
                  </Button>
                </div>
              </Card>
              
              <Card className="gradient-border p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <div>
                      <p className="font-medium">Backed NFT Marketplace</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                    <span className="text-red-400">-₸50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <div>
                      <p className="font-medium">Campaign funding received</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                    <span className="text-green-400">+₸75,000</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
