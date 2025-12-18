import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function BuyNow() {
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
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
          <p className="text-gray-600">Thank you for your purchase</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-2xl font-bold text-red-600">₹{product.price}</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Order has been placed successfully</span>
          </div>
          
          <p className="text-sm text-gray-600">
            You will receive a confirmation email shortly with your order details.
          </p>
        </div>
      </div>
    </div>
  );
}
