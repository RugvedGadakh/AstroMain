import React, { useState } from 'react';
import { FiX, FiUploadCloud } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

export default function ShareExperienceModal({ isOpen, onClose }) {
  const { addToast } = useCart();
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [service, setService] = useState('Kundali Analysis');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !city || !text) {
      addToast("Please fill in all required fields.", "error");
      return;
    }
    
    // Simulate API Submission
    addToast("Experience submitted successfully! Thank you. 🙏");
    
    // Reset Form
    setName('');
    setCity('');
    setService('Kundali Analysis');
    setRating(5);
    setText('');
    setScreenshot(null);
    setFileName('');
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal Box */}
      <div 
        className="bg-cream border border-saffron/20 max-w-md w-full rounded-3xl p-6 shadow-2xl relative animate-slide-up text-slate flex flex-col max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate/40 hover:text-saffron transition-colors p-1"
          aria-label="Close modal"
        >
          <FiX className="text-xl" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="font-cinzel text-2xl font-bold text-slate mb-2">Share Your Experience</h2>
          <p className="text-xs text-slate/50 font-lato">Submit your Astro feedback or upload a chat screenshot.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-jakarta text-xs">
          {/* Name Field */}
          <div>
            <label className="block font-bold text-slate/70 mb-1">Your Name *</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className="w-full px-4 py-2.5 bg-dawn/50 border border-slate-200 rounded-xl focus:border-saffron focus:ring-1 focus:ring-saffron outline-none text-slate"
              required
            />
          </div>

          {/* City Field */}
          <div>
            <label className="block font-bold text-slate/70 mb-1">Your City / Location *</label>
            <input 
              type="text" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Mumbai"
              className="w-full px-4 py-2.5 bg-dawn/50 border border-slate-200 rounded-xl focus:border-saffron focus:ring-1 focus:ring-saffron outline-none text-slate"
              required
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block font-bold text-slate/70 mb-1">Service Consulted *</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2.5 bg-dawn/50 border border-slate-200 rounded-xl focus:border-saffron outline-none text-slate"
            >
              <option value="Kundali Analysis">Kundali Analysis</option>
              <option value="Gemstone Consultation">Gemstone Consultation</option>
              <option value="Vastu Shastra">Vastu Shastra</option>
              <option value="Numerology Reading">Numerology Reading</option>
              <option value="Spiritual Healing">Spiritual Healing</option>
              <option value="Tarot Reading">Tarot Reading</option>
              <option value="Career Guidance">Career Guidance</option>
              <option value="Relationship Consultation">Relationship Consultation</option>
            </select>
          </div>

          {/* Star Rating Select */}
          <div>
            <label className="block font-bold text-slate/70 mb-1.5">Rating *</label>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none transition-transform hover:scale-110 p-0.5"
                >
                  <FaStar className={`text-lg ${star <= rating ? 'text-gold' : 'text-slate/10'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Written Review */}
          <div>
            <label className="block font-bold text-slate/70 mb-1">Share Your Experience *</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="How did the consultation or product help you?"
              rows={3}
              className="w-full px-4 py-2.5 bg-dawn/50 border border-slate-200 rounded-xl focus:border-saffron focus:ring-1 focus:ring-saffron outline-none text-slate resize-none"
              required
            />
          </div>

          {/* Screenshot Upload Uploader */}
          <div>
            <label className="block font-bold text-slate/70 mb-1">Upload Screenshot (Optional)</label>
            <label className="flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-xl py-4 bg-dawn/20 hover:bg-dawn/40 transition-colors cursor-pointer text-center px-4">
              <FiUploadCloud className="text-saffron text-2xl mb-1.5" />
              <span className="text-[10px] font-semibold text-slate/60">
                {fileName || "Drag screenshot here or browse"}
              </span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-saffron to-gold text-slate font-bold rounded-2xl hover:opacity-95 transition-opacity shadow-md hover:shadow-lg text-sm"
          >
            Submit Experience
          </button>
        </form>
      </div>
    </div>
  );
}
