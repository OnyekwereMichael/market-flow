
import { Heart, MapPin, Clock, Share2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface EnhancedProductCardProps {
  title: string;
  price: string;
  location: string;
  timeAgo: string;
  image: string;
  condition?: string;
  featured?: boolean;
  id?: string | number;
}

const EnhancedProductCard = ({ 
  title, 
  price, 
  location, 
  timeAgo, 
  image, 
  condition = "Used",
  featured = false,
  id = 1
}: EnhancedProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className={`group cursor-pointer animate-fade-in block ${featured ? 'ring-2 ring-blue-500/20' : ''}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Quick Actions Overlay */}
          <div className="absolute top-3 right-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/90 backdrop-blur-sm hover:bg-white w-8 h-8 p-0 rounded-full"
              onClick={(e) => e.preventDefault()}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/90 backdrop-blur-sm hover:bg-white w-8 h-8 p-0 rounded-full"
              onClick={(e) => e.preventDefault()}
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/90 backdrop-blur-sm hover:bg-white w-8 h-8 p-0 rounded-full"
              onClick={(e) => e.preventDefault()}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>

          {featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}

          {/* Condition Badge */}
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
              {condition}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
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
    </Link>
  );
};

export default EnhancedProductCard;
