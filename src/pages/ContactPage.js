import React, { useState } from 'react';
import { SectionTitle } from '../components/UI';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen bg-[#0a0404] pt-24 pb-16">
      <div className="relative py-12 bg-gradient-to-b from-saffron/10 to-transparent border-b border-saffron/10 mb-16 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 text-[200px] select-none">📞</div>
        <SectionTitle eyebrow="Reach Out" title="Contact Us" subtitle="Have a question? We'd love to hear from you. Drop us a message and we'll get back within 24 hours." />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div className="space-y-6 mb-10">
              {[
                ['📞', 'Phone', '+91 98765 43210', 'tel:+919876543210'],
                ['📧', 'Email', 'info@astrovision.in', 'mailto:info@astrovision.in'],
                ['📍', 'Address', '45, Shanti Nagar, Kothrud, Pune – 411038, Maharashtra', '#'],
                ['⏰', 'Hours', 'Monday – Saturday: 9 AM to 7 PM IST', '#'],
              ].map(([icon, label, value, href]) => (
                <a key={label} href={href} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-saffron/20 transition-colors">{icon}</div>
                  <div>
                    <div className="text-white/50 text-xs font-lato uppercase tracking-wider mb-1">{label}</div>
                    <div className="text-white font-lato group-hover:text-saffron transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-white/50 text-xs font-lato uppercase tracking-wider mb-4">Follow on Social</p>
              <div className="flex gap-3">
                {[['📘', 'Facebook', '#'], ['📸', 'Instagram', '#'], ['▶️', 'YouTube', '#'], ['💬', 'WhatsApp', 'https://wa.me/919876543210']].map(([icon, label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center hover:border-saffron hover:bg-saffron/10 transition-all duration-300 text-lg" title={label}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl overflow-hidden" style={{ height: '200px' }}>
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-saffron/5 to-maroon/10 text-center px-4">
                <div>
                  <div className="text-3xl mb-2">📍</div>
                  <p className="text-white/50 font-lato text-sm">Kothrud, Pune, Maharashtra</p>
                  <p className="text-white/30 font-lato text-xs mt-1">[Google Maps Embedded Here]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="bg-white/5 border border-saffron/20 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🙏</div>
                <h3 className="font-cinzel text-white text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/50 font-lato">Thank you {form.name}. We'll respond within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }} className="mt-6 text-saffron font-lato hover:underline text-sm">Send another message</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                <h3 className="font-cinzel text-white font-bold text-xl mb-2">Send a Message</h3>
                {[['name', 'Full Name', 'text', 'Your name'], ['email', 'Email', 'email', 'your@email.com'], ['phone', 'Phone', 'tel', '+91 XXXXX XXXXX']].map(([key, label, type, ph]) => (
                  <div key={key}>
                    <label className="text-white/50 text-xs font-lato uppercase tracking-wider mb-1.5 block">{label}</label>
                    <input required type={type} value={form[key]} onChange={e => update(key, e.target.value)} placeholder={ph} className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white font-lato text-sm placeholder-white/20" />
                  </div>
                ))}
                <div>
                  <label className="text-white/50 text-xs font-lato uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea required value={form.message} onChange={e => update('message', e.target.value)} rows={4} placeholder="Your question or message..." className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white font-lato text-sm placeholder-white/20 resize-none" />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/30 transition-all hover:scale-105">
                  Send Message ✦
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
