import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
<<<<<<< HEAD
import { FiShoppingCart, FiTrash2, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
=======
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc

export default function CartPage() {
  const { items, total, removeItem, updateQty, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) return (
<<<<<<< HEAD
    <div className="min-h-screen bg-dawn pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
      <FiShoppingCart className="text-7xl text-slate/30 mb-6 mx-auto animate-pulse" />
      <h2 className="font-cinzel text-3xl text-slate font-bold mb-3">Your Cart is Empty</h2>
      <p className="text-slate/60 font-lato mb-8">Explore our sacred collection and add items to your cart.</p>
      <Link to="/shop" className="bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 flex items-center gap-2">
        Explore Shop <FiArrowRight />
=======
    <div className="min-h-screen bg-[#0a0404] pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
      <div className="text-7xl mb-6">🛒</div>
      <h2 className="font-cinzel text-3xl text-white font-bold mb-3">Your Cart is Empty</h2>
      <p className="text-white/50 font-lato mb-8">Explore our sacred collection and add items to your cart.</p>
      <Link to="/shop" className="bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/30 transition-all duration-300">
        Explore Shop ✦
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
      </Link>
    </div>
  );

  const shipping = total >= 999 ? 0 : 99;
  const grandTotal = total + shipping;

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-dawn pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-cinzel text-3xl font-bold text-slate">Shopping Cart</h1>
          <button onClick={clearCart} className="text-slate/40 text-sm font-lato hover:text-red-500 transition-colors font-semibold">Clear All</button>
=======
    <div className="min-h-screen bg-[#0a0404] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-cinzel text-3xl font-bold text-white">Shopping Cart</h1>
          <button onClick={clearCart} className="text-white/40 text-sm font-lato hover:text-red-400 transition-colors">Clear All</button>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
<<<<<<< HEAD
              <div key={item.id} className="bg-cream border border-slate-200/50 rounded-2xl p-4 flex gap-4 hover:border-saffron/30 transition-colors shadow-sm">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-playfair text-slate font-semibold text-sm mb-1 leading-snug">{item.name}</h3>
                  <p className="text-slate/50 text-xs font-lato capitalize mb-3">{item.category}</p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-slate/5 border border-slate-200/50 rounded-lg overflow-hidden">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 text-slate hover:bg-slate/10 transition-colors text-base font-bold">−</button>
                      <span className="w-8 text-center text-slate font-bold text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 text-slate hover:bg-slate/10 transition-colors text-base font-bold">+</button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-cinzel text-saffron font-bold">₹{(item.price * item.qty).toLocaleString()}</span>
                      <button onClick={() => removeItem(item.id)} title="Remove item" className="text-slate/40 hover:text-red-500 transition-colors p-1 flex items-center justify-center">
                        <FiTrash2 className="text-lg" />
                      </button>
=======
              <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 hover:border-saffron/20 transition-colors">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-playfair text-white font-semibold text-sm mb-1 leading-snug">{item.name}</h3>
                  <p className="text-white/40 text-xs font-lato capitalize mb-3">{item.category}</p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 text-white hover:bg-white/10 transition-colors text-base font-bold">−</button>
                      <span className="w-8 text-center text-white font-bold text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 text-white hover:bg-white/10 transition-colors text-base font-bold">+</button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-cinzel text-saffron font-bold">₹{(item.price * item.qty).toLocaleString()}</span>
                      <button onClick={() => removeItem(item.id)} className="text-white/30 hover:text-red-400 transition-colors text-xs font-lato">Remove</button>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
<<<<<<< HEAD
            <div className="bg-cream border border-slate-200/60 rounded-2xl p-6 sticky top-24 shadow-sm">
              <h3 className="font-cinzel text-slate font-bold text-lg mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm font-lato">
                  <span className="text-slate/60">Subtotal ({items.reduce((s,i) => s + i.qty, 0)} items)</span>
                  <span className="text-slate font-semibold">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-lato">
                  <span className="text-slate/60">Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-bold' : 'text-slate font-semibold'}>
=======
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="font-cinzel text-white font-bold text-lg mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm font-lato">
                  <span className="text-white/60">Subtotal ({items.reduce((s,i) => s + i.qty, 0)} items)</span>
                  <span className="text-white">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-lato">
                  <span className="text-white/60">Shipping</span>
                  <span className={shipping === 0 ? 'text-green-400' : 'text-white'}>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
<<<<<<< HEAD
                  <p className="text-slate/40 text-xs">Add ₹{(999 - total).toLocaleString()} more for free shipping</p>
=======
                  <p className="text-white/30 text-xs">Add ₹{(999 - total).toLocaleString()} more for free shipping</p>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
                )}
              </div>
              <div className="section-divider mb-4"></div>
              <div className="flex justify-between font-cinzel font-bold text-lg mb-6">
<<<<<<< HEAD
                <span className="text-slate">Total</span>
=======
                <span className="text-white">Total</span>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
                <span className="text-saffron">₹{grandTotal.toLocaleString()}</span>
              </div>
              <button
                onClick={() => navigate('/checkout')}
<<<<<<< HEAD
                className="w-full py-4 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105 mb-3 flex items-center justify-center gap-2"
              >
                Proceed to Checkout <FiArrowRight />
              </button>
              <Link to="/shop" className="text-center text-slate/50 text-sm font-lato hover:text-saffron transition-colors font-medium flex items-center justify-center gap-2">
                <FiArrowLeft /> Continue Shopping
=======
                className="w-full py-4 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/30 transition-all duration-300 hover:scale-105 mb-3"
              >
                Proceed to Checkout →
              </button>
              <Link to="/shop" className="block text-center text-white/50 text-sm font-lato hover:text-saffron transition-colors">
                ← Continue Shopping
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
