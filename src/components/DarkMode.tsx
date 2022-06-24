import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'tabler-icons-react';

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className='btn btn-ghost btn-circle'
      aria-label='Toggle dark or light mode'
      onClick={
        theme === 'bumblebee'
          ? () => setTheme('coffee')
          : () => setTheme('bumblebee')
      }
    >
      {theme === 'bumblebee' ? (
        <Moon size={32} strokeWidth={2} />
      ) : (
        <Sun size={32} strokeWidth={2} />
      )}
    </button>
  );
};

export default DarkMode;
