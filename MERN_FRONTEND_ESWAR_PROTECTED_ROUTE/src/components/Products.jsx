import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {API} from "../utils/api";




export default function Products({setCart,cart}) {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/sleeping/sleepingproduct").then(res=>res.json()).then(data=>setProducts(data))
  })
 const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const deleteProduct=async(id)=>{
    const confirmDelete=window.confirm("Are you are you want to delete?");
    if(!confirmDelete) return;
    const res=await fetch(`http://localhost:5000/api/deleteProduct/${id}`,{
      method:"DELETE",
    });
    if(res.status === 204){
      alert("Product deleted succesfully");
      setProducts(products.filter(p=>p._id !== id));
    }else{
      alert("Error deleteing product");
    }
  }
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">All Products</h2>
        <div className="h-1 w-20 bg-yellow-400 rounded"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <div key={p._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
            <div className="aspect-square overflow-hidden">
              <img 
                src={p.image} 
                alt={p.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{p.name}</h3>
              <p className="text-2xl font-bold text-red-600 mb-4">₹{p.price}</p>
              
              <div className="space-y-2">
                <Link 
                  to={`/product/${p._id}`}
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-center py-2 px-4 rounded-md font-medium transition-colors"
                >
                  View Details
                </Link>
                
                <button 
                  onClick={() => addToCart(p)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
                >
                  Add to Cart
                </button>
                
                <button 
                  onClick={() => deleteProduct(p._id)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
