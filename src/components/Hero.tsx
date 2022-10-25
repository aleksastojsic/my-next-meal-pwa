import Image from 'next/image';

const Hero = ({ isData }: { isData: boolean }) => {
  return (
    <>
      {isData ? (
        <div></div>
      ) : (
        <Image
          src='/recipe-book.svg'
          alt='Recipe Book'
          width={300}
          height={300}
          // fit on iphone se/5s, smaller screens than scale down
          className='w-[75%] h-[75%] sm:w-[100%] sm:h-[100%] max-w-[300px] max-h-[300px] mx-auto'
        />
      )}
      <h1 className='my-1'>Hungry?</h1>
      <h2 className='my-1'>Can&apos;t decide what to eat?</h2>
      <h3 className='my-1'>We got you covered!</h3>
    </>
  );
};

export default Hero;
