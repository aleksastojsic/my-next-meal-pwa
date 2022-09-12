import type { NextPage } from 'next';
import Layout from '../components/Layout';

const About: NextPage = () => {
  return (
    <Layout>
      <h1 className='mt-8'>About</h1>
      <div className='pr-3 overflow-y-auto scrollbar-thin scrollbar-thumb-custom-light scrollbar-track-current scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <p>
          Next.js application that generates a random meal recipe using
          TheMealDB API.
        </p>
        <p>
          Fun little project that demonstrates the use of Next.js and
          TypeScript. UI components are written in React and are styled using
          TailwindCSS together with daisyUI used for themes and some predefined
          styles. The data for the recipes is fetched from{' '}
          <a
            href='https://www.themealdb.com/api.php'
            target='_blank'
            rel='noreferrer'
          >
            TheMealDB API
          </a>{' '}
          using a custom fetch hook that is implemented with FetchAPI.
        </p>
        <p>
          Dark mode is achieved using{' '}
          <a
            href='https://www.npmjs.com/package/next-themes'
            target='_blank'
            rel='noopener noreferrer'
          >
            next-themes
          </a>{' '}
          library for switching between light and dark themes. Default system
          preference and FOUC (flash of unstyled content) prevention are
          implemented using the dangerouslySetInnerHTML hack, thanks to this
          blog post:
          <a
            href='https://sreetamdas.com/blog/the-perfect-dark-mode'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-2'
          >
            The Perfect Dark Mode
          </a>
        </p>
        <p>
          The application is a PWA (Progressive Web App). That means it is
          optimized for use on mobile devices, installable on the home screen
          and works offline. Due to still limited support for PWAs, the
          installation prompt is only shown on Google Chrome (Windows and
          Andorid). Solution and workaround for iOS devices (only works on
          Safari) is implemented using the{' '}
          <a
            href='https://www.npmjs.com/package/react-ios-pwa-prompt'
            target='_blank'
            rel='noopener noreferrer'
          >
            react-ios-pwa-prompt
          </a>{' '}
          library.
        </p>
        <p>
          This project is open source and is available on{' '}
          <a
            href='https://github.com/aleksastojsic/my-next-meal-pwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};

export default About;
