import React, { useEffect } from 'react'

import { Link, useParams } from 'react-router-dom';

export default function Product() {
    const { id } = useParams();
    const[product,setProduct]=React.useState(null);
useEffect(() => {
  fetch("http://localhost:5000/sleeping/sleepingproduct")
  .then(res=>res.json())
  .then(allproducts=>{
    const product=allproducts.find((p)=>p._id===id);
    setProduct(product);

  })
})
  if (!product) return (
    <div className="flex items-center justify-center min-h-64">
      <p className="text-xl text-gray-600">Product not found</p>
    </div>
  );
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-96 lg:h-full object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="mb-6">
            <span className="text-3xl font-bold text-red-600">₹{product.price}</span>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
          
          <div className="space-y-3">
            <Link 
              to={`/buynow/${product._id}`}
              className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-center py-3 px-6 rounded-md font-bold text-lg transition-colors"
            >
              Buy Now
            </Link>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure transaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
