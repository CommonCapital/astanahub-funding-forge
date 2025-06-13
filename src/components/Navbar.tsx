
import React from 'react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search, Bell, Wallet, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-md bg-card/80">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="text-foreground hover:bg-accent hover:text-accent-foreground" />
            
            {/* Search */}
            <div className="hidden md:flex items-center bg-input rounded-lg px-4 py-2 w-80">
              <Search className="h-4 w-4 text-muted-foreground mr-3" />
              <input
                type="text"
                placeholder="Search campaigns, creators..."
                className="bg-transparent outline-none flex-1 text-sm text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Wallet Connection */}
            <Button variant="outline" size="sm" className="hidden md:flex border-primary/50 hover:bg-primary/10">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Create Campaign Button */}
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <span className="hidden sm:inline">Launch Campaign</span>
              <span className="sm:hidden">Launch</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
