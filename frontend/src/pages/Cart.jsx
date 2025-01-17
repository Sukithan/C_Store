import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = 1;

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/cart/${userId}`);
      const data = await response.json();
      setItems(data);
      fetchCartTotal();
    } catch (error) {
      setError('Error fetching cart items. Please try again.');
      console.error('Error fetching cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (items.length > 0) {
      const totalAmount = items.reduce((acc, item) => acc + (typeof item.price === 'number' ? item.price : 0) * item.quantity, 0);
      setTotal(totalAmount);
    }
  }, [items]);

  const incrementCartItem = async (id) => {
    try {
      await fetch(`http://localhost:3000/cart/increment/${id}`, { method: 'PUT' });
      fetchCartItems();
    } catch (error) {
      console.error('Error incrementing cart item:', error);
    }
  };

  const decrementCartItem = async (id) => {
    try {
      await fetch(`http://localhost:3000/cart/decrement/${id}`, { method: 'PUT' });
      fetchCartItems();
    } catch (error) {
      console.error('Error decrementing cart item:', error);
    }
  };

  const removeCartItem = async (id) => {
    try {
      await fetch(`http://localhost:3000/cart/remove/${id}`, { method: 'DELETE' });
      fetchCartItems();
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  const fetchCartTotal = async () => {
    try {
      const response = await fetch(`http://localhost:3000/cart/total/${userId}`);
      if (!response.ok) {
        const errorText = await response.text(); // Get the error response
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }
      const data = await response.json();
      setTotal(data.total);
    } catch (error) {
      console.error('Error fetching total price:', error);
    }
  };
  

  if (loading) {
    return <div className="text-center">Loading cart items...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }


  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg m-5 border border-gray-200">
      <h2 className="text-4xl font-bold text-purple-700 text-center mb-6">Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="text-center text-xl text-gray-600">Your cart is empty.</div>
      ) : (
        Array.isArray(items) && items.map((item, index) => (
          <div key={`${item.product_id}-${index}`} className=" w-full bg-gray-50 mb-4 p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-300">
            <div className="flex items-center">
              <button onClick={() => decrementCartItem(item.product_id)} className="bg-purple-200 text-purple-600 p-2 rounded-md mr-2 hover:bg-purple-300 transition duration-200">-</button>
              <span className="mx-2 font-semibold">{item.quantity}</span>
              <button onClick={() => incrementCartItem(item.product_id)} className="bg-purple-200 text-purple-600 p-2 rounded-md ml-2 hover:bg-purple-300 transition duration-200">+</button>
            </div>
            <span className="flex-1 text-center font-semibold text-lg">{item.product_name}</span>
            <span className="flex-1 text-center font-semibold text-lg">${item.price}</span>
            <button onClick={() => removeCartItem(item.product_id)} className="text-lg text-red-500 hover:underline">Remove</button>
          </div>
        ))
      )}
      <div className="flex justify-between w-full mt-6 border-t pt-4 border-gray-300">
        <div className="text-xl font-bold text-purple-800">Total: ${total}</div>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-200">Order</button>
      </div>
    </div>
  );
};

export default Cart;
