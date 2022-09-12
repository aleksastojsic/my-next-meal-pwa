import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRightCircle } from 'tabler-icons-react';

const Recipe = ({ ...props }) => {
  const { strMeal, strMealThumb, strInstructions, strYoutube, strSource } =
    props.data || {};

  const ytUrl = strYoutube?.replace('watch?v=', 'embed/');

  let ingredients = [] as { ingredient: string; measure: string }[];

  // Object.keys(data).forEach((key) => {
  //   if (data?.[`strIngredient${key}` as keyof typeof data]) {
  //     ingredients.push({
  //       ingredient: data?.[`strIngredient${key}` as keyof typeof data],
  //       measure: data?.[`strMeasure${key}` as keyof typeof data]
  //     });
  //   }
  // });

  // loop through the keys of the data object
  for (let i = 1; i <= 20; i++) {
    if (props.data?.[`strIngredient${i}` as keyof typeof props.data]) {
      ingredients.push({
        ingredient:
          props.data?.[`strIngredient${i}` as keyof typeof props.data],
        measure: props.data?.[`strMeasure${i}` as keyof typeof props.data]
      });
    }
  }

  const renderIngredients = (item: any, index: number) => {
    return (
      <li key={index} className='list-group-item'>
        <span>{item.ingredient} - </span>
        <span>{item.measure}</span>
      </li>
    );
  };

  return (
    <>
      {props.loading ? (
        <>
          <div className='w-24 h-24 mx-auto animate-spin rounded-full border-8 border-secondary border-b-transparent'></div>
        </>
      ) : (
        <>
          <div className='scrollbar-thin scrollbar-thumb-custom-light scrollbar-track-current overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-base-content pl-2 pr-4 mb-0 rounded-lg bg-gradient-to-b from-base-100 to-base-200'>
            {strMeal && strMealThumb && (
              <>
                <h2 className='text-primary my-2 text-center text-4xl capitalize font-extrabold'>
                  {strMeal}
                </h2>
                <div className='flex flex-col items-center my-4'>
                  <Image
                    src={
                      strMealThumb ||
                      'https://themealdb.com/images/media/meals/wqyxwq1557356415.jpg'
                    }
                    alt={strMeal}
                    width={300}
                    height={300}
                    className='rounded-lg'
                  />
                </div>
              </>
            )}
            {strSource && (
              <>
                <div>
                  <h3 className='inline-block underline decoration-4 decoration-primary my-2 mr-2'>
                    Source:
                  </h3>
                  <Link href={strSource}>
                    <a
                      target='_blank'
                      className='inline-block link text-sky-600 link-hover capitalize text-lg'
                    >
                      Click Here
                      <ArrowUpRightCircle
                        className='mb-2 inline-block'
                        size={16}
                        strokeWidth={2}
                      />
                    </a>
                  </Link>
                </div>
              </>
            )}
            {ingredients.length > 0 && (
              <>
                <h3 className='underline decoration-4 decoration-primary my-2'>
                  Ingredients:
                </h3>
                <ul className='list-disc list-inside'>
                  {ingredients.map((item, index) =>
                    renderIngredients(item, index)
                  )}
                </ul>
              </>
            )}
            {strInstructions && (
              <>
                <h3 className='underline decoration-4 decoration-primary my-2'>
                  Instructions
                </h3>
                <p className='my-2'>{strInstructions}</p>
              </>
            )}
            {strYoutube && (
              <>
                <h3 className='underline decoration-4 decoration-primary my-2'>
                  Watch the video
                </h3>
                <iframe
                  title={strMeal}
                  src={ytUrl}
                  frameBorder={0}
                  allowFullScreen
                  className='w-full aspect-video my-2 mx-auto rounded-lg'
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Recipe;
