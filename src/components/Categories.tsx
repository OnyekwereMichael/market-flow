
import { Car, Smartphone, Home, Shirt, Book, Gamepad2, Baby, Heart, Laptop, Watch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Vehicles', icon: Car, color: 'bg-blue-50 text-blue-600 hover:bg-blue-100', link: '/category/vehicles' },
    { name: 'Electronics', icon: Smartphone, color: 'bg-purple-50 text-purple-600 hover:bg-purple-100', link: '/category/electronics' },
    { name: 'Property', icon: Home, color: 'bg-green-50 text-green-600 hover:bg-green-100', link: '/category/property' },
    { name: 'Fashion', icon: Shirt, color: 'bg-pink-50 text-pink-600 hover:bg-pink-100', link: '/category/fashion' },
    { name: 'Books', icon: Book, color: 'bg-orange-50 text-orange-600 hover:bg-orange-100', link: '/category/books' },
    { name: 'Gaming', icon: Gamepad2, color: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100', link: '/category/gaming' },
    { name: 'Baby & Kids', icon: Baby, color: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100', link: '/category/baby' },
    { name: 'Health', icon: Heart, color: 'bg-red-50 text-red-600 hover:bg-red-100', link: '/category/health' },
    { name: 'Computers', icon: Laptop, color: 'bg-teal-50 text-teal-600 hover:bg-teal-100', link: '/category/computers' },
    { name: 'Watches', icon: Watch, color: 'bg-amber-50 text-amber-600 hover:bg-amber-100', link: '/category/watches' },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-6 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.name}
                to={category.link}
                className="flex flex-col items-center space-y-3 min-w-fit cursor-pointer group transition-all duration-200 hover:scale-105"
              >
                <div className={`p-4 rounded-2xl ${category.color} group-hover:shadow-lg transition-all duration-200`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors whitespace-nowrap">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
