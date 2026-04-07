const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Extract <head> ... up to first section
const headEnd = html.indexOf('<!-- NAV -->');
const head = html.slice(0, headEnd);

// Extract footer + script (after </section> of last section before footer)
const footerStart = html.indexOf('<!-- FOOTER -->');
const footerAndScript = html.slice(footerStart);

// Helper: extract a named block between HTML comment markers
function extractBlock(commentLabel) {
  const marker = `<!-- ${commentLabel} -->`;
  const start = html.indexOf(marker);
  if (start === -1) return '';
  // Find the end: next <!-- or <!-- FOOTER -->
  const afterMarker = start + marker.length;
  const nextComment = html.indexOf('\n<!-- ', afterMarker);
  if (nextComment === -1) return html.slice(start, footerStart);
  return html.slice(start, nextComment);
}

const nav      = extractBlock('NAV');
const hero     = extractBlock('HERO');
const stats    = extractBlock('STATS');
const produits = extractBlock('PRODUITS');
const saison   = extractBlock('SAISON');
const galerie  = extractBlock('GALERIE');
const eng      = extractBlock('ENGAGEMENTS');
const avis     = extractBlock('AVIS');
const reseaux  = extractBlock('RÉSEAUX');
const faq      = extractBlock('FAQ');
const horaires = extractBlock('HORAIRES');

// Build single CTA banner (best of the 3 — shop facade "25 ans")
const ctaBanner = `<!-- BANNIERE CTA -->
<section id="cta-banner" style="padding:80px 48px;background:var(--gd);position:relative;overflow:hidden;">
  <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="position:absolute;top:0;left:0;width:100%;height:60px;"><path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z" fill="#F9F5EE"/></svg>
  <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;position:relative;z-index:2;">
    <div>
      <div style="background:rgba(245,197,24,.2);border:1.5px solid var(--y);color:var(--y);padding:6px 16px;border-radius:50px;font-size:.78rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;display:inline-block;margin-bottom:18px;">Institution locale depuis 1999</div>
      <h2 style="font-size:clamp(2rem,4vw,3.2rem);font-weight:900;color:var(--wh);line-height:1.1;margin-bottom:14px;">25 ans<br/><em style="font-style:italic;color:var(--y);font-family:'Playfair Display',serif;">de passion</em></h2>
      <p style="color:rgba(255,255,255,.75);font-size:1rem;line-height:1.7;margin-bottom:28px;max-width:420px;">Une équipe chaleureuse, +350 avis 5 étoiles et 25 ans de confiance au cœur de Villebarou. Venez nous rendre visite !</p>
      <a href="tel:0254568736" style="background:var(--y);color:var(--dk);font-weight:800;font-size:.95rem;padding:14px 32px;border-radius:50px;text-decoration:none;display:inline-block;transition:all .2s;box-shadow:0 4px 20px rgba(245,197,24,.4);">02 54 56 87 36</a>
    </div>
    <div style="position:relative;">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(30,86,49,.4),transparent);border-radius:18px;z-index:1;"></div>
      <img src="../HAMDIPRIM/475074710_9556921974339127_949772004750524910_n%20(1).jpg" alt="Hamdi Prim boutique Villebarou" style="width:100%;height:320px;object-fit:cover;border-radius:18px;box-shadow:0 20px 50px rgba(0,0,0,.3);"/>
      <div style="position:absolute;top:16px;right:16px;z-index:2;background:var(--y);border-radius:12px;padding:12px 16px;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.2);">
        <div style="font-size:1.4rem;font-weight:900;color:var(--dk);line-height:1;">4.4★</div>
        <div style="font-size:.68rem;font-weight:700;color:var(--dk);">Google</div>
      </div>
    </div>
  </div>
  <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="position:absolute;bottom:0;left:0;width:100%;height:60px;"><path d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,45 1440,30 L1440,60 L0,60 Z" fill="#F9F5EE"/></svg>
</section>

`;

// Assemble in new order
const newHtml = head
  + nav
  + hero
  + stats
  + produits
  + saison
  + galerie
  + eng
  + avis
  + ctaBanner
  + reseaux
  + faq
  + horaires
  + footerAndScript;

fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Done — restructured. Length:', newHtml.length);
