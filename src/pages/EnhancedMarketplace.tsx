import { useState } from 'react';
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import FilterSidebar from '@/components/FilterSidebar';
import EnhancedProductCard from '@/components/EnhancedProductCard';
import ProductListView from '@/components/ProductListView';
import ViewToggle from '@/components/ViewToggle';
import SortDropdown from '@/components/SortDropdown';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EnhancedMarketplace = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      title: "iPhone 14 Pro Max 256GB Space Black",
      price: "$899",
      location: "New York, NY",
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      condition: "Like New",
      description: "Excellent condition iPhone 14 Pro Max with original box and accessories",
      featured: true
    },
    {
      title: "2021 Tesla Model 3 Long Range",
      price: "$42,500",
      location: "Los Angeles, CA",
      timeAgo: "1 day ago",
      image: "https://images.unsplash.com/photo-1635392844993-c54895e48417?w=400",
      condition: "Used",
      description: "Pristine condition, autopilot, low mileage",
      featured: false
    },
    {
      title: "Modern Sofa Set - Like New",
      price: "$650",
      location: "Chicago, IL",
      timeAgo: "3 days ago",
      image: "https://images.unsplash.com/photo-1549488348-604e6c728983?w=400",
      condition: "Used",
      description: "Comfortable and stylish sofa set for your living room",
      featured: false
    },
    {
      title: "Gucci Leather Belt - Size 34",
      price: "$320",
      location: "Miami, FL",
      timeAgo: "5 hours ago",
      image: "https://images.unsplash.com/photo-1610916953899-3b8490584aa4?w=400",
      condition: "New with tags",
      description: "Authentic Gucci belt, never worn",
      featured: true
    },
    {
      title: "MacBook Pro 16-inch M1 Pro",
      price: "$1999",
      location: "San Francisco, CA",
      timeAgo: "1 week ago",
      image: "https://images.unsplash.com/photo-1618424181497-157f55ca8931?w=400",
      condition: "Certified Refurbished",
      description: "Apple certified, excellent condition, 1 year warranty",
      featured: false
    },
    {
      title: "Rolex Submariner - 2020 Model",
      price: "$14,800",
      location: "London, UK",
      timeAgo: "2 days ago",
      image: "https://images.unsplash.com/photo-1624540385289-49529781a944?w=400",
      condition: "Pre-owned",
      description: "Immaculate condition, box and papers included",
      featured: true
    },
    {
      title: "Nintendo Switch OLED - White",
      price: "$349",
      location: "Tokyo, Japan",
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1634917294435-4f6a9371698a?w=400",
      condition: "New",
      description: "Brand new, unopened box",
      featured: false
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Categories />
      
      {/* Search and Controls */}
      <div className="bg-white border-b border-gray-100 py-4 md:py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="What are you looking for?"
                  className="pl-12 h-10 md:h-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                className="rounded-xl flex-1 md:flex-none md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <ViewToggle view={view} onViewChange={setView} />
              <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex gap-6">
          {/* Desktop Filters Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              <FilterSidebar />
            </div>
          </div>

          {/* Mobile Filters Overlay */}
          {showFilters && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
              <div className="bg-white h-full w-full max-w-sm ml-auto p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Products Grid/List */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {products.length} results for "all items"
              </p>
            </div>

            {view === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <EnhancedProductCard key={index} {...product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product, index) => (
                  <ProductListView key={index} {...product} />
                ))}
              </div>
            )}

            {/* Load More */}
            <div className="text-center mt-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMarketplace;
