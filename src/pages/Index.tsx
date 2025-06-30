
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import Cart from '../components/Cart';
import { Product } from '../types/Product';

// Complete iPhone product catalog
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1199.99,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'The ultimate iPhone with titanium design, A17 Pro chip, and advanced camera system',
    stock: 12
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Pro performance with titanium build and Action Button',
    stock: 15
  },
  {
    id: '3',
    name: 'iPhone 15 Plus',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1695048067444-01e4b0d54fb6?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'All-day battery life with 6.7-inch Super Retina XDR display',
    stock: 18
  },
  {
    id: '4',
    name: 'iPhone 15',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1695048067444-01e4b0d54fb6?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Dynamic Island comes to iPhone 15 with USB-C',
    stock: 22
  },
  {
    id: '5',
    name: 'iPhone 14 Pro Max',
    price: 1099.99,
    image: 'https://images.unsplash.com/photo-1663781742665-1e4dd5d8bf2d?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Pro camera system with 48MP Main camera and A16 Bionic chip',
    stock: 8
  },
  {
    id: '6',
    name: 'iPhone 14 Pro',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1663781742665-1e4dd5d8bf2d?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Dynamic Island and Always-On display with Pro camera features',
    stock: 10
  },
  {
    id: '7',
    name: 'iPhone 14 Plus',
    price: 749.99,
    image: 'https://images.unsplash.com/photo-1663781742235-d5e0ab1b7a6a?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Big screen, big battery, and advanced dual-camera system',
    stock: 14
  },
  {
    id: '8',
    name: 'iPhone 14',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1663781742235-d5e0ab1b7a6a?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'A15 Bionic chip with 5-core GPU and improved cameras',
    stock: 20
  },
  {
    id: '9',
    name: 'iPhone 13 Pro Max',
    price: 949.99,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c8?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'ProMotion display with up to 120Hz refresh rate',
    stock: 6
  },
  {
    id: '10',
    name: 'iPhone 13 Pro',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c8?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Professional triple-camera system with macro photography',
    stock: 9
  },
  {
    id: '11',
    name: 'iPhone 13',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1632633173522-90cfa4b9b9b1?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'A15 Bionic chip and advanced dual-camera system',
    stock: 16
  },
  {
    id: '12',
    name: 'iPhone 13 mini',
    price: 529.99,
    image: 'https://images.unsplash.com/photo-1632633173522-90cfa4b9b9b1?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'All the power of iPhone 13 in a compact 5.4-inch design',
    stock: 11
  },
  {
    id: '13',
    name: 'iPhone 12 Pro Max',
    price: 849.99,
    image: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'LiDAR Scanner and pro camera system with 5G capability',
    stock: 5
  },
  {
    id: '14',
    name: 'iPhone 12 Pro',
    price: 749.99,
    image: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Professional camera system with LiDAR Scanner',
    stock: 7
  },
  {
    id: '15',
    name: 'iPhone 12',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'A14 Bionic chip with 5G speed and Super Retina XDR display',
    stock: 13
  },
  {
    id: '16',
    name: 'iPhone 12 mini',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Compact design with full iPhone 12 capabilities',
    stock: 8
  },
  {
    id: '17',
    name: 'iPhone SE (3rd generation)',
    price: 429.99,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'A15 Bionic chip in the classic iPhone design with Touch ID',
    stock: 25
  },
  {
    id: '18',
    name: 'iPhone 11 Pro Max',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Triple-camera system with Night mode and A13 Bionic chip',
    stock: 4
  },
  {
    id: '19',
    name: 'iPhone 11 Pro',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Pro camera system with ultra-wide, wide, and telephoto lenses',
    stock: 6
  },
  {
    id: '20',
    name: 'iPhone 11',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop',
    category: 'iPhone',
    description: 'Liquid Retina display with dual-camera system',
    stock: 12
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
