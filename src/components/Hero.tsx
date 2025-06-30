
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Amazing Products
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Shop the latest trends with unbeatable prices and fast delivery. 
              Your one-stop destination for everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ShoppingBag className="mr-2" size={20} />
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white/20 rounded-lg h-24 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/30 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
