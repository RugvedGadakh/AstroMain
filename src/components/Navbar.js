import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
<<<<<<< HEAD
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
=======
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/shop', label: 'Shop' },
    { to: '/booking', label: 'Book Now' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
<<<<<<< HEAD
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${scrolled ? 'bg-dawn/90 border-b border-saffron/15 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-lg font-cinzel font-bold text-white shadow-md group-hover:animate-glow-pulse">
              ॐ
            </div>
            <div>
              <div className="font-cinzel text-lg font-bold text-slate leading-none">AstroVision</div>
              <div className="text-saffron text-xs font-lato tracking-widest font-semibold">VEDIC ASTROLOGY</div>
=======
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${scrolled ? 'bg-black/90 border-b border-saffron/20 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-lg font-cinzel font-bold text-black shadow-lg group-hover:animate-glow-pulse">
              ॐ
            </div>
            <div>
              <div className="font-cinzel text-lg font-bold text-white leading-none">AstroVision</div>
              <div className="text-gold text-xs font-lato tracking-widest">VEDIC ASTROLOGY</div>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
<<<<<<< HEAD
                className={`font-lato text-sm tracking-wide transition-all duration-300 hover:text-saffron relative group font-semibold ${location.pathname === link.to ? 'text-saffron' : 'text-slate/80'}`}
=======
                className={`font-lato text-sm tracking-wide transition-all duration-300 hover:text-saffron relative group ${location.pathname === link.to ? 'text-saffron' : 'text-white/80'}`}
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-saffron transition-all duration-300 ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative group">
<<<<<<< HEAD
              <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate/80 hover:border-saffron hover:text-saffron transition-all duration-300">
                <FiShoppingCart className="text-lg" />
              </div>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-saffron rounded-full text-xs text-white font-bold flex items-center justify-center animate-bounce animate-duration-1000">
=======
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:border-saffron hover:text-saffron transition-all duration-300">
                🛒
              </div>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-saffron rounded-full text-xs text-white font-bold flex items-center justify-center animate-bounce">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
                  {count}
                </span>
              )}
            </Link>
<<<<<<< HEAD
            <Link to="/booking" className="hidden md:block bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-saffron/20 transition-all duration-300 hover:scale-105">
              Book Now
            </Link>
            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate text-xl p-2 flex items-center justify-center">
              {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
=======
            <Link to="/booking" className="hidden md:block bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-saffron/40 transition-all duration-300 hover:scale-105">
              Book Now
            </Link>
            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-xl p-2">
              {menuOpen ? '✕' : '☰'}
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
<<<<<<< HEAD
      <div className={`fixed inset-0 z-40 bg-dawn/98 nav-blur transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} style={{ top: 0, paddingTop: '80px' }}>
=======
      <div className={`fixed inset-0 z-40 bg-black/95 nav-blur transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} style={{ top: 0, paddingTop: '80px' }}>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
<<<<<<< HEAD
              className={`font-cinzel text-2xl font-bold transition-all duration-300 hover:text-saffron ${location.pathname === link.to ? 'text-saffron' : 'text-slate'}`}
=======
              className={`font-cinzel text-2xl font-bold transition-all duration-300 hover:text-saffron ${location.pathname === link.to ? 'text-saffron' : 'text-white'}`}
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            >
              {link.label}
            </Link>
          ))}
<<<<<<< HEAD
          <Link to="/booking" className="mt-4 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold text-lg px-8 py-3 rounded-full shadow-md">
=======
          <Link to="/booking" className="mt-4 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold text-lg px-8 py-3 rounded-full">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
