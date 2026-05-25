import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-dusk border-t border-saffron/15 pt-16 pb-8 overflow-hidden">
      {/* Decorative chakra */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-5 text-9xl flex items-center justify-center pointer-events-none select-none text-slate" style={{ transform: 'translate(30%, -30%)' }}>
=======

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-saffron/20 pt-16 pb-8 overflow-hidden">
      {/* Decorative chakra */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-5 text-9xl flex items-center justify-center pointer-events-none select-none" style={{ transform: 'translate(30%, -30%)' }}>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
        ☸
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
<<<<<<< HEAD
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-lg font-cinzel font-bold text-white shadow-sm">ॐ</div>
              <div>
                <div className="font-cinzel text-lg font-bold text-slate">AstroVision</div>
                <div className="text-saffron text-xs tracking-widest font-semibold">VEDIC ASTROLOGY</div>
              </div>
            </div>
            <p className="text-slate/60 text-sm leading-relaxed mb-6">
              Guiding souls since 2006. Ancient Vedic wisdom meets modern life — for clarity, prosperity & spiritual growth.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaYoutube />, href: '#' },
                { icon: <FaWhatsapp />, href: '#' }
              ].map((item, i) => (
                <a key={i} href={item.href} className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-sm text-slate/75 hover:border-saffron hover:bg-saffron/15 hover:text-saffron transition-all duration-300">{item.icon}</a>
=======
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-lg font-cinzel font-bold text-black">ॐ</div>
              <div>
                <div className="font-cinzel text-lg font-bold text-white">AstroVision</div>
                <div className="text-gold text-xs tracking-widest">VEDIC ASTROLOGY</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Guiding souls since 2006. Ancient Vedic wisdom meets modern life — for clarity, prosperity & spiritual growth.
            </p>
            <div className="flex gap-4">
              {['📘', '📸', '▶️', '💬'].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-sm hover:border-saffron hover:bg-saffron/10 transition-all duration-300">{icon}</a>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
<<<<<<< HEAD
            <h4 className="font-cinzel text-slate font-bold mb-5 text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/services', 'Services'], ['/shop', 'Shop'], ['/booking', 'Book Appointment'], ['/about', 'About Vishal ji'], ['/contact', 'Contact Us']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-slate/60 hover:text-saffron text-sm transition-colors duration-300 flex items-center gap-2 font-medium">
=======
            <h4 className="font-cinzel text-white font-bold mb-5 text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/services', 'Services'], ['/shop', 'Shop'], ['/booking', 'Book Appointment'], ['/about', 'About Vishal ji'], ['/contact', 'Contact Us']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/50 hover:text-saffron text-sm transition-colors duration-300 flex items-center gap-2">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
                    <span className="w-1 h-1 rounded-full bg-saffron/50"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
<<<<<<< HEAD
            <h4 className="font-cinzel text-slate font-bold mb-5 text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-3">
              {['Kundali Analysis', 'Horoscope Reading', 'Gemstone Advice', 'Vastu Shastra', 'Numerology', 'Spiritual Healing', 'Tarot Reading'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-slate/60 hover:text-saffron text-sm transition-colors duration-300 flex items-center gap-2 font-medium">
=======
            <h4 className="font-cinzel text-white font-bold mb-5 text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-3">
              {['Kundali Analysis', 'Horoscope Reading', 'Gemstone Advice', 'Vastu Shastra', 'Numerology', 'Spiritual Healing', 'Tarot Reading'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-white/50 hover:text-saffron text-sm transition-colors duration-300 flex items-center gap-2">
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
                    <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
<<<<<<< HEAD
            <h4 className="font-cinzel text-slate font-bold mb-5 text-sm tracking-widest uppercase">Contact</h4>
            <div className="space-y-4">
              {[
                [<FiPhone className="mt-0.5" />, '+91 98765 43210', 'tel:+919876543210'],
                [<FiMail className="mt-0.5" />, 'info@astrovision.in', 'mailto:info@astrovision.in'],
                [<FiMapPin className="mt-0.5" />, 'Pune, Maharashtra, India', '#'],
                [<FiClock className="mt-0.5" />, 'Mon–Sat: 9 AM – 7 PM', '#'],
              ].map(([icon, text, href]) => (
                <a key={text} href={href} className="flex items-start gap-3 group">
                  <span className="text-saffron mt-0.5">{icon}</span>
                  <span className="text-slate/60 text-sm group-hover:text-slate/90 transition-colors font-medium">{text}</span>
=======
            <h4 className="font-cinzel text-white font-bold mb-5 text-sm tracking-widest uppercase">Contact</h4>
            <div className="space-y-4">
              {[
                ['📞', '+91 98765 43210', 'tel:+919876543210'],
                ['📧', 'info@astrovision.in', 'mailto:info@astrovision.in'],
                ['📍', 'Pune, Maharashtra, India', '#'],
                ['⏰', 'Mon–Sat: 9 AM – 7 PM', '#'],
              ].map(([icon, text, href]) => (
                <a key={text} href={href} className="flex items-start gap-3 group">
                  <span className="text-saffron mt-0.5">{icon}</span>
                  <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors">{text}</span>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
<<<<<<< HEAD
          <p className="text-slate/40 text-xs">© 2024 AstroVision. All Rights Reserved. | Designed with 🙏 & Devotion</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(t => (
              <a key={t} href="#" className="text-slate/40 text-xs hover:text-saffron transition-colors">{t}</a>
=======
          <p className="text-white/30 text-xs">© 2024 AstroVision. All Rights Reserved. | Designed with 🙏 & Devotion</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(t => (
              <a key={t} href="#" className="text-white/30 text-xs hover:text-saffron transition-colors">{t}</a>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
