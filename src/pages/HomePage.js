import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, testimonials, stats, products } from '../data/products';
import { SectionTitle, StarRating } from '../components/UI';
import ProductCard from '../components/ProductCard';
<<<<<<< HEAD
import { FiUsers, FiCalendar, FiTarget, FiSun, FiArrowRight, FiPhone, FiCompass, FiHome, FiHash, FiHeart, FiLayers } from 'react-icons/fi';
import { FaStar, FaGem, FaTrophy } from 'react-icons/fa';

const renderStatIcon = (iconName) => {
  switch (iconName) {
    case 'users': return <FiUsers className="text-saffron text-3xl mx-auto mb-2" />;
    case 'calendar': return <FiCalendar className="text-saffron text-3xl mx-auto mb-2" />;
    case 'target': return <FiTarget className="text-saffron text-3xl mx-auto mb-2" />;
    case 'trophy': return <FaTrophy className="text-saffron text-3xl mx-auto mb-2" />;
    default: return null;
  }
};

const renderServiceIcon = (iconName, className = "") => {
  switch (iconName) {
    case 'compass': return <FiCompass className={className} />;
    case 'gem': return <FaGem className={className} />;
    case 'home': return <FiHome className={className} />;
    case 'hash': return <FiHash className={className} />;
    case 'heart': return <FiHeart className={className} />;
    case 'layers': return <FiLayers className={className} />;
    default: return null;
  }
};

// Stars background with soft sunset/orange particles
=======

// Stars background
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
const Stars = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 80 }).map((_, i) => (
      <div
        key={i}
<<<<<<< HEAD
        className="absolute rounded-full bg-saffron/40"
        style={{
          width: Math.random() > 0.8 ? '3px' : '1.5px',
          height: Math.random() > 0.8 ? '3px' : '1.5px',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.6 + 0.1,
=======
        className="absolute rounded-full bg-white"
        style={{
          width: Math.random() > 0.8 ? '2px' : '1px',
          height: Math.random() > 0.8 ? '2px' : '1px',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.7 + 0.1,
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
          animation: `glowPulse ${2 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite`,
        }}
      />
    ))}
  </div>
);

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section className="relative min-h-screen hero-bg overflow-hidden flex items-center">
      <Stars />

      {/* Radial glow rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-saffron/10 animate-spin-slow opacity-40"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-gold/15" style={{ animation: 'spin 15s linear infinite reverse' }}></div>
        <div className="absolute w-[200px] h-[200px] rounded-full border border-saffron/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Text */}
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
<<<<<<< HEAD
          <div className="inline-flex items-center gap-2 border border-saffron/20 bg-saffron/10 rounded-full px-4 py-2 mb-6">
            <FiSun className="text-gold text-sm animate-spin-slow" />
            <span className="text-slate/85 text-sm font-lato tracking-widest uppercase font-semibold">Trusted by 50,000+ Souls</span>
            <FiSun className="text-gold text-sm animate-spin-slow" />
          </div>

          <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-black text-slate leading-tight mb-6">
            Unlock Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-gold to-saffron">
=======
          <div className="inline-flex items-center gap-2 border border-saffron/30 bg-saffron/10 rounded-full px-4 py-2 mb-6">
            <span className="text-gold text-sm">✦</span>
            <span className="text-white/70 text-sm font-lato tracking-widest uppercase">Trusted by 50,000+ Souls</span>
            <span className="text-gold text-sm">✦</span>
          </div>

          <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Unlock Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-gold to-saffron glow-text">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              Cosmic Destiny
            </span>
          </h1>

<<<<<<< HEAD
          <p className="text-slate/75 font-lato text-lg leading-relaxed mb-8 max-w-lg">
=======
          <p className="text-white/60 font-lato text-lg leading-relaxed mb-8 max-w-lg">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            Ancient Vedic wisdom, personalized for your modern journey. Expert consultations in astrology, Vastu & spiritual healing — by Pandit Vishal Tarte.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
