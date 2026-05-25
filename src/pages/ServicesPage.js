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
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {services.map((s) => {
            const serviceTitle = t(`services.${s.id}.title`, {
              defaultValue: s.title,
            });

            const serviceDesc = t(`services.${s.id}.description`, {
              defaultValue: s.description,
            });

            return (
              <div
                key={s.id}
                className="group relative bg-white/70 backdrop-blur-md border border-saffron/15 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-saffron/30 hover:shadow-[0_20px_60px_rgba(241,111,69,0.10)] shadow-sm"
              >
                {/* IMAGE */}
                <div className="flex justify-center mb-3">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <img
                      src={s.image}
                      alt={serviceTitle}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="text-center flex flex-col h-[160px]">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-slate mb-2 group-hover:text-saffron transition-colors duration-300">
                      {serviceTitle}
                    </h3>

                    <p className="text-slate/65 text-sm leading-relaxed line-clamp-4">
                      {serviceDesc}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="mt-auto pt-3">
                    <Link
                      to="/booking"
                      className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-saffron to-gold text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                      {t("btn_book_now")}
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

