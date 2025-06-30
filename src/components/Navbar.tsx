
import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  cartItemCount: number;
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  onCartClick: () => void;
  onAuthClick: () => void;
  onLogout: () => void;
}

const Navbar = ({ cartItemCount, isLoggedIn, user, onCartClick, onAuthClick, onLogout }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">ShopHub</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User */}
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <User size={24} />
                  <span className="hidden md:inline">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <button
                      onClick={onLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Products</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
