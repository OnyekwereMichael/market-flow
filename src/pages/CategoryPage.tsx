
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CategoryPage = () => {
  const { category } = useParams();
  
  const getCategoryTitle = (cat: string) => {
    const titles: { [key: string]: string } = {
      'vehicles': 'Vehicles',
      'electronics': 'Electronics',
      'property': 'Property',
      'fashion': 'Fashion',
      'books': 'Books',
      'gaming': 'Gaming',
      'baby': 'Baby & Kids',
      'health': 'Health & Beauty',
      'computers': 'Computers',
      'watches': 'Watches & Jewelry'
    };
    return titles[cat || ''] || 'Category';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Category Header */}
      <div className="bg-white border-b border-gray-100 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{getCategoryTitle(category || '')}</h1>
          <p className="text-gray-600">Discover amazing {category} from trusted sellers</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border-b border-gray-100 py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder={`Search in ${getCategoryTitle(category || '').toLowerCase()}...`}
                  className="pl-12 h-10 md:h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <Button variant="outline" className="rounded-xl flex-1 md:flex-none">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" className="rounded-xl flex-1 md:flex-none">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <ProductGrid />
      </div>
    </div>
  );
};

export default CategoryPage;
