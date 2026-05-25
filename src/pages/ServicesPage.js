import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services } from '../data/products';
import { SectionTitle } from '../components/UI';
import { FiCalendar, FiVideo, FiCheckCircle, FiChevronDown, FiCompass, FiHome, FiHash, FiHeart, FiLayers, FiSun } from 'react-icons/fi';
import { FaGem } from 'react-icons/fa';

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

export default function ServicesPage() {
  const { t } = useTranslation();

  const faqs = [
    { q: t('services_faq_q_1'), a: t('services_faq_a_1') },
    { q: t('services_faq_q_2'), a: t('services_faq_a_2') },
    { q: t('services_faq_q_3'), a: t('services_faq_a_3') },
    { q: t('services_faq_q_4'), a: t('services_faq_a_4') },
  ];

  return (
    <div className="min-h-screen bg-dawn pt-24 pb-16">
      <div className="relative py-12 bg-gradient-to-b from-saffron/10 to-transparent border-b border-saffron/10 mb-16 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-saffron pointer-events-none">
          <FiSun className="w-64 h-64 animate-spin-slow" />
        </div>
        <SectionTitle eyebrow={t('services_eyebrow')} title={t('services_title')} subtitle={t('services_subtitle')} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map(s => {
            const serviceTitle = t(`services.${s.id}.title`, { defaultValue: s.title });
            const serviceDesc = t(`services.${s.id}.description`, { defaultValue: s.description });
            return (
              <div key={s.id} className="group bg-cream border border-slate-200/50 rounded-3xl overflow-hidden hover:border-saffron/30 transition-all duration-500 card-glow shadow-sm flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={s.image} alt={serviceTitle} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/20 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="bg-cream/90 text-saffron p-2.5 rounded-full shadow-md text-xl">
                      {renderServiceIcon(s.icon)}
                    </span>
                    <span className="bg-saffron text-white text-xs font-bold px-2.5 py-1.5 rounded-full font-lato shadow-sm">{s.duration}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-cinzel text-slate font-bold text-xl mb-3 group-hover:text-saffron transition-colors">{serviceTitle}</h3>
                  <p className="text-slate/60 font-lato text-sm leading-relaxed mb-5 flex-1">{serviceDesc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel text-saffron font-black text-2xl">{s.price}</span>
                    <Link to="/booking" className="bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-saffron/20 transition-all hover:scale-105">
                      {t('btn_book_now')}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process */}
        <div className="mb-20">
          <SectionTitle eyebrow={t('services_process_eyebrow')} title={t('services_process_title')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['01', <FiCalendar className="text-saffron text-2xl" />, t('services_step_1_title'), t('services_step_1_desc')],
              ['02', <FiVideo className="text-saffron text-2xl" />, t('services_step_2_title'), t('services_step_2_desc')],
              ['03', <FiCheckCircle className="text-saffron text-2xl" />, t('services_step_3_title'), t('services_step_3_desc')],
            ].map(([num, icon, title, desc]) => (
              <div key={num} className="relative text-center group">
                <div className="w-20 h-20 rounded-full bg-cream border border-slate-200/50 flex items-center justify-center mx-auto mb-4 group-hover:border-saffron transition-colors shadow-sm">
                  {icon}
                </div>
                <div className="absolute top-0 right-1/4 font-cinzel text-6xl font-black text-slate/[0.03] pointer-events-none">{num}</div>
                <h3 className="font-cinzel text-slate font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate/60 font-lato text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-8">
          <SectionTitle eyebrow={t('services_faq_eyebrow')} title={t('services_faq_title')} />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-cream border border-slate-200/50 rounded-2xl overflow-hidden hover:border-saffron/30 transition-all shadow-sm">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-playfair text-slate font-semibold list-none select-none">
                  {faq.q}
                  <FiChevronDown className="text-saffron ml-4 flex-shrink-0 group-open:rotate-180 transition-transform duration-300 text-lg" />
                </summary>
                <div className="px-5 pb-5 text-slate/65 font-lato text-sm leading-relaxed border-t border-slate-100 pt-4">
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

