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
import { motion } from 'motion/react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='sticky top-0 z-50 flex items-center justify-between p-4'
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon' className='text-3xl'>
            <span>🍔</span>
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
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
      </motion.div>
      <ModeToggle />
    </motion.nav>
  );
}
