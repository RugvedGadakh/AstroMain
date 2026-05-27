import React from 'react';
import GemCard from './GemCard';

export default function GemMarquee({ products }) {
  // Filter products to only include gemstones, or default to all if none match
  const gems = products.filter(p => p.category === 'gemstones');
  const listToRender = gems.length > 0 ? gems : products;

  // Duplicate the list of items twice to ensure it overflows the screen width and loops seamlessly
  const marqueeItems = [...listToRender, ...listToRender, ...listToRender];

  return (
    <div className="relative overflow-hidden w-full py-4 select-none">
      {/* Outer container to hold marquee tracks */}
      <div className="flex overflow-x-hidden w-full">
        {/* Infinite scrolling track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] py-8">
          {marqueeItems.map((product, idx) => (
            <GemCard 
              key={`${product.id}-${idx}`} 
              product={product} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
