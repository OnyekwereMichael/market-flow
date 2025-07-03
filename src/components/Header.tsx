
import { Search, Heart, User, ShoppingBag, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h1 className="text-2xl font-bold text-gradient tracking-tight">MarketFlow</h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Browse
            </Link>
            <Link to="/sell" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Sell
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products, brands, categories..."
                className="pl-12 h-12 bg-gray-50/80 border-gray-200 rounded-xl focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-xl">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-xl">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-xl">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-xs text-white rounded-full flex items-center justify-center font-medium">3</span>
            </Button>
            <div className="w-px h-6 bg-gray-300 mx-3"></div>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-xl">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/sell">
              <Button className="gradient-brand text-white hover:opacity-90 transition-all duration-200 rounded-xl px-6 shadow-lg hover:shadow-xl">
                Sell Now
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
