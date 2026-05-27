import React from 'react';
import { FiArrowLeft, FiVideo, FiPhone, FiMoreVertical } from 'react-icons/fi';

const getChatData = (index) => {
  const chats = [
    {
      senderName: "Rahul Gupta (Delhi)",
      messages: [
        { text: "Pranam Guruji, I got the job offer in London today! Your prediction was 100% accurate.", isOutgoing: false, time: "10:14 AM" },
        { text: "Hari Om! The Sun transit in your 10th house has begun. Wear the Ruby and keep up the devotion.", isOutgoing: true, time: "10:17 AM" },
        { text: "Yes, wearing the Ruby since last month. Thank you so much for your divine guidance 🙏", isOutgoing: false, time: "10:19 AM" }
      ]
    },
    {
      senderName: "Suresh Iyer (Chennai)",
      messages: [
        { text: "Guruji, my daughter's wedding got fixed today! The obstacles in matching are fully resolved.", isOutgoing: false, time: "11:30 AM" },
        { text: "Hari Om. Jupiter blessings are with you. Offer yellow flowers on Thursdays.", isOutgoing: true, time: "11:34 AM" },
        { text: "We will start this Thursday. Thank you for saving our family from stress!", isOutgoing: false, time: "11:36 AM" }
      ]
    },
    {
      senderName: "Priya Sharma (Mumbai)",
      messages: [
        { text: "Guruji, shop sales increased by 50% since we shifted the workspace alignment as per Vastu.", isOutgoing: false, time: "02:15 PM" },
        { text: "Excellent. Positive energy flows where there is no clutter. Keep the northeast corner lit.", isOutgoing: true, time: "02:20 PM" },
        { text: "Yes, keeping it clean and bright. You have transformed our business!", isOutgoing: false, time: "02:22 PM" }
      ]
    },
    {
      senderName: "Ananya Patel (Bangalore)",
      messages: [
        { text: "Pranam, my health and sleep improved so much after wearing the Yellow Sapphire.", isOutgoing: false, time: "04:45 PM" },
        { text: "Hari Om. Jupiter brings peace and mental stability. Do meditation daily.", isOutgoing: true, time: "04:48 PM" },
        { text: "Yes, meditation is much easier now. Thanks for the exact consultation.", isOutgoing: false, time: "04:50 PM" }
      ]
    }
  ];
  return chats[index % chats.length];
};

export default function WhatsAppChatScreenshot({ index, imageSrc }) {
  // If the user has provided an actual screenshot image, render it directly
  if (imageSrc) {
    return (
      <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-md border border-slate-200/50 hover:scale-[1.02] transition-transform duration-300">
        <img 
          src={imageSrc} 
          alt={`WhatsApp Review ${index}`} 
          className="w-full h-full object-cover object-center"
        />
      </div>
    );
  }

  // Otherwise, render a high-fidelity CSS cropped mobile WhatsApp screenshot
  const chat = getChatData(index);

  return (
    <div className="relative w-full h-[280px] bg-[#efeae2] border border-slate-300/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 font-sans flex flex-col hover:scale-[1.02]">
      {/* Mobile Status Bar Simulation */}
      <div className="bg-[#075e54] text-[8px] text-white/80 px-4 py-0.5 flex justify-between select-none">
        <span>Astro Chat Review</span>
        <span>100% Secure</span>
      </div>

      {/* WhatsApp Header Mockup */}
      <div className="bg-[#075e54] text-white px-3 py-2 flex items-center justify-between select-none">
        <div className="flex items-center gap-1.5">
          <FiArrowLeft className="text-xs text-white/80" />
          {/* Avatar Icon */}
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-saffron to-gold text-slate font-bold text-[10px] flex items-center justify-center shadow-inner">
            {chat.senderName.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-bold text-[11px] leading-tight line-clamp-1">{chat.senderName}</div>
            <div className="text-[8px] text-white/70">Online</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-white/90">
          <FiVideo />
          <FiPhone />
          <FiMoreVertical />
        </div>
      </div>

      {/* WhatsApp Background Chat Area */}
      <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 relative bg-opacity-[0.05] bg-[radial-gradient(#352f2d_1px,transparent_1px)] [background-size:16px_16px]">
        {/* Date Separator */}
        <div className="self-center bg-white/85 text-[8px] text-slate/50 font-semibold px-2 py-0.5 rounded shadow-sm uppercase select-none mb-1">
          Today
        </div>

        {chat.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl p-2 max-w-[85%] text-[10px] leading-relaxed shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] flex flex-col ${
              msg.isOutgoing
                ? "bg-[#d9fdd3] self-end rounded-tr-none text-slate"
                : "bg-white self-start rounded-tl-none text-slate"
            }`}
          >
            {/* Bubble Tail */}
            {msg.isOutgoing ? (
              <svg className="absolute top-0 -right-[5px] w-[6px] h-[9px] fill-[#d9fdd3]" viewBox="0 0 8 12">
                <path d="M0,0 C0,0 8,0 8,0 C8,0 0,12 0,12 L0,0 Z" />
              </svg>
            ) : (
              <svg className="absolute top-0 -left-[5px] w-[6px] h-[9px] fill-white" viewBox="0 0 8 12">
                <path d="M8,0 C8,0 0,0 0,0 C0,0 8,12 8,12 L8,0 Z" />
              </svg>
            )}

            {/* Message Body */}
            <span>{msg.text}</span>

            {/* Message Time & Checkmarks */}
            <div className="self-end flex items-center gap-0.5 text-[7px] text-slate/40 mt-1 select-none font-medium">
              <span>{msg.time}</span>
              {msg.isOutgoing && <span className="text-sky-500 font-bold">✓✓</span>}
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp Footer Chat Bar Mockup */}
      <div className="bg-[#f0f2f5] p-1.5 flex items-center gap-2 border-t border-slate-300/30 select-none">
        <div className="flex-1 bg-white rounded-full py-1 px-3 text-[9px] text-slate/40 flex items-center">
          Type a message...
        </div>
        <div className="w-6 h-6 rounded-full bg-[#128c7e] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
          🎤
        </div>
      </div>
    </div>
  );
}
