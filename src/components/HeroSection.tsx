
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Your Marketplace
            <span className="text-gradient block">Reimagined</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Discover unique products, connect with trusted sellers, and experience the future of online shopping.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-12 md:mb-16 px-4">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl">
              Start Shopping
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl">
              Sell Your Items
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 px-4">
            <div className="text-center group">
              <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm md:text-base text-gray-600">Find what you need in seconds with our AI-powered search</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Secure & Safe</h3>
              <p className="text-sm md:text-base text-gray-600">All transactions are protected with bank-level security</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Trusted Community</h3>
              <p className="text-sm md:text-base text-gray-600">Join millions of verified buyers and sellers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
