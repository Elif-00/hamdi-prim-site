const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// ─── 1. CSS NOUVELLES SECTIONS ───
const newCSS = `
    /* ─── SAISON ─── */
    #saison { background: var(--bg); }
    .saison-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
    }
    .saison-card {
      background: white;
      border-radius: var(--radius);
      padding: 24px 16px;
      text-align: center;
      box-shadow: var(--shadow);
      transition: transform var(--transition), box-shadow var(--transition);
      cursor: default;
    }
    .saison-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-hover); }
    .saison-emoji { font-size: 2.4rem; margin-bottom: 10px; }
    .saison-name { font-weight: 700; font-size: 0.9rem; color: var(--dark); margin-bottom: 4px; }
    .saison-type { font-size: 0.72rem; color: var(--gray); text-transform: uppercase; letter-spacing: 0.06em; }
    .saison-badge {
      display: inline-block;
      margin-top: 10px;
      padding: 3px 10px;
      border-radius: 50px;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .badge-fruit { background: #FFF3E0; color: #E65100; }
    .badge-legume { background: #E8F5E9; color: #2E7D32; }
    @media (max-width: 768px) { .saison-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 480px) { .saison-grid { grid-template-columns: repeat(2, 1fr); } }

    /* ─── ENGAGEMENTS ─── */
    #engagements { background: var(--bg-dark); }
    .engagements-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 28px;
    }
    .engagement-card {
      background: white;
      border-radius: var(--radius-lg);
      padding: 36px 24px;
      text-align: center;
      box-shadow: var(--shadow);
      transition: transform var(--transition);
      border-top: 4px solid transparent;
    }
    .engagement-card:hover { transform: translateY(-6px); }
    .engagement-card:nth-child(1) { border-top-color: var(--red); }
    .engagement-card:nth-child(2) { border-top-color: var(--green); }
    .engagement-card:nth-child(3) { border-top-color: var(--orange); }
    .engagement-card:nth-child(4) { border-top-color: #8B5CF6; }
    .engagement-icon { font-size: 2.8rem; margin-bottom: 16px; }
    .engagement-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; color: var(--dark); }
    .engagement-desc { font-size: 0.85rem; color: var(--gray); line-height: 1.6; }
    @media (max-width: 768px) { .engagements-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px) { .engagements-grid { grid-template-columns: 1fr; } }

    /* ─── RÉSEAUX SOCIAUX ─── */
    #reseaux { background: white; }
    .reseaux-wrap {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 48px;
      align-items: start;
    }
    .fb-wrap {
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow);
    }
    .fb-wrap iframe { display: block; }
    .instagram-cta {
      background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
      border-radius: var(--radius-lg);
      padding: 48px 32px;
      text-align: center;
      color: white;
    }
    .instagram-cta .ig-icon { font-size: 3rem; margin-bottom: 16px; }
    .instagram-cta h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; margin-bottom: 12px; }
    .instagram-cta p { font-size: 0.9rem; opacity: 0.9; margin-bottom: 28px; line-height: 1.6; }
    .btn-ig {
      display: inline-block;
      background: white;
      color: #bc1888;
      font-weight: 700;
      font-size: 0.9rem;
      padding: 14px 32px;
      border-radius: 50px;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    }
    .btn-ig:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.25); }
    @media (max-width: 900px) { .reseaux-wrap { grid-template-columns: 1fr; } }

    /* ─── FAQ ─── */
    #faq { background: var(--bg); }
    .faq-wrap {
      max-width: 800px;
      margin: 0 auto;
    }
    .faq-item {
      background: white;
      border-radius: var(--radius);
      margin-bottom: 12px;
      box-shadow: var(--shadow);
      overflow: hidden;
    }
    .faq-question {
      width: 100%;
      background: none;
      border: none;
      padding: 22px 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      color: var(--dark);
      text-align: left;
      gap: 16px;
      transition: color var(--transition);
    }
    .faq-question:hover { color: var(--red); }
    .faq-arrow {
      width: 24px;
      height: 24px;
      min-width: 24px;
      border-radius: 50%;
      background: var(--bg-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition), background var(--transition);
    }
    .faq-item.open .faq-arrow { transform: rotate(180deg); background: var(--red); }
    .faq-item.open .faq-arrow svg { stroke: white; }
    .faq-arrow svg { width: 14px; height: 14px; stroke: var(--gray); fill: none; stroke-width: 2.5; transition: stroke var(--transition); }
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease, padding 0.4s ease;
      padding: 0 28px;
    }
    .faq-item.open .faq-answer { max-height: 200px; padding: 0 28px 22px; }
    .faq-answer p { font-size: 0.92rem; color: var(--gray); line-height: 1.7; }
`;

