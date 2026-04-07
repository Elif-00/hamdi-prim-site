const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// ─── SAISON : remplacer emoji par photo circulaire ou SVG illustré ───
const saisonReplacements = [
  {
    old: `<div class="saison-emoji">🍓</div>\n          <div class="saison-name">Fraises</div>`,
    new: `<div class="saison-img-wrap"><img src="../HAMDIPRIM/659619764_1627440372147566_509725377305574724_n.jpg" alt="Fraises de saison" class="saison-img"/></div>\n          <div class="saison-name">Fraises</div>`
  },
  {
    old: `<div class="saison-emoji">🥦</div>\n          <div class="saison-name">Brocolis</div>`,
    new: `<div class="saison-img-wrap"><img src="../HAMDIPRIM/648403337_1603705034521100_2093199613113567926_n.jpg" alt="Brocolis de saison" class="saison-img"/></div>\n          <div class="saison-name">Brocolis</div>`
  },
  {
    old: `<div class="saison-emoji">🥕</div>\n          <div class="saison-name">Carottes</div>`,
    new: `<div class="saison-img-wrap saison-svg" style="background:#FFF3E0;"><svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="38" rx="10" ry="14" fill="#FF8C00"/><path d="M30 24 Q28 16 24 12 Q30 14 30 24" fill="#4CAF50"/><path d="M30 24 Q32 16 36 12 Q30 14 30 24" fill="#388E3C"/><path d="M30 24 Q27 18 30 14 Q33 18 30 24" fill="#66BB6A"/></svg></div>\n          <div class="saison-name">Carottes</div>`
  },
  {
    old: `<div class="saison-emoji">🍋</div>\n          <div class="saison-name">Citrons</div>`,
    new: `<div class="saison-img-wrap saison-svg" style="background:#FFFDE7;"><svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="32" rx="16" ry="18" fill="#FFE135"/><ellipse cx="30" cy="32" rx="13" ry="15" fill="#FFF176"/><path d="M38 18 Q42 14 44 12" stroke="#66BB6A" stroke-width="2" stroke-linecap="round" fill="none"/><ellipse cx="46" cy="11" rx="4" ry="3" fill="#4CAF50"/></svg></div>\n          <div class="saison-name">Citrons</div>`
  },
  {
    old: `<div class="saison-emoji">🥬</div>\n          <div class="saison-name">Épinards</div>`,
    new: `<div class="saison-img-wrap saison-svg" style="background:#E8F5E9;"><svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="22" cy="32" rx="14" ry="11" fill="#43A047" transform="rotate(-20 22 32)"/><ellipse cx="38" cy="32" rx="14" ry="11" fill="#388E3C" transform="rotate(20 38 32)"/><line x1="30" y1="44" x2="30" y2="54" stroke="#2E7D32" stroke-width="2.5" stroke-linecap="round"/></svg></div>\n          <div class="saison-name">Épinards</div>`
  },
  {
    old: `<div class="saison-emoji">🌿</div>\n          <div class="saison-name">Asperges</div>`,
    new: `<div class="saison-img-wrap saison-svg" style="background:#F1F8E9;"><svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect x="23" y="14" width="5" height="36" rx="2.5" fill="#8BC34A"/><rect x="32" y="18" width="4" height="32" rx="2" fill="#9CCC65"/><rect x="15" y="20" width="4" height="28" rx="2" fill="#AED581"/><path d="M25 14 Q25 8 25 6 Q26 9 28 6 Q28 10 25 14" fill="#558B2F"/><path d="M34 18 Q34 12 34 10 Q35 13 37 10 Q37 14 34 18" fill="#558B2F"/></svg></div>\n          <div class="saison-name">Asperges</div>`
  }
];

for (const r of saisonReplacements) {
  html = html.replace(r.old, r.new);
}

