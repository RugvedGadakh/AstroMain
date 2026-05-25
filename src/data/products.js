export const products = [
  // Gemstones
  { id: 1, name: "Natural Ruby (Manik)", category: "gemstones", subcategory: "precious", price: 8999, originalPrice: 12999, rating: 4.8, reviews: 124, image: "/images/Precious Gemstones Service.png", badge: "Bestseller", description: "Certified natural ruby for Sun, boosts confidence, leadership & vitality. Ideal for Leo & Aries.", weight: "5 carats", origin: "Burma", certification: "GIA Certified" },
  { id: 2, name: "Yellow Sapphire (Pukhraj)", category: "gemstones", subcategory: "precious", price: 11999, originalPrice: 16999, rating: 4.9, reviews: 89, image: "/images/Precious Gemstones Service.png", badge: "Top Rated", description: "For Jupiter — attracts wisdom, wealth & marriage prospects. Ideal for Sagittarius.", weight: "6 carats", origin: "Ceylon", certification: "IGI Certified" },
  { id: 3, name: "Blue Sapphire (Neelam)", category: "gemstones", subcategory: "precious", price: 14999, originalPrice: 21999, rating: 4.7, reviews: 67, image: "/images/Precious Gemstones Service.png", badge: "Premium", description: "Saturn's gem — powerful for discipline, career growth, and spiritual elevation.", weight: "4 carats", origin: "Kashmir", certification: "GIA Certified" },
  { id: 4, name: "Amethyst Crystal", category: "gemstones", subcategory: "semi-precious", price: 1299, originalPrice: 1999, rating: 4.6, reviews: 203, image: "/images/Semi-Precious Gemstones Service.png", badge: "Popular", description: "Calms mind, enhances intuition & spiritual connection. Perfect for meditation.", weight: "8 carats", origin: "Brazil", certification: "Lab Tested" },
  { id: 5, name: "Rose Quartz", category: "gemstones", subcategory: "semi-precious", price: 899, originalPrice: 1499, rating: 4.5, reviews: 178, image: "/images/Semi-Precious Gemstones Service.png", badge: "Love Stone", description: "Stone of unconditional love. Attracts romance, heals heart chakra.", weight: "10 carats", origin: "Brazil", certification: "Lab Tested" },
  { id: 6, name: "Citrine (Sunehla)", category: "gemstones", subcategory: "semi-precious", price: 1599, originalPrice: 2499, rating: 4.7, reviews: 145, image: "/images/Semi-Precious Gemstones Service.png", badge: "Prosperity", description: "Merchant's stone — attracts abundance, success & positive energy.", weight: "7 carats", origin: "Bolivia", certification: "Lab Tested" },

  // Rudraksha
  { id: 7, name: "5 Mukhi Rudraksha Mala", category: "rudraksha", subcategory: "mala", price: 2499, originalPrice: 3999, rating: 4.9, reviews: 312, image: "/images/Spiritual Item Service.png", badge: "Most Sacred", description: "108 beads of 5 Mukhi Rudraksha. Blesses with health, peace & liberation.", beads: 108, origin: "Nepal", certification: "NRPCS Certified" },
  { id: 8, name: "1 Mukhi Rudraksha (Rare)", category: "rudraksha", subcategory: "single", price: 25999, originalPrice: 35999, rating: 5.0, reviews: 23, image: "/images/Spiritual Item Service.png", badge: "Ultra Rare", description: "Rarest bead — represents Lord Shiva. Brings moksha, divine consciousness.", beads: 1, origin: "Nepal", certification: "NRPCS Certified" },
  { id: 9, name: "7 Mukhi Rudraksha", category: "rudraksha", subcategory: "single", price: 3999, originalPrice: 5999, rating: 4.8, reviews: 56, image: "/images/Spiritual Item Service.png", badge: "Prosperity", description: "Blesses with wealth, good health & relieves financial troubles. Mahalaxmi bead.", beads: 1, origin: "Nepal", certification: "NRPCS Certified" },
  { id: 10, name: "Gauri Shankar Rudraksha", category: "rudraksha", subcategory: "single", price: 6999, originalPrice: 9999, rating: 4.9, reviews: 41, image: "/images/Spiritual Item Service.png", badge: "Marriage Boon", description: "Two naturally joined beads — blesses marital harmony and family bonding.", beads: 2, origin: "Nepal", certification: "NRPCS Certified" },

  // Bracelets
  { id: 11, name: "7 Chakra Healing Bracelet", category: "bracelets", subcategory: "healing", price: 1799, originalPrice: 2799, rating: 4.8, reviews: 267, image: "/images/Bracelet Service.png", badge: "Healing", description: "7 natural crystals aligned to your chakras. Balances energy flow.", material: "Natural gemstones", size: "Adjustable" },
  { id: 12, name: "Tiger Eye Power Bracelet", category: "bracelets", subcategory: "power", price: 1299, originalPrice: 1999, rating: 4.7, reviews: 189, image: "/images/Bracelet Service.png", badge: "Power", description: "Boosts courage, focus & personal power. Perfect for leaders.", material: "Tiger Eye Stone", size: "Adjustable" },
  { id: 13, name: "Labradorite Bracelet", category: "bracelets", subcategory: "protection", price: 1599, originalPrice: 2199, rating: 4.6, reviews: 134, image: "/images/Bracelet Service.png", badge: "Protection", description: "Shields aura, enhances intuition & transforms negativity into light.", material: "Labradorite", size: "Adjustable" },

  // Crystals
  { id: 14, name: "Clear Quartz Pyramid", category: "crystals", subcategory: "pyramid", price: 799, originalPrice: 1299, rating: 4.7, reviews: 223, image: "/images/Crystals Service.png", badge: "Energy Amplifier", description: "Amplifies intentions & cleanses space energy. Master healer crystal.", weight: "100g", origin: "Brazil" },
  { id: 15, name: "Selenite Wand", category: "crystals", subcategory: "wand", price: 599, originalPrice: 899, rating: 4.8, reviews: 156, image: "/images/Crystals Service.png", badge: "Cleansing", description: "Cleanses aura & other crystals. Brings mental clarity & angelic connection.", weight: "80g", origin: "Morocco" },
  { id: 16, name: "Black Tourmaline Chunk", category: "crystals", subcategory: "raw", price: 699, originalPrice: 1099, rating: 4.9, reviews: 301, image: "/images/Crystals Service.png", badge: "EMF Protection", description: "Strongest protection crystal. Blocks negative energies & EMF radiation.", weight: "120g", origin: "Brazil" },

  // Vastu
  { id: 17, name: "Vastu Pyramid Set (9pcs)", category: "vastu", subcategory: "pyramid", price: 2999, originalPrice: 4499, rating: 4.7, reviews: 78, image: "/images/Vastu Item Service.png", badge: "Complete Kit", description: "9-pyramid set for home vastu correction. Enhances positive energy flow.", material: "Crystal + Gold plated" },
  { id: 18, name: "Sri Yantra Copper Plate", category: "vastu", subcategory: "yantra", price: 1499, originalPrice: 2199, rating: 4.9, reviews: 112, image: "/images/Vastu Item Service.png", badge: "Sacred Geometry", description: "Energized Sri Yantra on copper. Attracts prosperity, wealth & spiritual growth.", material: "Pure Copper", size: "6×6 inches" },
];

