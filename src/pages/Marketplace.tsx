
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Categories />
      
      {/* Search and Filter Section */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="What are you looking for?"
                  className="pl-12 h-12 bg-gray-50 border-gray-200 rounded-xl"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="rounded-xl">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" className="rounded-xl">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Marketplace</h1>
          <p className="text-gray-600">Discover amazing products from trusted sellers</p>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default Marketplace;
