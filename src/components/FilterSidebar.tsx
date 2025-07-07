
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterSidebarProps {
  filters: {
    priceRange: [number, number];
    location: string;
    condition: string;
    categories: string[];
    sellerType: string;
  };
  onFilterChange: (key: string, value: any) => void;
  onResetFilters: () => void;
}

const FilterSidebar = ({ filters, onFilterChange, onResetFilters }: FilterSidebarProps) => {
  const categories = [
    'Electronics', 'Vehicles', 'Fashion', 'Property', 'Books', 'Gaming'
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked 
      ? [...filters.categories, category]
      : filters.categories.filter(cat => cat !== category);
    onFilterChange('categories', updatedCategories);
  };

  return (
    <div className="w-full space-y-6">
      {/* Price Range */}
      <div>
        <Label className="text-base font-semibold mb-4 block">Price Range</Label>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => onFilterChange('priceRange', value)}
            max={1000}
            step={10}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <Label className="text-base font-semibold mb-2 block">Location</Label>
        <Input 
          placeholder="Enter location" 
          className="bg-white"
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
        />
      </div>

      {/* Condition */}
      <div>
        <Label className="text-base font-semibold mb-4 block">Condition</Label>
        <RadioGroup 
          value={filters.condition} 
          onValueChange={(value) => onFilterChange('condition', value)}
        >
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
              <Checkbox 
                id={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={category} className="text-sm">{category}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Seller Type */}
      <div>
        <Label className="text-base font-semibold mb-4 block">Seller Type</Label>
        <RadioGroup 
          value={filters.sellerType} 
          onValueChange={(value) => onFilterChange('sellerType', value)}
        >
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
        <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-2">
          Apply Filters
        </Button>
        <Button variant="outline" className="w-full" onClick={onResetFilters}>
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
