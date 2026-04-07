const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');

// ─── 1. CSS VARIABLES ───
h = h.replace(
  '--r:#C0392B;--dk:#1A1A1A;--gr:#6B7280;--wh:#FFFFFF;',
  '--r:#C0392B;--rk:#A93226;--dk:#1A1A1A;--gr:#6B7280;--wh:#FFFFFF;'
);

// ─── 2. NAV ───
// hover links: yellow → red
h = h.replace('.nlinks a:hover{color:var(--y);}', '.nlinks a:hover{color:var(--r);}');
// CTA button: yellow bg → red bg, dark text → white
h = h.replace(
  '.ncta{background:var(--y)!important;color:var(--dk)!important;padding:10px 22px;border-radius:50px;font-weight:800!important;}',
  '.ncta{background:var(--r)!important;color:var(--wh)!important;padding:10px 22px;border-radius:50px;font-weight:800!important;}'
);
h = h.replace('.ncta:hover{background:var(--yd)!important;}', '.ncta:hover{background:var(--rk)!important;}');

// ─── 3. HERO badge (hbadge class) ───
h = h.replace(
  '.hbadge{background:rgba(245,197,24,.2);border:1.5px solid var(--y);color:var(--y);',
  '.hbadge{background:rgba(192,57,43,.15);border:1.5px solid var(--r);color:var(--r);'
);
// hstars stays yellow (stars are ★)
// hh1 em: yellow → red
h = h.replace('.hh1 em{font-style:italic;color:var(--y);', '.hh1 em{font-style:italic;color:var(--r);');

// ─── 4. BUTTON .by : yellow → red ───
h = h.replace(
  '.by{background:var(--y);color:var(--dk);font-weight:800;font-size:.95rem;padding:15px 34px;border-radius:50px;text-decoration:none;transition:all .2s;box-shadow:0 4px 20px rgba(245,197,24,.4);}',
  '.by{background:var(--r);color:var(--wh);font-weight:800;font-size:.95rem;padding:15px 34px;border-radius:50px;text-decoration:none;transition:all .2s;box-shadow:0 4px 20px rgba(192,57,43,.35);}'
);
h = h.replace('.by:hover{background:var(--yd);transform:translateY(-2px);}', '.by:hover{background:var(--rk);transform:translateY(-2px);}');

// ─── 5. STATS BAR : yellow bg → dark red ───
h = h.replace('#sb{background:var(--y);padding:24px 48px;}', '#sb{background:var(--r);padding:24px 48px;}');
h = h.replace('.si .sn{font-size:1.8rem;font-weight:900;color:var(--dk);line-height:1;}', '.si .sn{font-size:1.8rem;font-weight:900;color:var(--wh);line-height:1;}');
h = h.replace('color:rgba(26,26,26,.65)', 'color:rgba(255,255,255,.7)');

// ─── 6. SVG WAVES : yellow fill → red ───
h = h.replace(/fill="#F5C518"/g, 'fill="#C0392B"');
h = h.replace(/fill="var\(--y\)"/g, 'fill="var(--r)"');

// ─── 7. HERO INLINE STYLES : yellow → red / keep stars yellow ───
// Badge "Depuis 1999" in hero inline
h = h.replace(
  'background:rgba(245,197,24,.25);border:1px solid rgba(245,197,24,.6);color:var(--y);',
  'background:rgba(192,57,43,.2);border:1px solid rgba(192,57,43,.7);color:var(--r);'
);
h = h.replace(
  'background:rgba(245,197,24,.2);border:1px solid rgba(245,197,24,.5);color:var(--y);',
  'background:rgba(192,57,43,.2);border:1px solid rgba(192,57,43,.6);color:var(--r);'
);
// Hero h1 em inline yellow → red
h = h.replace(
  '<em style="color:var(--y);">Saveurs du Monde</em>',
  '<em style="color:var(--r);">Saveurs du Monde</em>'
);
// "Depuis 1999" badge text color in hero inline
h = h.replace(
  'color:var(--y);font-size:.72rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;">Depuis 1999',
  'color:var(--r);font-size:.72rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;">Depuis 1999'
);
// Stars stay yellow — no change
// Google rating text
h = h.replace(
  'color:var(--y);letter-spacing:3px;font-size:.78rem;">★★★★★',
  'color:#F5C518;letter-spacing:3px;font-size:.78rem;">★★★★★'
);

// ─── 8. SECTION TAGS .stag ───
h = h.replace(
  ".stag{display:inline-block;background:var(--gp);color:var(--g);",
  ".stag{display:inline-block;background:rgba(192,57,43,.08);color:var(--r);"
);

// ─── 9. CTA BANNER BOTTOM inline button yellow → red ───
h = h.replace(
  'style="background:var(--y);color:var(--dk);font-weight:800;font-size:.95rem;padding:14px 32px;border-radius:50px;text-decoration:none;display:inline-block;transition:all .2s;box-shadow:0 4px 20px rgba(245,197,24,.4);"',
  'style="background:var(--r);color:var(--wh);font-weight:800;font-size:.95rem;padding:14px 32px;border-radius:50px;text-decoration:none;display:inline-block;transition:all .2s;box-shadow:0 4px 20px rgba(192,57,43,.4);"'
);

// ─── 10. PRODUITS .ptop badges ───
h = h.replace(/background:var\(--gd\);color:var\(--wh\);/g, 'background:var(--r);color:var(--wh);');

// ─── 11. AVIS .gbadge google rating star yellow ───
// Google stars in avis stay yellow — skip

// ─── 12. SAISON .sbf / .sbl badges ───
h = h.replace(
  '.sbf{background:var(--g);color:white;',
  '.sbf{background:var(--r);color:white;'
);

// ─── 13. HORAIRES .iico ───
h = h.replace(/background:var\(--r\);border-radius:10px/g, 'background:var(--r);border-radius:10px');

// ─── 14. Inline yellow (4.4★ badge) in hero ───
h = h.replace(
  '<span style="font-size:2rem;font-weight:900;color:var(--y);line-height:1;">4.4★</span>',
  '<span style="font-size:2rem;font-weight:900;color:var(--r);line-height:1;">4.4★</span>'
);

// ─── 15. Footer bottom wave ───
h = h.replace('fill="#1E5631"', 'fill="#1E5631"'); // keep green footer wave

fs.writeFileSync('index.html', h, 'utf8');
console.log('Done — recolored. Length:', h.length);
