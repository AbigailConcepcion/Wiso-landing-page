'use client';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-screen overflow-hidden" style={{ height: '650px' }}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/herosection.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Welcome to{' '}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient text-3xl md:text-5xl lg:text-6xl inline-block"
              style={{ fontFamily: "'Imperial Script', cursive" }}
            >
              Wiso
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 500 }}
          >
            International Services Organization providing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
              Digital Solutions
            </span>
            ,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              Web Design
            </span>
            , and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-semibold">
              Innovative Services
            </span>
            {' '}for your business growth
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white">
              <span className="text-sm mb-2">Scroll Down</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}