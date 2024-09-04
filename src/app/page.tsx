'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Loader2, ExternalLink } from 'lucide-react';

const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

export interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

export interface MealResponse {
  meals: Meal[];
}

export default function Home() {
  const [recipe, setRecipe] = useState<Meal | null>(null);
  const [diceIcon, setDiceIcon] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomMeal = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data: MealResponse = await response.json();
      setRecipe(data.meals[0]);
      setDiceIcon(Math.floor(Math.random() * 6));
    } catch (error) {
      console.error('Failed to fetch recipe:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const DiceIcon = diceIcons[diceIcon];

  return (
    <div className='mx-auto flex h-full flex-col items-center justify-center space-y-4 p-4'>
      {!recipe && !isLoading && (
        <Image
          src='/recipe-book.svg'
          alt='Food image'
          width={300}
          height={300}
          className='mx-auto h-[70%] max-h-[300px] w-[70%] max-w-[300px] sm:h-[100%] sm:w-[100%]'
        />
      )}
      <h1 className='text-center text-4xl font-extrabold'>Hungry?</h1>
      <h2 className='text-center text-2xl font-bold'>Can&apos;t decide what to eat?</h2>
      <h3 className='text-center text-xl font-semibold'>We got you covered!</h3>
      <div className='flex justify-center'>
        <Button
          onClick={getRandomMeal}
          className='group w-full gap-2 rounded-lg py-6 text-lg font-bold uppercase hover:scale-105 sm:w-72'
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className='size-6 animate-spin' />
          ) : (
            <DiceIcon className='size-6 group-hover:animate-spin' />
          )}
          <div>{isLoading ? 'Loading...' : 'Get a random meal'}</div>
        </Button>
      </div>
      {(isLoading || recipe) && (
        <Card className='min-w-full flex-1 overflow-y-auto bg-muted'>
          <CardHeader>
            <CardTitle className='text-center text-3xl font-bold text-primary'>
              {isLoading ? <Skeleton className='mx-auto h-9 w-3/4' /> : recipe?.strMeal}
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            {isLoading ? (
              <Skeleton className='mx-auto h-[300px] w-[300px] rounded-lg' />
            ) : (
              recipe && (
                <Image
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  width={300}
                  height={300}
                  className='mx-auto rounded-lg shadow-lg'
                />
              )
            )}
            {!isLoading && recipe?.strSource && (
              <div className='text-center'>
                <Link
                  href={recipe.strSource}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row items-center justify-center gap-2 text-primary hover:underline'
                >
                  <span>View Original Recipe</span>
                  <ExternalLink className='size-4 text-muted-foreground' />
                </Link>
              </div>
            )}
            <div>
              <h3 className='mb-2 inline-block border-b-2 border-primary text-xl font-semibold'>Ingredients:</h3>
              <ul className='mt-2 list-inside list-disc space-y-1'>
                {isLoading
                  ? Array.from({ length: 5 }).map((_, i) => (
                      <li key={i}>
                        <Skeleton className='inline-block h-4 w-3/4' />
                      </li>
                    ))
                  : recipe &&
                    Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                      const ingredient = recipe[`strIngredient${i}` as keyof Meal];
                      const measure = recipe[`strMeasure${i}` as keyof Meal];
                      return ingredient && ingredient.trim() ? (
                        <li key={i}>{`${measure && measure.trim() ? measure : ''} ${ingredient}`}</li>
                      ) : null;
                    })}
              </ul>
            </div>
            <div>
              <h3 className='mb-2 inline-block border-b-2 border-primary text-xl font-semibold'>Instructions:</h3>
              {isLoading ? (
                <div className='mt-2 space-y-2'>
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-3/4' />
                </div>
              ) : (
                recipe && <p className='mt-2 whitespace-pre-line'>{recipe.strInstructions}</p>
              )}
            </div>
            {!isLoading && recipe?.strYoutube && (
              <div>
                <h3 className='mb-2 inline-block border-b-2 border-primary text-xl font-semibold'>Watch the Recipe:</h3>
                <div className='mt-2 aspect-video'>
                  <iframe
                    className='h-full w-full rounded-lg'
                    src={`${recipe.strYoutube.replace('watch?v=', 'embed/')}`}
                    title={recipe.strMeal}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
