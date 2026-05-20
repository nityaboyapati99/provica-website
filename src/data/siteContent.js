const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Farmers & Sustainability", href: "/farmers-sustainability" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing-excellence" },
  { label: "Contact", href: "/contact" },
];

export const brandAssets = {
  logoUrl: withBase("provica-logo-option1-transparent.png"),
};

export const contactDetails = {
  email: "Connect@Provicafoods.com",
  phone: "8886343339",
  hours: "09:00 am - 05:00 pm",
};

export const storyMoments = [
  {
    eyebrow: "Rooted in origin",
    title: "From sunrise fields and fertile soil to refined chocolate expression.",
    text:
      "Provica Foods is framed here as a premium Indian chocolate legacy shaped by pod, leaf, land, and people. Every batch begins in West Godavari, where farming communities define the first layer of flavor and trust.",
  },
  {
    eyebrow: "Crafted with intent",
    title: "A farm-to-factory journey designed for consistency, warmth, and character.",
    text:
      "Organic agriculture, disciplined sourcing, and premium manufacturing work together here, allowing trust, appetite appeal, and brand character to live inside the same visual world.",
  },
];

export const impactStats = [
  { value: "20,000+", label: "cocoa farmers connected to the ecosystem" },
  { value: "West Godavari", label: "origin story centered on Andhra Pradesh farming communities" },
  { value: "Farm to Factory", label: "one continuous journey from cultivation to finished chocolate" },
  { value: "Organic", label: "sustainability and farm authenticity carried through the narrative" },
];

export const products = [
  {
    name: "Classico White Compound",
    brand: "Classico by Provica Foods",
    brandLogo: withBase("brands/classico-logo.png"),
    description:
      "White compound crafted for bakery, confectionery, coating, decoration, and large-scale chocolate application use.",
    tag: "Compound Range",
    image: withBase("products/classico-compounds.jpeg"),
    imageAlt: "Classico compound product range including white compound packaging",
  },
  {
    name: "Classico Dark & Milk Compounds",
    brand: "Classico by Provica Foods",
    brandLogo: withBase("brands/classico-logo.png"),
    description:
      "Dark and milk compound solutions developed for reliable melt, coating performance, and production consistency.",
    tag: "Industrial Compound",
  },
  {
    name: "Zoops Chocolate Spreads",
    brand: "Zoops under the Provica entity",
    brandLogo: withBase("brands/zoops-logo.png"),
    description:
      "Zoops is the chocolate brand within the Provica portfolio, built around spreadable indulgence and consumer-facing retail appeal.",
    tag: "Consumer Brand",
  },
  {
    name: "Cocoa & Bakery Applications",
    brand: "Provica Foods",
    brandMark: "provica",
    description:
      "Chocolate-ready ingredients and cocoa applications for fillings, toppings, enrobing, and bakery innovation.",
    tag: "Application Systems",
  },
];

export const certifications = [
  "Food safety and hygiene-led production storytelling",
  "Quality assurance systems ready for trust-driven procurement",
  "Traceability narratives tied to cocoa origin and partner confidence",
  "Manufacturing documentation zones for future certification uploads",
];

export const trustPoints = [
  {
    title: "Farmer-led origin",
    text: "An authentic cocoa ecosystem rooted in Andhra Pradesh and shaped by community resilience.",
  },
  {
    title: "Manufacturing precision",
    text: "Modern facilities, disciplined processes, and scalable production designed to inspire confidence and consistency.",
  },
  {
    title: "Premium versatility",
    text: "A rare blend of ingredient expertise and consumer-facing storytelling under one brand system.",
  },
];

export const experienceGallery = [
  {
    title: "Atmospheric farm documentary reel",
    type: "Stock footage direction",
    note: "Use sunrise cocoa fields, hand-harvested pods, leaves in warm backlight, and grounded farmer portraiture.",
  },
  {
    title: "Factory motion chapter",
    type: "Stock footage direction",
    note: "Replace with clean production-line, tempering, packaging, and quality-check visuals with warm film grading.",
  },
  {
    title: "Editorial product portraits",
    type: "Still photography direction",
    note: "Style spreads, compounds, cocoa ingredients, and plated desserts with natural textures rather than glossy ecommerce lighting.",
  },
];

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/our-story" },
      { label: "Products", href: "/products" },
      { label: "Manufacturing Excellence", href: "/manufacturing-excellence" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Manufacturing Excellence", href: "/manufacturing-excellence" },
      { label: "Certifications", href: "/certifications" },
      { label: "Farmers & Sustainability", href: "/farmers-sustainability" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
