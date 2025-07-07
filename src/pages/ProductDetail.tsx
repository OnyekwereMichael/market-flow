
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, MessageCircle, Phone, Star, MapPin, Clock, Shield, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';

const ProductDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock product data - in real app, this would come from API
  const product = {
    id: id,
    title: "iPhone 14 Pro Max 256GB Space Black",
    price: "$899",
    originalPrice: "$1,199",
    condition: "Like New",
    location: "New York, NY",
    timeAgo: "2 hours ago",
    description: "Excellent condition iPhone 14 Pro Max with original box and accessories. Used for only 3 months, no scratches or damage. Includes original charger, cable, and box. Battery health at 98%. Perfect for anyone looking for a premium smartphone at a great price.",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600"
    ],
    seller: {
      name: "John Smith",
      rating: 4.8,
      reviews: 127,
      joined: "Member since 2019",
      verified: true,
      responseTime: "Usually responds within 2 hours"
    },
    features: [
      "256GB Storage",
      "Pro Camera System",
      "Face ID",
      "5G Capable",
      "Wireless Charging"
    ],
    shipping: {
      delivery: "2-3 business days",
      cost: "Free shipping",
      protection: "Buyer protection included"
    }
  };

  const relatedProducts = [
    {
      id: 2,
      title: "iPhone 13 Pro 128GB",
      price: "$699",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
      condition: "Used"
    },
    {
      id: 3,
      title: "Samsung Galaxy S23 Ultra",
      price: "$799",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=300",
      condition: "Like New"
    },
    {
      id: 4,
      title: "MacBook Air M2",
      price: "$1,099",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300",
      condition: "New"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/enhanced-marketplace" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to listings
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-3 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{product.condition}</Badge>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                <Badge className="bg-green-100 text-green-700">25% off</Badge>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{product.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{product.timeAgo}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions - Sticky on mobile */}
            <div className="sticky top-4 bg-white rounded-xl p-4 shadow-sm border space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <MessageCircle className="h-5 w-5 mr-2" />
                Message Seller
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="h-5 w-5 mr-2" />
                Call Seller
              </Button>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Shipping & Delivery
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Delivery time:</span>
                    <span className="font-medium">{product.shipping.delivery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping cost:</span>
                    <span className="font-medium text-green-600">{product.shipping.cost}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600 mt-3">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm">{product.shipping.protection}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Description & Seller Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Seller Profile */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Seller Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">
                      {product.seller.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{product.seller.name}</span>
                      {product.seller.verified && (
                        <Badge className="bg-green-100 text-green-700 text-xs">Verified</Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{product.seller.rating}</span>
                      <span>({product.seller.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{product.seller.joined}</p>
                  <p>{product.seller.responseTime}</p>
                </div>

                <Button variant="outline" className="w-full">
                  View Seller Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Items */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Related Items</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group">
                  <div className="bg-white rounded-lg border hover:shadow-md transition-shadow">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">{item.price}</span>
                        <Badge variant="secondary" className="text-xs">{item.condition}</Badge>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
