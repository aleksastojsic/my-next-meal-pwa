import type { NextPage } from 'next';
import Layout from '../components/Layout';

const About: NextPage = () => {
  return (
    <Layout>
      <h1 className='mt-8'>About</h1>
      <p>This is the about page.</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, ad a.
        A aspernatur exercitationem recusandae qui molestias mollitia at
        pariatur nesciunt est tempore doloribus, dolorem explicabo magnam
        accusamus cupiditate fuga!
      </p>
    </Layout>
  );
};

export default About;
