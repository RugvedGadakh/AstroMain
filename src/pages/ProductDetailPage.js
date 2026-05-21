import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { StarRating } from '../components/UI';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const related = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  if (!product) return (
    <div className="min-h-screen bg-[#0a0404] flex items-center justify-center pt-24">
      <div className="text-center">
        <div className="text-6xl mb-4">🔮</div>
        <p className="text-white font-cinzel text-2xl mb-4">Product not found</p>
        <Link to="/shop" className="text-saffron hover:underline font-lato">← Back to Shop</Link>
      </div>
    </div>
  );

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-[#0a0404] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/40 text-sm font-lato mb-8">
          <Link to="/" className="hover:text-saffron transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-saffron transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-white/70 capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-white/70">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 to-gold/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <div className="absolute top-5 left-5 bg-saffron text-black font-bold text-sm px-3 py-1.5 rounded-full">{product.badge}</div>
              )}
              {discount > 0 && (
                <div className="absolute top-5 right-5 bg-black/80 border border-gold/40 text-gold font-bold text-sm px-3 py-1.5 rounded-full">-{discount}% OFF</div>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="text-saffron text-xs font-lato tracking-widest uppercase bg-saffron/10 border border-saffron/20 px-3 py-1 rounded-full">{product.category}</span>
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white mt-4 mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} />
              <span className="text-white/50 text-sm font-lato">({product.reviews} reviews)</span>
              <span className="text-gold text-sm font-bold">{product.rating} ★</span>
            </div>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-cinzel text-4xl font-black text-saffron">₹{product.price.toLocaleString()}</span>
              <span className="text-white/30 text-xl line-through font-lato">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-0.5 rounded">You save ₹{(product.originalPrice - product.price).toLocaleString()}</span>
            </div>

            <p className="text-white/60 font-lato leading-relaxed mb-6">{product.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                product.weight && ['Weight', product.weight],
                product.origin && ['Origin', product.origin],
                product.certification && ['Certified', product.certification],
                product.material && ['Material', product.material],
                product.size && ['Size', product.size],
                product.beads && ['Beads', `${product.beads} Mukhi`],
              ].filter(Boolean).map(([label, value]) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <div className="text-white/40 text-xs font-lato mb-1">{label}</div>
                  <div className="text-white font-bold text-sm font-lato">{value}</div>
                </div>
              ))}
            </div>

            {/* Qty + Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-12 text-white hover:bg-white/10 transition-colors text-lg font-bold">−</button>
                <span className="w-12 text-center text-white font-bold font-lato">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-10 h-12 text-white hover:bg-white/10 transition-colors text-lg font-bold">+</button>
              </div>
              <button
                onClick={() => { for(let i = 0; i < qty; i++) addItem(product); }}
                className="flex-1 py-3.5 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/30 transition-all duration-300 hover:scale-105"
              >
                Add to Cart 🛒
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['✓ 100% Authentic', '✓ Certified', '✓ Free Shipping ₹999+', '✓ Easy Returns'].map(badge => (
                <span key={badge} className="text-green-400/80 text-xs font-lato border border-green-400/20 bg-green-400/5 px-3 py-1.5 rounded-full">{badge}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-cinzel text-2xl font-bold text-white mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
