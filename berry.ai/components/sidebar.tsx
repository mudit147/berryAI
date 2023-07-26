'use client';

import { cn } from '@/lib/utils';
import {
  Code2,
  LayoutDashboard,
  MessageSquare,
  Settings,
} from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const routes = [
  {
    lable: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-orange-500',
  },
  {
    lable: 'Chatbot',
    icon: MessageSquare,
    href: '/Chatbot',
    color: 'text-pink-500',
  },
  {
    lable: 'code',
    icon: Code2,
    href: '/code',
    color: 'text-white-500',
  },
  {
    lable: 'Settings',
    icon: Settings,
    href: '/Settings',
    color: 'text-black',
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-300 text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center pl-3 mb-14"
        >
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1
            className={cn(
              'text-slate-900 font-bold',
              montserrat.className
            )}
          >
            Berry.ai
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-slate-900 group flex p-3 w-full justify-start font-medium hover:bg-slate-900/10 rouded-lg transition"
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn('h-5 w-5 mr-3', route.color)}
                />
                {route.lable}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
