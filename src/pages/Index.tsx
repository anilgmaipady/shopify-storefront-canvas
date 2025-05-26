
import React from 'react';
import { Header } from '@/components/storefront/Header';
import { HeroSection } from '@/components/storefront/HeroSection';
import { ProductGrid } from '@/components/storefront/ProductGrid';
import { CartProvider } from '@/components/storefront/CartProvider';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <HeroSection />
          <ProductGrid />
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;
