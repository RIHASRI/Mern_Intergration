import { Link, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddProducts from "./components/AddProducts";
function App() {
  const [cart, setCart] = useState([]);
   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                MERN Ecommerce
              </h1>
            </Link>
            
            <nav className="flex items-center space-x-6">
              <Link 
                to="/cart" 
                className="flex items-center space-x-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-3 py-2 rounded-md font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
                </svg>
                <span>Cart ({cart.length})</span>
              </Link>
              
              {localStorage.getItem("user") ? (
                <button 
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link 
                  to="/login"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Login
                </Link>
              )}
              
              <Link 
                to="/addproduct"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Add Product
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Routes>
      <Route path="/" element={<Products cart={cart} setCart={setCart}/>}/>
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={
        <ProtectedRoute>
        <Cart cart={cart} setCart={setCart}/>
        </ProtectedRoute>
        } />
      <Route path="/buynow/:id" element={
        <ProtectedRoute>
        <BuyNow />
        </ProtectedRoute>
        } />
      <Route path="/login" element={<Login />} />
      <Route path="/addproduct" element ={<AddProducts/>}/>
      </Routes>
      
     </main>
    </div>
    </>
  )
}

export default App