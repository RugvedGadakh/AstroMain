import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiTrash2, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function CartPage() {
  const { t } = useTranslation();
  const { items, total, removeItem, updateQty, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) return (
    <div className="min-h-screen bg-dawn pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
      <FiShoppingCart className="text-7xl text-slate/30 mb-6 mx-auto animate-pulse" />
      <h2 className="font-cinzel text-3xl text-slate font-bold mb-3">{t('cart_empty_title')}</h2>
      <p className="text-slate/60 font-lato mb-8">{t('cart_empty_desc')}</p>
      <Link to="/shop" className="bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 flex items-center gap-2">
        {t('home_explore_shop')} <FiArrowRight />
      </Link>
    </div>
  );

  const shipping = total >= 999 ? 0 : 99;
  const grandTotal = total + shipping;

  return (
    <div className="min-h-screen bg-dawn pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-cinzel text-3xl font-bold text-slate">{t('cart_title')}</h1>
          <button onClick={clearCart} className="text-slate/40 text-sm font-lato hover:text-red-500 transition-colors font-semibold">{t('cart_clear_all')}</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => {
              const itemName = t(`products.${item.id}.name`, { defaultValue: item.name });
              const itemCategoryLabel = t(`categories.${item.category}.label`, { defaultValue: item.category });
              return (
                <div key={item.id} className="bg-cream border border-slate-200/50 rounded-2xl p-4 flex gap-4 hover:border-saffron/30 transition-colors shadow-sm">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                    <img src={item.image} alt={itemName} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-playfair text-slate font-semibold text-sm mb-1 leading-snug">{itemName}</h3>
                    <p className="text-slate/50 text-xs font-lato capitalize mb-3">{itemCategoryLabel}</p>
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
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-cream border border-slate-200/60 rounded-2xl p-6 sticky top-24 shadow-sm">
              <h3 className="font-cinzel text-slate font-bold text-lg mb-6">{t('checkout_review_title')}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm font-lato">
                  <span className="text-slate/60">{t('cart_subtotal', { count: items.reduce((s,i) => s + i.qty, 0), defaultValue: `Subtotal (${items.reduce((s,i) => s + i.qty, 0)} items)` })}</span>
                  <span className="text-slate font-semibold">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-lato">
                  <span className="text-slate/60">{t('cart_shipping')}</span>
                  <span className={shipping === 0 ? 'text-green-600 font-bold' : 'text-slate font-semibold'}>
                    {shipping === 0 ? t('cart_free') : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-slate/40 text-xs">
                    {t('cart_shipping_add_more', { amount: (999 - total).toLocaleString(), defaultValue: `Add ₹${(999 - total).toLocaleString()} more for free shipping` })}
                  </p>
                )}
              </div>
              <div className="section-divider mb-4"></div>
              <div className="flex justify-between font-cinzel font-bold text-lg mb-6">
                <span className="text-slate">{t('cart_total')}</span>
                <span className="text-saffron">₹{grandTotal.toLocaleString()}</span>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105 mb-3 flex items-center justify-center gap-2"
              >
                {t('cart_checkout_btn')} <FiArrowRight />
              </button>
              <Link to="/shop" className="text-center text-slate/50 text-sm font-lato hover:text-saffron transition-colors font-medium flex items-center justify-center gap-2">
                <FiArrowLeft /> {t('cart_continue_shopping')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

