'use client';

import { useEffect, useState, useRef } from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const phoneNumber = '01557691897';

  const handleServiceClick = (serviceName: string) => {
    const message = `Hello! I'm interested in the ${serviceName} service. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      icon: '💼',
      title: 'Portfolio Development',
      description: 'Professional portfolios for everyone - 3-5 pages, fully responsive design',
      features: [
        '3-5 Professional Pages',
        'Fully Responsive Design',
        'Modern UI/UX',
        'Price: $500 - $800'
      ]
    },
    {
      icon: '🏢',
      title: 'Business Websites',
      description: 'Professional websites for companies and businesses - 5-8 pages with live chat',
      features: [
        '5-8 Professional Pages',
        'Live Chat Integration',
        'Business-Ready Design',
        'Price: $1000 - $1800'
      ]
    },
    {
      icon: '🛒',
      title: 'E-Commerce Store',
      description: 'Complete online store with payment gateways like PayPal and full dashboard control',
      features: [
        'Payment Gateway Integration',
        'Admin Dashboard Control',
        'Inventory Management',
        'Price: $2000 - $3000'
      ]
    },
    {
      icon: '🎓',
      title: 'Educational Platform',
      description: 'Complete educational website with payment gateways, lesson management, teacher control, and assignments',
      features: [
        'Payment Gateway Integration',
        'Lesson & Course Management',
        'Teacher & Student Dashboard',
        'Assignments & Homework System',
        'Price: $1500 - $2500'
      ]
    },
    {
      icon: '🏘️',
      title: 'Real Estate Website',
      description: 'Professional property website for agencies or individuals selling or renting properties',
      features: [
        'Property Listings Management',
        'Image Galleries & Virtual Tours',
        'Contact Forms & Inquiries',
        'Map Integration',
        'Price: $1800 - $2800'
      ]
    },
    {
      icon: '🤝',
      title: 'NGO / Organization Website',
      description: 'Professional websites for charities, non-profits, and social projects',
      features: [
        'Donation System Integration',
        'Volunteer Registration Form',
        'Blog & News Section',
        'Event Management',
        'Price: $1000 - $2000'
      ]
    },
    {
      icon: '📰',
      title: 'News / Blog Website',
      description: 'Professional platform for content creators, bloggers, and online magazines',
      features: [
        'Categories & Tags System',
        'Comments & Engagement',
        'Post Management Dashboard',
        'SEO Optimized Content',
        'Price: $800 - $1500'
      ]
    },
    {
      icon: '⚙️',
      title: 'Custom Advanced Web Application',
      description: 'For large businesses or unique ideas - booking systems, dashboards, or AI-integrated platforms',
      features: [
        'Fully Customized Solutions',
        'Booking & Reservation Systems',
        'Advanced Dashboards',
        'AI Integration Available',
        'Price: $2500 - $5000+'
      ]
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.5)) drop-shadow(0 2px 8px rgba(147, 51, 234, 0.4))'
              }}
            >Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.title)}
              className={`group relative backdrop-blur-md bg-white/20 dark:bg-gray-800/20 rounded-2xl p-8 border border-white/30 dark:border-gray-700/30 transition-all duration-500 cursor-pointer hover:-translate-y-4 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                boxShadow: activeService === index 
                  ? '0 25px 50px -12px rgba(59, 130, 246, 0.8), 0 15px 30px -10px rgba(147, 51, 234, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Colored Shadow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-20 blur-xl scale-110"></div>
              
              {/* Icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-500"
                  >
                    <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 mr-2 mt-1 transition-colors duration-500">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Enhanced Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-purple-400 blur-2xl opacity-20 animate-pulse"></div>
                  <div className="absolute bottom-0 right-1/2 w-32 h-32 translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-purple-400 to-pink-400 blur-2xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
