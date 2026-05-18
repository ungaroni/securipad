/* ════════════════════════════════════════════════════════════════════════
   SecuriPad — site content
   ────────────────────────────────────────────────────────────────────────
   Edit anything below. Save the file. Refresh your browser.
   No build step. No framework. No code knowledge required.

   • To HIDE / SHOW a whole section, flip its flag in `sections` (true/false).
   • To change a photo, replace the URL with either:
       - an https://… link, or
       - a local file you dropped into ./images/… (e.g. "images/farms/x.jpg")
   • Videos work the same way: drop an .mp4 into ./images/science/ and
     point the `asset` field at it.

   The current photos live on the Compost Or CDN. They will keep working.
   When you have new Midjourney / Runway output, drop the file into
   ./images/<folder>/ and replace the URL here.
   ════════════════════════════════════════════════════════════════════════ */

window.SITE = {

  /* ── META ──────────────────────────────────────────────────────────── */
  meta: {
    title: "SecuriPad · 100% Broiler Bedding · By EcoLogz",
    description:
      "SecuriPad is a sterilized, eco friendly wood based bedding designed for maximum " +
      "absorption. Drier litter, healthier flocks, more profitable farms. By EcoLogz.",
    favicon: "ecologz-logo.png",
  },

  /* ── SECTION VISIBILITY ────────────────────────────────────────────── */
  /* Flip true → false to hide a whole section. Order is fixed in code. */
  sections: {
    certBand:        true,
    product:         true,
    science:         true,
    farms:           true,
    contact:         true,
    /* Hidden until ready — flip true when the content is signed off: */
    sustainability:  false,
    results:         true,
    testimonials:    false,
  },

  /* ── BRAND / LOGO ──────────────────────────────────────────────────── */
  brand: {
    name:       "SecuriPad",
    tm:         "",
    sub:        "BY ECOLOGZ",
    logo:       "ecologz-logo.png",
    parent:     "ECOLOGZ · COMPOST OR",
  },

  /* ── HEADER NAV ────────────────────────────────────────────────────── */
  nav: {
    cta: { label: "Request a quote →", href: "#contact" },
    links: [
      { id: "product", label: "Product" },
      { id: "farms",   label: "On the farm" },
      { id: "science", label: "Science" },
      { id: "contact", label: "Contact" },
    ],
  },

  /* ── HERO ──────────────────────────────────────────────────────────── */
  hero: {
    eyebrow:        "100% BROILER BEDDING · FOR COOPERATIVE INTEGRATORS",
    headlineStart:  "A bedding ",
    headlineItalic: "safe",
    headlineEnd:    " to walk on.",
    body:
      "SecuriPad is a sterilized, eco friendly wood based bedding designed for " +
      "maximum absorption and evaporation. It keeps your litter drier, your flocks " +
      "healthier, and your farm more profitable. Start strong: pathogen free " +
      "bedding from day one.",
    ctaPrimary:   { label: "Talk to us →",     href: "#contact" },
    ctaSecondary: { label: "See the product",  href: "#product" },

    /* Hero media (right column). Drop in a video by ending the path in .mp4
       and setting isVideo: true. */
    image:           "images/hero/hero.jpg",
    isVideo:         false,
    imageAlt:        "SecuriPad bedding spread inside an active broiler house",
    imageCaption:    "FRESHLY BEDDED HOUSE",
    imageCaptionSub: "SecuriPad, ready for placement",

    stats: [
      { value: "110°C~", label: "Thermally pasteurized", counter: 110, suffix: "°C~" },
      { value: "3×",     label: "Absorption vs. conventional bedding", static: "3×" },
      { value: "1000+",  label: "Cooperative houses",   counter: 1000, suffix: "+" },
    ],

    marquee: [
      "Drier litter, less disease",
      "Thermally pasteurized at 110°C~",
      "Pathogen free from day one",
      "Reduced footpad dermatitis",
      "Easy to spread",
      "Even coverage",
      "Available in bulk or bags",
      "Made from clean wood trimmings",
      "Stronger biosecurity",
      "Year round availability",
      "Cooperative pricing",
    ],
  },

  /* ── CERTIFICATION BAND ────────────────────────────────────────────── */
  certBand: [
    { label: "3× ABSORPTION",         sub: "vs. conventional bedding" },
    { label: "ORGANIC CERTIFIED",     sub: "Aminolab toxin tests" },
    { label: "THERMALLY PASTEURIZED", sub: "110°C~ every batch" },
    { label: "ZERO ADDITIVES",        sub: "No preservatives or adhesives" },
    { label: "EXPORT READY",          sub: "Land + sea, worldwide" },
    { label: "COOPERATIVE PRICING",   sub: "Direct from EcoLogz" },
  ],

  /* ── PRODUCT (tabbed) ──────────────────────────────────────────────── */
  product: {
    eyebrow:        "§ 01 · THE PRODUCT",
    headline:       "Built for the way",
    headlineItalic: "integrators run houses.",
    lede: "Engineered around what moves the needle: drier litter, safer chicks, cleaner stock.",
    tabs: [
      {
        k: "evaporation",
        t: "3× the absorption of conventional bedding",
        lede: "A precise blend of wood pellets and fine wood chips, tuned to your house.",
        d:
          "Wood pellets + fine chips, mixed for your house. Fine for soft early-growth " +
          "comfort; pellets to absorb moisture and ammonia. Lab-tested at 3× the " +
          "absorption of conventional bedding.",
        img: "images/product/tab1.jpg",
        tag: "MID-CYCLE LITTER · ABSORBING",
      },
      {
        k: "raw",
        t: "Eco friendly raw stock",
        lede: "Made from clean wood trimmings. No preservatives, adhesives or toxins.",
        d:
          "Wood from forests and orchards. Aminolab-tested, organic certified — " +
          "cleanliness commercial sawdust can't match.",
        img: "images/product/tab4.jpg",
        tag: "SKID-STEER · MID-SPREAD",
      },
      {
        k: "soft",
        t: "Easy to use, easy to spread",
        lede: "Available in bulk or bags. Spread with tractor or manually.",
        d:
          "Even coverage, ready for the flock. Bulk or 20kg bags, spread with a " +
          "tractor or by hand. Softened fibre gives a gentle, insulated floor.",
        img: "images/product/tab3.jpg",
        isVideo: false,
        tag: "PRODUCTION YARD · BULK DELIVERY",
      },
    ],
  },

  /* ── FIELD RESULTS (commercial integration data) ──────────────────── */
  results: {
    eyebrow:        "§ 02 · FIELD RESULTS",
    headline:       "8.9 million birds.",
    headlineItalic: "One bedding outperformed.",
    lede: "7 farms. 14 cycles. Sawdust vs SecuriPad, side by side.",

    /* Headline stat tiles — what's most decisive in the eyes of an integrator. */
    tiles: [
      { delta: "▼ 18.5%", label: "Mortality reduction",
        a: { value: "5.90%", who: "Sawdust" },
        b: { value: "4.81%", who: "SecuriPad" } },
      { delta: "+75 g",   label: "Heavier market weight per bird",
        a: { value: "2.600 kg", who: "Sawdust" },
        b: { value: "2.675 kg", who: "SecuriPad" } },
      { delta: "+4.3%",   label: "More meat per m² of house",
        a: { value: "32.12 kg/m²", who: "Sawdust" },
        b: { value: "33.52 kg/m²", who: "SecuriPad" } },
      { delta: "+10 pts", label: "Higher EPEF production index",
        a: { value: "400.3", who: "Sawdust" },
        b: { value: "410.5", who: "SecuriPad" } },
    ],

    /* Bottom strip of context numbers. */
    foot: [
      ["4,517,703",  "Birds on SecuriPad"],
      ["4,366,740",  "Birds on conventional sawdust"],
      ["14",          "Grow-out cycles measured"],
      ["13.13",       "Birds per m² (matched stocking density)"],
    ],

    note:
      "Method: side-by-side comparison across 7 commercial farms in a large " +
      "integrator's network, 2023–2025. Stocking density, season mix and " +
      "management teams matched. The size and duration of the dataset make " +
      "this one of the largest commercial bedding comparisons ever published.",
  },

  /* ── SCIENCE ───────────────────────────────────────────────────────── */
  science: {
    eyebrow:        "§ 04 · THE SCIENCE",
    headline:       "Three principles.",
    headlineItalic: "Verified in the field.",
    lede: "Three things, every batch: thermal pass at 110°C~, fast-evaporating geometry, softened juvenile-friendly fibre.",

    /* For each card:
       • `fallbackImg` — set a real image URL or local path to render a photo.
       • Leave `fallbackImg: null` to show the placeholder with the `asset` hint.
       • To use a video instead of an image, set `fallbackImg: "images/science/foo.mp4"`
         and set `isVideo: true`.                                         */
    cards: [
      {
        n: "01",
        kicker: "STERILIZE",
        title: "Pathogen free from day one",
        body:
          "Every particle pasteurized at 110°C~, then cooled. Pathogens don't " +
          "survive. Ships sealed, dry, biosecure — from the very first chick.",
        asset: "Low-angle pellet floor — biosecure surface",
        fallbackImg: "images/science/card1.jpg",
        isVideo: false,
      },
      {
        n: "02",
        kicker: "DRY",
        title: "Engineered for maximum absorption",
        body:
          "Pressure-treated for maximum porosity. Absorbs more, releases faster " +
          "than sawdust. Drier litter, less disease, lower ammonia — full cycle.",
        asset: "Production yard — fresh SecuriPad, bulk delivery",
        fallbackImg: "images/science/card2.jpg",
        isVideo: false,
      },
      {
        n: "03",
        kicker: "SAFE",
        title: "Safe to walk, rest, and grow on",
        body:
          "Coarse-then-fine crushing plus thermal softening — a gentle, insulated " +
          "floor. Reduced footpad dermatitis and breast burns through the highest-risk juvenile days.",
        asset: "Chicks on SecuriPad — soft, safe surface",
        fallbackImg: "images/science/card3.jpg",
        isVideo: false,
      },
    ],

    process: [
      ["FROM", "Forest & orchard prunings", "Clean wood, locally collected, never industrial timber."],
      ["VIA",  "Thermal pasteurization",    "Held at 110°C~, then packaged and gradually cooled."],
      ["TO",   "Your house, biosecure",     "Delivered ready to spread, sealed, dry, and pathogen free."],
    ],
  },

  /* ── FARMS ─────────────────────────────────────────────────────────── */
  farms: {
    eyebrow:        "§ 03 · ON THE FARM",
    headline:       "Already in working",
    headlineItalic: "houses today.",
    lede: "Integrators using SecuriPad in commercial production today.",

    items: [
      { name: "Kibbutz Revadim",    type: "Turkey",  loc: "Southern District",
        img: "https://www.compostor.co.il/wp-content/uploads/2021/02/%D7%A8%D7%91%D7%93%D7%99%D7%9D-%D7%94%D7%95%D7%93%D7%99%D7%9D.jpg" },
      { name: "Sde Warburg",        type: "Broiler", loc: "Sharon",
        img: "images/farms/farm-aisle-2.jpg" },
      { name: "Moshav Nahalal",     type: "Broiler", loc: "Jezreel Valley",
        img: "https://www.compostor.co.il/wp-content/uploads/2021/02/%D7%9E%D7%99%D7%9C%D7%95%D7%90%D7%95%D7%AA-%D7%A0%D7%94%D7%9C%D7%9C.jpg" },
      { name: "Kibbutz Givat Haim", type: "Turkey",  loc: "Hefer Valley",
        img: "https://www.compostor.co.il/wp-content/uploads/2021/02/%D7%92%D7%91%D7%A2%D7%AA-%D7%97%D7%99%D7%99%D7%9D-%D7%9E%D7%90%D7%95%D7%97%D7%93-%D7%94%D7%95%D7%93%D7%99%D7%9D.jpg" },
      { name: "Moshav Ramat Tzvi",  type: "Turkey",  loc: "Beit She'an Valley",
        img: "https://www.compostor.co.il/wp-content/uploads/2021/02/%D7%A8%D7%9E%D7%AA-%D7%A6%D7%91%D7%99.jpg" },
      { name: "Moshav Nir Oz",      type: "Turkey",  loc: "Negev",
        img: "https://www.compostor.co.il/wp-content/uploads/2021/02/%D7%A7%D7%95%D7%A8%D7%A0%D7%99%D7%A9-%D7%A0%D7%99%D7%A8-%D7%A2%D7%95%D7%96.jpg" },
      { name: "Moshav Avnei Eitan", type: "Turkey",  loc: "Golan",
        img: "https://www.compostor.co.il/wp-content/uploads/2021/02/%D7%90%D7%91%D7%A0%D7%99-%D7%90%D7%99%D7%AA%D7%9F-%D7%9C%D7%95%D7%9C-%D7%94%D7%95%D7%93%D7%99%D7%9D.jpg" },
      { name: "Double K Farm",      type: "Broiler", loc: "Moshav Sharona",
        img: "images/farms/farm-aisle.jpg" },
    ],
  },

  /* ── CONTACT (no office hours, no response-time promise) ───────────── */
  contact: {
    eyebrow:        "§ 05 · CONTACT",
    headline:       "Talk",
    headlineItalic: "to us.",
    lede: "Tell us about your houses. We'll show you how SecuriPad makes them healthier.",

    /* Packaging / supply formats callout — sits above the form. */
    packaging: {
      eyebrow: "AVAILABLE FORMATS",
      headline: "Two ways to receive SecuriPad.",
      options: [
        {
          k: "BAG",
          title: "10 kg bag",
          sub:   "≈ 25 L",
          body:  "Stackable, easy to handle, ideal for smaller houses and trial orders.",
        },
        {
          k: "BULK",
          title: "75 m³ container",
          sub:   "≈ 30 tonnes",
          body:  "Bulk container delivery at preferential pricing. Best for cooperative integrators running multiple houses.",
        },
      ],
      /* Drop a real photo at images/contact/packaging.jpg later. */
      image: null,
      imageAlt: "SecuriPad packaging — bag and bulk",
    },


    blocks: [
      { k: "DIRECT", kind: "phone", value: "+972 52 643 7074", href: "tel:+972526437074", sub: "Daniel · Order Desk" },
      { k: "OFFICE", kind: "phone", value: "+972 77 410 0705", href: "tel:+972774100705", sub: "Compost Or HQ" },
      { k: "EMAIL",  kind: "email", value: "daniel@compostor.co.il", href: "mailto:daniel@compostor.co.il", sub: "" },
      { k: "EXPORT", kind: "text",  value: "Worldwide", sub: "" },
    ],

    form: {
      orgLabel:      "Cooperative or Integrator *",
      orgPlaceholder:"Organisation",
      nameLabel:     "Your name *",
      namePlaceholder:"Full name",
      emailLabel:    "Email *",
      emailPlaceholder:"you@company.com",
      phoneLabel:    "Phone",
      phonePlaceholder:"+1 555 000 0000",
      countryLabel:  "Country",
      countries:     ["Israel", "Cyprus", "Greece", "Italy", "Spain", "United Kingdom", "United States", "Other"],
      notesLabel:    "Notes",
      notesPlaceholder: "Timing, current bedding, logistics constraints…",
      submitLabel:   "Send to Daniel →",
      sendingLabel:  "Sending…",
      successKicker: "QUOTE REQUEST RECEIVED",
      successMessage:"We'll be in touch.",
      successCta:    "Submit another",
      defaultCountry:"Israel",
    },

    formEndpoint: "https://formsubmit.co/ajax/daniel@compostor.co.il",
    emailSubject: "New SecuriPad Quote Request",
  },

  /* ── FOOTER ────────────────────────────────────────────────────────── */
  footer: {
    tagline:
      "A sterilized, eco friendly wood based bedding for broiler houses. " +
      "Drier litter, healthier flocks, more profitable farms.",
    sub:        "BY ECOLOGZ · COMPOST OR",
    siteHeader: "SITE",
    orderHeader:"ORDER",
    aboutHeader:"ECOLOGZ",
    aboutLines: [
      "A Compost Or company",
      "PO Box 48003, Tel Aviv 6148001",
      "Export ready · Worldwide",
    ],
    siteLinks: [
      { id: "product", label: "Product" },
      { id: "farms",   label: "On the farm" },
      { id: "science", label: "Science" },
    ],
    orderLinks: [
      { label: "+972 52 643 7074 · Daniel", href: "tel:+972526437074" },
      { label: "daniel@compostor.co.il",     href: "mailto:daniel@compostor.co.il" },
      { label: "Request a quote",            href: "#contact" },
    ],
    copyright: "EcoLogz · Compost Or. SecuriPad is a registered mark of Compost Or Ltd.",
    certNote:  "Organic certified · Aminolab toxin tests",
  },

};
