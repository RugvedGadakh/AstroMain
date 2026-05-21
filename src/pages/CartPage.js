import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, total, removeItem, updateQty, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) return (
    <div className="min-h-screen bg-[#0a0404] pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
      <div className="text-7xl mb-6">🛒</div>
      <h2 className="font-cinzel text-3xl text-white font-bold mb-3">Your Cart is Empty</h2>
      <p className="text-white/50 font-lato mb-8">Explore our sacred collection and add items to your cart.</p>
      <Link to="/shop" className="bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/30 transition-all duration-300">
        Explore Shop ✦
      </Link>
    </div>
  );

  const shipping = total >= 999 ? 0 : 99;
  const grandTotal = total + shipping;

  return (
    <div className="min-h-screen bg-[#0a0404] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-cinzel text-3xl font-bold text-white">Shopping Cart</h1>
          <button onClick={clearCart} className="text-white/40 text-sm font-lato hover:text-red-400 transition-colors">Clear All</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
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
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-white/30 text-xs">Add ₹{(999 - total).toLocaleString()} more for free shipping</p>
                )}
              </div>
              <div className="section-divider mb-4"></div>
              <div className="flex justify-between font-cinzel font-bold text-lg mb-6">
                <span className="text-white">Total</span>
                <span className="text-saffron">₹{grandTotal.toLocaleString()}</span>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/30 transition-all duration-300 hover:scale-105 mb-3"
              >
                Proceed to Checkout →
              </button>
              <Link to="/shop" className="block text-center text-white/50 text-sm font-lato hover:text-saffron transition-colors">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
