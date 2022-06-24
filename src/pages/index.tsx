import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Recipe from '../components/Recipe';
import useFetch from '../hooks/useFetch';

const Home: NextPage = () => {
  const apiUrl = 'https://themealdb.com/api/json/v1/1/random.php';

  const { data, loading, fetchData } = useFetch(apiUrl);

  return (
    <Layout>
      <h1 className='my-1 mt-8'>Hungry?</h1>
      <h2 className='my-1'>Can&apos;t decide what to eat?</h2>
      <h3 className='my-1'>We got you covered!</h3>
      <button
        className='btn btn-primary btn-block md:w-64 my-2 text-lg'
        aria-label='Get a random recipe'
        onClick={fetchData}
      >
        Generate Next Meal
      </button>
      <Recipe data={data} loading={loading} />
    </Layout>
  );
};

export default Home;
