/* eslint-disable react/no-unescaped-entities */
// Redux
import { useSelector } from "react-redux";
import { selectItems } from "../redux/slices/basketSlice";
// Nextjs Hooks
import Image from "next/image";
// Auth
import { useSession, signIn, signOut } from "next-auth/react";
// Router
import { useRouter } from "next/router";
// Icons
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
        {/* Top Nav */}
        <div className='flex items-center bg-amazon_blue p-3 flex-grow py-2'>
            <div className="mt-2 pr-3 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                    onClick={() => router.push('/')}
                    src='https://links.papareact.com/f90' 
                    alt="Amazon Logo" 
                    width={130} 
                    height={40} 
                    objectFit='contain'
                    className='cursor-pointer'
                />
            </div>

            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'/>
                <MagnifyingGlassIcon className='h-12 p-4'/>
            </div>

            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div className='link' onClick={!session ? signIn : signOut}>
                    <p>
                        {session ? `Hello, ${session.user.name}` : 'Sign In'}
                    </p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p>
                </div>


                <div className='link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>

                <div className='relative link flex items-center' onClick={() => router.push('/checkout')}>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>

                    <ShoppingCartIcon className='h-10'/>
                    <p className='font-extrabold md:text-sm hidden md:inline mt-2'>Basket</p>
                </div>
            </div>
        </div>

        {/* Bottom Nav */}
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
            <p className='link flex items-center'>
                <Bars3Icon className='h-6 mr-1'/>
                All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header