// ─── ENGAGEMENTS : remplacer emojis par SVG icons ───
const engagementIcons = [
  {
    old: '<div class="engagement-icon">🌿</div>',
    new: `<div class="engagement-icon"><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 40 C24 40 8 30 8 18 C8 12 13 8 18 8 C21 8 23 10 24 12 C25 10 27 8 30 8 C35 8 40 12 40 18 C40 30 24 40 24 40Z" stroke="#C0392B" stroke-width="2.5" stroke-linejoin="round" fill="#FEE2E2"/><path d="M24 12 L24 40" stroke="#C0392B" stroke-width="1.5" stroke-dasharray="3 3"/></svg></div>`
  },
  {
    old: '<div class="engagement-icon">🤝</div>',
    new: `<div class="engagement-icon"><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 28 L14 20 L20 23 L26 17 L32 21 L42 12" stroke="#2D5A27" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14" cy="20" r="3" fill="#2D5A27"/><circle cx="26" cy="17" r="3" fill="#2D5A27"/><circle cx="32" cy="21" r="3" fill="#2D5A27"/><path d="M6 36 L42 36" stroke="#E5E7EB" stroke-width="1.5"/></svg></div>`
  },
  {
    old: '<div class="engagement-icon">🌍</div>',
    new: `<div class="engagement-icon"><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="16" stroke="#F39C12" stroke-width="2.5" fill="#FFF9E6"/><ellipse cx="24" cy="24" rx="7" ry="16" stroke="#F39C12" stroke-width="1.5"/><line x1="8" y1="24" x2="40" y2="24" stroke="#F39C12" stroke-width="1.5"/><line x1="10" y1="17" x2="38" y2="17" stroke="#F39C12" stroke-width="1"/><line x1="10" y1="31" x2="38" y2="31" stroke="#F39C12" stroke-width="1"/></svg></div>`
  },
  {
    old: '<div class="engagement-icon">💬</div>',
    new: `<div class="engagement-icon"><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12 C8 10 10 8 12 8 L36 8 C38 8 40 10 40 12 L40 28 C40 30 38 32 36 32 L18 32 L10 40 L10 32 L12 32 C10 32 8 30 8 28 Z" stroke="#8B5CF6" stroke-width="2.5" fill="#F5F3FF"/><line x1="16" y1="18" x2="32" y2="18" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="24" x2="26" y2="24" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/></svg></div>`
  }
];

for (const r of engagementIcons) {
  html = html.replace(r.old, r.new);
}

// ─── POURQUOI : remplacer emojis par SVG icons ───
html = html.replace('<div class="argument-icon">🌿</div>',
  `<div class="argument-icon"><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 28 C16 28 4 20 4 12 C4 8 8 5 11 5 C13 5 15 6 16 8 C17 6 19 5 21 5 C24 5 28 8 28 12 C28 20 16 28 16 28Z" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="1.8"/></svg></div>`);

html = html.replace('<div class="argument-icon">🌍</div>',
  `<div class="argument-icon"><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="11" stroke="white" stroke-width="1.8" fill="rgba(255,255,255,0.15)"/><ellipse cx="16" cy="16" rx="5" ry="11" stroke="white" stroke-width="1.2"/><line x1="5" y1="16" x2="27" y2="16" stroke="white" stroke-width="1.2"/></svg></div>`);

html = html.replace('<div class="argument-icon">❤️</div>',
  `<div class="argument-icon"><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 26 C16 26 4 18 4 10 C4 7 7 5 10 5 C12.5 5 14.5 6.5 16 8 C17.5 6.5 19.5 5 22 5 C25 5 28 7 28 10 C28 18 16 26 16 26Z" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="1.8"/></svg></div>`);

// ─── INSTAGRAM : remplacer emoji caméra ───
html = html.replace('<div class="ig-icon">📸</div>',
  `<div class="ig-icon"><svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="48" height="48" rx="14" stroke="white" stroke-width="3" fill="rgba(255,255,255,0.15)"/><circle cx="32" cy="32" r="10" stroke="white" stroke-width="2.5"/><circle cx="46" cy="18" r="3" fill="white"/></svg></div>`);

// ─── CSS saison-img-wrap ───
const saisonImgCSS = `
    .saison-img-wrap {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .saison-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .saison-svg svg {
      width: 48px;
      height: 48px;
    }
    .engagement-icon svg {
      width: 52px;
      height: 52px;
    }
`;
html = html.replace('  </style>', saisonImgCSS + '  </style>');

// ─── supprimer ancien .saison-emoji CSS ───
html = html.replace('    .saison-emoji { font-size: 2.4rem; margin-bottom: 10px; }', '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Done — emojis replaced with SVG/images.');
