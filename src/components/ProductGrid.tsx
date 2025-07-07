
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro Max - Excellent Condition",
      price: "₦850,000",
      location: "Lagos, Nigeria",
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "2019 Toyota Camry - Low Mileage",
      price: "₦12,500,000",
      location: "Abuja, Nigeria",
      timeAgo: "5 hours ago",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Modern 3BR Apartment - Fully Furnished",
      price: "₦2,500,000/year",
      location: "Victoria Island, Lagos",
      timeAgo: "1 day ago",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "MacBook Pro M2 - 16GB RAM, 512GB SSD",
      price: "₦1,200,000",
      location: "Ikeja, Lagos",
      timeAgo: "3 hours ago",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Nike Air Jordan 1 - Size 42",
      price: "₦85,000",
      location: "Port Harcourt",
      timeAgo: "6 hours ago",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Samsung 55\" QLED Smart TV",
      price: "₦450,000",
      location: "Kano, Nigeria",
      timeAgo: "1 day ago",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Gaming Laptop - RTX 3070, i7 Processor",
      price: "₦980,000",
      location: "Enugu, Nigeria",
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 8,
      title: "Office Chair - Ergonomic Design",
      price: "₦75,000",
      location: "Ibadan, Nigeria",
      timeAgo: "8 hours ago",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Products</h2>
          <p className="text-gray-600">Discover amazing deals from verified sellers</p>
        </div>
        <div className="flex space-x-2">
          <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <option>Sort by: Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.title}
            price={product.price}
            location={product.location}
            timeAgo={product.timeAgo}
            image={product.image}
            featured={product.featured}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
