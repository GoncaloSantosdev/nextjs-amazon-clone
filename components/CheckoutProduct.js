/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
// Redux
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../redux/slices/basketSlice';
// Icons
import { StarIcon } from '@heroicons/react/24/solid';

const CheckoutProduct = ({ id, title, price, description, category, image, rating, hasPrime }) => {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = { 
            id, 
            title, 
            price, 
            description, 
            category, 
            image, 
            rating, 
            hasPrime 
        }

        dispatch(addToBasket(product))
    };

    const removeItemFromBasket = () => { 
        dispatch(removeFromBasket({ id }));
    }

    const ratingStars = () => {
        if(rating.rate >= '1' && rating.rate < '2'){
            return <StarIcon className='star-icon'/> 
          } else if (rating.rate >= '2' && rating.rate < '3') {
            return (
                <>
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                </>
            )
          } else if (rating.rate >= '3' && rating.rate < '4') {
            return (
                <>
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                </>
            )
          } else if (rating.rate >= '4' && rating.rate < '5') {
            return (
                <>
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                </>
            )
          } else if (rating.rate === '5') {
            return (
                <>
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                    <StarIcon className='star-icon'/> 
                </>
            )
          }
      }

  return (
    <div className='grid grid-cols-5'>
        <Image src={image} height={200} width={200} objectFit='contain' alt='Product'/>

        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {ratingStars()}
            </div>
            <p className='text-sm my-2 line-clamp-3'>{description}</p>
            <h3>${price}</h3>

            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <img 
                        loading='lazy'
                        className='w-12'
                        src="https://links.papareact.com/fdw" 
                        alt="Prime"
                    />
                    <p>Free Next Day Delivery!</p>
                </div>
            )}
        </div>
        <div className='flex flex-col space-y-2 my-2 justify-end'>
            <button className="button mt-auto" onClick={addItemToBasket}>Add To Basket</button>
            <button className="button mt-auto" onClick={removeItemFromBasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct