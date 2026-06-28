/* ============================================================
   TECTONIC PRECISION — script.js
   D'Agostino & Associates Structural Engineering
   ============================================================ */

(function () {
  'use strict';

  // --- State ---
  let lang = 'en';
  let menuOpen = false;
  let selectedProjectIndex = null;

  // --- Data ---
  const services = {
    en: [
      {
        title: 'STRUCTURAL ENGINEERING',
        desc: 'Based solidly on applied physical laws and empirical knowledge, we apply principles of statics and dynamics to calculate stability, strength and rigidity. We design and analyse complex structural systems to safely resist loading in different environments and conditions.',
        specs: [
          ['Materials', 'Steel | Concrete | Wood'],
          ['Approach', 'Interactive & Open'],
          ['Focus', 'Stability & Rigidity'],
        ],
        svg: '<rect x="4" y="10" width="20" height="16"/><line x1="4" y1="18" x2="24" y2="18"/><line x1="14" y1="10" x2="14" y2="26"/><polygon points="2,10 14,2 26,10"/>',
      },
      {
        title: 'BUILDING ENVELOPE',
        desc: 'The building envelope protects the building and its contents from the elements and affects total energy use. We optimize synergies between the envelope system, rainwater management, heat island reduction, energy performance, thermal comfort, and interior lighting.',
        specs: [
          ['Attributes', 'Insulation | WWR | Glazing'],
          ['Optimization', 'Energy + Comfort'],
          ['Focus', 'Sustainable Synergies'],
        ],
        svg: '<rect x="2" y="2" width="24" height="24" rx="2"/><rect x="7" y="7" width="6" height="14" rx="1"/><rect x="15" y="7" width="6" height="14" rx="1"/><line x1="10" y1="14" x2="18" y2="14"/>',
      },
      {
        title: 'ENERGY MODELING',
        desc: 'Buildings consume the majority of all energy produced in Canada and the US. We perform preliminary simple mass energy modelling for new construction and major renovations, exploring how to reduce energy loads and accomplish sustainable goals from pre-design through all design phases.',
        specs: [
          ['Scope', 'New Build + Renovation'],
          ['Phases', 'Pre-Design → Completion'],
          ['Goal', 'Energy Load Reduction'],
        ],
        svg: '<polyline points="2,20 6,14 10,18 14,8 18,16 22,10 26,14"/><line x1="2" y1="26" x2="26" y2="26"/><line x1="2" y1="2" x2="2" y2="26"/>',
      },
      {
        title: 'MASS TIMBER DESIGN',
        desc: 'Pioneering engineered wood solutions with CLT, glulam, and NLT systems. We design and analyse mass timber structures that combine biogenic carbon storage with efficient, code-compliant gravity and lateral systems — advancing the shift toward low-carbon, high-performance buildings.',
        specs: [
          ['Systems', 'CLT | Glulam | NLT | DLT'],
          ['Codes', 'NBCC 2020 | CSA O86'],
          ['Focus', 'Carbon Sequestration'],
        ],
        svg: '<line x1="14" y1="2" x2="14" y2="26"/><line x1="6" y1="8" x2="22" y2="8"/><line x1="6" y1="14" x2="22" y2="14"/><line x1="6" y1="20" x2="22" y2="20"/><ellipse cx="14" cy="8" rx="14" ry="2"/>',
      },
    ],
    fr: [
      {
        title: 'INGÉNIERIE STRUCTURALE',
        desc: 'Fondée sur les lois physiques appliquées et la connaissance empirique, nous appliquons les principes de statique et dynamique pour calculer la stabilité, la résistance et la rigidité. Nous concevons et analysons des systèmes structuraux complexes pour résister aux charges dans différents environnements.',
        specs: [
          ['Matériaux', 'Acier | Béton | Bois'],
          ['Approche', 'Interactive & Ouverte'],
          ['Focus', 'Stabilité & Rigidité'],
        ],
        svg: '<rect x="4" y="10" width="20" height="16"/><line x1="4" y1="18" x2="24" y2="18"/><line x1="14" y1="10" x2="14" y2="26"/><polygon points="2,10 14,2 26,10"/>',
      },
      {
        title: 'ENVELOPPE DU BÂTIMENT',
        desc: "L'enveloppe du bâtiment protège le bâtiment et son contenu des éléments et affecte la consommation énergétique totale. Nous optimisons les synergies entre le système d'enveloppe et la gestion des eaux pluviales, la réduction des îlots de chaleur et la performance énergétique.",
        specs: [
          ['Attributs', 'Isolation | Vitrage | Ombrage'],
          ['Optimisation', 'Énergie + Confort'],
          ['Focus', 'Synergies Durables'],
        ],
        svg: '<rect x="2" y="2" width="24" height="24" rx="2"/><rect x="7" y="7" width="6" height="14" rx="1"/><rect x="15" y="7" width="6" height="14" rx="1"/><line x1="10" y1="14" x2="18" y2="14"/>',
      },
      {
        title: 'MODÉLISATION ÉNERGÉTIQUE',
        desc: 'Les bâtiments consomment la majorité de l’énergie produite au Canada et aux États-Unis. Nous effectuons une modélisation énergétique préliminaire pour les nouvelles constructions et rénovations majeures, en explorant comment réduire les charges énergétiques à travers toutes les phases de conception.',
        specs: [
          ['Portée', 'Nouveau + Rénovation'],
          ['Phases', 'Pré-conception → Achèvement'],
          ['Objectif', 'Réduction de Charge'],
        ],
        svg: '<polyline points="2,20 6,14 10,18 14,8 18,16 22,10 26,14"/><line x1="2" y1="26" x2="26" y2="26"/><line x1="2" y1="2" x2="2" y2="26"/>',
      },
      {
        title: 'CONCEPTION BOIS MASSIF',
        desc: 'Solutions pionnières en bois d\'ingénierie avec systèmes CLT, lamellé-collé et NLT. Nous concevons et analysons des structures en bois massif qui combinent le stockage de carbone biogénique avec des systèmes gravitaires et latéraux efficaces et conformes aux codes — favorisant la transition vers des bâtiments bas carbone à haute performance.',
        specs: [
          ['Systèmes', 'CLT | Lamellé-Collé | NLT'],
          ['Codes', 'CNB 2020 | CSA O86'],
          ['Focus', 'Séquestration Carbone'],
        ],
        svg: '<line x1="14" y1="2" x2="14" y2="26"/><line x1="6" y1="8" x2="22" y2="8"/><line x1="6" y1="14" x2="22" y2="14"/><line x1="6" y1="20" x2="22" y2="20"/><ellipse cx="14" cy="8" rx="14" ry="2"/>',
      },
    ],
  };

  const projects = [
    {
      id: 'tour-port-mtl',
      title: 'La Tour du Port de Montréal',
      location: 'Montréal, QC',
      category: 'High-Rise Mixed Use',
      year: '2024',
      summary: 'Structural engineering for a landmark 65-story mixed-use tower at the Port of Montréal. The design incorporates a hybrid steel-concrete lateral system optimized for seismic performance and wind drift control.',
      specs: [
        ['Height', '210 m'],
        ['Structural System', 'Hybrid Steel-Concrete'],
        ['Seismic Zone', 'Zone 3 (NBCC)'],
        ['Foundation', 'Caisson Piles to Bedrock'],
      ],
    },
    {
      id: 'hec-mtl',
      title: 'Édifice Hélène-Desmarais — HEC Montréal',
      location: 'Montréal, QC',
      category: 'Institutional',
      year: '2024',
      summary: 'Complete structural design for the 24,000 m² HEC Montréal campus building. Long-span composite steel framing allows column-free lecture halls and atria. Integrated BIM coordination from schematic design through construction.',
      specs: [
        ['Area', '24,000 m²'],
        ['Structural System', 'Composite Steel Frame'],
        ['Max Span', '32 m'],
        ['Sustainability', 'LEED Gold Target'],
      ],
    },
    {
      id: 'champlain-decon',
      title: "Pont Champlain d'Origine — Déconstruction",
      location: 'Montréal, QC',
      category: 'Bridge / Infrastructure',
      year: '2022',
      summary: 'Structural analysis and staged demolition engineering for the original Champlain Bridge. Developed a 14-phase deconstruction sequence accounting for ice loads, barge impact scenarios, and progressive collapse prevention throughout dismantling.',
      specs: [
        ['Span', '3.4 km Total'],
        ['Phases', '14 Stages'],
        ['Analysis', 'Progressive Collapse'],
        ['Duration', '36 Months'],
      ],
    },
    {
      id: 'telecom-structures',
      title: 'Telecommunication Tower Network',
      location: 'Québec / Ontario',
      category: 'Telecom Infrastructure',
      year: '2023',
      summary: 'Structural design and analysis for a network of 40+ lattice and monopole telecommunication towers. Wind tunnel-informed gust factor analysis, ice accretion loading per CSA S37, and foundation design across varied geotechnical conditions.',
      specs: [
        ['Towers', '40+'],
        ['Max Height', '95 m'],
        ['Standard', 'CSA S37-18'],
        ['Wind Zone', 'Up to Zone C'],
      ],
    },
    {
      id: 'footbridges',
      title: 'Cable-Supported Footbridges — Dynamic Analysis',
      location: 'Ohio, USA / California, USA',
      category: 'Pedestrian Bridges',
      year: '2022',
      summary: 'Dynamic behavior assessment of two cable-supported footbridges. Performed pedestrian-induced vibration analysis per SÉTRA/AASHTO guidelines. Designed tuned mass damper retrofits to mitigate lateral and vertical acceleration exceedances.',
      specs: [
        ['Bridges', '2 Structures'],
        ['Analysis', 'Modal + Time History'],
        ['Mitigation', 'Tuned Mass Dampers'],
        ['Standard', 'SÉTRA / AASHTO'],
      ],
    },
    {
      id: 'mass-timber-midrise',
      title: 'Mass Timber Mid-Rise Residential — 12-Storey Prototype',
      location: 'Montréal, QC',
      category: 'Mass Timber / Residential',
      year: '2025',
      summary: 'Structural design for a 12-storey mass timber residential prototype — among the tallest all-wood structures proposed under the 2020 NBCC encapsulated mass timber provisions. CLT floor panels on glulam post-and-beam framing with a reinforced concrete core. Included nonlinear time-history analysis for seismic performance, connection detailing for two-hour fire resistance, and a full biogenic carbon lifecycle assessment demonstrating 40% lower embodied carbon versus equivalent concrete construction.',
      specs: [
        ['Storeys', '12'],
        ['System', 'CLT + Glulam + RC Core'],
        ['Fire Rating', '2 HR (Encapsulated)'],
        ['Embodied Carbon', '−40% vs Concrete'],
      ],
    },
  ];

  const dataFeatures = {
    en: [
      { title: 'Utility Monitoring', desc: 'Real-time consumption dashboards for water, electricity, and gas across municipal portfolios.', svg: '<polyline points="2,20 6,14 10,18 14,8 18,16 22,10 26,14"/><line x1="2" y1="26" x2="26" y2="26"/><line x1="2" y1="2" x2="2" y2="26"/>' },
      { title: 'Public Safety Cloud', desc: 'Municipal alert distribution, emergency response coordination, and infrastructure status broadcasting.', svg: '<circle cx="14" cy="14" r="10"/><line x1="14" y1="2" x2="14" y2="6"/><line x1="14" y1="22" x2="14" y2="26"/><line x1="2" y1="14" x2="6" y2="14"/><line x1="22" y1="14" x2="26" y2="14"/>' },
      { title: 'Traffic Intelligence', desc: 'AI-powered traffic flow optimization, congestion prediction, and signal timing analytics.', svg: '<rect x="2" y="8" width="24" height="12" rx="2"/><line x1="8" y1="14" x2="20" y2="14"/><circle cx="14" cy="14" r="2"/>' },
    ],
    fr: [
      { title: 'Surveillance des Services', desc: 'Tableaux de bord en temps réel pour la consommation d\'eau, d\'électricité et de gaz des portefeuilles municipaux.', svg: '<polyline points="2,20 6,14 10,18 14,8 18,16 22,10 26,14"/><line x1="2" y1="26" x2="26" y2="26"/><line x1="2" y1="2" x2="2" y2="26"/>' },
      { title: 'Sécurité Publique Cloud', desc: 'Distribution d\'alertes municipales, coordination des interventions d\'urgence et diffusion de l\'état des infrastructures.', svg: '<circle cx="14" cy="14" r="10"/><line x1="14" y1="2" x2="14" y2="6"/><line x1="14" y1="22" x2="14" y2="26"/><line x1="2" y1="14" x2="6" y2="14"/><line x1="22" y1="14" x2="26" y2="14"/>' },
      { title: 'Intelligence du Trafic', desc: 'Optimisation du flux de trafic alimentée par l\'IA, prédiction de congestion et analyse de la synchronisation des feux.', svg: '<rect x="2" y="8" width="24" height="12" rx="2"/><line x1="8" y1="14" x2="20" y2="14"/><circle cx="14" cy="14" r="2"/>' },
    ],
  };

  const news = {
    en: [
      ['Mass Timber in the 2020 NBCC: A Structural Engineer\'s Guide to Encapsulated Systems', '2025.03'],
      ['Seismic Performance of Hybrid Steel-Concrete Towers: Lessons from Montréal', '2024.11'],
      ['Progressive Collapse Prevention in Bridge Deconstruction: The Champlain Case Study', '2024.06'],
      ['Telecom Tower Design Under CSA S37-18: Wind and Ice Loading Methodologies', '2023.09'],
      ['Pedestrian-Induced Vibration in Cable-Supported Footbridges: SÉTRA Guidelines Applied', '2023.02'],
    ],
    fr: [
      ['Le Bois Massif dans le CNB 2020 : Guide des Systèmes Encapsulés pour Ingénieurs', '2025.03'],
      ['Performance Sismique des Tours Hybrides Acier-Béton : Leçons de Montréal', '2024.11'],
      ['Prévention de l\'Effondrement Progressif lors de la Déconstruction de Ponts', '2024.06'],
      ['Conception des Tours de Télécommunication selon CSA S37-18', '2023.09'],
      ['Vibrations Induites par les Piétons dans les Passerelles Haubanées', '2023.02'],
    ],
  };

  const partners = {
    en: [
      ['Architects', 'Design vision'],
      ['Contractors', 'Build execution'],
      ['Developers', 'Project leadership'],
      ['Specialists', 'Domain expertise'],
    ],
    fr: [
      ['Architectes', 'Vision créative'],
      ['Entrepreneurs', 'Exécution chantier'],
      ['Promoteurs', 'Leadership projet'],
      ['Spécialistes', 'Expertise domaine'],
    ],
  };

  // --- DOM refs ---
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // --- Language ---
  function setLang(newLang) {
    lang = newLang;
    document.documentElement.lang = lang;

    // Update all [data-en][data-fr] elements
    $$('[data-en][data-fr]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang);
      if (val !== null) el.textContent = val;
    });

    // Update placeholders
    $$('[data-en-placeholder][data-fr-placeholder]').forEach(function (el) {
      var ph = el.getAttribute(lang === 'en' ? 'data-en-placeholder' : 'data-fr-placeholder');
      if (ph !== null) el.placeholder = ph;
    });

    // Update language toggle buttons
    var desktopBtn = $('#langToggleDesktop');
    var mobileBtn = $('#langToggleMobile');
    if (desktopBtn) desktopBtn.textContent = lang === 'en' ? 'FR' : 'EN';
    if (mobileBtn) mobileBtn.textContent = lang === 'en' ? 'FRANÇAIS' : 'ENGLISH';

    // Rebuild dynamic content
    renderServices();
    renderDataFeatures();
    renderNews();
    renderPartners();

    // Menu stays closed on lang switch
  }

  function toggleLang() { setLang(lang === 'en' ? 'fr' : 'en'); }

  // --- Render Services ---
  function renderServices() {
    var grid = $('#serviceGrid');
    if (!grid) return;
    var data = services[lang];
    grid.innerHTML = data.map(function (s, i) {
      var specsHtml = s.specs.map(function (sp) {
        return '<div class="service-spec"><span class="service-spec-label">' + sp[0] + '</span><span class="service-spec-value">' + sp[1] + '</span></div>';
      }).join('');
      return (
        '<div class="service-card reveal">' +
        '<span class="service-card-index">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<div class="service-card-icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="0.75">' + s.svg + '</svg></div>' +
        '<h3 class="service-card-title">' + s.title + '</h3>' +
        '<p class="service-card-desc">' + s.desc + '</p>' +
        '<div class="service-card-specs">' + specsHtml + '</div>' +
        '</div>'
      );
    }).join('');
  }

// --- Render Projects ---
function renderProjects() {
  var grid = $('#projectGrid');
  if (!grid) return;

  grid.innerHTML = projects.map(function (p, i) {
    return (
      '<div class="project-card reveal" data-project-index="' + i + '">' +
      '<div class="project-card-image">' +
      '<svg width="100%" height="100%"><defs><pattern id="grid-' + p.id + '" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid-' + p.id + ')"/></svg>' +
      '<div class="project-card-overlay"><span>VIEW DETAILS →</span></div>' +
      '</div>' +
      '<div class="project-card-body">' +
      '<div class="project-card-meta"><span>' + p.category + '</span><span>' + p.year + '</span></div>' +
      '<h3 class="project-card-title">' + p.title + '</h3>' +
      '<span class="project-card-location">' + p.location + '</span>' +
      '</div>' +
      '</div>'
    );
  }).join('');
}

})();