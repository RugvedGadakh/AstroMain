import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { stats } from '../data/products';
import { SectionTitle } from '../components/UI';
import { FiBookOpen, FiAward, FiGlobe, FiHome, FiUsers, FiCalendar, FiTarget, FiSun, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { FaGem, FaTrophy } from 'react-icons/fa';

const renderStatIcon = (iconName) => {
  switch (iconName) {
    case 'users': return <FiUsers className="text-saffron text-3xl mb-1" />;
    case 'calendar': return <FiCalendar className="text-saffron text-3xl mb-1" />;
    case 'target': return <FiTarget className="text-saffron text-3xl mb-1" />;
    case 'trophy': return <FaTrophy className="text-saffron text-3xl mb-1" />;
    default: return null;
  }
};

export default function AboutPage() {
  const { t } = useTranslation();
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false); // start unmuted
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoWrapperRef.current || !videoRef.current) return;
      const rect = videoWrapperRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Check if the video section wrapper is inside the viewport area
      if (rect.top < viewHeight && rect.bottom > 0) {
        const totalHeight = rect.height;
        // relative progress inside the video scroll section
        const progress = Math.min(Math.max((viewHeight - rect.top) / (totalHeight + viewHeight), 0), 1);
        setScrollProgress(progress);

        // Autoplay when the video is centered and active (progress 30% to 78%)
        if (progress > 0.3 && progress < 0.78) {
          if (videoRef.current.paused) {
            videoRef.current.play().catch(() => {
              // If unmuted autoplay fails, fall back to muted autoplay automatically
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().catch(() => {});
            });
          }
        } else {
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate video transforms (slide & scale-zoom)
  let scale = 0.75;
  let translateY = 150;
  let opacity = 1;

  if (scrollProgress <= 0.45) {
    const ratio = scrollProgress / 0.45;
    scale = 0.75 + 0.25 * ratio;
    translateY = 150 * (1 - ratio);
    opacity = 1;
  } else if (scrollProgress > 0.45 && scrollProgress <= 0.7) {
    scale = 1.0;
    translateY = 0;
    opacity = 1;
  } else {
    const ratio = (scrollProgress - 0.7) / 0.3;
    scale = 1.0 - 0.15 * ratio;
    translateY = -50 * ratio; // slide up/away slightly
    opacity = 1 - ratio;
  }

  const achievements = [
    { year: '2006', title: t('about_achievement_1'), icon: <FiBookOpen className="text-saffron text-xl" /> },
    { year: '2009', title: t('about_achievement_2'), icon: <FiAward className="text-saffron text-xl" /> },
    { year: '2011', title: t('about_achievement_3'), icon: <FiGlobe className="text-saffron text-xl" /> },
    { year: '2015', title: t('about_achievement_4'), icon: <FaTrophy className="text-saffron text-xl" /> },
    { year: '2018', title: t('about_achievement_5'), icon: <FiHome className="text-saffron text-xl" /> },
    { year: '2022', title: t('about_achievement_6'), icon: <FiUsers className="text-saffron text-xl" /> },
    { year: '2024', title: t('about_achievement_7'), icon: <FaGem className="text-saffron text-xl" /> },
  ];

  const expertise = [
    t('about_exp_1'),
    t('about_exp_2'),
    t('about_exp_3'),
    t('about_exp_4'),
    t('about_exp_5'),
    t('about_exp_6'),
    t('about_exp_7'),
    t('about_exp_8'),
    t('about_exp_9'),
    t('about_exp_10'),
  ];

  return (
    <div className="min-h-screen bg-dawn pt-24 pb-16">
      {/* Header */}
      <div className="relative py-12 bg-gradient-to-b from-saffron/10 to-transparent border-b border-saffron/10 mb-16 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-saffron pointer-events-none">
          <FiSun className="w-64 h-64 animate-spin-slow" />
        </div>
        <SectionTitle eyebrow={t('about_eyebrow')} title={t('about_title')} subtitle={t('about_subtitle')} />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-saffron/15 to-gold/10 rounded-3xl blur-3xl opacity-50"></div>
            <div className="relative animate-fade-in">
              <div className="w-80 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden border border-saffron/20 shadow-xl">
                <img src="/images/Vishal_Tarte_Img.png" alt="Pandit Vishal Tarte" className="w-full h-full object-cover object-top" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-cream border border-slate-200/60 rounded-2xl px-5 py-4 shadow-lg">
                <div className="font-cinzel text-saffron font-black text-2xl">18+</div>
                <div className="text-slate/60 text-sm font-lato font-semibold">{t('about_years_mastery')}</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-saffron font-lato text-sm tracking-widest uppercase mb-3 font-semibold">{t('about_bio_eyebrow')}</p>
            <h2 className="font-cinzel text-3xl font-bold text-slate mb-6">{t('about_bio_title_1')}<br /><span className="text-saffron">{t('about_bio_title_2')}</span></h2>
            <div className="space-y-4 text-slate/70 font-lato leading-relaxed mb-8">
              <p>{t('about_bio_p1')}</p>
              <p>{t('about_bio_p2')}</p>
              <p>{t('about_bio_p3')}</p>
            </div>

            {/* Expertise chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {expertise.map(e => (
                <span key={e} className="text-xs font-lato text-saffron font-semibold border border-saffron/30 bg-saffron/5 px-3 py-1.5 rounded-full">{e}</span>
              ))}
            </div>

            <Link to="/booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-slate font-cinzel font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-saffron/15 transition-all duration-300 hover:scale-105">
              {t('nav_book_consultation')} ✦
            </Link>
          </div>
        </div>

        {/* Scroll Video Section (Wrapper to host the scroll distance) */}
        <div ref={videoWrapperRef} className="relative w-full h-[135vh] z-0 overflow-hidden mb-12">
          {/* Pinned stick player */}
          <div className="sticky top-[15%] h-[60vh] md:h-[72vh] w-full flex items-center justify-center">
            <div 
              className="w-[95%] max-w-5xl h-full rounded-3xl overflow-hidden shadow-2xl border border-saffron/20 bg-black/10 relative transition-transform duration-100 ease-out"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity: opacity,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none z-10" />
              <video
                ref={videoRef}
                src="/images/Video/Intro_Video.mp4"
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
              />
              {/* Video Title Overlay */}
              <div className="absolute bottom-6 left-6 text-white z-20 font-cinzel select-none drop-shadow-md">
                <p className="text-[10px] tracking-[0.2em] text-gold font-bold mb-1 uppercase">Astro Vision Guidance</p>
                <h3 className="text-lg md:text-xl font-bold">Divine Wisdom by Vishal Tarte</h3>
              </div>
              {/* Audio Volume Mute/Unmute Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newMuteState = !isMuted;
                  setIsMuted(newMuteState);
                  videoRef.current.muted = newMuteState;
                }}
                className="absolute bottom-6 right-6 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20 focus:outline-none shadow-md hover:scale-105"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? <FiVolumeX className="text-base" /> : <FiVolume2 className="text-base" />}
              </button>
            </div>
          </div>
        </div>

        {/* Rising Content: Pushed relative z-10 with page background to overlap the video */}
        <div className="relative z-10 bg-dawn pt-12 shadow-[0_-30px_60px_rgba(250,246,240,0.95)]">
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {stats.map((s, i) => (
              <div key={i} className="bg-cream border border-slate-200/50 rounded-2xl p-6 text-center hover:border-saffron/30 transition-all shadow-sm card-glow flex flex-col justify-center items-center">
                <div className="mb-2 filter drop-shadow-sm">{renderStatIcon(s.icon)}</div>
                <div className="font-cinzel text-3xl font-black text-saffron mb-1">{s.number}</div>
                <div className="text-slate/60 text-sm font-lato font-medium">{t('stats.' + s.label, { defaultValue: s.label })}</div>
              </div>
            ))}
          </div>

          {/* Winding Celestial Pathway Section */}
          <div className="mb-20">
            <SectionTitle eyebrow={t('about_journey_eyebrow')} title={t('about_journey_title')} />
            
            <div className="relative">
              {/* Curved Winding Pathway Dotted Line (Desktop only) */}
              <svg className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-28 opacity-30 pointer-events-none hidden md:block" viewBox="0 0 100 800" preserveAspectRatio="none">
                <path 
                  d="M50,0 C10,120 90,240 50,360 C10,480 90,600 50,720 C10,840 90,960 50,1080" 
                  fill="none" 
                  stroke="#F2AF42" 
                  strokeWidth="3" 
                  strokeDasharray="8 6" 
                  className="drop-shadow-[0_0_8px_rgba(242,175,66,0.4)]"
                />
              </svg>

              <div className="space-y-12 relative z-10">
                {achievements.map((a, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse text-right' : ''}`}>
                    
                    {/* Winding Pathway Step Card */}
                    <div className="flex-1 w-full">
                      <div className={`bg-cream border border-slate-200/60 rounded-3xl p-6 hover:border-gold/60 transition-all duration-500 max-w-sm shadow-sm hover:shadow-[0_15px_35px_rgba(241,111,69,0.08)] hover:-translate-y-1.5 relative overflow-hidden group ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        {/* Soft gold hover background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        {/* Step Counter */}
                        <div className={`text-[10px] tracking-widest font-jakarta font-bold uppercase text-gold mb-1.5`}>
                          ✦ Step 0{i + 1}
                        </div>
                        
                        {/* Title and Icon */}
                        <div className={`mb-3 filter drop-shadow-sm flex items-center gap-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'justify-start'}`}>
                          <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {a.icon}
                          </div>
                          <div className="text-saffron font-cinzel font-bold text-lg">{a.year}</div>
                        </div>
                        
                        <p className="text-slate/75 font-lato text-sm leading-relaxed">{a.title}</p>
                      </div>
                    </div>

                    {/* Winding Pathway Central Node Chakra */}
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-r from-saffron/20 to-gold/20 border-2 border-gold items-center justify-center text-saffron font-bold font-cinzel text-xs flex-shrink-0 z-10 relative group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(242,175,66,0.3)]">
                      {/* Rotating halo */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-saffron/40 animate-spin-slow opacity-60 pointer-events-none"></div>
                      <span className="relative z-10">{a.year.slice(-2)}</span>
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
