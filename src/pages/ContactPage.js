import React, { useState } from 'react';
import { SectionTitle } from '../components/UI';
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen bg-dawn pt-24 pb-16">
      <div className="relative py-12 bg-gradient-to-b from-saffron/10 to-transparent border-b border-saffron/10 mb-16 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-saffron pointer-events-none">
          <FiPhone className="w-64 h-64" />
        </div>
        <SectionTitle eyebrow="Reach Out" title="Contact Us" subtitle="Have a question? We'd love to hear from you. Drop us a message and we'll get back within 24 hours." />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div className="space-y-6 mb-10">
              {[
                [<FiPhone />, 'Phone', '+91 98765 43210', 'tel:+919876543210'],
                [<FiMail />, 'Email', 'info@astrovision.in', 'mailto:info@astrovision.in'],
                [<FiMapPin />, 'Address', '45, Shanti Nagar, Kothrud, Pune – 411038, Maharashtra', '#'],
                [<FiClock />, 'Hours', 'Monday – Saturday: 9 AM to 7 PM IST', '#'],
              ].map(([icon, label, value, href]) => (
                <a key={label} href={href} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 border border-saffron/30 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-saffron/20 transition-colors text-saffron">{icon}</div>
                  <div>
                    <div className="text-slate/50 text-xs font-lato uppercase tracking-wider mb-1 font-semibold">{label}</div>
                    <div className="text-slate font-lato group-hover:text-saffron transition-colors font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-slate/50 text-xs font-lato uppercase tracking-wider mb-4 font-semibold">Follow on Social</p>
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
                  { icon: <FaInstagram />, label: 'Instagram', href: '#' },
                  { icon: <FaYoutube />, label: 'YouTube', href: '#' },
                  { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/919876543210' }
                ].map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:border-saffron hover:bg-saffron/15 transition-all duration-300 text-lg text-slate" title={item.label}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-cream border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm" style={{ height: '200px' }}>
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-saffron/5 to-maroon/10 text-center px-4">
                <div>
                  <FiMapPin className="text-3xl text-saffron mx-auto mb-2 animate-bounce" />
                  <p className="text-slate font-lato text-sm font-semibold">Kothrud, Pune, Maharashtra</p>
                  <p className="text-slate/40 font-lato text-xs mt-1">[Google Maps Embedded Here]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="bg-cream border border-slate-200/50 rounded-2xl p-8 text-center shadow-sm">
                <FiCheckCircle className="text-5xl text-saffron mx-auto mb-4 animate-bounce" />
                <h3 className="font-cinzel text-slate text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate/60 font-lato">Thank you {form.name}. We'll respond within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }} className="mt-6 text-saffron font-lato hover:underline text-sm font-semibold">Send another message</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="bg-cream border border-slate-200/60 rounded-2xl p-8 space-y-5 shadow-sm">
                <h3 className="font-cinzel text-slate text-xl font-bold mb-2">Send a Message</h3>
                {[['name', 'Full Name', 'text', 'Your name'], ['email', 'Email', 'email', 'your@email.com'], ['phone', 'Phone', 'tel', '+91 XXXXX XXXXX']].map(([key, label, type, ph]) => (
                  <div key={key}>
                    <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-1.5 block font-semibold">{label}</label>
                    <input required type={type} value={form[key]} onChange={e => update(key, e.target.value)} placeholder={ph} className="w-full bg-cream border border-slate-300 rounded-xl px-4 py-3 text-slate font-lato text-sm placeholder-slate-400 focus:border-saffron focus:ring-1 focus:ring-saffron" />
                  </div>
                ))}
                <div>
                  <label className="text-slate/60 text-xs font-lato uppercase tracking-wider mb-1.5 block font-semibold">Message</label>
                  <textarea required value={form.message} onChange={e => update('message', e.target.value)} rows={4} placeholder="Your question or message..." className="w-full bg-cream border border-slate-300 rounded-xl px-4 py-3 text-slate font-lato text-sm placeholder-slate-400 focus:border-saffron focus:ring-1 focus:ring-saffron resize-none" />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold rounded-xl hover:shadow-xl hover:shadow-saffron/15 transition-all hover:scale-105 flex items-center justify-center gap-2">
                  Send Message <FiCheckCircle />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
