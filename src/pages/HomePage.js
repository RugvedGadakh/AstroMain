import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services, testimonials, stats, products } from '../data/products';
import { SectionTitle, StarRating } from '../components/UI';
import ProductCard from '../components/ProductCard';
import { FiUsers, FiCalendar, FiTarget, FiSun, FiArrowRight, FiPhone, FiCompass, FiHome, FiHash, FiHeart, FiLayers } from 'react-icons/fi';
import { FaStar, FaGem, FaTrophy } from 'react-icons/fa';
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const renderStatIcon = (iconName) => {
  switch (iconName) {
    case 'users': return <FiUsers className="text-saffron text-3xl mx-auto mb-2" />;
    case 'calendar': return <FiCalendar className="text-saffron text-3xl mx-auto mb-2" />;
    case 'target': return <FiTarget className="text-saffron text-3xl mx-auto mb-2" />;
    case 'trophy': return <FaTrophy className="text-saffron text-3xl mx-auto mb-2" />;
    default: return null;
  }
};

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

// Stars background with soft sunset/orange particles
const Stars = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 80 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-saffron/40"
        style={{
          width: Math.random() > 0.8 ? '3px' : '1.5px',
          height: Math.random() > 0.8 ? '3px' : '1.5px',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.6 + 0.1,
          animation: `glowPulse ${2 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite`,
        }}
      />
    ))}
  </div>
);

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen hero-bg overflow-hidden flex items-center">
      <Stars />

      {/* Radial Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-saffron/10 animate-spin-slow opacity-40"></div>

        <div
          className="absolute w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full border border-gold/15"
          style={{
            animation: "spin 15s linear infinite reverse",
          }}
        ></div>

        <div className="absolute w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full border border-saffron/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-2 border border-saffron/20 bg-saffron/10 rounded-full px-4 py-2 mb-6">
            <FiSun className="text-gold text-xs sm:text-sm animate-spin-slow" />

            <span className="text-slate/85 text-[10px] sm:text-sm font-lato tracking-[0.2em] uppercase font-semibold">
              {t("home_trusted_by")}
            </span>

            <FiSun className="text-gold text-xs sm:text-sm animate-spin-slow" />
          </div>

          {/* HEADING */}
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate leading-[1.1] mb-5">
            {t("home_hero_title_1")}
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-gold to-saffron">
              {t("home_hero_title_2")}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-slate/75 font-lato text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            {t("home_hero_desc")}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              {t("nav_book_consultation")}
              <FiArrowRight />
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate font-lato font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full hover:border-saffron hover:text-saffron transition-all duration-300 text-sm sm:text-base"
            >
              {t("home_explore_shop")}
              <FiArrowRight />
            </Link>
          </div>

          {/* MINI STATS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
            {[
              ["50K+", t("home_stat_clients")],
              ["18+", t("home_stat_years")],
              ["95%", t("home_stat_accuracy")],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-cinzel text-2xl sm:text-3xl font-bold text-saffron">
                  {num}
                </div>

                <div className="text-slate/50 text-[11px] sm:text-xs font-lato font-medium uppercase tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron/15 to-gold/15 blur-3xl scale-110 animate-glow-pulse"></div>

            {/* Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-saffron/20 animate-spin-slow scale-110"></div>

            {/* IMAGE */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-saffron/20 shadow-xl">
              <img
                src="/images/Vishal_Tarte_Img.png"
                alt="Pandit Vishal Tarte"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* TOP BADGE */}
            <div className="absolute top-0 right-0 sm:-top-4 sm:-right-4 bg-cream border border-gold/30 rounded-2xl px-3 sm:px-4 py-2 text-center shadow-md animate-float flex flex-col items-center">
              <FaStar className="text-gold text-sm sm:text-base mb-1" />

              <div className="text-slate text-[10px] sm:text-xs font-bold">
                {t("home_badge_stars")}
              </div>
            </div>

            {/* BOTTOM BADGE */}
            <div
              className="absolute bottom-0 left-0 sm:-bottom-4 sm:-left-4 bg-cream border border-saffron/30 rounded-2xl px-3 sm:px-4 py-2 text-center shadow-md flex flex-col items-center"
              style={{
                animation: "float 6s ease-in-out 3s infinite",
              }}
            >
              <FaTrophy className="text-saffron text-sm sm:text-base mb-1" />

              <div className="text-slate text-[10px] sm:text-xs font-bold">
                {t("home_badge_award")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-dawn to-transparent"></div>
    </section>
  );
}

function StatsSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-cream border-y border-saffron/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/background_chakra.jpeg')] bg-center bg-cover opacity-[0.02] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="mb-2 filter drop-shadow-sm">{renderStatIcon(s.icon)}</div>
              <div className="font-cinzel text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold mb-1">{s.number}</div>
              <div className="text-slate/60 text-sm font-lato tracking-wide uppercase font-semibold text-xs">{t('stats.' + s.label, { defaultValue: s.label })}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF8F1] to-[#FFFDF9] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-saffron/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionTitle
          eyebrow={t("home_services_eyebrow")}
          title={t("home_services_title")}
          subtitle={t("home_services_subtitle")}
        />

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
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
                <div className="text-center flex flex-col h-[170px]">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-slate mb-2 group-hover:text-saffron transition-colors duration-300">
                      {serviceTitle}
                    </h3>

                    <p className="text-slate/65 text-sm leading-relaxed line-clamp-4">
                      {serviceDesc}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="mt-auto pt-2">
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

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-saffron to-gold text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t("services_title")}
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
function FeaturedProducts() {
  const { t } = useTranslation();
  const featured = products.slice(0, 6);
  return (
    <section className="py-20 bg-cream border-t border-saffron/10">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle eyebrow={t('home_shop_eyebrow')} title={t('home_shop_title')} subtitle={t('home_shop_subtitle')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop" className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105 justify-center">
            {t('home_shop_all_products')} <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const tTimer = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(tTimer);
  }, []);

  const activeTestimonialText = t(`testimonials.${testimonials[active].id}.text`, { defaultValue: testimonials[active].text });
  const activeTestimonialName = t(`testimonials.${testimonials[active].id}.name`, { defaultValue: testimonials[active].name });
  const activeTestimonialCity = t(`testimonials.${testimonials[active].id}.city`, { defaultValue: testimonials[active].city });
  const activeTestimonialService = t(`testimonials.${testimonials[active].id}.service`, { defaultValue: testimonials[active].service });

  return (
    <section className="py-20 bg-dawn relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/background_chakra.jpeg')] bg-center bg-contain bg-no-repeat opacity-[0.015] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionTitle eyebrow={t('home_testimonials_eyebrow')} title={t('home_testimonials_title')} subtitle={t('home_testimonials_subtitle')} />

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-cream border border-slate-200/60 rounded-3xl p-8 text-center relative shadow-sm">
            <div className="text-saffron text-5xl font-cinzel absolute -top-4 left-8 opacity-20">"</div>
            <p className="text-slate/85 font-playfair text-lg italic leading-relaxed mb-6">
              {activeTestimonialText}
            </p>
            <div className="flex justify-center mb-3">
              <StarRating rating={testimonials[active].rating} />
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center font-cinzel font-bold text-white text-sm shadow-sm">
                {testimonials[active].avatar}
              </div>
              <div className="text-left">
                <div className="text-slate font-bold font-lato">{activeTestimonialName}</div>
                <div className="text-slate/50 text-sm">{activeTestimonialCity} · {activeTestimonialService}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-saffron' : 'w-2 h-2 bg-slate/20 hover:bg-slate/40'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialMediaSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFDF9] to-[#FFF8F1] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-saffron/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-saffron text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Follow Our Socials
          </p>

          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-slate mb-4">
            Stay Connected With Us
          </h2>

          <p className="text-slate/60 max-w-2xl mx-auto leading-relaxed">
            Explore free astrology guidance, remedies, spiritual wisdom and
            exclusive content across our social media platforms.
          </p>
        </div>

        {/* SOCIAL BUTTONS */}
        <div className="flex flex-wrap justify-center gap-5 mb-14">
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-saffron/10 hover:border-red-500/30 px-7 py-4 rounded-2xl text-slate transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <FaYoutube className="text-red-500 text-3xl" />

            <span className="font-cinzel text-xl font-semibold">
              YouTube
            </span>
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-saffron/10 hover:border-pink-500/30 px-7 py-4 rounded-2xl text-slate transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <FaInstagram className="text-pink-500 text-3xl" />

            <span className="font-cinzel text-xl font-semibold">
              Instagram
            </span>
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-saffron/10 hover:border-blue-500/30 px-7 py-4 rounded-2xl text-slate transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <FaFacebookF className="text-blue-500 text-3xl" />

            <span className="font-cinzel text-xl font-semibold">
              Facebook
            </span>
          </a>
        </div>

        {/* FEATURED VIDEOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Daily Horoscope & Remedies",
              video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },
            {
              id: 2,
              title: "Powerful Astrology Tips",
              video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },
            {
              id: 3,
              title: "Spiritual Healing Guidance",
              video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white/75 backdrop-blur-md border border-saffron/10 rounded-3xl overflow-hidden hover:border-saffron/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(241,111,69,0.10)]"
            >
              {/* VIDEO */}
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  src={item.video}
                  title={item.title}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="font-cinzel text-xl text-slate font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate/60 text-sm leading-relaxed mb-5">
                  Watch astrology guidance, spiritual wisdom and free remedies
                  from Astro Vishal Tarte.
                </p>

                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-saffron to-gold text-white py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-saffron/20 transition-all duration-300"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-cream border-t border-saffron/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-gold/5 pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <p className="text-saffron font-lato text-sm tracking-widest uppercase mb-3 font-semibold">{t('home_cta_eyebrow')}</p>
        <h2 className="font-cinzel text-4xl md:text-5xl font-black text-slate mb-6">
          {t('home_cta_title').split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx === 0 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <p className="text-slate/65 font-lato text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          {t('home_cta_desc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105 text-lg">
            {t('home_cta_btn_book')} <FiArrowRight />
          </Link>
          <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate font-lato font-semibold px-10 py-4 rounded-full hover:border-saffron hover:text-saffron transition-all duration-300 text-lg">
            <FiPhone /> {t('home_cta_btn_call')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <SocialMediaSection/>
      <CTASection />
    </div>
  );
}

