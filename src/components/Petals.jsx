import React, { useEffect, useState } from 'react';

const Petals = () => {
  const [petals, setPetals] = useState([]);

  const cols = [
    '#F48FB1', '#F8BBD0', '#FCE4EC',   // pinks
    '#C8E6C9', '#A5D6A7', '#81C784',   // greens
    '#FF8F00', '#FFA726', '#FFB74D',   // oranges (marigold)
    '#FFFFFF', '#F5F5F5',             // whites
    '#E8185A', '#1E8C3A',             // brand accents
  ];

  useEffect(() => {
    const newPetals = [];
    for (let i = 0; i < 38; i++) {
      const sz = 13 + Math.random() * 20;
      const col = cols[Math.floor(Math.random() * cols.length)];
      const t = Math.floor(Math.random() * 4);
      const left = Math.random() * 100;
      const duration = 7 + Math.random() * 11;
      const delay = -Math.random() * 14;

      let svg = null;
      if (t === 0) {
        svg = (
          <svg width={sz} height={sz * 1.5} viewBox="0 0 20 30" fill="none">
            <ellipse cx="10" cy="15" rx="9" ry="14" fill={col} opacity=".72" />
            <path d="M10 2 Q12 10 10 22 Q8 10 10 2Z" fill="rgba(255,255,255,.2)" />
          </svg>
        );
      } else if (t === 1) {
        svg = (
          <svg width={sz} height={sz} viewBox="0 0 32 32" fill="none">
            <ellipse cx="16" cy="16" rx="6" ry="14" fill={col} opacity=".68" transform="rotate(0 16 16)" />
            <ellipse cx="16" cy="16" rx="6" ry="14" fill={col} opacity=".68" transform="rotate(60 16 16)" />
            <ellipse cx="16" cy="16" rx="6" ry="14" fill={col} opacity=".68" transform="rotate(120 16 16)" />
            <circle cx="16" cy="16" r="4" fill={col} opacity=".9" />
          </svg>
        );
      } else if (t === 2) {
        svg = (
          <svg width={sz * 1.3} height={sz} viewBox="0 0 26 20" fill="none">
            <path d="M13 1 Q24 5 24 10 Q24 15 13 19 Q2 15 2 10 Q2 5 13 1Z" fill={col} opacity=".7" />
          </svg>
        );
      } else {
        svg = (
          <svg width={sz} height={sz} viewBox="0 0 30 30" fill="none">
            <ellipse cx="15" cy="15" rx="5" ry="11" fill={col} opacity=".72" transform="rotate(0 15 15)" />
            <ellipse cx="15" cy="15" rx="5" ry="11" fill={col} opacity=".72" transform="rotate(72 15 15)" />
            <ellipse cx="15" cy="15" rx="5" ry="11" fill={col} opacity=".72" transform="rotate(144 15 15)" />
            <ellipse cx="15" cy="15" rx="5" ry="11" fill={col} opacity=".72" transform="rotate(216 15 15)" />
            <ellipse cx="15" cy="15" rx="5" ry="11" fill={col} opacity=".72" transform="rotate(288 15 15)" />
            <circle cx="15" cy="15" r="4" fill="white" opacity=".85" />
          </svg>
        );
      }

      newPetals.push({ id: i, svg, style: { left: `${left}%`, animationDuration: `${duration}s`, animationDelay: `${delay}s` } });
    }
    setPetals(newPetals);
  }, []);

  return (
    <>
      {petals.map((petal) => (
        <div key={petal.id} className="petal" style={petal.style}>
          {petal.svg}
        </div>
      ))}
    </>
  );
};

export default Petals;
