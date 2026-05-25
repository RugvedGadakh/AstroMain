import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-dusk border-t border-saffron/15 pt-16 pb-8 overflow-hidden">
      {/* Decorative chakra */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-5 text-9xl flex items-center justify-center pointer-events-none select-none text-slate" style={{ transform: 'translate(30%, -30%)' }}>
        ☸
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-lg font-cinzel font-bold text-white shadow-sm">ॐ</div>
              <div>
                <div className="font-cinzel text-lg font-bold text-slate">AstroVision</div>
                <div className="text-saffron text-xs tracking-widest font-semibold">{t('nav_vedic_astrology')}</div>
              </div>
            </div>
            <p className="text-slate/60 text-sm leading-relaxed mb-6">
              {t('footer_brand_desc')}
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaYoutube />, href: '#' },
                { icon: <FaWhatsapp />, href: '#' }
              ].map((item, i) => (
                <a key={i} href={item.href} className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-sm text-slate/75 hover:border-saffron hover:bg-saffron/15 hover:text-saffron transition-all duration-300">{item.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-slate font-bold mb-5 text-sm tracking-widest uppercase">{t('footer_quick_links')}</h4>
            <ul className="space-y-3">
              {[[
                '/', t('nav_home')], 
                ['/services', t('nav_services')], 
                ['/shop', t('nav_shop')], 
                ['/booking', t('booking_title')], 
                ['/about', t('footer_about_vishal')], 
                ['/contact', t('footer_contact_us')]
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-slate/60 hover:text-saffron text-sm transition-colors duration-300 flex items-center gap-2 font-medium">
                    <span className="w-1 h-1 rounded-full bg-saffron/50"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cinzel text-slate font-bold mb-5 text-sm tracking-widest uppercase">{t('footer_services')}</h4>
            <ul className="space-y-3">
              {[
                ['Kundali Analysis', t('services.1.title', { defaultValue: 'Kundali Analysis' })],
                ['Horoscope Reading', t('services.4.title', { defaultValue: 'Horoscope Reading' })],
                ['Gemstone Advice', t('services.2.title', { defaultValue: 'Gemstone Advice' })],
                ['Vastu Shastra', t('services.3.title', { defaultValue: 'Vastu Shastra' })],
                ['Numerology', t('services.4.title', { defaultValue: 'Numerology' })],
                ['Spiritual Healing', t('services.5.title', { defaultValue: 'Spiritual Healing' })],
                ['Tarot Reading', t('services.6.title', { defaultValue: 'Tarot Reading' })]
              ].map(([key, value]) => (
                <li key={key}>
                  <Link to="/services" className="text-slate/60 hover:text-saffron text-sm transition-colors duration-300 flex items-center gap-2 font-medium">
                    <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-slate font-bold mb-5 text-sm tracking-widest uppercase">{t('footer_contact')}</h4>
            <div className="space-y-4">
              {[
                [<FiPhone className="mt-0.5" />, '+91 98765 43210', 'tel:+919876543210'],
                [<FiMail className="mt-0.5" />, 'info@astrovision.in', 'mailto:info@astrovision.in'],
                [<FiMapPin className="mt-0.5" />, t('contact_map_city', { defaultValue: 'Pune, Maharashtra, India' }), '#'],
                [<FiClock className="mt-0.5" />, t('contact_label_hours', { defaultValue: 'Mon–Sat: 9 AM – 7 PM' }), '#'],
              ].map(([icon, text, href]) => (
                <a key={typeof text === 'string' ? text : 'contact-item'} href={href} className="flex items-start gap-3 group">
                  <span className="text-saffron mt-0.5">{icon}</span>
                  <span className="text-slate/60 text-sm group-hover:text-slate/90 transition-colors font-medium">{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate/40 text-xs">{t('footer_rights')}</p>
          <div className="flex gap-6">
            {[[t('footer_privacy'), 'Privacy Policy'], [t('footer_terms'), 'Terms of Service'], [t('footer_refund'), 'Refund Policy']].map(([label, key]) => (
              <a key={key} href="#" className="text-slate/40 text-xs hover:text-saffron transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

