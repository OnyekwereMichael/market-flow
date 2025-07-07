
import Header from '@/components/Header';
import { Shield, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Trading',
      description: 'Advanced security measures to protect buyers and sellers in every transaction.'
    },
    {
      icon: Users,
      title: 'Trusted Community',
      description: 'A vibrant community of verified users building trust through great experiences.'
    },
    {
      icon: Zap,
      title: 'Fast & Easy',
      description: 'List items in minutes and connect with buyers instantly through our platform.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Dedicated support team ensuring every user has the best marketplace experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">About MarketFlow</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4">
              We're revolutionizing online commerce by creating a marketplace that puts trust, 
              security, and user experience at the heart of every transaction. Our platform 
              connects buyers and sellers in a safe, intuitive environment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl gradient-brand flex items-center justify-center mb-4 md:mb-6">
                    <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Mission</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To create the world's most trusted and user-friendly marketplace, where anyone 
              can buy and sell with confidence. We believe in empowering communities through 
              commerce and building lasting relationships between users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
