import { useContext } from "react"
import { CartContext } from "../context/cartContext"


const Cart = () => {

  const { cart, itemAmount,increaseAmount,decreaseAmount,total,clearCart } = useContext(CartContext)




  return (
    <div className=' p-8'>
      <div className="flex justify-between font-extrabold">
        {/* cart quantity */}
      <div className="font-extrabold ">SHOPPING BAG ({itemAmount})     
       <button onClick={()=>clearCart()} className="font-normal bg-black text-white px-2 mx-2">Clear Cart</button>
</div>
      {/* total amount */}
      <div>TOTAL : $ {total} 
      <button className="font-normal bg-black text-white px-2 mx-2">Check Out</button>
       </div>
      </div>
      <div className='flex justify-evenly  flex-wrap '>

        {cart.map((item, index) => (
          <div key={index} className='flex flex-col w-[200px] h-[300px] items-center  mb-3'>
            {/* image */}
            <div className='w-[150px] h-[150px] hover:opacity-60 duration-150' >
              <img className='max-h-[150px]' src={item.image} />
            </div>
            <div>
              <div>{cart.name}</div>
              <div className='text-gray-400'>$ {item.price}</div>
            </div>
            <div>
              <div className='flex-row border-2 p-1  '>
                {/* increase amount */}
                <button onClick={()=>increaseAmount(item.id)} className='px-3'>+</button>
               {/* quantity */}
                <span className='px-3'>{item.amount}</span>
                {/* decrase amount */}
                <button onClick={() =>decreaseAmount(item.id)}  className='px-3' >-</button>
              </div>
              <div>${item.price*item.amount}</div>
            </div>



          </div>
        ))}
      </div>



    </div>

  )
}

export default Cart
