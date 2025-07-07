
import { useState, useMemo } from 'react';

export interface Product {
  title: string;
  price: string;
  location: string;
  timeAgo: string;
  image: string;
  condition: string;
  description: string;
  featured?: boolean;
  category?: string;
  sellerType?: 'individual' | 'business';
}

export interface FilterState {
  priceRange: [number, number];
  location: string;
  condition: string;
  categories: string[];
  sellerType: string;
  sortBy: string;
  searchQuery: string;
}

const useProductFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    location: '',
    condition: 'all',
    categories: [],
    sellerType: 'all',
    sortBy: 'relevance',
    searchQuery: ''
  });

  const parsePrice = (priceStr: string): number => {
    return parseFloat(priceStr.replace(/[$,]/g, ''));
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Price filter
      const price = parsePrice(product.price);
      if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
        return false;
      }

      // Location filter
      if (filters.location && !product.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // Condition filter
      if (filters.condition !== 'all') {
        const productCondition = product.condition.toLowerCase();
        const filterCondition = filters.condition.toLowerCase();
        
        if (filterCondition === 'new' && !productCondition.includes('new')) {
          return false;
        }
        if (filterCondition === 'used' && !productCondition.includes('used')) {
          return false;
        }
        if (filterCondition === 'refurbished' && !productCondition.includes('refurbished')) {
          return false;
        }
      }

      // Category filter
      if (filters.categories.length > 0) {
        const productCategory = product.category || 'electronics'; // default category
        if (!filters.categories.some(cat => productCategory.toLowerCase().includes(cat.toLowerCase()))) {
          return false;
        }
      }

      // Seller type filter
      if (filters.sellerType !== 'all') {
        const productSellerType = product.sellerType || 'individual';
        if (productSellerType !== filters.sellerType) {
          return false;
        }
      }

      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        return (
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.location.toLowerCase().includes(query)
        );
      }

      return true;
    });

    // Sort products
    switch (filters.sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => {
          const timeA = parseTimeAgo(a.timeAgo);
          const timeB = parseTimeAgo(b.timeAgo);
          return timeA - timeB;
        });
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case 'distance':
        // For now, just sort by location alphabetically
        filtered = filtered.sort((a, b) => a.location.localeCompare(b.location));
        break;
      case 'relevance':
      default:
        // Featured items first, then by newest
        filtered = filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return parseTimeAgo(a.timeAgo) - parseTimeAgo(b.timeAgo);
        });
        break;
    }

    return filtered;
  }, [products, filters]);

  const parseTimeAgo = (timeAgo: string): number => {
    const num = parseInt(timeAgo);
    if (timeAgo.includes('hour')) return num;
    if (timeAgo.includes('day')) return num * 24;
    if (timeAgo.includes('week')) return num * 24 * 7;
    return num;
  };

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      priceRange: [0, 1000],
      location: '',
      condition: 'all',
      categories: [],
      sellerType: 'all',
      sortBy: 'relevance',
      searchQuery: ''
    });
  };

  return {
    filters,
    filteredAndSortedProducts,
    updateFilter,
    resetFilters,
    resultCount: filteredAndSortedProducts.length
  };
};

export default useProductFilters;
