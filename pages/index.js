import Head from 'next/head';
// Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon Clone</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Main */}
      <main className='max-w-screen-xl mx-auto'>
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={products} />        
      </main>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products
    }
  }
};
