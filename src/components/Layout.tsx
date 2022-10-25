import DarkMode from './DarkMode';
import Link from 'next/link';
import { ArrowUpRightCircle } from 'tabler-icons-react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isHome, setIsHome] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsHome(router.pathname === '/');
  }, [router.pathname]);

  return (
    <div className='absolute inset-0'>
      <div className='flex flex-col min-h-screen h-full overflow-hidden'>
        <div className='w-[96%] max-w-3xl px-[2%] py-0 mx-auto my-0'>
          <div className='navbar bg-base-100 px-0'>
            <div className='navbar-start'>
              <div className='dropdown'>
                <label
                  tabIndex={0}
                  className='btn btn-ghost btn-circle text-3xl'
                  aria-label='Menu'
                >
                  🍔
                </label>
                <ul
                  tabIndex={0}
                  className='menu menu-compact dropdown-content mt-2 p-1 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <Link href='/about'>About</Link>
                  </li>
                  <li>
                    <Link href='https://github.com/aleksa-codes' target='_blank'>
                        GitHub{' '}
                        <ArrowUpRightCircle
                          className='text-info ml-[-8px] mb-2'
                          size={16}
                          strokeWidth={2}
                        />
                      
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='navbar-center'>
              {!isHome && (
                <Link href='/'>
                  <span className='btn btn-ghost normal-case text-2xl'>
                    Next Meal
                  </span>
                </Link>
              )}

              {isHome && (
                <div onClick={() => window.location.reload()}>
                  <span className='btn btn-ghost normal-case text-2xl'>
                    Next Meal
                  </span>
                </div>
              )}
            </div>
            <div className='navbar-end'>
              <DarkMode />
            </div>
          </div>
        </div>
        <main className='flex-grow w-[96%] max-w-3xl px-[2%] py-0 mx-auto my-0 overflow-hidden prose'>
          <div className='flex flex-col h-full justify-center items-center'>
            {children}
          </div>
        </main>
        <footer className='footer footer-center p-2 text-sm'>
          <div>
            <p>
              &copy; {new Date().getFullYear()} • Made by{' '}
              {/* <span role='img' aria-label='computer-coffee'>
                💻 & ☕
              </span>{' '}
              by{' '} */}
              <a
                href='https://github.com/aleksa-codes/my-next-meal-pwa'
                className='link link-accent link-hover'
                target='_blank'
                rel='noreferrer'
              >
                aleksa.codes
              </a>
              {/* <p>
                <a
                  href='https://storyset.com/information'
                  target='_blank'
                  rel='noreferrer'
                  className='text-xs link link-hover'
                >
                  illustration by Storyset
                </a>
              </p> */}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