<<<<<<< HEAD
            <Link to="/booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105 text-base">
              Book Consultation <FiArrowRight />
            </Link>
            <Link to="/shop" className="inline-flex items-center gap-2 border border-slate-300 text-slate font-lato font-semibold px-8 py-4 rounded-full hover:border-saffron hover:text-saffron transition-all duration-300 text-base">
              Explore Shop <FiArrowRight />
=======
            <Link to="/booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-saffron/40 transition-all duration-300 hover:scale-105 text-base">
              ✦ Book Consultation
            </Link>
            <Link to="/shop" className="inline-flex items-center gap-2 border border-white/20 text-white font-lato px-8 py-4 rounded-full hover:border-saffron hover:text-saffron transition-all duration-300 text-base">
              Explore Shop →
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            </Link>
          </div>

          {/* Mini stats */}
          <div className="flex flex-wrap gap-6">
            {[['50K+', 'Clients'], ['18+', 'Years'], ['95%', 'Accuracy']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-cinzel text-2xl font-bold text-saffron">{num}</div>
<<<<<<< HEAD
                <div className="text-slate/50 text-xs font-lato font-medium">{label}</div>
=======
                <div className="text-white/40 text-xs font-lato">{label}</div>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              </div>
            ))}
          </div>
        </div>

        {/* Right: Astrologer Image */}
        <div className={`flex justify-center transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative">
            {/* Glow behind image */}
<<<<<<< HEAD
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron/15 to-gold/15 blur-3xl scale-110 animate-glow-pulse"></div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-saffron/20 animate-spin-slow scale-110"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-saffron/20 shadow-xl">
=======
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron/30 to-gold/20 blur-3xl scale-110 animate-glow-pulse"></div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-saffron/20 animate-spin-slow scale-110"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-saffron/40 shadow-2xl shadow-saffron/20">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              <img
                src="/images/Vishal_Tarte_Img.png"
                alt="Pandit Vishal Tarte"
                className="w-full h-full object-cover object-top"
<<<<<<< HEAD
                onError={e => { e.target.style.background = 'linear-gradient(135deg, #FAF6F0, #F16F45)'; e.target.style.display = 'flex'; }}
=======
                onError={e => { e.target.style.background = 'linear-gradient(135deg, #5D4037, #FF7A00)'; e.target.style.display = 'flex'; }}
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              />
            </div>

            {/* Floating badges */}
<<<<<<< HEAD
            <div className="absolute -top-4 -right-4 bg-cream border border-gold/30 rounded-2xl px-4 py-2 text-center shadow-md animate-float flex flex-col items-center">
              <FaStar className="text-gold text-base mb-1" />
              <div className="text-slate text-xs font-bold">4.9 Stars</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-cream border border-saffron/30 rounded-2xl px-4 py-2 text-center shadow-md flex flex-col items-center" style={{ animation: 'float 6s ease-in-out 3s infinite' }}>
              <FaTrophy className="text-saffron text-base mb-1" />
              <div className="text-slate text-xs font-bold">Award Winner</div>
=======
            <div className="absolute -top-4 -right-4 bg-black/80 border border-gold/40 rounded-2xl px-3 py-2 text-center backdrop-blur-sm animate-float">
              <div className="text-gold text-lg">⭐</div>
              <div className="text-white text-xs font-bold">4.9 Stars</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-black/80 border border-saffron/40 rounded-2xl px-3 py-2 text-center backdrop-blur-sm" style={{ animation: 'float 6s ease-in-out 3s infinite' }}>
              <div className="text-saffron text-lg">🏆</div>
              <div className="text-white text-xs font-bold">Award Winner</div>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
<<<<<<< HEAD
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dawn to-transparent"></div>
=======
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0404] to-transparent"></div>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
    </section>
  );
}

function StatsSection() {
  return (
<<<<<<< HEAD
    <section className="py-16 bg-cream border-y border-saffron/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/background_chakra.jpeg')] bg-center bg-cover opacity-[0.02] pointer-events-none"></div>
=======
    <section className="py-16 bg-gradient-to-r from-black via-maroon/20 to-black border-y border-saffron/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/background_chakra.jpeg')] bg-center bg-cover opacity-5"></div>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
<<<<<<< HEAD
              <div className="mb-2 filter drop-shadow-sm">{renderStatIcon(s.icon)}</div>
              <div className="font-cinzel text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold mb-1">{s.number}</div>
              <div className="text-slate/60 text-sm font-lato tracking-wide uppercase font-semibold text-xs">{s.label}</div>
=======
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-cinzel text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold mb-1">{s.number}</div>
              <div className="text-white/50 text-sm font-lato">{s.label}</div>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
<<<<<<< HEAD
    <section className="py-20 bg-dawn">
=======
    <section className="py-20 bg-[#0a0404]">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle eyebrow="What We Offer" title="Sacred Services" subtitle="Personalized Vedic consultations crafted to illuminate your life path and align you with cosmic energies." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
<<<<<<< HEAD
            <div key={s.id} className="group relative bg-cream border border-slate-200/60 rounded-2xl overflow-hidden hover:border-saffron/40 transition-all duration-500 shadow-sm card-glow cursor-pointer flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="bg-cream/90 text-saffron p-2 rounded-full shadow-md text-xl flex items-center">
                    {renderServiceIcon(s.icon)}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-saffron text-white text-xs font-bold px-2.5 py-1 rounded-full font-lato shadow-sm">{s.duration}</div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-cinzel text-slate font-bold text-lg mb-2 group-hover:text-saffron transition-colors">{s.title}</h3>
                <p className="text-slate/60 text-sm leading-relaxed mb-5 flex-1">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-saffron font-bold text-xl">{s.price}</span>
                  <Link to="/booking" className="text-xs text-saffron border border-saffron/30 px-3.5 py-1.5 rounded-full hover:bg-saffron hover:text-white transition-all duration-300 font-lato font-semibold">
=======
            <div key={s.id} className="group relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-saffron/40 transition-all duration-500 card-glow cursor-pointer">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <div className="absolute top-3 right-3 bg-saffron/90 text-black text-xs font-bold px-2 py-1 rounded-full font-lato">{s.duration}</div>
              </div>
              <div className="p-5">
                <h3 className="font-cinzel text-white font-bold text-lg mb-2 group-hover:text-saffron transition-colors">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-saffron font-bold text-xl">{s.price}</span>
                  <Link to="/booking" className="text-xs text-saffron border border-saffron/40 px-3 py-1.5 rounded-full hover:bg-saffron hover:text-black transition-all duration-300 font-lato">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
<<<<<<< HEAD
          <Link to="/services" className="inline-flex items-center gap-2 border border-saffron/40 text-saffron font-lato px-8 py-3 rounded-full hover:bg-saffron hover:text-white transition-all duration-300 font-semibold shadow-sm">
            View All Services <FiArrowRight />
=======
          <Link to="/services" className="inline-flex items-center gap-2 border border-saffron/40 text-saffron font-lato px-8 py-3 rounded-full hover:bg-saffron hover:text-black transition-all duration-300">
            View All Services →
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = products.slice(0, 6);
  return (
<<<<<<< HEAD
    <section className="py-20 bg-cream border-t border-saffron/10">
=======
    <section className="py-20 bg-gradient-to-b from-[#0a0404] to-[#0f0604]">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle eyebrow="Sacred Store" title="Cosmic Products" subtitle="Authentic gemstones, Rudraksha & spiritual items — energized and certified for maximum benefit." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-10">
<<<<<<< HEAD
          <Link to="/shop" className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105 justify-center">
            Shop All Products <FiArrowRight />
=======
          <Link to="/shop" className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/30 transition-all duration-300 hover:scale-105">
            Shop All Products ✦
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
<<<<<<< HEAD
    <section className="py-20 bg-dawn relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/background_chakra.jpeg')] bg-center bg-contain bg-no-repeat opacity-[0.015] pointer-events-none"></div>
=======
    <section className="py-20 bg-[#0f0604] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/background_chakra.jpeg')] bg-center bg-contain bg-no-repeat opacity-[0.03]"></div>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionTitle eyebrow="Testimonials" title="Voices of Transformation" subtitle="Real stories from souls whose lives were touched by ancient cosmic wisdom." />
        
        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
<<<<<<< HEAD
          <div className="bg-cream border border-slate-200/60 rounded-3xl p-8 text-center relative shadow-sm">
            <div className="text-saffron text-5xl font-cinzel absolute -top-4 left-8 opacity-20">"</div>
            <p className="text-slate/85 font-playfair text-lg italic leading-relaxed mb-6">
=======
          <div className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-saffron/20 rounded-3xl p-8 text-center relative">
            <div className="text-saffron text-5xl font-cinzel absolute -top-4 left-8 opacity-30">"</div>
            <p className="text-white/80 font-playfair text-lg italic leading-relaxed mb-6">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              {testimonials[active].text}
            </p>
            <div className="flex justify-center mb-3">
              <StarRating rating={testimonials[active].rating} />
            </div>
            <div className="flex items-center justify-center gap-3">
<<<<<<< HEAD
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center font-cinzel font-bold text-white text-sm shadow-sm">
                {testimonials[active].avatar}
              </div>
              <div className="text-left">
                <div className="text-slate font-bold font-lato">{testimonials[active].name}</div>
                <div className="text-slate/50 text-sm">{testimonials[active].city} · {testimonials[active].service}</div>
=======
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center font-cinzel font-bold text-black text-sm">
                {testimonials[active].avatar}
              </div>
              <div className="text-left">
                <div className="text-white font-bold font-lato">{testimonials[active].name}</div>
                <div className="text-white/40 text-sm">{testimonials[active].city} · {testimonials[active].service}</div>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
<<<<<<< HEAD
            <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-saffron' : 'w-2 h-2 bg-slate/20 hover:bg-slate/40'}`} />
