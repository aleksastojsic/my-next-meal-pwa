import DarkMode from './DarkMode';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div class='absolute inset-0'>
      <div className='flex flex-col min-h-screen h-screen overflow-hidden'>
        <div className='w-[96%] max-w-5xl px-[2%] py-0 mx-auto my-0'>
          <div className='navbar bg-base-100'>
            <div className='navbar-start'>
              <div className='dropdown'>
                <label
                  tabIndex={0}
                  className='btn btn-ghost btn-circle text-3xl'
                >
                  🍔
                </label>
                <ul
                  tabIndex={0}
                  className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <a className='link hover: no-underline'>Homepage</a>
                  </li>
                  <li>
                    <a className='link hover: no-underline'>About</a>
                  </li>
                  <li>
                    <a className='link hover: no-underline'>GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='navbar-center'>
              <a className='btn btn-ghost normal-case text-2xl'>Next Meal</a>
            </div>
            <div className='navbar-end'>
              <DarkMode />
            </div>
          </div>
        </div>
        <main className='flex-grow w-[96%] max-w-5xl px-[2%] py-0 mx-auto my-0 overflow-hidden prose'>
          {children}
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
