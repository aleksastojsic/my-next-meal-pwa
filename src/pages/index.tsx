import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const apiUrl = 'https://themealdb.com/api/json/v1/1/random.php';

  const { data, loading, fetchData } = useFetch(apiUrl);

  const { strMeal, strMealThumb, strInstructions, strYoutube } = data || {};

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
    if (data?.[`strIngredient${i}` as keyof typeof data]) {
      ingredients.push({
        ingredient: data?.[`strIngredient${i}` as keyof typeof data],
        measure: data?.[`strMeasure${i}` as keyof typeof data]
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
    <Layout>
      <div className='flex flex-col h-full'>
        <h1 className='my-2 mt-8'>Hungry?</h1>
        <h2 className='my-2'>Can&apos;t decide what to eat?</h2>
        <h3 className='my-2'>We got you covered!</h3>
        <button
          className='btn btn-primary btn-block md:w-64 my-2 text-lg'
          onClick={fetchData}
        >
          Generate Next Meal
        </button>
        <div className='overflow-y-scroll bg-base-300 text-base-content px-2 mb-2 rounded-lg'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {strMeal && strMealThumb && (
                <>
                  <h2 className='my-2 text-center text-3xl'>{strMeal}</h2>
                  <div className='flex flex-col items-center'>
                    <Image
                      src={
                        strMealThumb ||
                        'https://themealdb.com/images/media/meals/wqyxwq1557356415.jpg'
                      }
                      alt={strMeal}
                      width={300}
                      height={300}
                      className='my-2 rounded-lg'
                    />
                  </div>
                </>
              )}

              {ingredients.length > 0 && (
                <>
                  <h3 className='my-2'>Ingredients</h3>
                  <ul className='list-disc list-inside'>
                    {ingredients.map((item, index) =>
                      renderIngredients(item, index)
                    )}
                  </ul>
                </>
              )}
              {strInstructions && (
                <>
                  <h3 className='my-2'>Instructions</h3>
                  <p className='my-2'>{strInstructions}</p>
                </>
              )}
              {strYoutube && (
                <>
                  <h3 className='my-2'>Watch the video</h3>
                  <iframe
                    title={strMeal}
                    src={ytUrl}
                    frameBorder={0}
                    allowFullScreen
                    className='w-full my-2 aspect-video my-2 mx-auto rounded-lg'
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
