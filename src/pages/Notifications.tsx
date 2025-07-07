
import Header from '@/components/Header';
import { Bell, Package, Heart, MessageCircle, Star, DollarSign, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'order',
      icon: Package,
      title: 'Order Shipped',
      message: 'Your iPhone 14 Pro Max has been shipped and will arrive tomorrow.',
      time: '2 hours ago',
      read: false,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 2,
      type: 'like',
      icon: Heart,
      title: 'Item Liked',
      message: 'Someone liked your MacBook Pro listing.',
      time: '4 hours ago',
      read: false,
      color: 'text-red-600 bg-red-100'
    },
    {
      id: 3,
      type: 'message',
      icon: MessageCircle,
      title: 'New Message',
      message: 'John Doe sent you a message about the Tesla Model 3.',
      time: '6 hours ago',
      read: true,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 4,
      type: 'review',
      icon: Star,
      title: 'New Review',
      message: 'You received a 5-star review from Sarah Smith.',
      time: '1 day ago',
      read: true,
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      id: 5,
      type: 'sale',
      icon: DollarSign,
      title: 'Item Sold',
      message: 'Your Gucci belt has been sold for $320.',
      time: '2 days ago',
      read: true,
      color: 'text-emerald-600 bg-emerald-100'
    },
    {
      id: 6,
      type: 'system',
      icon: CheckCircle,
      title: 'Account Verified',
      message: 'Your seller account has been successfully verified.',
      time: '3 days ago',
      read: true,
      color: 'text-blue-600 bg-blue-100'
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
              <p className="text-gray-600">
                {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : 'All caught up!'}
              </p>
            </div>
            <div className="flex space-x-3 mt-4 sm:mt-0">
              <Button variant="outline" size="sm">
                Mark all as read
              </Button>
              <Button variant="outline" size="sm">
                Settings
              </Button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {notifications.map((notification, index) => {
              const IconComponent = notification.icon;
              return (
                <div 
                  key={notification.id}
                  className={`p-4 md:p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors ${
                    !notification.read ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${notification.color} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className={`text-sm md:text-base font-semibold ${
                            !notification.read ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            {notification.time}
                          </p>
                        </div>
                        
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State (if no notifications) */}
          {notifications.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications yet</h3>
              <p className="text-gray-600">When you have notifications, they'll appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
