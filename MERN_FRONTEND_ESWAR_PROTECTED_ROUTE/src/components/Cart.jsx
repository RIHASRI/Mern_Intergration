export default function Cart({ cart,setCart }) {
    const removeItem = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Cart</h2>
        <div className="h-1 w-20 bg-yellow-400 rounded"></div>
      </div>
      
      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
          </svg>
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <p className="text-gray-500">Add some products to get started!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item._id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-red-600">₹{item.price}</p>
                </div>
                
                <button 
                  onClick={() => removeItem(item._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="bg-gray-100 rounded-lg p-6 mt-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-red-600">
                ₹{cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
