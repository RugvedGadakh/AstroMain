import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const steps = ['Shipping', 'Payment', 'Confirm'];

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [ordered, setOrdered] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', pincode: '', state: '' });
  const [payment, setPayment] = useState('upi');

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const shipping = total >= 999 ? 0 : 99;

  if (ordered) return (
    <div className="min-h-screen bg-[#0a0404] pt-32 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center text-4xl mx-auto mb-6 animate-glow-pulse shadow-2xl shadow-saffron/40">✓</div>
        <h2 className="font-cinzel text-3xl text-white font-bold mb-3">Order Confirmed!</h2>
        <p className="text-white/50 font-lato mb-2">Thank you for your sacred purchase.</p>
        <p className="text-gold font-bold font-lato mb-8">Order #AV{Date.now().toString().slice(-6)}</p>
        <p className="text-white/60 text-sm font-lato mb-8">A confirmation will be sent to {form.email}. Your order will be shipped within 2-3 business days with tracking details.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/" className="bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold px-6 py-3 rounded-full hover:shadow-xl hover:shadow-saffron/30 transition-all">Go Home</Link>
          <Link to="/shop" className="border border-saffron/40 text-saffron font-lato px-6 py-3 rounded-full hover:bg-saffron/10 transition-all">Shop More</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0404] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="font-cinzel text-3xl font-bold text-white mb-8">Checkout</h1>

        {/* Steps */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-2 ${i <= step ? 'text-saffron' : 'text-white/30'}`}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold font-cinzel ${i < step ? 'bg-saffron border-saffron text-black' : i === step ? 'border-saffron text-saffron' : 'border-white/20 text-white/20'}`}>
                  {i < step ? '✓' : i + 1}
                </div>
                <span className="text-sm font-lato hidden sm:block">{s}</span>
              </div>
              {i < steps.length - 1 && <div className={`h-px w-16 mx-3 ${i < step ? 'bg-saffron' : 'bg-white/10'}`}></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="font-cinzel text-white font-bold text-xl mb-6">Shipping Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[['name', 'Full Name', 'text'], ['email', 'Email Address', 'email'], ['phone', 'Phone Number', 'tel'], ['address', 'Address', 'text'], ['city', 'City', 'text'], ['pincode', 'Pincode', 'text']].map(([key, label, type]) => (
                    <div key={key} className={key === 'address' ? 'sm:col-span-2' : ''}>
                      <label className="text-white/60 text-xs font-lato uppercase tracking-wider mb-1.5 block">{label}</label>
                      <input
                        type={type}
                        value={form[key]}
                        onChange={e => update(key, e.target.value)}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white font-lato text-sm placeholder-white/20"
                        placeholder={label}
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="mt-6 w-full py-4 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/30 transition-all hover:scale-105"
                >
                  Continue to Payment →
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="font-cinzel text-white font-bold text-xl mb-6">Payment Method</h2>
                <div className="space-y-3 mb-6">
                  {[['upi', '📱 UPI / GPay / PhonePe'], ['card', '💳 Credit / Debit Card'], ['netbanking', '🏦 Net Banking'], ['cod', '💰 Cash on Delivery']].map(([val, label]) => (
                    <label key={val} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${payment === val ? 'border-saffron bg-saffron/10' : 'border-white/10 hover:border-white/20'}`}>
                      <input type="radio" name="payment" value={val} checked={payment === val} onChange={() => setPayment(val)} className="accent-saffron w-4 h-4" />
                      <span className="text-white font-lato">{label}</span>
                    </label>
                  ))}
                </div>
                {payment === 'upi' && (
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                    <label className="text-white/60 text-xs font-lato uppercase tracking-wider mb-1.5 block">UPI ID</label>
                    <input className="w-full bg-transparent border-b border-white/20 py-2 text-white font-lato text-sm placeholder-white/20" placeholder="yourname@upi" />
                  </div>
                )}
                <div className="flex gap-3">
                  <button onClick={() => setStep(0)} className="flex-1 py-4 border border-white/20 text-white font-lato rounded-xl hover:border-saffron/40 transition-all">← Back</button>
                  <button onClick={() => setStep(2)} className="flex-1 py-4 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/30 transition-all hover:scale-105">Review Order →</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="font-cinzel text-white font-bold text-xl mb-6">Review & Confirm</h2>
                <div className="space-y-2 text-sm font-lato mb-6">
                  <p className="text-white/60">Name: <span className="text-white">{form.name}</span></p>
                  <p className="text-white/60">Email: <span className="text-white">{form.email}</span></p>
                  <p className="text-white/60">Phone: <span className="text-white">{form.phone}</span></p>
                  <p className="text-white/60">Address: <span className="text-white">{form.address}, {form.city} - {form.pincode}</span></p>
                  <p className="text-white/60">Payment: <span className="text-white capitalize">{payment}</span></p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 border border-white/20 text-white font-lato rounded-xl hover:border-saffron/40 transition-all">← Back</button>
                  <button
                    onClick={() => { clearCart(); setOrdered(true); }}
                    className="flex-1 py-4 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/30 transition-all hover:scale-105"
                  >
                    Place Order ✦
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sticky top-24">
              <h3 className="font-cinzel text-white font-bold mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-lato truncate">{item.name}</p>
                      <p className="text-white/40 text-xs">Qty: {item.qty}</p>
                    </div>
                    <span className="text-saffron text-sm font-bold font-cinzel">₹{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="section-divider mb-3"></div>
              <div className="flex justify-between text-sm font-lato mb-1">
                <span className="text-white/60">Subtotal</span>
                <span className="text-white">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-lato mb-3">
                <span className="text-white/60">Shipping</span>
                <span className={shipping === 0 ? 'text-green-400' : 'text-white'}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between font-cinzel font-bold text-lg">
                <span className="text-white">Total</span>
                <span className="text-saffron">₹{(total + shipping).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
