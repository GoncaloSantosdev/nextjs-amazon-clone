/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
// Redux
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/slices/basketSlice';
// Hooks
import Image from "next/image";
// Icons
import { StarIcon } from '@heroicons/react/24/solid';

const Product = ({ id, title, price, description, category, image, rating }) => {
  const dispatch = useDispatch();

  const [hasPrime, setHasPrime] = useState();
    
  useEffect(() => setHasPrime(Math.random() < 0.5), []);

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
    };

    dispatch(addToBasket(product));
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
    <div className='relative flex flex-col m-5 items-center bg-white z-30 p-10 text-center'>
        <p className='absolute top-2 right-2 text-sm italic text-gray-400'>{category}</p>

        <Image src={image} alt={title} width={200} height={200} />

        <h4 className='my-3'>{title}</h4>

        <div className='flex'>
            {ratingStars()}
        </div>

        <p className='text-sm my-2 line-clamp-2'>{description}</p>

        <div className='mb-5'>${price}</div>

        {hasPrime && (
            <div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12' src='https://links.papareact.com/fdw' alt="Amazon prime logo" />
                <p className='text-sm text-gray-500'>Free Next Day Delivery</p>
            </div>
        )}
        
            <button className='mt-auto button' onClick={addItemToBasket}>Add to Basket</button>

    </div>
  )
}

export default Product