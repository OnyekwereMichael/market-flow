
import Header from '@/components/Header';
import { Upload, Camera, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Sell = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sell Your Item</h1>
            <p className="text-xl text-gray-600">List your product and reach thousands of buyers</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-8">
              {/* Photo Upload */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Product Photos</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Drag and drop your photos here, or click to browse</p>
                  <Button variant="outline" className="rounded-xl">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photos
                  </Button>
                </div>
              </div>

              {/* Product Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-lg font-semibold mb-2 block">Product Title</Label>
                  <Input placeholder="Enter product title" className="h-12 rounded-xl" />
                </div>
                <div>
                  <Label className="text-lg font-semibold mb-2 block">Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <Input placeholder="0.00" className="h-12 rounded-xl pl-10" />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <Label className="text-lg font-semibold mb-2 block">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Enter your location" className="h-12 rounded-xl pl-10" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button className="w-full h-14 text-lg gradient-brand rounded-xl shadow-lg hover:shadow-xl transition-all">
                  List Your Item
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