export const categories = [
  { id: "all", label: "All Products", icon: "grid" },
  { id: "gemstones", label: "Gemstones", icon: "gem", subcategories: ["precious", "semi-precious"] },
  { id: "rudraksha", label: "Rudraksha", icon: "disc" },
  { id: "bracelets", label: "Bracelets", icon: "circle" },
  { id: "crystals", label: "Crystals", icon: "layers" },
  { id: "vastu", label: "Vastu Items", icon: "home" },
];

export const services = [
  { id: 1, title: "Kundali Analysis", icon: "compass", price: "₹1,499", description: "Detailed birth chart analysis revealing your destiny, career, marriage & spiritual path.", duration: "60 min", image: "/images/Kundali Service.png" },
  { id: 2, title: "Gemstone Consultation", icon: "gem", price: "₹799", description: "Personalized gemstone recommendations based on your birth chart & planetary positions.", duration: "30 min", image: "/images/Precious Gemstones Service.png" },
  { id: 3, title: "Vastu Shastra", icon: "home", price: "₹2,999", description: "Home & office energy audit. Transform spaces into prosperity-attracting environments.", duration: "90 min", image: "/images/Vastu Item Service.png" },
  { id: 4, title: "Numerology Reading", icon: "hash", price: "₹999", description: "Decode your life path, destiny number & hidden patterns guiding your journey.", duration: "45 min", image: "/images/Booking Service.png" },
  { id: 5, title: "Spiritual Healing", icon: "heart", price: "₹1,999", description: "Energy healing, chakra balancing & aura cleansing for mental & physical wellness.", duration: "60 min", image: "/images/Spiritual Item Service.png" },
  { id: 6, title: "Tarot Reading", icon: "layers", price: "₹699", description: "Intuitive tarot guidance for love, career, finance & life decisions.", duration: "30 min", image: "/images/Crystals Service.png" },
  {
    id: 7,
    title: "Career Guidance",
    icon: "target",
    price: "₹1,299",
    description: "Astrological insights for career growth, business success & financial stability.",
    duration: "45 min",
    image: "/images/Spiritual Item Service.png"
  },
  {
    id: 8,
    title: "Relationship Consultation",
    icon: "heart",
    price: "₹1,599",
    description: "Compatibility analysis and guidance for love, marriage & relationships.",
    duration: "60 min",
    image: "/images/Spiritual Item Service.png"
  }
];

