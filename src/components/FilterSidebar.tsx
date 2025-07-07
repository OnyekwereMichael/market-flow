
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [condition, setCondition] = useState('all');
  const [sellerType, setSellerType] = useState('all');

  const categories = [
    'Electronics', 'Vehicles', 'Fashion', 'Property', 'Books', 'Gaming'
  ];

  return (
    <div className="w-full space-y-6">
      {/* Price Range */}
      <div>
        <Label className="text-base font-semibold mb-4 block">Price Range</Label>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000}
            step={10}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <Label className="text-base font-semibold mb-2 block">Location</Label>
        <Input placeholder="Enter location" className="bg-white" />
      </div>

      {/* Condition */}
      <div>
        <Label className="text-base font-semibold mb-4 block">Condition</Label>
        <RadioGroup value={condition} onValueChange={setCondition}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all-condition" />
            <Label htmlFor="all-condition">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="new" id="new" />
            <Label htmlFor="new">New</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="used" id="used" />
            <Label htmlFor="used">Used</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="refurbished" id="refurbished" />
            <Label htmlFor="refurbished">Refurbished</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Categories */}
      <div>
        <Label className="text-base font-semibold mb-4 block">Categories</Label>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label htmlFor={category} className="text-sm">{category}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Seller Type */}
      <div>
        <Label className="text-base font-semibold mb-4 block">Seller Type</Label>
        <RadioGroup value={sellerType} onValueChange={setSellerType}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all-sellers" />
            <Label htmlFor="all-sellers">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="individual" id="individual" />
            <Label htmlFor="individual">Individual</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="business" id="business" />
            <Label htmlFor="business">Business</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Apply Filters */}
      <div className="pt-4 border-t">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Apply Filters
        </Button>
        <Button variant="outline" className="w-full mt-2">
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
