export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-background p-4 text-center'>
      <p>
        © {currentYear} • Made by{' '}
        <a href='https://aleksa.codes' target='_blank' rel='noopener noreferrer' className='text-primary underline'>
          aleksa.codes
        </a>
      </p>
    </footer>
  );
}
