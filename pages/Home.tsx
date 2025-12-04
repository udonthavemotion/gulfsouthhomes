import React, { useEffect, useRef } from 'react';
import { COMPANY_INFO, MOCK_HOMES, TESTIMONIALS } from '../constants';
import Button from '../components/Button';
import HomeCard from '../components/HomeCard';
import { Award, Truck, Wrench, DollarSign, Map, ShieldCheck, Star, ArrowRight, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredHomes = MOCK_HOMES.filter(h => h.isFeatured).slice(0, 3);
  const heroRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      {/* Hero Section - Cinematic */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/video/catalog-hero.mp4" type="video/mp4" />
          </video>
          {/* Multi-layer gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/50 via-transparent to-stone-900/50"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Louisiana's Trusted Home Dealer Since {COMPANY_INFO.founded}
            </div>

            {/* Main Headline */}
            <h1 
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <span className="block">Delivered Fast.</span>
              <span className="block mt-2 bg-gradient-to-r from-emerald-300 via-primary to-emerald-400 bg-clip-text text-transparent">
                Built to Last.
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg sm:text-xl md:text-2xl text-stone-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              Quality manufactured & modular homes for Louisiana families. 
              Find your dream home today.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: '700ms' }}
            >
              <Button variant="primary" to="/catalog" size="lg" className="shadow-glow">
                Explore Our Homes
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" to="/contact" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                Schedule a Visit
              </Button>
            </div>

            {/* Trust Indicators */}
            <div 
              className="mt-16 flex flex-wrap justify-center gap-8 text-stone-400 text-sm animate-fade-in"
              style={{ animationDelay: '900ms' }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                <span>BBB Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={18} className="text-primary" />
                <span>30+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-primary" />
                <span>Family Owned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-2.5 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Grid */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-50 to-transparent pointer-events-none"></div>
        
        <div className="container relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Why Gulf South Homes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              More Than Just a Home Dealer
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              We're a family business built on trust, quality, and community. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <Award size={28} />, title: "Family Owned", desc: "Local values & personal service since 1995", color: "from-emerald-500 to-teal-600" },
              { icon: <Truck size={28} />, title: "Delivery & Setup", desc: "Professional installation included with every home", color: "from-blue-500 to-indigo-600" },
              { icon: <DollarSign size={28} />, title: "Easy Financing", desc: "FHA, VA, USDA & conventional loans available", color: "from-amber-500 to-orange-600" },
              { icon: <Wrench size={28} />, title: "Parts & Service", desc: "In-house support team for ongoing care", color: "from-rose-500 to-pink-600" },
              { icon: <Map size={28} />, title: "Land & Home", desc: "Turnkey packages with land included", color: "from-violet-500 to-purple-600" },
              { icon: <ShieldCheck size={28} />, title: "Top Brands", desc: "Champion, Sunshine, Franklin & more", color: "from-cyan-500 to-blue-600" },
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="scroll-animate group p-6 lg:p-8 bg-white rounded-2xl border border-stone-100 hover:border-stone-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-stone-900 text-xl mb-2">{feature.title}</h3>
                <p className="text-stone-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Homes */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6 scroll-animate">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Featured Models
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-3">
                Popular Floor Plans
              </h2>
              <p className="text-stone-600 text-lg max-w-xl">
                Explore our most-loved home designs, handpicked for Louisiana families.
              </p>
            </div>
            <Link 
              to="/catalog" 
              className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl font-semibold hover:bg-primary transition-colors group"
            >
              View All Homes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredHomes.map((home, idx) => (
              <div key={home.id} className="scroll-animate" style={{ transitionDelay: `${idx * 100}ms` }}>
                <HomeCard home={home} />
              </div>
            ))}
          </div>
          
          <div className="mt-10 lg:hidden scroll-animate">
            <Button to="/catalog" fullWidth size="lg">
              View All Homes
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Design */}
      <section className="py-20 sm:py-28 bg-stone-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 text-sm font-semibold rounded-full mb-4">
              Customer Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              What Our Neighbors Say
            </h2>
            <p className="text-stone-400 text-lg max-w-xl mx-auto">
              Trusted by families across South Louisiana for over 30 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={i} 
                className="scroll-animate bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star key={r} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
                  "{t.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-stone-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dramatic */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-700 to-teal-800"></div>
        {/* Decorative overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Find Your
              <br />
              <span className="text-emerald-200">Dream Home?</span>
            </h2>
            <p className="text-xl text-emerald-100/90 mb-10 max-w-2xl mx-auto">
              Visit our lot in Houma or give us a call. Our family is ready to help yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Play size={18} className="text-primary ml-0.5" />
                </span>
                Call {COMPANY_INFO.phone}
              </a>
              <Button 
                variant="outline" 
                to="/contact" 
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white"
              >
                Get Directions
                <ChevronRight size={18} className="ml-1" />
              </Button>
            </div>

            <p className="mt-10 text-emerald-200/70 text-sm">
              📍 {COMPANY_INFO.address}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
