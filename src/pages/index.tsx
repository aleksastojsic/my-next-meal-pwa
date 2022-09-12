import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Recipe from '../components/Recipe';
import useFetch from '../hooks/useFetch';
// @ts-ignore
import is from 'is-it-check';
import GenerateBtn from '../components/GenerateBtn';
import { useState, useEffect } from 'react';
const PWAPrompt = dynamic(() => import('react-ios-pwa-prompt' as any), {
  ssr: false
});

const Home: NextPage = () => {
  const apiUrl = 'https://themealdb.com/api/json/v1/1/random.php';

  const { data, loading, fetchData } = useFetch(apiUrl);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Layout>
        <Hero isData={is.not.empty(data)} />
        <GenerateBtn onClick={fetchData} />
        <Recipe data={data} loading={loading} />
      </Layout>
      {is.safari() ? <PWAPrompt /> : null}
    </>
  );
};
export default Home;
