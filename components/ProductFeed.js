/* eslint-disable @next/next/no-img-element */
// Components
import Product from "./Product";

const ProductFeed = ({ products }) => {
  console.log(products);

  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
        {products.slice(0,4).map(({ id, title, price, description, category, image, rating }) => (
            <>
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating}
                />
            </>
        ))}

        <img className='md:col-span-full' src='https://links.papareact.com/dyz' alt="" />

        <div className='md:col-span-2'>
        {products.slice(8,9).map(({ id, title, price, description, category, image, rating }) => (
            <>
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating}
                />
            </>
        ))}
        </div>

        {products.slice(9).map(({ id, title, price, description, category, image, rating }) => (
            <>
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating}
                />
            </>
        ))}
    </div>
  )
}

export default ProductFeed