import {useContext} from 'react'
import { Link } from 'react-router-dom';
import { SiNike } from 'react-icons/si';
import { CartContext } from '../context/cartContext';
const Header = () => {

const {itemAmount} = useContext(CartContext)

  return (
    <div className='flex justify-around border-b py-4 items-center'>
      {/* Icon */}
      <Link to={'/'}>
     <SiNike className='text-4xl '/>
     </Link>
    <div className='flex lg:gap-10 md: sm:hidden md:flex gap-5'>
      <Link to={'/home'}>
      <div className='hover:cursor-pointer'>MAN</div>
      </Link>
      <Link to={'/home'}>
      <div className='hover:cursor-pointer'>WOMEN</div>
      </Link>
      <div className='hover:cursor-pointer'>KIDS</div>
      <Link to={'/home'}>
      <div className='hover:cursor-pointer'>COLLECTIONS</div>
      </Link>
      <div className='hover:cursor-pointer'>CONTACT</div>
    </div>
    <div className='flex lg:gap-10 sm:gap-10'>
      <div className='hover:cursor-pointer'>SEARCH</div>
      {/* cart page link */}
      <Link to={'/cart'}>
      <div  className=' hover:cursor-pointer'>MY CART 
     {itemAmount > 0  && <span className='  rounded-full text-red-400' > {itemAmount}</span> } </div>
      </Link>
    </div>
    </div>
  )
}

export default Header
