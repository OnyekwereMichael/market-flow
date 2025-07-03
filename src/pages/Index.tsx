
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Categories />
      <HeroSection />
      <ProductGrid />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 mt-12 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gradient mb-3 md:mb-4">MarketFlow</h3>
              <p className="text-sm md:text-base text-gray-400">
                The modern marketplace that connects buyers and sellers with the power of AI.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Browse Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sell Items</a></li>
                <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Categories</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vehicles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Property</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
            <p>&copy; 2024 MarketFlow. All rights reserved. Built with 💜 by Lovable</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
