'use client';

import * as React from 'react';
import {
  IconCamera,
  IconChartBar,
  IconCreditCard,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard,
    },
    {
      title: 'Lifecycle',
      url: '#',
      icon: IconListDetails,
      disabled: true,
    },
    {
      title: 'Analytics',
      url: '#',
      icon: IconChartBar,
      disabled: true,
    },
    {
      title: 'Projects',
      url: '#',
      icon: IconFolder,
      disabled: true,
    },
    {
      title: 'Team',
      url: '#',
      icon: IconUsers,
      disabled: true,
    },
  ],
  navSecondary: [
    {
      title: 'Billing',
      url: '/dashboard/billing',
      icon: IconCreditCard,
    },
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
      disabled: true,
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp,
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
        />
      </SidebarFooter>
    </Sidebar>
  );
}
