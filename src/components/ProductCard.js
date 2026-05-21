import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { StarRating } from './UI';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="group bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-saffron/30 transition-all duration-500 card-glow flex flex-col">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden" style={{ height: '220px' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
        />
        <div className="hidden w-full h-full bg-gradient-to-br from-saffron/20 to-gold/20 items-center justify-center text-5xl">💎</div>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge && (
            <span className="bg-saffron text-black text-xs font-bold px-2.5 py-1 rounded-full font-lato">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-black/80 text-gold text-xs font-bold px-2.5 py-1 rounded-full border border-gold/30">
              -{discount}%
            </span>
          )}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
          <Link to={`/product/${product.id}`} className="text-white text-xs font-lato tracking-widest uppercase border-b border-white/60 hover:border-saffron hover:text-saffron transition-colors">
            View Details
          </Link>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-playfair text-white font-semibold text-base mb-1 leading-snug group-hover:text-saffron transition-colors duration-300">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} />
          <span className="text-white/40 text-xs">({product.reviews})</span>
        </div>
        <p className="text-white/40 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{product.description}</p>
        {/* Price */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-saffron font-cinzel font-bold text-lg">₹{product.price.toLocaleString()}</span>
          <span className="text-white/30 text-sm line-through">₹{product.originalPrice.toLocaleString()}</span>
        </div>
        <button
          onClick={() => addItem(product)}
          className="w-full py-2.5 bg-gradient-to-r from-saffron/20 to-gold/20 border border-saffron/40 text-saffron font-lato text-sm font-bold rounded-xl hover:from-saffron hover:to-gold hover:text-black hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
