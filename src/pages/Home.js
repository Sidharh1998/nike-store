import { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import {FaSpinner} from 'react-icons/fa';
const Home = () => {
  const { update, loading } = useContext(ProductContext);
  //cart contest
  const { addToCart } = useContext(CartContext)
  // filter box open and close
  const [filterState, setFilterState] = useState(false);
  //colour
  const [buttonColor, setButtonColor] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(update);
  const colors = [
    { id: 0, name: 'bg-gray-500' },
    { id: 1, name: 'bg-red-500' },
    { id: 2, name: 'bg-orange-500' },
    { id: 3, name: 'bg-yellow-500' },
    { id: 4, name: 'bg-green-500' },
    { id: 5, name: 'bg-teal-500' },
    { id: 6, name: 'bg-blue-500' },
    { id: 7, name: 'bg-indigo-500' },
    { id: 8, name: 'bg-purple-500' },
    { id: 9, name: 'bg-pink-500' },
    { id: 10, name: 'bg-amber-500' },
    { id: 11, name: 'bg-lime-500' },
    { id: 12, name: 'bg-emerald-500' },
    { id: 13, name: 'bg-cyan-500' },
    { id: 14, name: 'bg-sky-500' }
  ];
 
  useEffect(() => {
  setFilteredProducts(update)
  }, [update])

  //for setting filter color
  const handleClick = (id) => {
    if (id === buttonColor) {
      setFilteredProducts(update);
      setButtonColor(null)
    } else {
      let filteredList = [];
      update?.map((item) => {
        let filteredItem = [];
        filteredItem = item?.colors?.filter((list) => list?.id === id);
        if (filteredItem?.length) {
          filteredList.push(item);
        }
      })
      setFilteredProducts(filteredList);
      setButtonColor(id);
    }
  }


  return (

    <div className='p-8 transition-all'>
      <div className='font-extrabold'>SHOES</div>
      <br></br>
      {/* filter button */}
      <button className={filterState ? ('bg-black text-white px-4 py-1') :
        ('bg-white text-black px-4 py-1 border-2')} onClick={() => setFilterState(!filterState)}>+ Filter</button>
      <div className='flex justify-start '>
        {
          filterState &&
          <div className='border-2 w-48 h-[280px]'>
           
            <div className='py-3 px-2 '>
              <div className='font-light'> Category</div>
              <div className='flex flex-wrap text-xs p-1'>
                <span className='p-1'>Men</span>
                <span className='p-1'>Women</span>
                <span className='p-1'>Boyes</span>
                <span className='p-1'>Girls</span>
                <span className='p-1'>Boys & Girls</span>
                <span className='p-1'>Babys</span>
              </div>
              
              <div className='font-light'> Size</div>
              <div className='flex flex-wrap text-xs p-1'>
                <span className='p-1'>6</span>
                <span className='p-1'>7</span>
                <span className='p-1'>8</span>
                <span className='p-1'>9</span>
                <span className='p-1'>10</span>
                <span className='p-1'>11</span>
              </div>

              <div className='font-light'>Color</div>

              <div className="flex flex-wrap">
                {/* color boxes */}
                {colors.map((color, index) => (
                  <button key={color?.id} onClick={() => handleClick(color?.id)} className={buttonColor === color?.id ? `border-2 border-gray-500 w-3 h-3 m-2 ${color?.name}` : `w-3 h-3 m-2 ${color?.name}`} />
                ))}
              </div>

            </div>
          </div>

        }
        {loading ? (<div className='text-8xl p-24 absolute left-72  animate-spin'><FaSpinner/></div>) :  //conditional loading
          (
            <div className='flex justify-evenly flex-1 flex-wrap'>

              {filteredProducts.length!== 0 && filteredProducts.map((item,index) => (
                <div key={index} className='flex flex-col w-[350px] h-[300px] items-center  mb-3'>
                  {/* image */}
                  <div className='w-[150px] h-[150px] hover:opacity-60 duration-150' >
                    <img className='max-h-[150px]' src={item.image} />
                  </div>
                  <div>
                    <div>{item.name}</div>
                    <div className='text-gray-400'>$ {item.price}</div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    {/* button view */}
                    <Link to={`/product/${item.id}`}>
                    <button className='bg-black text-white p-1 px-8 hover:scale-110 transition duration-75'>View</button>
                    </Link>
                    {/* button cart */}
                    <button onClick={() => { addToCart(item,item.id)}} className='bg-black text-white p-1 px-2 hover:scale-110 transition'>Add To Cart</button>
                  </div>
                </div>
              ))}
            </div>
          )}


      </div>


    </div>
  )
}

export default Home
