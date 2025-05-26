
import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from './CartProvider';

const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'High-quality wireless headphones with noise cancellation.',
    category: 'Electronics'
  },
  {
    id: '2',
    title: 'Minimalist Watch',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Elegant and minimalist design watch for everyday wear.',
    category: 'Accessories'
  },
  {
    id: '3',
    title: 'Leather Backpack',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    description: 'Durable leather backpack perfect for work and travel.',
    category: 'Bags'
  },
  {
    id: '4',
    title: 'Smartphone Case',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
    description: 'Protective and stylish smartphone case.',
    category: 'Electronics'
  },
  {
    id: '5',
    title: 'Coffee Mug Set',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&h=500&fit=crop',
    description: 'Set of 4 premium ceramic coffee mugs.',
    category: 'Home'
  },
  {
    id: '6',
    title: 'Running Shoes',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    description: 'Comfortable running shoes for all terrains.',
    category: 'Footwear'
  }
];

const categories = ['All', 'Electronics', 'Accessories', 'Bags', 'Home', 'Footwear'];

export const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our carefully selected collection of premium products designed to enhance your lifestyle.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
