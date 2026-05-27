import React from 'react';
import { StarRating } from './UI';
import { useTranslation } from 'react-i18next';

const getSenderColor = (id) => {
  const colors = [
    'text-teal-600',
    'text-orange-600',
    'text-pink-600',
    'text-blue-600',
    'text-purple-600',
    'text-indigo-600',
    'text-rose-600'
  ];
  return colors[id % colors.length];
};

const getTimestamp = (id) => {
  const times = [
    '10:14 AM',
    '11:32 AM',
    '02:15 PM',
    '04:45 PM',
    '06:21 PM',
    '08:05 PM',
    '09:12 PM'
  ];
  return times[id % times.length];
};

export default function WhatsAppBubbleCard({ testimonial }) {
  const { t } = useTranslation();
  
  const activeTestimonialText = t(`testimonials.${testimonial.id}.text`, { defaultValue: testimonial.text });
  const activeTestimonialName = t(`testimonials.${testimonial.id}.name`, { defaultValue: testimonial.name });
  const activeTestimonialCity = t(`testimonials.${testimonial.id}.city`, { defaultValue: testimonial.city });
  const activeTestimonialService = t(`testimonials.${testimonial.id}.service`, { defaultValue: testimonial.service });

  const senderColor = getSenderColor(testimonial.id);
  const timestamp = getTimestamp(testimonial.id);

  return (
    <div 
      className="group relative bg-cream border border-slate-200/50 rounded-2xl rounded-tl-none p-4 shadow-sm hover:shadow-md transition-all duration-300 max-w-[340px] flex flex-col justify-between"
      style={{ filter: 'drop-shadow(0 2px 4px rgba(53,47,45,0.03))' }}
    >
      {/* WhatsApp Message Bubble Tail */}
      <svg 
        className="absolute top-0 -left-[7px] w-[8px] h-[12px] fill-cream filter drop-shadow-[-2px_1px_1px_rgba(53,47,45,0.02)]" 
        viewBox="0 0 8 12"
      >
        <path d="M8,0 C8,0 0,0 0,0 C0,0 8,12 8,12 L8,0 Z" />
      </svg>

      {/* Bubble Content */}
      <div className="flex flex-col flex-1">
        {/* Header: Sender Name & Location */}
        <div className="flex items-baseline justify-between gap-2 mb-1 z-10">
          <span className={`font-jakarta text-xs font-bold ${senderColor}`}>
            {activeTestimonialName}
          </span>
          <span className="text-[10px] text-slate/40 font-jakarta font-medium">
            {activeTestimonialCity}
          </span>
        </div>

        {/* Astrological Service Hashtag (WhatsApp group theme) */}
        <div className="text-[10px] font-semibold text-saffron/80 font-jakarta mb-2">
          #{activeTestimonialService.replace(/\s+/g, '')}
        </div>

        {/* Message Text */}
        <p className="text-slate/85 font-lato text-xs leading-relaxed mb-4 flex-1">
          {activeTestimonialText}
        </p>
      </div>

      {/* Bubble Footer: Rating, Timestamp & Checkmarks */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 mt-auto z-10">
        <StarRating rating={testimonial.rating} />
        
        <div className="flex items-center gap-1 text-[9px] text-slate/40 font-jakarta">
          <span>{timestamp}</span>
          <span className="text-sky-500 font-bold text-xs select-none">✓✓</span>
        </div>
      </div>
    </div>
  );
}
