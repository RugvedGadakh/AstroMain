import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiX, FiGlobe, FiCalendar } from 'react-icons/fi';

export default function Popups() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [showLangPopup, setShowLangPopup] = useState(false);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [bookingTimerTriggered, setBookingTimerTriggered] = useState(false);

  // 1. Language selection popup timer (2 seconds)
  useEffect(() => {
    const langSelected = localStorage.getItem('astro_language_selected');
    if (!langSelected) {
      const timer = setTimeout(() => {
        setShowLangPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // 2. Booking promo popup timer (12 seconds)
  useEffect(() => {
    const bookingPrompted = sessionStorage.getItem('astro_booking_prompted');
    if (!bookingPrompted) {
      const timer = setTimeout(() => {
        setBookingTimerTriggered(true);
      }, 12000);
      return () => clearTimeout(timer);
    }
  }, []);

  // 3. Trigger booking popup only after language popup is closed / resolved
  useEffect(() => {
    if (bookingTimerTriggered && !showLangPopup) {
      const bookingPrompted = sessionStorage.getItem('astro_booking_prompted');
      if (!bookingPrompted) {
        setShowBookingPopup(true);
      }
    }
  }, [bookingTimerTriggered, showLangPopup]);

  const handleSelectLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('astro_language_selected', 'true');
    setShowLangPopup(false);
  };

  const handleCloseLanguage = () => {
    localStorage.setItem('astro_language_selected', 'true');
    setShowLangPopup(false);
  };

  const handleCloseBooking = () => {
    sessionStorage.setItem('astro_booking_prompted', 'true');
    setShowBookingPopup(false);
  };

  const handleBookNow = () => {
    sessionStorage.setItem('astro_booking_prompted', 'true');
    setShowBookingPopup(false);
    navigate('/booking');
  };

  return (
    <>
      {/* 1. Language Selection Popup */}
      {showLangPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dawn/80 backdrop-blur-md transition-all duration-300 p-4">
          <div className="relative w-full max-w-md bg-dawn/95 border border-saffron/30 rounded-3xl p-8 text-center shadow-2xl overflow-hidden animate-fade-in animate-duration-300">
            {/* Background design elements */}
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-saffron/10 blur-2xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-gold/15 blur-2xl"></div>

            {/* Close Button */}
            <button
              onClick={handleCloseLanguage}
              className="absolute top-4 right-4 text-slate/60 hover:text-saffron transition-all p-1.5 rounded-full hover:bg-slate/5 text-xl"
              aria-label="Close"
            >
              <FiX />
            </button>

            {/* Globe Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center text-white text-3xl shadow-lg shadow-saffron/20 animate-glow-pulse">
              <FiGlobe />
            </div>

            {/* Heading */}
            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-slate mb-6 px-2 leading-snug">
              Choose Language<br />
              <span className="text-saffron text-lg font-lato">भाषा चुनें / भाषा निवडा</span>
            </h3>

            {/* Language Buttons */}
            <div className="space-y-3 relative z-10">
              {[
                { code: 'en', native: 'English', sub: 'Default' },
                { code: 'hi', native: 'हिन्दी', sub: 'Hindi' },
                { code: 'mr', native: 'मराठी', sub: 'Marathi' }
              ].map(lang => (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all border flex items-center justify-between ${
                    (i18n.language || 'en').startsWith(lang.code)
                      ? 'bg-gradient-to-r from-saffron/20 to-gold/20 border-saffron text-saffron shadow-sm'
                      : 'bg-slate/5 border-slate-300 hover:border-saffron hover:bg-saffron/5 text-slate'
                  }`}
                >
                  <span className="font-lato text-base">{lang.native}</span>
                  <span className="text-xs text-slate/50 font-medium font-lato uppercase">{lang.sub}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. Booking Promotion Popup */}
      {showBookingPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dawn/80 backdrop-blur-md transition-all duration-300 p-4">
          <div className="relative w-full max-w-2xl bg-dawn/95 border border-saffron/30 rounded-3xl shadow-2xl overflow-hidden animate-fade-in animate-duration-300">
            {/* Background design elements */}
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-saffron/10 blur-3xl"></div>

            {/* Close Button */}
            <button
              onClick={handleCloseBooking}
              className="absolute top-4 right-4 text-slate/60 hover:text-saffron transition-all p-1.5 rounded-full hover:bg-slate/5 text-xl z-10"
              aria-label="Close"
            >
              <FiX />
            </button>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left/Top: Image section with dynamic border */}
              <div className="md:col-span-5 relative bg-gradient-to-b from-dawn/40 to-dawn/80 md:bg-dawn flex items-center justify-center p-6 md:p-0 border-b md:border-b-0 md:border-r border-saffron/10">
                <div className="relative w-36 h-36 md:w-full md:h-full md:aspect-[4/5] overflow-hidden md:rounded-none rounded-full border-2 md:border-0 border-saffron/25 shadow-lg shadow-saffron/10">
                  <img
                    src="/images/Vishal_Tarte_Img.png"
                    alt="Pandit Vishal Tarte"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
                    onError={e => {
                      e.target.style.background = 'linear-gradient(135deg, #FAF6F0, #F16F45)';
                      e.target.style.display = 'flex';
                    }}
                  />
                </div>
              </div>

              {/* Right/Bottom: Content section */}
              <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center text-left">
                {/* Micro badge */}
                <div className="inline-flex items-center gap-1.5 border border-saffron/30 bg-saffron/10 rounded-full px-3 py-1 mb-4 self-start text-[10px] sm:text-xs font-bold tracking-widest text-saffron font-lato uppercase">
                  <FiCalendar /> {t('booking_panel_exp')}
                </div>

                {/* Title */}
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate mb-3 leading-snug">
                  {t('popup_booking_title')}
                </h3>

                {/* Description */}
                <p className="text-slate/75 font-lato text-sm sm:text-base leading-relaxed mb-6">
                  {t('popup_booking_desc')}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleBookNow}
                    className="flex-1 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-saffron/25 transition-all hover:scale-[1.02] text-sm sm:text-base text-center"
                  >
                    {t('popup_booking_btn')}
                  </button>
                  <button
                    onClick={handleCloseBooking}
                    className="px-6 py-3 rounded-full border border-slate-300 text-slate font-lato font-semibold hover:border-saffron hover:text-saffron transition-all text-sm sm:text-base text-center"
                  >
                    {t('btn_back_to_shop', { defaultValue: 'Later' })}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
