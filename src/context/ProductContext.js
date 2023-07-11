import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

export const ProductContext=createContext();


 const ProductProvider = ({children}) => {
//products state

const [loading,setLoading]=useState(true)
const [update,setUpdate]  = useState([])

//fetch produts
useEffect(()=>{

  
  const fetchProducts = async () => {
    try {
      console.log("loadingg");
      const response = await axios.get('https://shoes-collections.p.rapidapi.com/shoes',{
        headers: {
          'X-RapidAPI-Key': '7078f9ea69msh44c069ed17cb546p12c6c1jsn3252205a9ed4',
          'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
        } 
      });
     
       const fetchProduct =response.data;
      setLoading(false)
      //coor
      const colors = [
        {id:0, name:'bg-gray-500'},
        {id:1, name:'bg-red-500'},
        {id:2, name:'bg-orange-500'},
        {id:3, name:'bg-yellow-500'},
        {id:4, name: 'bg-green-500'},
        {id:5, name:'bg-teal-500'},
        {id:6, name:'bg-blue-500'},
        {id:7, name:'bg-indigo-500'},
        {id:8, name:'bg-purple-500'},
        {id:9, name:'bg-pink-500'},
        {id:10, name: 'bg-amber-500'},
        {id:11, name:'bg-lime-500'},
        {id:12, name:'bg-emerald-500'},
        {id:13, name: 'bg-cyan-500'},
        {id:14, name: 'bg-sky-500'}
      ]
      
      const addColorToProducts = () => {
        const updatedProducts = fetchProduct.map((product, index) => {
          const colorIndex = Math.floor(Math.random() * colors.length); // Generate a random color index
          const selectedColors = [
            colors[colorIndex],
            colors[(colorIndex + 1) % colors.length],
            colors[(colorIndex + 2) % colors.length]
          ]; // Select three colors in a cyclic manner starting from the random index
          return { ...product, colors: selectedColors }; // Add the 'colors' property to the product
        });
      
        return updatedProducts;
      };
      
      const finalProduct = addColorToProducts();

      setUpdate(finalProduct)
    } catch (error) {
      console.log(error, 'ERROR');
    }
  };

  fetchProducts();
},[])  





 
  return <ProductContext.Provider value={{update,loading}}>{children}</ProductContext.Provider>
};    
 
export default ProductProvider;