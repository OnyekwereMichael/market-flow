
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
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About MarketFlow</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're revolutionizing online commerce by creating a marketplace that puts trust, 
              security, and user experience at the heart of every transaction. Our platform 
              connects buyers and sellers in a safe, intuitive environment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
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
