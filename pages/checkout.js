import Image from 'next/image';
// Redux
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/slices/basketSlice';
// Components
import Header from '../components/Header';
import CheckoutProduct from '../components/CheckoutProduct';

const Checkout = () => {
  const items = useSelector(selectItems);

  return (
    <div className='bg-gray-100'>
        <Header />

        <main className='lg:flex max-w-screen-xl mx-auto'>
          {/* Left */}
          <div className='flex-grow m-5 shadow-sm'>
            <Image src='https://links.papareact.com/ikj' width={1020} height={250} alt='checkout banner' objectFit='contain'/>

            <div className='flex flex-col p-5 space-y-10 bg-white'>
              <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? 'Your basket is empty' : 'Your shopping basket'}</h1>

              {items.map((item, index) => (
                <>
                  <CheckoutProduct 
                    key={index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    rating={item.rating}
                    hasPrime={item.hasPrime}
                  />
                </>
              ))}
            </div>
          </div>
            

          {/* Right */}
          <div>
              
          </div>
        </main>
    </div>
  )
}

export default Checkout