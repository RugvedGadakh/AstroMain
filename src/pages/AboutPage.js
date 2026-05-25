import React from 'react';
import { Link } from 'react-router-dom';
import { stats } from '../data/products';
import { SectionTitle } from '../components/UI';
import { FiBookOpen, FiAward, FiGlobe, FiHome, FiUsers, FiCalendar, FiTarget, FiSun } from 'react-icons/fi';
import { FaGem, FaTrophy } from 'react-icons/fa';

const achievements = [
  { year: '2006', title: 'Began Vedic studies under Guru Pandit Raghunath Shastri', icon: <FiBookOpen className="text-saffron text-2xl mx-auto" /> },
  { year: '2009', title: 'Received Jyotish Acharya degree from Pune Sanskrit Parishad', icon: <FiAward className="text-saffron text-2xl mx-auto" /> },
  { year: '2011', title: 'Founded AstroVision — first online consultations', icon: <FiGlobe className="text-saffron text-2xl mx-auto" /> },
  { year: '2015', title: 'Featured in Times of India as Top Astrologer of Maharashtra', icon: <FaTrophy className="text-saffron text-2xl mx-auto" /> },
  { year: '2018', title: 'Completed advanced Vastu Vidya certification', icon: <FiHome className="text-saffron text-2xl mx-auto" /> },
  { year: '2022', title: 'Crossed 50,000 satisfied clients milestone', icon: <FiUsers className="text-saffron text-2xl mx-auto" /> },
  { year: '2024', title: 'Launched premium gemstone & spiritual products store', icon: <FaGem className="text-saffron text-2xl mx-auto" /> },
];

const renderStatIcon = (iconName) => {
  switch (iconName) {
    case 'users': return <FiUsers className="text-saffron text-3xl mb-1" />;
    case 'calendar': return <FiCalendar className="text-saffron text-3xl mb-1" />;
    case 'target': return <FiTarget className="text-saffron text-3xl mb-1" />;
    case 'trophy': return <FaTrophy className="text-saffron text-3xl mb-1" />;
    default: return null;
  }
};

const expertise = ['Vedic Astrology', 'Kundali Reading', 'Horoscope Analysis', 'Vastu Shastra', 'Numerology', 'Gemology', 'Spiritual Healing', 'Tarot Reading', 'Palmistry', 'Prashna Kundali'];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dawn pt-24 pb-16">
      {/* Header */}
      <div className="relative py-12 bg-gradient-to-b from-saffron/10 to-transparent border-b border-saffron/10 mb-16 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-saffron pointer-events-none">
          <FiSun className="w-64 h-64 animate-spin-slow" />
        </div>
        <SectionTitle eyebrow="Meet the Astrologer" title="Pandit Vishal Tarte" subtitle="A beacon of cosmic wisdom, guiding thousands toward clarity, purpose and divine alignment since 2006." />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-saffron/15 to-gold/10 rounded-3xl blur-3xl opacity-50"></div>
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden border border-saffron/20 shadow-xl">
                <img src="/images/Vishal_Tarte_Img.png" alt="Pandit Vishal Tarte" className="w-full h-full object-cover object-top" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-cream border border-slate-200/60 rounded-2xl px-5 py-4 shadow-lg">
                <div className="font-cinzel text-saffron font-black text-2xl">18+</div>
                <div className="text-slate/60 text-sm font-lato font-semibold">Years of Mastery</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-saffron font-lato text-sm tracking-widest uppercase mb-3 font-semibold">✦ About Vishal ji</p>
            <h2 className="font-cinzel text-3xl font-bold text-slate mb-6">A Lifetime Devoted to<br /><span className="text-saffron">Cosmic Wisdom</span></h2>
            <div className="space-y-4 text-slate/70 font-lato leading-relaxed mb-8">
              <p>Born under the constellation of Rohini, Pandit Vishal Tarte showed an extraordinary affinity for astrology from childhood. Under the guidance of legendary astrologer Pandit Raghunath Shastri, he mastered the ancient Brihat Parashara Hora Shastra.</p>
              <p>Over 18 years, he has helped more than 50,000 individuals across India and abroad navigate life's most challenging crossroads — career pivots, marriage decisions, financial troubles, and spiritual crises — with the precision of Vedic astrology.</p>
              <p>His approach blends rigorous classical methodology with compassionate, practical guidance. Every consultation is a sacred space where ancient wisdom meets modern life.</p>
            </div>

            {/* Expertise chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {expertise.map(e => (
                <span key={e} className="text-xs font-lato text-saffron font-semibold border border-saffron/30 bg-saffron/5 px-3 py-1.5 rounded-full">{e}</span>
              ))}
            </div>

            <Link to="/booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105">
              Book a Consultation ✦
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="bg-cream border border-slate-200/50 rounded-2xl p-6 text-center hover:border-saffron/30 transition-all shadow-sm card-glow flex flex-col justify-center items-center">
              <div className="mb-2 filter drop-shadow-sm">{renderStatIcon(s.icon)}</div>
              <div className="font-cinzel text-3xl font-black text-saffron mb-1">{s.number}</div>
              <div className="text-slate/60 text-sm font-lato font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <SectionTitle eyebrow="Journey" title="Milestones & Achievements" />
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-saffron/30 via-saffron/10 to-transparent hidden md:block"></div>
            <div className="space-y-8">
              {achievements.map((a, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${i % 2 === 0 ? 'md:flex-row-reverse text-right' : ''}`}>
                  <div className="flex-1">
                    <div className={`bg-cream border border-slate-200/50 rounded-2xl p-5 hover:border-saffron/30 transition-all card-glow max-w-sm shadow-sm ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <div className="mb-2 filter drop-shadow-sm flex justify-center md:justify-start">{a.icon}</div>
                      <div className="text-saffron font-cinzel font-bold text-lg mb-1">{a.year}</div>
                      <p className="text-slate/75 font-lato text-sm leading-relaxed">{a.title}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-saffron/10 border-2 border-saffron items-center justify-center text-saffron font-bold font-cinzel text-xs flex-shrink-0 z-10">
                    {a.year.slice(-2)}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
