import { useContext } from "react"
//import params
import { useParams } from "react-router-dom"
//import productContext
import { ProductContext } from "../context/ProductContext"
//import Cart
import { CartContext } from "../context/cartContext"





const ProductDetail = () => {

//get id from url
const {id} =useParams()
//get all product
const {update} = useContext(ProductContext)
//add to cart
const {addToCart} = useContext(CartContext)

//get product based on url
const product = update.find(item => {
  return item.id === parseInt(id);
})

//if product not found

if(!product){
  return(
    <section className='h-screen flex justify-center items-center'>Loading...</section>
  )
}

  return (
    <div className=" p-8">
        {<div className="flex flex-row justify-around">
          <div className="flex">
        <img className="max-h-80" src={product.image}></img>
        <div className="flex-col">
        <img className="max-h-40" src={product.image}></img>
        <img className="max-h-40" src={product.image}></img>
        <img className="max-h-40" src={product.image}></img>
        </div>
        </div>
        <div className="flex flex-col flex-wrap  max-w-[400px]">
          <h1 className="text-gray-400 font-bold">Nike</h1>
          <br/>
          <h1 className="w-[200px] text-xl font-bold border-b-2">{product.name}</h1>
          <span className="py-3">{product.description}</span>
          <span className="py-4 flex flex-row gap-x-4 ">
            <span className="font-medium">Colors :</span>
            <button className={`${product.colors[0].name} p-1 w-6 rounded-full`}></button>
            <button className={`${product.colors[1].name} p-1 w-6  rounded-full`}></button>
            <button className={`${product.colors[2].name} p-1 w-6  rounded-full`}></button>

          </span>
          <span className="font-medium">Price : $ {product.price}</span>
          <br/>
          <button onClick={() => { addToCart(product,product.id)}} 
          className='bg-black text-white p-1 px-2 scale-90 hover:scale-100 transition'>Add To Cart</button>
        </div>
          
        
        
        </div>}
         
    </div>
  )
}

export default ProductDetail
