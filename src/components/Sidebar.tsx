
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Plus, User, TrendingUp, Wallet, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Create Campaign', url: '/create-campaign', icon: Plus },
  { title: 'Profile', url: '/profile', icon: User },
  { title: 'Campaign Details', url: '/campaign-details', icon: TrendingUp },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar className={`${isCollapsed ? 'w-14' : 'w-64'} bg-sidebar border-r border-sidebar-border`}>
      <SidebarContent>
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AH</span>
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="text-xl font-bold text-sidebar-foreground">AstanaHub</h2>
                <p className="text-sm text-sidebar-foreground/60">Web3 Funding</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                            : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom Section */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <div className="flex items-center space-x-3 px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-lg cursor-pointer">
                  <Wallet className="h-5 w-5" />
                  {!isCollapsed && <span>Wallet</span>}
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <div className="flex items-center space-x-3 px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-lg cursor-pointer">
                  <Settings className="h-5 w-5" />
                  {!isCollapsed && <span>Settings</span>}
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
