import { Link } from 'react-router-dom';
import { SiNike } from 'react-icons/si';
import {BiSearch} from 'react-icons/bi';
import NikeImage from '../image/nike-image.jpg'



const LandingPage = () => {
  
  
  
  
  
  
    return (
    <div className='absolute top-0 w-full h-screen bg-gradient-to-r from-gray-600 via-gray-80000 to-gray-950 text-gray-300'>
      <nav className='p-3 flex flex-row justify-between'>
      <div>
      <SiNike className='text-5xl text-red-400' />
    </div>
    <div className='flex gap-7'>
        <Link to={'/home'}>
        <div>MEN</div>
        </Link>
        <Link to={'/home'}>
        <div>WOMEN</div>
        </Link>
        <Link to={'/home'}>
        <div>KIDS</div>
        </Link>
        <Link to={'/home'}>
        <div>COLLECTIONS</div>
        </Link>
        <div className="relative flex items-start sm:hidden lg:flex">
  <BiSearch className="absolute text-gray-500 left-3 top-[5px]" />
  <input placeholder="Search" className=" pl-10 bg-gray-900 text-white" />
</div>
    </div>

      </nav>
    
      <div className=' flex p-16 justify-between'>
        <div className='flex flex-col'>
         <div className='text-4xl font-extrabold'>Airmax <span className='text-pink-700'>270</span></div>
         <div className='text-2xl font-normal'>React</div>
         <br/>
         <div className='text-2xl font-bold'>$ 270</div>
        </div>
         <div>
           <img src={NikeImage}></img>
         </div>
      </div>
    </div>
  )
}

export default LandingPage