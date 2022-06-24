import DarkMode from './DarkMode';
import Link from 'next/link';
import { ArrowUpRightCircle } from 'tabler-icons-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='absolute inset-0'>
      <div className='flex flex-col min-h-screen h-screen overflow-hidden'>
        <div className='w-[96%] max-w-5xl px-[2%] py-0 mx-auto my-0'>
          <div className='navbar bg-base-100'>
            <div className='navbar-start'>
              <div className='dropdown'>
                <button
                  tabIndex={0}
                  className='btn btn-ghost btn-circle text-3xl'
                  aria-haspopup='true'
                  aria-expanded='false'
                  aria-label='Menu'
                >
                  🍔
                </button>
                <ul
                  tabIndex={0}
                  className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <Link href='/'>Homepage</Link>
                  </li>
                  <li>
                    <Link href='/about'>About</Link>
                  </li>
                  <li>
                    <Link href='https://github.com/aleksa-stojsic'>
                      <a target='_blank'>
                        GitHub{' '}
                        <ArrowUpRightCircle
                          className='text-info ml-[-8px] mb-2'
                          size={16}
                          strokeWidth={2}
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='navbar-center'>
              <div className='btn btn-ghost normal-case text-2xl'>
                <Link href='/'>Next Meal</Link>
              </div>
            </div>
            <div className='navbar-end'>
              <DarkMode />
            </div>
          </div>
        </div>
        <main className='flex-grow w-[96%] max-w-5xl px-[2%] py-0 mx-auto my-0 overflow-hidden prose'>
          <div className='flex flex-col h-full'>{children}</div>
        </main>
        <footer className='footer footer-center p-3 bg-base-200'>
          <div>
            <p>
              &copy; {new Date().getFullYear()} • Made with{' '}
              <span role='img' aria-label='computer-coffee'>
                💻 & ☕
              </span>{' '}
              by{' '}
              <a
                href='https://github.com/aleksa-stojsic/next-meal'
                className='link link-accent link-hover'
                target='_blank'
                rel='noreferrer'
              >
                Aleksa Stojsic
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
