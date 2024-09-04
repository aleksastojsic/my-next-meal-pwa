'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ExternalLink } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className='flex items-center justify-between bg-background p-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon' className='pb-1 text-3xl'>
            🍔
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          <DropdownMenuItem className='cursor-pointer' asChild>
            <Link href='/about'>About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer' asChild>
            <Link
              href='https://github.com/aleksa-codes/my-next-meal-pwa'
              target='_blank'
              rel='noopener noreferrer'
              className='gap-2'
            >
              <span>GitHub</span>
              <ExternalLink className='size-4 text-primary' />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant='ghost'
        className='text-3xl'
        onClick={() => {
          if (pathname === '/') {
            window.location.reload();
          } else {
            router.push('/');
          }
        }}
      >
        Next Meal
      </Button>
      <ModeToggle />
    </nav>
  );
}
