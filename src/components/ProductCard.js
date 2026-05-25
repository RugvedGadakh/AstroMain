import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import { StarRating } from './UI';
import { FaGem } from 'react-icons/fa';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { t } = useTranslation();
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  const productName = t(`products.${product.id}.name`, { defaultValue: product.name });
  const productDesc = t(`products.${product.id}.description`, { defaultValue: product.description });
  const productBadge = product.badge ? t(`products.${product.id}.badge`, { defaultValue: product.badge }) : '';

  return (
    <div className="group bg-cream border border-slate-200/60 rounded-2xl overflow-hidden hover:border-saffron/40 transition-all duration-500 shadow-sm card-glow flex flex-col">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden" style={{ height: '220px' }}>
        <img
          src={product.image}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
        />
        <div className="hidden w-full h-full bg-gradient-to-br from-saffron/20 to-gold/20 items-center justify-center text-5xl text-saffron/40"><FaGem /></div>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge && (
            <span className="bg-saffron text-white text-xs font-bold px-2.5 py-1 rounded-full font-lato shadow-sm">
              {productBadge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-slate text-[#FDFBF7] text-xs font-bold px-2.5 py-1 rounded-full border border-slate/30 shadow-sm">
              -{discount}%
            </span>
          )}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-slate/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
          <Link to={`/product/${product.id}`} className="text-white text-xs font-lato tracking-widest uppercase border-b border-white/60 hover:border-saffron hover:text-saffron transition-colors">
            {t('btn_view_details')}
          </Link>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-playfair text-slate font-semibold text-base mb-1 leading-snug group-hover:text-saffron transition-colors duration-300">
          <Link to={`/product/${product.id}`}>{productName}</Link>
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} />
          <span className="text-slate/40 text-xs">({product.reviews})</span>
        </div>
        <p className="text-slate/60 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{productDesc}</p>
        {/* Price */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-saffron font-cinzel font-bold text-lg">₹{product.price.toLocaleString()}</span>
          <span className="text-slate/30 text-sm line-through">₹{product.originalPrice.toLocaleString()}</span>
        </div>
        <button
          onClick={() => addItem(product)}
          className="w-full py-2.5 bg-saffron/10 border border-saffron/30 text-saffron font-lato text-sm font-bold rounded-xl hover:bg-saffron hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-saffron/20"
        >
          {t('btn_add_to_cart')}
        </button>
      </div>
    </div>
  );
}

