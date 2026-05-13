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
    results:         false,
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
      { value: "150°C~", label: "Thermally pasteurized", counter: 150, suffix: "°C~" },
      { value: "3×",     label: "Absorption vs. conventional bedding", static: "3×" },
      { value: "1000+",  label: "Cooperative houses",   counter: 1000, suffix: "+" },
    ],

    marquee: [
      "Drier litter, less disease",
      "Thermally pasteurized at 150°C~",
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
    { label: "ORGANIC CERTIFIED",   sub: "Aminolab toxin tests" },
    { label: "THERMALLY PASTEURIZED", sub: "150°C~ every batch" },
    { label: "ZERO ADDITIVES",      sub: "No preservatives or adhesives" },
    { label: "EXPORT READY",        sub: "FOB & CIF worldwide" },
    { label: "COOPERATIVE PRICING", sub: "Direct from EcoLogz" },
  ],

  /* ── PRODUCT (tabbed) ──────────────────────────────────────────────── */
  product: {
    eyebrow:        "§ 01 · THE PRODUCT",
    headline:       "Built for the way",
    headlineItalic: "integrators run houses.",
    lede:
      "Every aspect of SecuriPad is engineered around the four things that actually " +
      "move the needle for cooperative integrators: drier litter, safer chicks, " +
      "cleaner raw stock, and predictable supply.",
    tabs: [
      {
        k: "evaporation",
        t: "3× the absorption of conventional bedding",
        lede: "A precise blend of wood pellets and fine wood chips, tuned to your house.",
        d:
          "SecuriPad is a precise blend of wood pellets and fine wood chips, " +
          "mixed in ratios tuned to the stage and species in your house. The " +
          "fine fraction creates a soft, comfortable surface for chicks during " +
          "the early growth window; the pellets carry the workload — absorbing " +
          "moisture and ammonia, holding the floor dry, and keeping ambient air " +
          "healthy through the cycle. In our laboratory testing, absorption " +
          "capacity measured 3× higher than conventional bedding.",
        img: "images/product/tab1.jpg",
        tag: "MID-CYCLE LITTER · ABSORBING",
      },
      {
        k: "raw",
        t: "Eco friendly raw stock",
        lede: "Made from clean wood trimmings. No preservatives, adhesives or toxins.",
        d:
          "We select wood directly from forests and orchards. External toxin tests " +
          "by Aminolab gave SecuriPad organic certification, a level of cleanliness " +
          "commercial sawdust cannot guarantee. Eco friendly bedding made entirely " +
          "from clean wood trimmings.",
        img: "images/product/tab4.jpg",
        tag: "SKID-STEER · MID-SPREAD",
      },
      {
        k: "soft",
        t: "Easy to use, easy to spread",
        lede: "Available in bulk or bags. Spread with tractor or manually.",
        d:
          "Easy to use, easy to spread, even coverage, ready for the flock. " +
          "Available in bulk or 20kg bags, spread with a tractor or manually. " +
          "The softened fibre gives a gentle floor with great thermal insulation. " +
          "Chickens feel safe to walk, rest, and grow on SecuriPad.",
        img: "images/product/tab3.jpg",
        isVideo: false,
        tag: "PRODUCTION YARD · BULK DELIVERY",
      },
    ],
  },

  /* ── SCIENCE ───────────────────────────────────────────────────────── */
  science: {
    eyebrow:        "§ 03 · THE SCIENCE",
    headline:       "Three principles.",
    headlineItalic: "Verified in the field.",
    lede:
      "Field results follow when production is right. A thermal pass at 150°C~, " +
      "a fast evaporating geometry, and a softened juvenile friendly fibre. " +
      "These are the three things SecuriPad is engineered to do, every batch.",

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
          "Every particle is thermally pasteurized at 150°C~, then gradually " +
          "cooled. Pathogens carried in raw wood do not survive the cycle. The " +
          "bedding ships sealed, dry, and biosecure for stronger biosecurity " +
          "from the very first chick.",
        asset: "Low-angle pellet floor — biosecure surface",
        fallbackImg: "images/science/card1.jpg",
        isVideo: false,
      },
      {
        n: "02",
        kicker: "DRY",
        title: "Engineered for maximum absorption",
        body:
          "Finely ground and pressure treated to maximise porosity. SecuriPad has " +
          "high evaporation capacity, absorbing more moisture and releasing it " +
          "faster than commercial sawdust. Drier litter, less disease, lower " +
          "ammonia across the full grow out cycle.",
        asset: "Production yard — fresh SecuriPad, bulk delivery",
        fallbackImg: "images/science/card2.jpg",
        isVideo: false,
      },
      {
        n: "03",
        kicker: "SOFT",
        title: "Safe to walk, rest, and grow on",
        body:
          "A coarse then gentle crushing, plus thermal softening of the wood fibre, " +
          "gives a soft, insulating floor. The first juvenile days are the highest " +
          "risk period. Reduced risk of footpad dermatitis and breast burns. " +
          "Chickens feel safe to walk, rest, and grow on SecuriPad.",
        asset: "Chicks on SecuriPad — soft, safe surface",
        fallbackImg: "images/science/card3.jpg",
        isVideo: false,
      },
    ],

    process: [
      ["FROM", "Forest & orchard prunings", "Clean wood, locally collected, never industrial timber."],
      ["VIA",  "Thermal pasteurization",    "Held at 150°C~, then packaged and gradually cooled."],
      ["TO",   "Your house, biosecure",     "Delivered ready to spread, sealed, dry, and pathogen free."],
    ],
  },

  /* ── FARMS ─────────────────────────────────────────────────────────── */
  farms: {
    eyebrow:        "§ 02 · ON THE FARM",
    headline:       "Already in working",
    headlineItalic: "houses today.",
    lede:
      "Cooperatives and integrators raising broilers and turkeys are using " +
      "SecuriPad in commercial production right now. The list keeps growing.",

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
    eyebrow:        "§ 04 · CONTACT",
    headline:       "Talk",
    headlineItalic: "to us.",
    lede:
      "We would love to hear from you, meet you, and walk you through exactly " +
      "how SecuriPad can make your farms healthier and more successful.",

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
      housesLabel:   "Houses",
      formatLabel:   "Format",
      formats:       ["Bulk delivery", "Big bag (FIBC)", "Small bag (20kg)", "Mixed"],
      countryLabel:  "Country",
      countries:     ["Israel", "Cyprus", "Greece", "Italy", "Spain", "United Kingdom", "United States", "Other"],
      notesLabel:    "Notes",
      notesPlaceholder: "Timing, current bedding, logistics constraints…",
      submitLabel:   "Send to Daniel →",
      sendingLabel:  "Sending…",
      successKicker: "QUOTE REQUEST RECEIVED",
      successMessage:"We'll be in touch.",
      successCta:    "Submit another",
      defaultHouses: "60",
      defaultFormat: "Big bag (FIBC)",
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
