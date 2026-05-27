import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import { StarRating } from './UI';
import { FiShield } from 'react-icons/fi';

const getGemTheme = (id) => {
  switch (id) {
    case 1: // Ruby
      return {
        glowRgb: '239, 68, 68',
        glowColor: '#EF4444',
        accentClass: 'text-red-400',
        badgeBg: 'bg-red-950/80 text-red-300 border-red-500/30',
        astroName: 'Sun · Leo & Aries',
        ringColor: 'border-red-500/20'
      };
    case 2: // Yellow Sapphire
      return {
        glowRgb: '242, 175, 66',
        glowColor: '#F2AF42',
        accentClass: 'text-gold',
        badgeBg: 'bg-yellow-950/80 text-yellow-300 border-gold/30',
        astroName: 'Jupiter · Sagittarius',
        ringColor: 'border-gold/20'
      };
    case 3: // Blue Sapphire
      return {
        glowRgb: '67, 56, 202',
        glowColor: '#4338CA',
        accentClass: 'text-indigo-400',
        badgeBg: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/30',
        astroName: 'Saturn · Capricorn',
        ringColor: 'border-indigo-500/20'
      };
    case 4: // Amethyst
      return {
        glowRgb: '139, 92, 246',
        glowColor: '#8B5CF6',
        accentClass: 'text-purple-400',
        badgeBg: 'bg-purple-950/80 text-purple-300 border-purple-500/30',
        astroName: 'Saturn · Pisces',
        ringColor: 'border-purple-500/20'
      };
    case 5: // Rose Quartz
      return {
        glowRgb: '236, 72, 153',
        glowColor: '#EC4899',
        accentClass: 'text-pink-400',
        badgeBg: 'bg-pink-950/80 text-pink-300 border-pink-500/30',
        astroName: 'Venus · Taurus & Libra',
        ringColor: 'border-pink-500/20'
      };
    case 6: // Citrine
      return {
        glowRgb: '249, 115, 22',
        glowColor: '#F97316',
        accentClass: 'text-orange-400',
        badgeBg: 'bg-orange-950/80 text-orange-300 border-orange-500/30',
        astroName: 'Sun & Jupiter · Leo',
        ringColor: 'border-orange-500/20'
      };
    default:
      return {
        glowRgb: '242, 175, 66',
        glowColor: '#F2AF42',
        accentClass: 'text-gold',
        badgeBg: 'bg-yellow-950/80 text-yellow-300 border-gold/30',
        astroName: 'Vedic Gemstone',
        ringColor: 'border-gold/20'
      };
  }
};

export default function GemCard({ product }) {
  const { addItem } = useCart();
  const { t } = useTranslation();
  
  const theme = getGemTheme(product.id);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  
  const productName = t(`products.${product.id}.name`, { defaultValue: product.name });
  const productBadge = product.badge ? t(`products.${product.id}.badge`, { defaultValue: product.badge }) : 'Certified';

  return (
    <div 
      className="group relative w-[310px] mx-3 bg-slate border border-gold/15 rounded-3xl p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:border-gold/45 shadow-[0_8px_30px_rgba(0,0,0,0.4)] shine-sweep"
      style={{
        '--gem-glow-rgb': theme.glowRgb,
        boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 15px 40px rgba(${theme.glowRgb}, 0.25), 0 0 15px rgba(${theme.glowRgb}, 0.15)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.4)';
      }}
    >
      {/* Dynamic Aura Background */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 30%, rgba(${theme.glowRgb}, 0.08) 0%, transparent 70%)`
        }}
      />

      {/* Image Area - Full bleed with landscape zoom focused on crystals */}
      <div className="relative w-[calc(100%+2.5rem)] -mx-5 -mt-5 h-[200px] overflow-hidden rounded-t-[22px] mb-4 z-10 bg-black/20">
        <img
          src={product.image}
          alt={productName}
          className="w-full h-full object-cover object-center scale-[1.3] transition-transform duration-700 group-hover:scale-[1.45]"
          onError={e => {
            e.target.src = "/images/Precious Gemstones Service.png"; // Fallback to graphic if path is not loaded
          }}
        />
      </div>

      {/* Eyebrow info */}
      <div className="flex items-center justify-between mb-1 z-10 text-[10px] font-semibold tracking-wider font-jakarta">
        <span className="bg-gold/10 text-gold border border-gold/20 px-2 py-0.5 rounded font-bold uppercase">
          {productBadge}
        </span>
        <span className={`${theme.accentClass} drop-shadow-[0_0_8px_rgba(var(--gem-glow-rgb),0.3)]`}>
          {theme.astroName}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-cinzel text-base font-bold text-dawn group-hover:text-gold transition-colors duration-300 line-clamp-1 mb-1.5 z-10">
        {productName}
      </h3>

      {/* Rating & Certification */}
      <div className="flex items-center justify-between mb-3.5 z-10 text-[10px] font-jakarta">
        <div className="flex items-center gap-1">
          <StarRating rating={product.rating} />
          <span className="text-dawn/40">({product.reviews})</span>
        </div>
        <span className="text-dawn/50 bg-white/5 border border-white/10 px-2 py-0.5 rounded flex items-center gap-1">
          <FiShield className="text-gold text-xs" /> {product.certification}
        </span>
      </div>

      {/* Price section */}
      <div className="flex items-baseline gap-2 mb-4 z-10">
        <span className="text-lg font-cinzel font-bold text-gold">₹{product.price.toLocaleString()}</span>
        <span className="text-xs text-dawn/40 line-through">₹{product.originalPrice.toLocaleString()}</span>
        <span className="ml-auto text-[9px] bg-saffron/15 text-saffron border border-saffron/20 px-1.5 py-0.5 rounded font-bold">
          {discount}% OFF
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 z-10 mt-auto">
        <Link
          to={`/product/${product.id}`}
          className="flex-1 text-center py-2.5 bg-white/5 border border-white/10 text-dawn/75 font-lato text-xs font-bold rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300"
        >
          {t('btn_view_details').split(' ').slice(-1)[0] || 'Details'}
        </Link>
        <button
          onClick={() => addItem(product)}
          className="flex-[2] py-2.5 bg-gradient-to-r from-gold/90 to-saffron/90 text-slate font-lato text-xs font-bold rounded-xl hover:from-gold hover:to-saffron transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-saffron/20 hover:scale-[1.01]"
        >
          {t('btn_add_to_cart')}
        </button>
      </div>
    </div>
  );
}
