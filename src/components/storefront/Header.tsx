
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './CartProvider';
import { CartDrawer } from './CartDrawer';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const { user, signOut } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <h1 className="text-2xl font-bold text-gray-900">StoreFront</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Products
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Auth Section */}
              {user ? (
                <div className="flex items-center space-x-2">
                  <div className="hidden md:flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                  </div>
                  <Button
                    onClick={handleSignOut}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="hidden md:ml-2 md:inline">Sign out</span>
                  </Button>
                </div>
              ) : (
                <Link to="/auth">
                  <Button variant="outline" size="sm">
                    Sign in
                  </Button>
                </Link>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-gray-500 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Products
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Contact
                </a>
                
                {user && (
                  <div className="px-3 py-2 border-t border-gray-200 mt-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-700">
                        {user.user_metadata?.full_name || user.email}
                      </span>
                    </div>
                    <Button
                      onClick={handleSignOut}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-gray-500 hover:text-gray-900"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </Button>
                  </div>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
