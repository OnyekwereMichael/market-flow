
import Header from '@/components/Header';
import { Upload, Camera, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Sell = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto" style={{ width: 'min(80%, 100%)' }}>
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sell Your Item</h1>
            <p className="text-lg md:text-xl text-gray-600">List your product and reach thousands of buyers</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-6 md:space-y-8">
              {/* Photo Upload */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Product Photos</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 md:p-8 text-center hover:border-primary transition-colors">
                  <Upload className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2 text-sm md:text-base">Drag and drop your photos here, or click to browse</p>
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
                  <Input 
                    placeholder="Enter product title" 
                    className="h-12 rounded-xl bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                <div>
                  <Label className="text-lg font-semibold mb-2 block">Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <Input 
                      placeholder="0.00" 
                      className="h-12 rounded-xl pl-10 bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                  </div>
                </div>
              </div>

              {/* Category and Condition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-lg font-semibold mb-2 block">Category</Label>
                  <Input 
                    placeholder="Select category" 
                    className="h-12 rounded-xl bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                <div>
                  <Label className="text-lg font-semibold mb-2 block">Condition</Label>
                  <Input 
                    placeholder="New, Used, Fair" 
                    className="h-12 rounded-xl bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <Label className="text-lg font-semibold mb-2 block">Description</Label>
                <Textarea 
                  placeholder="Describe your item in detail..." 
                  rows={4}
                  className="rounded-xl bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>

              {/* Location */}
              <div>
                <Label className="text-lg font-semibold mb-2 block">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input 
                    placeholder="Enter your location" 
                    className="h-12 rounded-xl pl-10 bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button className="w-full h-12 md:h-14 text-base md:text-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
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
