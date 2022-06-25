const GenerateBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className='btn btn-primary btn-block md:w-64 my-2 text-lg'
      aria-label='Get a random recipe'
      onClick={onClick}
    >
      Generate Next Meal
    </button>
  );
};

export default GenerateBtn;
