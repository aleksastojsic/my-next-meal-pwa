'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='p-4 text-center'
    >
      <p>
        © {currentYear} • Made by{' '}
        <Link
          href='https://aleksa.codes'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary underline decoration-wavy underline-offset-4 hover:opacity-80'
        >
          aleksa.codes
        </Link>
      </p>
    </motion.footer>
  );
}
