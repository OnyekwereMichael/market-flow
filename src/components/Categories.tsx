
import { Car, Smartphone, Home, Shirt, Book, Gamepad2, Baby, Heart } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Vehicles', icon: Car, color: 'bg-blue-100 text-blue-600' },
    { name: 'Electronics', icon: Smartphone, color: 'bg-purple-100 text-purple-600' },
    { name: 'Property', icon: Home, color: 'bg-green-100 text-green-600' },
    { name: 'Fashion', icon: Shirt, color: 'bg-pink-100 text-pink-600' },
    { name: 'Books', icon: Book, color: 'bg-orange-100 text-orange-600' },
    { name: 'Gaming', icon: Gamepad2, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Baby & Kids', icon: Baby, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Health', icon: Heart, color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="flex flex-col items-center space-y-2 min-w-fit cursor-pointer group transition-transform hover:scale-105"
              >
                <div className={`p-3 rounded-full ${category.color} group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors whitespace-nowrap">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
