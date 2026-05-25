import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SectionTitle } from '../components/UI';
<<<<<<< HEAD
import { FiSearch, FiGrid, FiDisc, FiCircle, FiLayers, FiHome, FiSun } from 'react-icons/fi';
import { FaGem } from 'react-icons/fa';

const renderCategoryIcon = (iconName, className = "") => {
  switch (iconName) {
    case 'grid': return <FiGrid className={className} />;
    case 'gem': return <FaGem className={className} />;
    case 'disc': return <FiDisc className={className} />;
    case 'circle': return <FiCircle className={className} />;
    case 'layers': return <FiLayers className={className} />;
    case 'home': return <FiHome className={className} />;
    default: return null;
  }
};
=======
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [search, setSearch] = useState('');
<<<<<<< HEAD
=======
  const [loading] = useState(false);
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc

  const filtered = useMemo(() => {
    let arr = [...products];
    if (activeCategory !== 'all') arr = arr.filter(p => p.category === activeCategory);
    if (search) arr = arr.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === 'price-asc') arr.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') arr.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') arr.sort((a, b) => b.rating - a.rating);
    return arr;
  }, [activeCategory, sortBy, search]);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-dawn pt-24 pb-16">
      {/* Header */}
      <div className="relative py-12 bg-gradient-to-b from-saffron/10 to-transparent border-b border-saffron/10 mb-12 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-saffron pointer-events-none">
          <FiSun className="w-64 h-64 animate-spin-slow" />
        </div>
=======
    <div className="min-h-screen bg-[#0a0404] pt-24 pb-16">
      {/* Header */}
      <div className="relative py-12 bg-gradient-to-b from-saffron/10 to-transparent border-b border-saffron/10 mb-12 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 text-[200px] select-none pointer-events-none">☸</div>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
        <SectionTitle eyebrow="Sacred Store" title="Cosmic Products" subtitle="Certified gemstones, sacred Rudraksha & spiritual items — energized for maximum potency." />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
<<<<<<< HEAD
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/40 text-lg" />
=======
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">🔍</span>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
<<<<<<< HEAD
              className="w-full bg-cream border border-slate-300 text-slate placeholder-slate-400 rounded-xl pl-11 pr-4 py-3 font-lato text-sm focus:border-saffron focus:ring-1 focus:ring-saffron"
=======
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl pl-11 pr-4 py-3 font-lato text-sm"
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
            />
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
<<<<<<< HEAD
            className="bg-cream border border-slate-300 text-slate rounded-xl px-4 py-3 font-lato text-sm min-w-[180px] focus:border-saffron focus:ring-1 focus:ring-saffron"
          >
            <option value="default" className="bg-cream">Sort By Default</option>
            <option value="price-asc" className="bg-cream">Price: Low to High</option>
            <option value="price-desc" className="bg-cream">Price: High to Low</option>
            <option value="rating" className="bg-cream">Highest Rated</option>
=======
            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 font-lato text-sm min-w-[180px]"
          >
            <option value="default" className="bg-black">Sort By Default</option>
            <option value="price-asc" className="bg-black">Price: Low to High</option>
            <option value="price-desc" className="bg-black">Price: High to Low</option>
            <option value="rating" className="bg-black">Highest Rated</option>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
          </select>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
<<<<<<< HEAD
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-lato transition-all duration-300 shadow-sm ${
                activeCategory === cat.id 
                  ? 'bg-saffron border-saffron text-white font-bold' 
                  : 'bg-cream border-slate-200 text-slate/70 hover:border-saffron/50 hover:text-saffron'
              }`}
            >
              <span className="flex items-center">{renderCategoryIcon(cat.icon, "text-base")}</span>
=======
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-lato transition-all duration-300 ${activeCategory === cat.id ? 'bg-saffron border-saffron text-black font-bold' : 'border-white/15 text-white/60 hover:border-saffron/50 hover:text-saffron'}`}
            >
              <span>{cat.icon}</span>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Count */}
<<<<<<< HEAD
        <p className="text-slate/50 text-sm font-lato mb-6">{filtered.length} products found</p>
=======
        <p className="text-white/40 text-sm font-lato mb-6">{filtered.length} products found</p>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
<<<<<<< HEAD
            <FiLayers className="mx-auto text-5xl text-slate/30 mb-4" />
            <p className="text-slate/60 font-lato">No products found. Try a different search.</p>
=======
            <div className="text-5xl mb-4">🔮</div>
            <p className="text-white/50 font-lato">No products found. Try a different search.</p>
>>>>>>> e19948cce804bcadb5e34f5a43e4189f5d1a03fc
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
