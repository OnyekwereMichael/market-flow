
import { Heart, MapPin, Clock, Share2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductListViewProps {
  title: string;
  price: string;
  location: string;
  timeAgo: string;
  image: string;
  description?: string;
  condition?: string;
  featured?: boolean;
}

const ProductListView = ({ 
  title, 
  price, 
  location, 
  timeAgo, 
  image, 
  description,
  condition = "Used",
  featured = false 
}: ProductListViewProps) => {
  return (
    <div className={`group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border ${featured ? 'ring-2 ring-blue-500/20' : ''}`}>
      <div className="flex p-4 gap-4">
        {/* Image */}
        <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-2 left-2">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-900 text-lg line-clamp-1 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <span className="text-xl font-bold text-gray-900 ml-4">{price}</span>
          </div>
          
          {description && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">{description}</p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{timeAgo}</span>
              </div>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                {condition}
              </span>
            </div>
            
            {/* Quick Actions */}
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
