import React from 'react';
import { Link } from 'react-router-dom';
import ImageSwitcher from '../components/ImageSwithcher';
import Footer from '../components/footer';
import Card from '../components/Card';

const images = [
  '/1.jpg',
  '/iphone.webp',
  '/mac2.webp',
  '/car.jpg',
  '/teddy.jpeg',
  // Add more image paths as needed
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='hero bg-gray-800 text-white py-20 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to C-Store</h1>
        <p className='text-lg md:text-xl mb-8'>Explore the best in electronics and toys!</p>
        <Link to="/ProductCategory">
          <button className='bg-yellow-500 text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-yellow-600'>
            Shop Now
          </button>
        </Link>
      </section>
      
      {/* Promotions Section */}
      <section className='promotions my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-blue-200 p-6 rounded-lg text-center'>
          <h2 className='text-2xl font-semibold mb-2'>New Arrivals</h2>
          <p className='text-sm'>Check out the latest products in our collection.</p>
        </div>
        <div className='bg-green-200 p-6 rounded-lg text-center'>
          <h2 className='text-2xl font-semibold mb-2'>Best Sellers</h2>
          <p className='text-sm'>Discover the most popular items loved by our customers.</p>
        </div>
        <div className='bg-yellow-200 p-6 rounded-lg text-center'>
          <h2 className='text-2xl font-semibold mb-2'>Special Offers</h2>
          <p className='text-sm'>Don't miss out on our exclusive deals and discounts.</p>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className='featured-products'>
        <h2 className='text-3xl font-bold text-center mb-3'>Featured Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Add featured products here */}
        </div>
      </section>

      {/* Image Switcher */}
      <div className='my-4'>
        <ImageSwitcher images={images} />
      </div>

      {/* Product Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
        <Card 
          itemName="Iphone" 
          details="Good Product" 
          price={20} 
          discount={50} 
          image="i15.jpeg" 
        />
        <Card 
          itemName="MacBook" 
          details="Good Product" 
          price={2000} 
          discount={5} 
          image="mac2.webp" 
        />
        <Card 
          itemName="LG Smart" 
          details="Good Product" 
          price={2500} 
          discount={15} 
          image="tv1.jpeg" 
        />
        <Card 
          itemName="Samsung S24 Ultra" 
          details="Flagship Mobile" 
          price={1400} 
          discount={15} 
          image="s24.jpeg" 
        />
        <Card 
          itemName="I Watch" 
          details="Series 9" 
          price={500} 
          discount={10} 
          image="watch9.jpeg" 
        />
        <Card 
          itemName="Car" 
          details="Kid Product" 
          price={100} 
          discount={12} 
          image="car.jpeg" 
        />
      </div>

      
    </div>
  );
}

export default Home;
