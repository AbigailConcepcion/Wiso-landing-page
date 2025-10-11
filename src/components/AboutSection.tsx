'use client';

import { useEffect, useState, useRef } from 'react';

interface Star {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, countries: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate stars on client side only to avoid hydration mismatch
    const generatedStars = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop) {
            setActiveIndex(index);
          }
        }
      });

      if (statsRef.current && !hasAnimated) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setHasAnimated(true);
          animateCounters();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.floor(100 * progress),
        clients: Math.floor(50 * progress),
        countries: Math.floor(3 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters({ projects: 100, clients: 50, countries: 3 });
      }
    }, interval);
  };

  const timelineItems = [
    {
      number: 1,
      title: 'Who We Are',
      description: 'We are a <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">professional web solutions</span> company that helps <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">entrepreneurs</span> and <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">organizations</span> grow their businesses through modern, responsive, and <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">result-driven websites</span>.'
    },
    {
      number: 2,
      title: 'Our Mission',
      description: 'To help clients go from <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">ideas</span> to <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">impactful online success</span>. We combine <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">creativity</span>, <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">technology</span>, and <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">strategy</span> to deliver websites that attract, engage, and convert visitors into customers.'
    },
    {
      number: 3,
      title: 'Global Reach',
      description: 'Serving clients in <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">Cameroon</span>, <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">USA</span>, and beyond with <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">international service standards</span>. We understand diverse markets and deliver solutions that work across borders.'
    },
    {
      number: 4,
      title: 'Professional Excellence',
      description: 'Our team of <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">skilled developers</span> and <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">designers</span> ensures every project is completed <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">on time</span> with the <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">highest quality standards</span>.'
    },
    {
      number: 5,
      title: 'Flexible Solutions',
      description: 'We offer <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">flexible payment options</span> including <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">Mobile Money</span>, <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">Chipper Cash</span>, and <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">Eversend</span>, making it easy for clients worldwide to work with us.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            About <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.5)) drop-shadow(0 2px 8px rgba(147, 51, 234, 0.4))'
              }}
            >WISO</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Websites International Service Organization
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <div 
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transition-all duration-500"
              style={{ 
                height: `${(activeIndex / (timelineItems.length - 1)) * 100}%`,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(147, 51, 234, 0.4)'
              }}
            ></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className="relative pl-20"
                >
                  <div 
                    className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transform transition-all duration-500 ${
                      index <= activeIndex
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white scale-110'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 shadow-lg'
                    }`}
                    style={
                      index <= activeIndex
                        ? {
                            boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.6), 0 10px 20px -5px rgba(147, 51, 234, 0.4)'
                          }
                        : {}
                    }
                  >
                    {item.number}
                  </div>

                  <div 
                    className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border transform transition-all duration-500 ${
                      index <= activeIndex
                        ? 'border-blue-500 dark:border-blue-400 -translate-y-4'
                        : 'border-gray-100 dark:border-gray-700 shadow-lg'
                    }`}
                    style={
                      index <= activeIndex
                        ? {
                            boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5), 0 15px 30px -10px rgba(147, 51, 234, 0.3)'
                          }
                        : {}
                    }
                  >
                    {index <= activeIndex && (
                      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 animate-spin-slow">
                          <div className="absolute top-0 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50"></div>
                        </div>
                      </div>
                    )}
                    <h3 
                      className="text-2xl md:text-3xl font-bold mb-4"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        {item.title}
                      </span>
                    </h3>
                    <p 
                      className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                      style={{ fontFamily: "'Lora', serif" }}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters.projects}+
              </div>
              <div className="text-white/90 text-sm md:text-base">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters.clients}+
              </div>
              <div className="text-white/90 text-sm md:text-base">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters.countries}+
              </div>
              <div className="text-white/90 text-sm md:text-base">
                Countries Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-white/90 text-sm md:text-base">
                Support Available
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}