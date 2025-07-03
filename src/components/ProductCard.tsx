
import { Heart, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  price: string;
  location: string;
  timeAgo: string;
  image: string;
  featured?: boolean;
}

const ProductCard = ({ title, price, location, timeAgo, image, featured = false }: ProductCardProps) => {
  return (
    <div className={`group cursor-pointer animate-fade-in ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/80 backdrop-blur-sm hover:bg-white w-8 h-8 p-0 rounded-full"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          {featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="mb-3">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
