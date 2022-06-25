import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      enableSystem={true}
      defaultTheme='system'
      value={{ light: 'bumblebee', dark: 'coffee' }}
    >
      <Head>
        <meta charSet='utf-8' />
        {/* <meta name='viewport' content='width=device-width, initial-scale=1.0' /> */}
        {/* PWA version below */}
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
        <meta
          name='description'
          content='Generate a random recipe for your next meal'
        />
        <title>Next Meal</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
