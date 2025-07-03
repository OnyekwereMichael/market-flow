
import Header from '@/components/Header';
import { User, Settings, Package, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Profile = () => {
  const menuItems = [
    { icon: User, title: 'Personal Information', description: 'Update your profile details' },
    { icon: Package, title: 'My Listings', description: 'Manage your active listings' },
    { icon: Heart, title: 'Favorites', description: 'Items you\'ve saved for later' },
    { icon: Star, title: 'Reviews', description: 'Your ratings and feedback' },
    { icon: Settings, title: 'Account Settings', description: 'Privacy and security settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full gradient-brand flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
                <p className="text-gray-600 mb-4">Member since March 2024</p>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">⭐ 4.9 Rating</span>
                  <span className="text-sm text-gray-500">• 23 Reviews</span>
                  <span className="text-sm text-gray-500">• 15 Sales</span>
                </div>
              </div>
              <Link to="/sell">
                <Button className="gradient-brand rounded-xl">
                  Sell Item
                </Button>
              </Link>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
