import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiCheck, FiCheckCircle, FiCreditCard, FiSmartphone, FiHome, FiDollarSign, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

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
    <div className="min-h-screen bg-dawn pt-32 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-glow-pulse">
          <FiCheckCircle className="text-white text-5xl" />
        </div>
        <h2 className="font-cinzel text-3xl text-slate font-bold mb-3">Order Confirmed!</h2>
        <p className="text-slate/60 font-lato mb-2">Thank you for your sacred purchase.</p>
        <p className="text-saffron font-bold font-lato mb-8">Order #AV{Date.now().toString().slice(-6)}</p>
        <p className="text-slate/60 text-sm font-lato mb-8 leading-relaxed">A confirmation will be sent to {form.email}. Your order will be shipped within 2-3 business days with tracking details.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/" className="bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-6 py-3 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all">Go Home</Link>
          <Link to="/shop" className="border border-saffron/40 text-saffron font-lato px-6 py-3 rounded-full hover:bg-saffron/5 transition-all font-semibold">Shop More</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dawn pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="font-cinzel text-3xl font-bold text-slate mb-8">Checkout</h1>

        {/* Steps */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-2 ${i <= step ? 'text-saffron' : 'text-slate/30'}`}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold font-cinzel ${i < step ? 'bg-saffron border-saffron text-white' : i === step ? 'border-saffron text-saffron' : 'border-slate-300 text-slate-300'}`}>
                  {i < step ? <FiCheck /> : i + 1}
                </div>
                <span className="text-sm font-lato hidden sm:block font-semibold">{s}</span>
              </div>
              {i < steps.length - 1 && <div className={`h-px w-16 mx-3 ${i < step ? 'bg-saffron' : 'bg-slate-200'}`}></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 0 && (
              <div className="bg-cream border border-slate-200/60 rounded-2xl p-6 shadow-sm">
                <h2 className="font-cinzel text-slate font-bold text-xl mb-6">Shipping Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[['name', 'Full Name', 'text'], ['email', 'Email Address', 'email'], ['phone', 'Phone Number', 'tel'], ['address', 'Address', 'text'], ['city', 'City', 'text'], ['pincode', 'Pincode', 'text']].map(([key, label, type]) => (
                    <div key={key} className={key === 'address' ? 'sm:col-span-2' : ''}>
                      <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-1.5 block font-semibold">{label}</label>
                      <input
                        type={type}
                        value={form[key]}
                        onChange={e => update(key, e.target.value)}
                        className="w-full bg-cream border border-slate-300 rounded-xl px-4 py-3 text-slate font-lato text-sm placeholder-slate-400 focus:border-saffron focus:ring-1 focus:ring-saffron"
                        placeholder={label}
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="mt-6 w-full py-4 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/15 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Continue to Payment <FiArrowRight />
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="bg-cream border border-slate-200/60 rounded-2xl p-6 shadow-sm">
                <h2 className="font-cinzel text-slate font-bold text-xl mb-6">Payment Method</h2>
                <div className="space-y-3 mb-6">
                  {[
                    ['upi', <span className="flex items-center gap-2"><FiSmartphone className="text-lg text-saffron" /> UPI / GPay / PhonePe</span>],
                    ['card', <span className="flex items-center gap-2"><FiCreditCard className="text-lg text-saffron" /> Credit / Debit Card</span>],
                    ['netbanking', <span className="flex items-center gap-2"><FiHome className="text-lg text-saffron" /> Net Banking</span>],
                    ['cod', <span className="flex items-center gap-2"><FiDollarSign className="text-lg text-saffron" /> Cash on Delivery</span>]
                  ].map(([val, labelNode]) => (
                    <label key={val} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${payment === val ? 'border-saffron bg-saffron/5 font-bold text-saffron shadow-sm' : 'border-slate-200 hover:border-slate-300 text-slate/85'}`}>
                      <input type="radio" name="payment" value={val} checked={payment === val} onChange={() => setPayment(val)} className="accent-saffron w-4 h-4" />
                      <span className="font-lato">{labelNode}</span>
                    </label>
                  ))}
                </div>
                {payment === 'upi' && (
                  <div className="bg-dawn border border-slate-200/60 rounded-xl p-4 mb-6">
                    <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-1.5 block font-semibold">UPI ID</label>
                    <input className="w-full bg-transparent border-b border-slate-300 py-2 text-slate font-lato text-sm placeholder-slate-400 focus:border-saffron" placeholder="yourname@upi" />
                  </div>
                )}
                <div className="flex gap-3">
                  <button onClick={() => setStep(0)} className="flex-1 py-4 border border-slate-300 text-slate font-lato rounded-xl hover:border-saffron/40 hover:text-saffron transition-all font-semibold flex items-center justify-center gap-2"><FiArrowLeft /> Back</button>
                  <button onClick={() => setStep(2)} className="flex-1 py-4 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/15 transition-all hover:scale-105 flex items-center justify-center gap-2">Review Order <FiArrowRight /></button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-cream border border-slate-200/60 rounded-2xl p-6 shadow-sm">
                <h2 className="font-cinzel text-slate font-bold text-xl mb-6">Review & Confirm</h2>
                <div className="space-y-2 text-sm font-lato mb-6 border-b border-slate-100 pb-6">
                  <p className="text-slate/60">Name: <span className="text-slate font-bold">{form.name}</span></p>
                  <p className="text-slate/60">Email: <span className="text-slate font-bold">{form.email}</span></p>
                  <p className="text-slate/60">Phone: <span className="text-slate font-bold">{form.phone}</span></p>
                  <p className="text-slate/60">Address: <span className="text-slate font-bold">{form.address}, {form.city} - {form.pincode}</span></p>
                  <p className="text-slate/60">Payment: <span className="text-slate font-bold capitalize">{payment}</span></p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 border border-slate-300 text-slate font-lato rounded-xl hover:border-saffron/40 hover:text-saffron transition-all font-semibold flex items-center justify-center gap-2"><FiArrowLeft /> Back</button>
                  <button
                    onClick={() => { clearCart(); setOrdered(true); }}
                    className="flex-1 py-4 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/15 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Place Order <FiCheckCircle />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-cream border border-slate-200/60 rounded-2xl p-5 sticky top-24 shadow-sm">
              <h3 className="font-cinzel text-slate font-bold mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-1">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover border border-slate-100" />
                    <div className="flex-1 min-w-0">
                      <p className="text-slate text-xs font-lato truncate font-semibold">{item.name}</p>
                      <p className="text-slate/50 text-xs">Qty: {item.qty}</p>
                    </div>
                    <span className="text-saffron text-sm font-bold font-cinzel">₹{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="section-divider mb-3"></div>
              <div className="flex justify-between text-sm font-lato mb-1">
                <span className="text-slate/60 font-medium">Subtotal</span>
                <span className="text-slate font-semibold">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-lato mb-3">
                <span className="text-slate/60 font-medium">Shipping</span>
                <span className={shipping === 0 ? 'text-green-600 font-bold' : 'text-slate font-semibold'}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between font-cinzel font-bold text-lg border-t border-slate-100 pt-3">
                <span className="text-slate">Total</span>
                <span className="text-saffron">₹{(total + shipping).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
