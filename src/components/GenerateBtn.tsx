import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'tabler-icons-react';

import { useEffect, useState } from 'react';

const GenerateBtn = ({ onClick }: { onClick: () => void }) => {
  const [dice, setDice] = useState(0);

  useEffect(() => {
    setDice(Math.floor(Math.random() * 6) + 1);
  }, [onClick]);

  return (
    <button
      className='group btn btn-primary btn-block sm:w-72 my-4 text-lg font-bold hover:scale-105'
      aria-label='Get a random recipe'
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      {/* display a random dice icon, and hover:nimate-spin it */}
      {dice === 1 && (
        <Dice1
          className='group-hover:animate-spin group-active:animate-spin'
          strokeWidth={2.25}
        />
      )}
      {dice === 2 && (
        <Dice2
          className='group-hover:animate-spin group-active:animate-spin'
          strokeWidth={2.25}
        />
      )}
      {dice === 3 && (
        <Dice3
          className='group-hover:animate-spin group-active:animate-spin'
          strokeWidth={2.25}
        />
      )}
      {dice === 4 && (
        <Dice4
          className='group-hover:animate-spin group-active:animate-spin'
          strokeWidth={2.25}
        />
      )}
      {dice === 5 && (
        <Dice5 className='group-hover:animate-spin group-active:animate-spin' />
      )}
      {dice === 6 && (
        <Dice6 className='group-hover:animate-spin group-active:animate-spin' />
      )}

      <span className='pl-2'>Get a random meal</span>
    </button>
  );
};

export default GenerateBtn;
