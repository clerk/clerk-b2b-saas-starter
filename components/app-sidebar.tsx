'use client';

import * as React from 'react';
import {
  IconCreditCard,
  IconDashboard,
  IconFolder,
  IconSearch,
  IconUsersGroup,
  IconSettings,
  IconPuzzle,
  IconMessage,
  IconStackFront,
} from '@tabler/icons-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Badge } from 'lucide-react';

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard,
    },

    {
      title: 'Projects',
      url: '/dashboard/projects',
      icon: IconFolder,
    },
    {
      title: 'Teams',
      url: '/dashboard/teams',
      icon: IconUsersGroup,
    },
    {
      title: 'A new feature (Soon)',
      url: '#',
      disabled: true,
      icon: IconStackFront,
    },
  ],
  navSecondary: [
    {
      title: 'Billing',
      url: '/dashboard/billing',
      icon: IconCreditCard,
    },
    {
      title: 'Integrations',
      url: '#',
      icon: IconPuzzle,
      disabled: true,
    },
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
      disabled: true,
    },
    {
      title: 'Chat with support',
      url: '#',
      icon: IconMessage,
      disabled: true,
    },
    {
      title: 'Search',
      url: '#',
      icon: IconSearch,
      disabled: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props} className='pb-10'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <OrganizationSwitcher hidePersonal skipInvitationScreen />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <UserButton
          showName
          // TODO: how to hide user plans?
          appearance={{
            elements: {
              userButtonBox: {
                flexDirection: 'row-reverse',
              },
            },
          }}
          userProfileProps={{
            appearance: {
              elements: {
                navbarButton__billing: {
                  display: 'none',
                },
              },
            },
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
