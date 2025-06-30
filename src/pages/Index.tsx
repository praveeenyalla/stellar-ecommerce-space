
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import Cart from '../components/Cart';
import { Product } from '../types/Product';

// Mock data for initial version
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: '/placeholder.svg',
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation',
    stock: 15
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: '/placeholder.svg',
    category: 'Electronics',
    description: 'Advanced fitness tracking with heart rate monitor',
    stock: 8
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: '/placeholder.svg',
    category: 'Clothing',
    description: 'Comfortable organic cotton t-shirt in various colors',
    stock: 25
  },
  {
    id: '4',
    name: 'Leather Laptop Bag',
    price: 149.99,
    image: '/placeholder.svg',
    category: 'Accessories',
    description: 'Premium leather laptop bag with multiple compartments',
    stock: 12
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    price: 49.99,
    image: '/placeholder.svg',
    category: 'Electronics',
    description: 'Fast wireless charging pad compatible with all devices',
    stock: 20
  },
  {
    id: '6',
    name: 'Stainless Steel Water Bottle',
    price: 34.99,
    image: '/placeholder.svg',
    category: 'Lifestyle',
    description: 'Insulated water bottle keeps drinks cold for 24 hours',
    stock: 30
  }
];

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleLogin = (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    setUser({ name: 'John Doe', email });
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // Mock signup - in real app, this would call an API
    setUser({ name, email });
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        cartItemCount={cartItems.length}
        isLoggedIn={isLoggedIn}
        user={user}
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />
      
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        <ProductGrid products={mockProducts} onAddToCart={addToCart} />
      </main>
      
      <Footer />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default Index;