export const testimonials = [
  { id: 1, name: "Priya Sharma", city: "Mumbai", rating: 5, text: "Vishal ji's kundali reading was life-changing. He predicted my career shift and marriage timing with uncanny accuracy. I bought the yellow sapphire he recommended and within 3 months got promoted!", avatar: "PS", service: "Kundali Analysis" },
  { id: 2, name: "Rahul Gupta", city: "Delhi", rating: 5, text: "The vastu consultation transformed my business completely. Revenue doubled in 6 months after following his advice. His knowledge is ancient yet practical.", avatar: "RG", service: "Vastu Shastra" },
  { id: 3, name: "Ananya Patel", city: "Bangalore", rating: 5, text: "I was skeptical but the 7 Chakra bracelet has genuinely changed my energy levels. My anxiety reduced significantly. The spiritual healing session was profound.", avatar: "AP", service: "Spiritual Healing" },
  { id: 4, name: "Suresh Iyer", city: "Chennai", rating: 5, text: "The Gauri Shankar Rudraksha brought harmony to my marriage. We were going through a rough patch and within months the bonding improved beautifully.", avatar: "SI", service: "Gemstone Consultation" },
  { id: 5, name: "Kavita Mehta", city: "Pune", rating: 5, text: "Best astrologer I've consulted. The numerology reading was spot-on. Even told me about my childhood trauma without me saying anything. Truly gifted!", avatar: "KM", service: "Numerology Reading" },
];

export const stats = [
  { number: "50,000+", label: "Satisfied Clients", icon: "users" },
  { number: "18+", label: "Years Experience", icon: "calendar" },
  { number: "95%", label: "Accuracy Rate", icon: "target" },
  { number: "4.9★", label: "Average Rating", icon: "trophy" },
];

export const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
  "04:30 PM", "05:00 PM", "06:00 PM", "06:30 PM",
];