html = html.replace('  </style>', newCSS + '  </style>');

// ─── 2. SECTION PRODUITS DE SAISON (après PRODUITS) ───
const saisonSection = `
  <!-- ─── SAISON ─── -->
  <section id="saison">
    <div style="max-width:1200px;margin:0 auto;">
      <div class="section-header centered">
        <span class="section-label reveal">Avril 2026</span>
        <h2 class="section-title reveal reveal-delay-1">Les produits de saison</h2>
        <p class="section-desc reveal reveal-delay-2">Chaque mois, nous sélectionnons les meilleurs produits de saison pour vous garantir goût et fraîcheur.</p>
      </div>
      <div class="saison-grid">
        <div class="saison-card reveal">
          <div class="saison-emoji">🍓</div>
          <div class="saison-name">Fraises</div>
          <div class="saison-type">Fruit</div>
          <span class="saison-badge badge-fruit">Pleine saison</span>
        </div>
        <div class="saison-card reveal reveal-delay-1">
          <div class="saison-emoji">🥦</div>
          <div class="saison-name">Brocolis</div>
          <div class="saison-type">Légume</div>
          <span class="saison-badge badge-legume">Pleine saison</span>
        </div>
        <div class="saison-card reveal reveal-delay-2">
          <div class="saison-emoji">🥕</div>
          <div class="saison-name">Carottes</div>
          <div class="saison-type">Légume</div>
          <span class="saison-badge badge-legume">Pleine saison</span>
        </div>
        <div class="saison-card reveal reveal-delay-3">
          <div class="saison-emoji">🍋</div>
          <div class="saison-name">Citrons</div>
          <div class="saison-type">Fruit</div>
          <span class="saison-badge badge-fruit">Pleine saison</span>
        </div>
        <div class="saison-card reveal reveal-delay-4">
          <div class="saison-emoji">🥬</div>
          <div class="saison-name">Épinards</div>
          <div class="saison-type">Légume</div>
          <span class="saison-badge badge-legume">Pleine saison</span>
        </div>
        <div class="saison-card reveal reveal-delay-5">
          <div class="saison-emoji">🌿</div>
          <div class="saison-name">Asperges</div>
          <div class="saison-type">Légume</div>
          <span class="saison-badge badge-legume">Début saison</span>
        </div>
      </div>
    </div>
  </section>

`;

html = html.replace('  <!-- ─── POURQUOI ─── -->', saisonSection + '  <!-- ─── POURQUOI ─── -->');

// ─── 3. SECTION ENGAGEMENTS (après POURQUOI) ───
const engagementsSection = `
  <!-- ─── ENGAGEMENTS ─── -->
  <section id="engagements">
    <div style="max-width:1100px;margin:0 auto;">
      <div class="section-header centered">
        <span class="section-label reveal">Notre promesse</span>
        <h2 class="section-title reveal reveal-delay-1">Nos engagements</h2>
        <p class="section-desc reveal reveal-delay-2">Depuis 25 ans, les mêmes valeurs guident notre travail au quotidien.</p>
      </div>
      <div class="engagements-grid">
        <div class="engagement-card reveal">
          <div class="engagement-icon">🌿</div>
          <div class="engagement-title">Fraîcheur quotidienne</div>
          <p class="engagement-desc">Nos produits arrivent chaque matin, sélectionnés avec soin pour vous garantir une fraîcheur maximale à chaque visite.</p>
        </div>
        <div class="engagement-card reveal reveal-delay-1">
          <div class="engagement-icon">🤝</div>
          <div class="engagement-title">Sélection rigoureuse</div>
          <p class="engagement-desc">Chaque produit est inspecté avant d'être mis en rayon. Seul ce qui répond à nos exigences de qualité est proposé.</p>
        </div>
        <div class="engagement-card reveal reveal-delay-2">
          <div class="engagement-icon">🌍</div>
          <div class="engagement-title">Produits du monde</div>
          <p class="engagement-desc">Fruits exotiques, épices rares, légumes secs — nous importons directement pour vous offrir une diversité introuvable ailleurs à Blois.</p>
        </div>
        <div class="engagement-card reveal reveal-delay-3">
          <div class="engagement-icon">💬</div>
          <div class="engagement-title">Service personnalisé</div>
          <p class="engagement-desc">Notre équipe est là pour vous conseiller, vous recommander les meilleurs produits et répondre à toutes vos questions.</p>
        </div>
      </div>
    </div>
  </section>

`;

html = html.replace('  <!-- ─── GALERIE ─── -->', engagementsSection + '  <!-- ─── GALERIE ─── -->');

