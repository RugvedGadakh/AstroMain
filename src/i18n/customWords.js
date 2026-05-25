/**
 * Custom Words and Slangs Translation Dictionary
 * 
 * You can manually add any custom words, terminology, or slang here.
 * These will be automatically merged into the active language translation resources.
 * 
 * How to add a new word/slang:
 * 1. Add a unique key under the 'en' object.
 * 2. Add the same key under 'hi' with the Hindi translation.
 * 3. Add the same key under 'mr' with the Marathi translation.
 * 
 * Usage in code:
 * t('slang.yourKey')
 */

export const customWords = {
  en: {
    // General cosmic terms or slangs
    "kundali": "Kundali (Birth Chart)",
    "vastu": "Vastu Shastra",
    "moksha": "Moksha (Spiritual Liberation)",
    "panditji": "Pandit Vishal Tarte",
    
    // Add your own English custom words/slangs below:
    "consultation_slang": "Consultation",
    "bestseller_slang": "Hot Pick",
  },
  hi: {
    // General cosmic terms or slangs
    "kundali": "कुंडली (जन्म पत्रिका)",
    "vastu": "वास्तु शास्त्र",
    "moksha": "मोक्ष (आध्यात्मिक मुक्ति)",
    "panditji": "पंडित विशाल तरटे",
    
    // Add your own Hindi custom words/slangs below:
    "consultation_slang": "सलाह",
    "bestseller_slang": "सबसे लोकप्रिय",
  },
  mr: {
    // General cosmic terms or slangs
    "kundali": "कुंडली (जन्म पत्रिका)",
    "vastu": "वास्तू शास्त्र",
    "moksha": "मोक्ष (आध्यात्मिक मुक्ती)",
    "panditji": "पंडित विशाल तरटे",
    
    // Add your own Marathi custom words/slangs below:
    "consultation_slang": "सल्लामसलत",
    "bestseller_slang": "सर्वात लोकप्रिय",
  }
};
