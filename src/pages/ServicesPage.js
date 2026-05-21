import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/products';
import { SectionTitle } from '../components/UI';

const faqs = [
  { q: 'How accurate are astrology readings?', a: 'Vedic astrology, when practiced by an experienced astrologer with accurate birth details, can be remarkably accurate. Pandit Vishal Tarte has an accuracy rate of over 95% as reported by clients across all services.' },
  { q: 'What do I need for a Kundali analysis?', a: 'You need your exact date, time, and place of birth. Even a few minutes difference in birth time can alter the chart, so please try to be as accurate as possible.' },
  { q: 'How do online consultations work?', a: "After booking, you'll receive a confirmation with a video/audio call link. Vishal ji will call you at your scheduled time. Sessions are conducted via Google Meet, Zoom, or WhatsApp as preferred." },
  { q: 'Are gemstone recommendations personalized?', a: 'Yes. Every gemstone recommendation is based on your unique birth chart. Wearing the wrong gemstone can have adverse effects, so never follow generic advice. Consult with Vishal ji first.' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0404] pt-24 pb-16">
      <div className="relative py-12 bg-gradient-to-b from-saffron/10 to-transparent border-b border-saffron/10 mb-16 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 text-[200px] select-none">🌟</div>
        <SectionTitle eyebrow="Sacred Offerings" title="Our Services" subtitle="Ancient Vedic wisdom, modern delivery. Every service is personalized to your unique cosmic blueprint." />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map(s => (
            <div key={s.id} className="group bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden hover:border-saffron/40 transition-all duration-500 card-glow">
              <div className="relative h-52 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="bg-saffron/90 text-black text-xs font-bold px-2.5 py-1 rounded-full font-lato">{s.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-white font-bold text-xl mb-3 group-hover:text-saffron transition-colors">{s.title}</h3>
                <p className="text-white/50 font-lato text-sm leading-relaxed mb-5">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-saffron font-black text-2xl">{s.price}</span>
                  <Link to="/booking" className="bg-gradient-to-r from-saffron to-gold text-black font-cinzel font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-saffron/30 transition-all hover:scale-105">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <SectionTitle eyebrow="How It Works" title="Book in 3 Simple Steps" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['01', '📅', 'Choose & Book', 'Select your service, pick a date/time, and fill your details in our simple booking form.'],
              ['02', '💬', 'Connect with Vishal ji', 'Join a secure video/audio call at your scheduled time. Share your questions freely.'],
              ['03', '🌟', 'Receive Guidance', 'Get personalized, actionable insights delivered with clarity, compassion & cosmic precision.'],
            ].map(([num, icon, title, desc]) => (
              <div key={num} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-saffron/20 to-gold/10 border border-saffron/30 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:border-saffron transition-colors">
                  {icon}
                </div>
                <div className="absolute top-0 right-1/4 font-cinzel text-6xl font-black text-white/5 pointer-events-none">{num}</div>
                <h3 className="font-cinzel text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/50 font-lato text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <SectionTitle eyebrow="Common Questions" title="FAQs" />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-saffron/20 transition-colors">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-playfair text-white font-semibold list-none">
                  {faq.q}
                  <span className="text-saffron ml-4 flex-shrink-0 group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <div className="px-5 pb-5 text-white/60 font-lato text-sm leading-relaxed border-t border-white/10 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
