import type { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'About the Next.js application that generates random meal recipes using TheMealDB API.',
};

const Page = () => {
  return (
    <div className='container h-full overflow-y-auto'>
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-lg leading-relaxed'>
            Welcome to Next.js application that generates random meal recipes using TheMealDB API. This fun project
            showcases the power of Next.js 14 with the App Router, React, and TypeScript, focusing on clean and
            responsive UI components built with Shadcn UI and styled using Tailwind CSS.
          </p>
          <p className='text-lg leading-relaxed'>
            The recipe data is fetched from{' '}
            <Link
              href='https://www.themealdb.com/api.php'
              target='_blank'
              rel='noreferrer'
              className='text-primary hover:underline'
            >
              TheMealDB API
            </Link>{' '}
            using the native fetch API.
          </p>
          <p className='text-lg leading-relaxed'>
            Dark mode is implemented using the{' '}
            <Link
              href='https://www.npmjs.com/package/next-themes'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline'
            >
              next-themes
            </Link>{' '}
            library, enabling seamless switching between light and dark themes.
          </p>
          <p className='text-lg leading-relaxed'>
            This project is open-source and available on{' '}
            <Link
              href='https://github.com/aleksa-codes/my-next-meal-pwa'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline'
            >
              GitHub
            </Link>
            . Feel free to explore the code, contribute, or use it as inspiration for your own projects!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