// ─── 4. SECTION RÉSEAUX SOCIAUX (après GALERIE) ───
const reseauxSection = `
  <!-- ─── RÉSEAUX SOCIAUX ─── -->
  <section id="reseaux">
    <div style="max-width:1100px;margin:0 auto;">
      <div class="section-header centered">
        <span class="section-label reveal">Suivez-nous</span>
        <h2 class="section-title reveal reveal-delay-1">Restez connectés</h2>
        <p class="section-desc reveal reveal-delay-2">Suivez nos arrivages, nos promotions et l'actualité du magasin sur nos réseaux.</p>
      </div>
      <div class="reseaux-wrap reveal">
        <div class="fb-wrap">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhamdiprim%2F&tabs=timeline&width=700&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="700"
            height="600"
            style="border:none;overflow:hidden;width:100%;"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Page Facebook Hamdi Prim Blois">
          </iframe>
        </div>
        <div class="instagram-cta reveal reveal-delay-1">
          <div class="ig-icon">📸</div>
          <h3>Suivez nos arrivages sur Instagram</h3>
          <p>Photos des nouveautés, produits du jour et coulisses du magasin — publiés régulièrement.</p>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="btn-ig">
            Suivre sur Instagram
          </a>
        </div>
      </div>
    </div>
  </section>

`;

html = html.replace('  <!-- ─── AVIS ─── -->', reseauxSection + '  <!-- ─── AVIS ─── -->');

// ─── 5. SECTION FAQ (après AVIS) ───
const faqSection = `
  <!-- ─── FAQ ─── -->
  <section id="faq">
    <div style="max-width:1100px;margin:0 auto;">
      <div class="section-header centered">
        <span class="section-label reveal">Questions fréquentes</span>
        <h2 class="section-title reveal reveal-delay-1">Vous avez des questions ?</h2>
        <p class="section-desc reveal reveal-delay-2">Tout ce que vous devez savoir avant de venir nous rendre visite.</p>
      </div>
      <div class="faq-wrap reveal">

        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">
            Quels sont vos horaires d'ouverture ?
            <span class="faq-arrow"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></span>
          </button>
          <div class="faq-answer"><p>Nous sommes ouverts du lundi au vendredi de 9h à 12h et de 14h à 19h, ainsi que le samedi de 9h à 12h30 et de 14h à 19h. Nous sommes fermés le dimanche.</p></div>
        </div>

        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">
            Proposez-vous des fruits et légumes bio ?
            <span class="faq-arrow"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></span>
          </button>
          <div class="faq-answer"><p>Nous proposons une sélection de produits biologiques et locaux selon les arrivages et les saisons. N'hésitez pas à nous appeler ou passer en magasin pour connaître les disponibilités.</p></div>
        </div>

        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">
            Faites-vous des paniers ou commandes spéciales ?
            <span class="faq-arrow"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></span>
          </button>
          <div class="faq-answer"><p>Oui, nous pouvons préparer des paniers de fruits et légumes sur commande. Contactez-nous par téléphone au 02 54 56 87 36 pour en discuter selon vos besoins.</p></div>
        </div>

        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">
            Avez-vous un parking ?
            <span class="faq-arrow"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></span>
          </button>
          <div class="faq-answer"><p>Oui, un parking gratuit est disponible directement devant le magasin au 323 Route de Vendôme, Villebarou. L'accès est facile et le stationnement est aisé.</p></div>
        </div>

        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">
            Proposez-vous des épices en vrac ?
            <span class="faq-arrow"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></span>
          </button>
          <div class="faq-answer"><p>Oui, nous disposons d'un large rayon d'épices du monde entier ainsi que de légumes secs et fruits secs disponibles en vrac ou conditionnés. Venez découvrir notre sélection en magasin.</p></div>
        </div>

        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">
            Quand arrivent les nouveaux produits ?
            <span class="faq-arrow"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></span>
          </button>
          <div class="faq-answer"><p>Nos approvisionnements se font chaque matin avant l'ouverture. Suivez notre page Facebook pour être informé des nouveaux arrivages et des produits exceptionnels du moment.</p></div>
        </div>

      </div>
    </div>
  </section>

`;

html = html.replace('  <!-- ─── HORAIRES & ACCÈS ─── -->', faqSection + '  <!-- ─── HORAIRES & ACCÈS ─── -->');

// ─── 6. JS ACCORDION FAQ ───
const faqJS = `
    // ─── FAQ ACCORDION ───
    function toggleFaq(btn) {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }
`;

html = html.replace('  </script>', faqJS + '  </script>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Done — all sections injected.');
