import React, { useState } from 'react';
import { services, timeSlots } from '../data/products';
import { SectionTitle } from '../components/UI';
import { FiCheckCircle, FiVideo, FiPhone, FiMessageSquare, FiClock, FiAward, FiGlobe, FiCompass, FiHome, FiHash, FiHeart, FiLayers } from 'react-icons/fi';
import { FaGem, FaTrophy } from 'react-icons/fa';

const today = new Date().toISOString().split('T')[0];

const renderServiceIcon = (iconName, className = "") => {
  switch (iconName) {
    case 'compass': return <FiCompass className={className} />;
    case 'gem': return <FaGem className={className} />;
    case 'home': return <FiHome className={className} />;
    case 'hash': return <FiHash className={className} />;
    case 'heart': return <FiHeart className={className} />;
    case 'layers': return <FiLayers className={className} />;
    default: return null;
  }
};

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', problem: '', date: '', time: '', mode: 'video',
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="min-h-screen bg-dawn pt-32 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-28 h-28 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-glow-pulse">
          <FiCheckCircle className="text-white text-5xl" />
        </div>
        <h2 className="font-cinzel text-3xl text-slate font-bold mb-3">Booking Confirmed!</h2>
        <p className="text-saffron font-lato mb-2 font-semibold">May the stars guide your path</p>
        <div className="bg-cream border border-slate-200/60 rounded-2xl p-6 mt-6 text-left space-y-2 shadow-sm">
          <p className="text-slate/65 text-sm font-lato">Name: <span className="text-slate font-bold">{form.name}</span></p>
          <p className="text-slate/65 text-sm font-lato">Service: <span className="text-saffron font-bold">{services.find(s => s.id === Number(form.service))?.title || form.service}</span></p>
          <p className="text-slate/65 text-sm font-lato">Date & Time: <span className="text-slate font-bold">{form.date} at {form.time}</span></p>
          <p className="text-slate/65 text-sm font-lato">Mode: <span className="text-slate font-bold capitalize">{form.mode} call</span></p>
        </div>
        <p className="text-slate/50 text-sm font-lato mt-4 leading-relaxed">Confirmation sent to {form.phone}. Vishal ji will contact you 1 hour before your slot.</p>
        <button onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',service:'',problem:'',date:'',time:'',mode:'video' }); setStep(0); }} className="mt-8 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all">
          Book Another Session
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dawn pt-24 pb-16">
      {/* Header */}
      <div className="relative py-12 bg-gradient-to-b from-saffron/10 to-transparent border-b border-saffron/10 mb-12 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-[200px] select-none text-saffron pointer-events-none">🌙</div>
        <SectionTitle eyebrow="Schedule a Session" title="Book Your Consultation" subtitle="Choose your service, pick a date & connect with Pandit Vishal Tarte for a life-changing reading." />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Info Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-cream border border-slate-200/60 rounded-2xl p-6 shadow-sm">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-saffron/30 mx-auto mb-4">
                <img src="/images/Vishal_Tarte_Img.png" alt="Vishal Tarte" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-cinzel text-slate font-bold text-center mb-1 text-lg">Pandit Vishal Tarte</h3>
              <p className="text-saffron text-xs text-center font-lato mb-4 font-semibold">Vedic Astrologer & Spiritual Healer</p>
              <div className="space-y-3 border-t border-slate-100 pt-4">
                {[
                  [<FiClock />, '18+ Years Experience'],
                  [<FiAward />, 'Jyotish Acharya'],
                  [<FaTrophy />, '50,000+ Clients'],
                  [<FiGlobe />, 'Hindi, English, Marathi']
                ].map(([icon, text], idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-lato text-slate/75">
                    <span className="text-saffron text-base">{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Quick View */}
            <div className="bg-cream border border-slate-200/60 rounded-2xl p-5 shadow-sm">
              <h4 className="font-cinzel text-slate font-bold mb-4 text-sm uppercase tracking-wide">Available Services</h4>
              <div className="space-y-2">
                {services.map(s => (
                  <button
                    key={s.id}
                    onClick={() => { update('service', String(s.id)); setStep(1); }}
                    className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-saffron/10 transition-colors group"
                  >
                    <span className="text-slate/75 text-sm font-lato group-hover:text-saffron transition-colors flex items-center gap-2">
                      {renderServiceIcon(s.icon, "text-saffron text-base")}
                      {s.title}
                    </span>
                    <span className="text-saffron text-xs font-bold">{s.price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-cream border border-slate-200/60 rounded-2xl p-8 shadow-sm">
              <h2 className="font-cinzel text-slate text-xl font-bold mb-8">Fill Booking Details</h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-2 block font-semibold">Full Name *</label>
                  <input required value={form.name} onChange={e => update('name', e.target.value)} type="text" placeholder="Your full name" className="w-full bg-cream border border-slate-300 rounded-xl px-4 py-3 text-slate font-lato text-sm placeholder-slate-400 focus:border-saffron focus:ring-1 focus:ring-saffron" />
                </div>
                {/* Phone */}
                <div>
                  <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-2 block font-semibold">Phone *</label>
                  <input required value={form.phone} onChange={e => update('phone', e.target.value)} type="tel" placeholder="+91 98765 43210" className="w-full bg-cream border border-slate-300 rounded-xl px-4 py-3 text-slate font-lato text-sm placeholder-slate-400 focus:border-saffron focus:ring-1 focus:ring-saffron" />
                </div>
                {/* Email */}
                <div>
                  <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-2 block font-semibold">Email</label>
                  <input value={form.email} onChange={e => update('email', e.target.value)} type="email" placeholder="your@email.com" className="w-full bg-cream border border-slate-300 rounded-xl px-4 py-3 text-slate font-lato text-sm placeholder-slate-400 focus:border-saffron focus:ring-1 focus:ring-saffron" />
                </div>
                {/* Service */}
                <div>
                  <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-2 block font-semibold">Service *</label>
                  <select required value={form.service} onChange={e => update('service', e.target.value)} className="w-full bg-cream border border-slate-300 rounded-xl px-4 py-3 text-slate font-lato text-sm focus:border-saffron focus:ring-1 focus:ring-saffron">
                    <option value="" className="bg-cream">Select a service</option>
                    {services.map(s => <option key={s.id} value={s.id} className="bg-cream">{s.title} – {s.price}</option>)}
                  </select>
                </div>
                {/* Date */}
                <div>
                  <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-2 block font-semibold">Preferred Date *</label>
                  <input required value={form.date} onChange={e => update('date', e.target.value)} type="date" min={today} className="w-full bg-cream border border-slate-300 rounded-xl px-4 py-3 text-slate font-lato text-sm focus:border-saffron focus:ring-1 focus:ring-saffron" />
                </div>
                {/* Mode */}
                <div>
                  <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-2 block font-semibold">Consultation Mode *</label>
                  <div className="flex gap-2">
                    {[
                      ['video', <span className="flex items-center justify-center gap-1.5"><FiVideo className="text-sm" /> Video</span>],
                      ['audio', <span className="flex items-center justify-center gap-1.5"><FiPhone className="text-sm" /> Audio</span>],
                      ['chat', <span className="flex items-center justify-center gap-1.5"><FiMessageSquare className="text-sm" /> Chat</span>]
                    ].map(([val, node]) => (
                      <button key={val} type="button" onClick={() => update('mode', val)} className={`flex-1 py-3 rounded-xl text-xs font-lato border transition-all ${form.mode === val ? 'bg-saffron border-saffron text-white font-bold' : 'border-slate-300 text-slate/70 hover:border-saffron/40 hover:text-saffron'}`}>
                        {node}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time slots */}
              <div className="mt-5">
                <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-3 block font-semibold">Preferred Time *</label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {timeSlots.map(t => (
                    <button key={t} type="button" onClick={() => update('time', t)} className={`py-2 rounded-lg text-xs font-lato border transition-all ${form.time === t ? 'bg-saffron border-saffron text-white font-bold' : 'border-slate-200 text-slate/70 hover:border-saffron/40 hover:text-saffron'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Problem */}
              <div className="mt-5">
                <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-2 block font-semibold">Your Question / Concern</label>
                <textarea value={form.problem} onChange={e => update('problem', e.target.value)} rows={3} placeholder="Describe what you'd like guidance on — career, marriage, finance, health, spirituality..." className="w-full bg-cream border border-slate-300 rounded-xl px-4 py-3 text-slate font-lato text-sm placeholder-slate-400 focus:border-saffron focus:ring-1 focus:ring-saffron resize-none" />
              </div>

              <button type="submit" className="w-full mt-8 py-4 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105">
                ✦ Confirm Booking
              </button>
              <p className="text-slate/40 text-xs text-center mt-3 font-lato">You'll receive a confirmation message on your phone within 30 minutes.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