=======
            <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-saffron' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
<<<<<<< HEAD
    <section className="py-20 bg-cream border-t border-saffron/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-gold/5 pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <p className="text-saffron font-lato text-sm tracking-widest uppercase mb-3 font-semibold">✦ Your Journey Awaits ✦</p>
        <h2 className="font-cinzel text-4xl md:text-5xl font-black text-slate mb-6">Ready to Discover<br />Your Cosmic Truth?</h2>
        <p className="text-slate/65 font-lato text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          One consultation can change everything. Let ancient Vedic astrology guide you to clarity, prosperity & spiritual fulfillment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105 text-lg">
            Book Now – It's Your Time <FiArrowRight />
          </Link>
          <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate font-lato font-semibold px-10 py-4 rounded-full hover:border-saffron hover:text-saffron transition-all duration-300 text-lg">
            <FiPhone /> Call Directly
=======
    <section className="py-20 bg-gradient-to-br from-saffron/10 via-[#0a0404] to-gold/10 border-y border-saffron/10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-saffron font-lato text-sm tracking-widest uppercase mb-3">✦ Your Journey Awaits ✦</p>
        <h2 className="font-cinzel text-4xl md:text-5xl font-black text-white mb-6 glow-text">Ready to Discover<br />Your Cosmic Truth?</h2>
        <p className="text-white/60 font-lato text-lg mb-10 leading-relaxed">
          One consultation can change everything. Let ancient Vedic astrology guide you to clarity, prosperity & spiritual fulfillment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-saffron/40 transition-all duration-300 hover:scale-105 text-lg">
            ✦ Book Now – It's Your Time
          </Link>
          <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-lato px-10 py-4 rounded-full hover:border-saffron hover:text-saffron transition-all duration-300 text-lg">
            📞 Call Directly
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
