export type NavItem = {
  label: string;
  href: string;
  accent?: boolean;
  activePrefixes?: string[];
};

export type HeroLine = {
  text: string;
  emphasis?: boolean;
};

export type ShowcaseSlide = {
  key: "white" | "grey" | "casual";
  route: string;
  indexLabel: string;
  title: string;
  emphasis: string;
  subtitle: string;
  body: string;
  image: string;
};

export type EditorialTile = {
  key: string;
  caption: string;
  image: string;
  layout: "a" | "b" | "c" | "d" | "e" | "f";
};

export type ProcessStep = {
  title: string;
  body: string;
  duration: string;
};

export type ClientPreview = {
  name: string;
  role: string;
  image: string;
};

export type CollectionGarment = {
  number: string;
  name: string;
  detail: string;
  image: string;
  layout: "xl" | "lg" | "md" | "md2" | "md3" | "xl2" | "md4";
};

export type CollectionData = {
  route: string;
  label: string;
  title: string;
  emphasis: string;
  description: string;
  meta: Array<{ label: string; value: string }>;
  garments: CollectionGarment[];
  seoTitle: string;
  seoDescription: string;
};

export type ProductData = {
  route: string;
  label: string;
  title: string;
  emphasis: string;
  tagline: string;
  description: string;
  specs: Array<{ term: string; value: string }>;
  swatches: Array<{ name: string; color: string }>;
  images: {
    main: string;
    detailA: string;
    detailB: string;
    wide: string;
  };
  collectionRoute: string;
  collectionLabel: string;
  seoTitle: string;
  seoDescription: string;
};

export type NotableClient = {
  number: string;
  name: string;
  role: string;
  piece: string;
  year?: string;
  image: string;
};

export type AppointmentOption = {
  title: string;
  description: string;
};

export type AppointmentAvailability = {
  isoDate: string;
  label: string;
  summaryLabel: string;
  times: string[];
};

const media = {
  hero:
    "https://static.wixstatic.com/media/6a3a01_1d1f3d83db104d4a85d20d05a3197aaf~mv2.jpg/v1/fill/w_2200,h_1400,al_c,q_90,enc_auto/kk.jpg",
  showcaseWhite:
    "https://static.wixstatic.com/media/6a3a01_f82cc74e688d4155995c9a848060e141~mv2.jpg/v1/fill/w_1600,h_2200,al_c,q_90,enc_auto/w.jpg",
  showcaseGrey:
    "https://static.wixstatic.com/media/6a3a01_d1c24d9920274bc690518fa6d48893b5~mv2.jpg/v1/fill/w_1600,h_2200,al_c,q_90,enc_auto/g.jpg",
  showcaseCasual:
    "https://static.wixstatic.com/media/6a3a01_14f2cdbd328a45f78a584a1959ef0e76~mv2.jpg/v1/fill/w_1600,h_2200,al_c,q_90,enc_auto/c.jpg",
  editorial1:
    "https://static.wixstatic.com/media/6a3a01_6c5a518633b6426691b48a1db982febc~mv2.jpg/v1/fill/w_900,h_1100,al_c,q_85,enc_auto/1.jpg",
  editorial2:
    "https://static.wixstatic.com/media/6a3a01_94f8eb0a7c9a442e8ecc8a971b0db298~mv2.jpg/v1/fill/w_900,h_1100,al_c,q_85,enc_auto/2.jpg",
  editorial3:
    "https://static.wixstatic.com/media/6a3a01_62504004792847c590a00280283d24e5~mv2.jpg/v1/fill/w_700,h_1100,al_c,q_85,enc_auto/3.jpg",
  editorial4:
    "https://static.wixstatic.com/media/6a3a01_f5b638a5126a4501a064153605d614c1~mv2.jpg/v1/fill/w_1100,h_800,al_c,q_85,enc_auto/4.jpg",
  editorial5:
    "https://static.wixstatic.com/media/6a3a01_a00ffbf262b942b5bc3e811d5cfd403b~mv2.jpg/v1/fill/w_900,h_900,al_c,q_85,enc_auto/5.jpg",
  editorial6:
    "https://static.wixstatic.com/media/6a3a01_a07d611d18634d6192202bdcf3a77693~mv2.jpg/v1/fill/w_800,h_1100,al_c,q_85,enc_auto/6.jpg",
  client1:
    "https://static.wixstatic.com/media/6a3a01_624c2916eee246d5a7c28fd94693008f~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85,enc_auto/c1.jpg",
  client2:
    "https://static.wixstatic.com/media/6a3a01_a07d611d18634d6192202bdcf3a77693~mv2.jpg/v1/fill/w_900,h_1100,al_c,q_90,enc_auto/2.jpg",
  client3:
    "https://static.wixstatic.com/media/6a3a01_94f8eb0a7c9a442e8ecc8a971b0db298~mv2.jpg/v1/fill/w_900,h_1100,al_c,q_90,enc_auto/3.jpg",
  client4:
    "https://static.wixstatic.com/media/6a3a01_a00ffbf262b942b5bc3e811d5cfd403b~mv2.jpg/v1/fill/w_900,h_1100,al_c,q_90,enc_auto/4.jpg",
  about:
    "https://static.wixstatic.com/media/6a3a01_a00ffbf262b942b5bc3e811d5cfd403b~mv2.jpg/v1/fill/w_1200,h_1600,al_c,q_90,enc_auto/k.jpg",
  notableBg:
    "https://static.wixstatic.com/media/6a3a01_3b23e122b6ad45df9b6f6141438bd5ba~mv2.jpg/v1/fill/w_1920,h_1920,al_c,q_85,enc_auto/6a3a01_3b23e122b6ad45df9b6f6141438bd5ba~mv2.jpg",
  white1:
    "https://static.wixstatic.com/media/6a3a01_f82cc74e688d4155995c9a848060e141~mv2.jpg/v1/fill/w_1200,h_1600,al_c,q_90,enc_auto/g1.jpg",
  white2:
    "https://static.wixstatic.com/media/6a3a01_6c5a518633b6426691b48a1db982febc~mv2.jpg/v1/fill/w_1000,h_1400,al_c,q_90,enc_auto/g2.jpg",
  white3:
    "https://static.wixstatic.com/media/6a3a01_94f8eb0a7c9a442e8ecc8a971b0db298~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_auto/g3.jpg",
  white4:
    "https://static.wixstatic.com/media/6a3a01_14f2cdbd328a45f78a584a1959ef0e76~mv2.jpg/v1/fill/w_1100,h_1400,al_c,q_90,enc_auto/g4.jpg",
  white5:
    "https://static.wixstatic.com/media/6a3a01_62504004792847c590a00280283d24e5~mv2.jpg/v1/fill/w_700,h_1100,al_c,q_90,enc_auto/g5.jpg",
  white6:
    "https://static.wixstatic.com/media/6a3a01_a07d611d18634d6192202bdcf3a77693~mv2.jpg/v1/fill/w_1300,h_1700,al_c,q_90,enc_auto/g6.jpg",
  white7:
    "https://static.wixstatic.com/media/6a3a01_d1c24d9920274bc690518fa6d48893b5~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_auto/g7.jpg",
  productMain:
    "https://static.wixstatic.com/media/6a3a01_f82cc74e688d4155995c9a848060e141~mv2.jpg/v1/fill/w_1600,h_2000,al_c,q_90,enc_auto/m.jpg",
  productA:
    "https://static.wixstatic.com/media/6a3a01_6c5a518633b6426691b48a1db982febc~mv2.jpg/v1/fill/w_900,h_1100,al_c,q_90,enc_auto/a.jpg",
  productB:
    "https://static.wixstatic.com/media/6a3a01_94f8eb0a7c9a442e8ecc8a971b0db298~mv2.jpg/v1/fill/w_900,h_1100,al_c,q_90,enc_auto/b.jpg",
  productWide:
    "https://static.wixstatic.com/media/6a3a01_f5b638a5126a4501a064153605d614c1~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_90,enc_auto/c.jpg",
  notable1:
    "https://static.wixstatic.com/media/6a3a01_624c2916eee246d5a7c28fd94693008f~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/a.jpg",
  notable2:
    "https://static.wixstatic.com/media/6a3a01_a07d611d18634d6192202bdcf3a77693~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/b.jpg",
  notable3:
    "https://static.wixstatic.com/media/6a3a01_f82cc74e688d4155995c9a848060e141~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/c.jpg",
  notable4:
    "https://static.wixstatic.com/media/6a3a01_a00ffbf262b942b5bc3e811d5cfd403b~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/d.jpg",
  notable5:
    "https://static.wixstatic.com/media/6a3a01_d1c24d9920274bc690518fa6d48893b5~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/e.jpg",
  notable6:
    "https://static.wixstatic.com/media/6a3a01_94f8eb0a7c9a442e8ecc8a971b0db298~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/f.jpg",
  notable7:
    "https://static.wixstatic.com/media/6a3a01_62504004792847c590a00280283d24e5~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/g.jpg",
  notable8:
    "https://static.wixstatic.com/media/6a3a01_14f2cdbd328a45f78a584a1959ef0e76~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/h.jpg",
  notable9:
    "https://static.wixstatic.com/media/6a3a01_f5b638a5126a4501a064153605d614c1~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/i.jpg",
} as const;

export const SITE_NAME = "KYRIS KUSTOMS";
export const INSTAGRAM_URL = "https://www.instagram.com/kyriskustoms";
export const SITE_DESCRIPTION =
  "Bespoke menswear with an editorial point of view, made slowly for formal dressing, business wardrobes, and occasions that deserve a better suit.";

export const NAV_LEFT: NavItem[] = [
  { label: "Index", href: "/", activePrefixes: ["/"] },
  {
    label: "Collections",
    href: "/white-dreams-collection",
    activePrefixes: [
      "/white-dreams-collection",
      "/grey-spirit-collection",
      "/men-s-casual-wear",
    ],
  },
  {
    label: "The Man & The Brand",
    href: "/the-man-and-the-brand",
    activePrefixes: ["/the-man-and-the-brand"],
  },
];

export const NAV_RIGHT: NavItem[] = [
  {
    label: "Notable Clients",
    href: "/as-seen-on",
    activePrefixes: ["/as-seen-on"],
  },
  {
    label: "Archive",
    href: "/archive/the-ivory-double-breasted",
    activePrefixes: ["/archive"],
  },
  {
    label: "Book a Fitting",
    href: "/book-a-fitting",
    accent: true,
    activePrefixes: ["/book-a-fitting"],
  },
];

export function getRouteLabel(pathname: string): string {
  if (pathname === "/") {
    return "Index";
  }

  if (pathname.startsWith("/white-dreams-collection")) {
    return "Collection — White Dreams";
  }

  if (pathname.startsWith("/grey-spirit-collection")) {
    return "Collection — Grey Spirit";
  }

  if (pathname.startsWith("/men-s-casual-wear")) {
    return "Collection — Men’s Casual Wear";
  }

  if (pathname.startsWith("/archive")) {
    return "Archive — The Ivory Double-Breasted";
  }

  if (pathname.startsWith("/as-seen-on")) {
    return "Notable Clients";
  }

  if (pathname.startsWith("/the-man-and-the-brand")) {
    return "The Man & The Brand";
  }

  if (pathname.startsWith("/book-a-fitting")) {
    return "Book a Fitting";
  }

  return "Kyris Kustoms";
}

export const HOME_CONTENT = {
  heroImage: media.hero,
  heroTag: "N° 001 — The Atelier",
  heroLabel: "Opulent Business Wear",
  heroLines: [
    { text: "Tailored" },
    { text: "to a man", emphasis: true },
    { text: "not a size." },
  ] satisfies HeroLine[],
  heroSubcopy:
    "Bespoke garments cut with patience for the men who still believe a suit should outlast a season, a room, and the noise around it.",
  marquee:
    "Bespoke · Hand-canvassed · Made in studio · Since 2020 · Bespoke · Hand-canvassed · Made in studio · Since 2020 ·",
  manifestoLead:
    "We do not chase trends. We shape the garments a man returns to when the room matters — the wardrobe of ceremony, work, and the quieter hours after both.",
  manifestoMeta: ["— Kyris Kustoms", "By appointment only", "Built around the fitting"],
  showcaseSlides: [
    {
      key: "white",
      route: "/white-dreams-collection",
      indexLabel: "N° I — Formal Wear",
      title: "White",
      emphasis: "Dreams",
      subtitle: "For the moment that becomes a memory.",
      body: "Ivory suiting, soft structure, and evening detail for weddings, galas, and the rare night that asks for ceremony instead of convenience.",
      image: media.showcaseWhite,
    },
    {
      key: "grey",
      route: "/grey-spirit-collection",
      indexLabel: "N° II — Business Wear",
      title: "Grey",
      emphasis: "Spirit",
      subtitle: "The quiet uniform of quiet power.",
      body: "Business tailoring for long weeks and sharper rooms: clean shoulders, grounded palettes, and cloths that travel as well as they present.",
      image: media.showcaseGrey,
    },
    {
      key: "casual",
      route: "/men-s-casual-wear",
      indexLabel: "N° III — Casual Wear",
      title: "Off the",
      emphasis: "Hour",
      subtitle: "When the tie comes off and the tailoring stays.",
      body: "Relaxed layers, knitwear, and soft jackets cut with the same discipline as the formal wardrobe, only easier on the calendar.",
      image: media.showcaseCasual,
    },
  ] satisfies ShowcaseSlide[],
  editorialHeadingPlain: "Inside",
  editorialHeadingEmphasis: "the studio",
  editorialBody:
    "Every commission begins with a conversation, a rail of cloth, and the arithmetic of a measuring tape. Nothing moves forward until the silhouette makes sense on the wearer.",
  editorialTiles: [
    {
      key: "tile-1",
      caption: "Ivory three-piece · White Dreams",
      image: media.editorial1,
      layout: "a",
    },
    {
      key: "tile-2",
      caption: "Peak lapel study",
      image: media.editorial2,
      layout: "b",
    },
    {
      key: "tile-3",
      caption: "Pocket square, hand-finished",
      image: media.editorial3,
      layout: "c",
    },
    {
      key: "tile-4",
      caption: "Atelier light, late afternoon",
      image: media.editorial4,
      layout: "d",
    },
    {
      key: "tile-5",
      caption: "Grey Spirit waistcoat",
      image: media.editorial5,
      layout: "e",
    },
    {
      key: "tile-6",
      caption: "Shoulder roll study",
      image: media.editorial6,
      layout: "f",
    },
  ] satisfies EditorialTile[],
  processHeadingPlain: "Four rooms.",
  processHeadingEmphasis: "Fourteen weeks.",
  processHeadingSuffix: "One garment shaped to one wearer.",
  processSteps: [
    {
      title: "The Consultation",
      body: "A wardrobe conversation before the tape comes out. Occasion, proportion, cloth preference, and how the garment should behave in the wearer’s actual life.",
      duration: "90 min · by appointment",
    },
    {
      title: "The Measuring",
      body: "Hand measurements, posture notes, balance corrections, and a first reading of how the body asks a coat to sit.",
      duration: "45 min · in studio",
    },
    {
      title: "The Fittings",
      body: "Baste and forward fittings refine the line until the coat belongs to the man wearing it instead of a stock block beneath it.",
      duration: "2–3 fittings · calendar dependent",
    },
    {
      title: "The Finishing",
      body: "Final handwork, lining choice, buttons, and delivery. The garment leaves only when the details have caught up with the silhouette.",
      duration: "week 14 · delivered",
    },
  ] satisfies ProcessStep[],
  tape:
    "Dressing the uncompromising / Athletes, founders, and exacting rooms / Made once. Made well. / Dressing the uncompromising / Athletes, founders, and exacting rooms / Made once. Made well.",
  clientsHeadingPlain: "Worn by the",
  clientsHeadingEmphasis: "uncompromising",
  clientsBody:
    "A short public read from the studio’s wider client record, spanning public office, sport, law, ministry, and entertainment.",
  clientsPreview: [
    {
      name: "Mike Espy",
      role: "Former Secretary of Agriculture",
      image: media.client1,
    },
    {
      name: "Mahmoud Abdul Rauf",
      role: "NBA legend, global activist",
      image: media.client2,
    },
    {
      name: "Jabari O. Edwards",
      role: "Founder/Chairman, J5 GBL",
      image: media.client3,
    },
    {
      name: "Terrell Buckley",
      role: "Super Bowl champion",
      image: media.client4,
    },
  ] satisfies ClientPreview[],
  bookingHeadingPlain: "Sit down.",
  bookingHeadingEmphasis: "Let the cloth decide.",
  bookingDescription:
    "The studio works Wednesday through Saturday by appointment. First consultations are exploratory; the point is to understand the wearer before anything is cut.",
  homeHours: [
    { name: "Fri, 24 Apr", detail: "11:00 · 14:00 · 16:30" },
    { name: "Sat, 25 Apr", detail: "09:30 · 12:00 · 15:00" },
    { name: "Wed, 29 Apr", detail: "11:00 · 13:00 · 16:00" },
    { name: "Thu, 30 Apr", detail: "10:30 · 13:00 · 17:30" },
  ],
};

export const COLLECTIONS: Record<"white" | "grey" | "casual", CollectionData> = {
  white: {
    route: "/white-dreams-collection",
    label: "Collection · N° I · Formal Wear",
    title: "White",
    emphasis: "Dreams.",
    description:
      "Ivory, bone, and silver-leaning neutrals for weddings, black-tie rooms, and commissions designed to read ceremonial without becoming costume.",
    meta: [
      { label: "Pieces", value: "12 garments" },
      { label: "Cloth", value: "Selected wool-silk formal suiting" },
      { label: "Construction", value: "Full canvas, hand-finished" },
      { label: "Lead time", value: "14 weeks" },
    ],
    garments: [
      {
        number: "N° 01 · The Proposal",
        name: "The Ivory Double-Breasted",
        detail: "Peak lapel · Soft shoulder · Wool-silk blend",
        image: media.white1,
        layout: "xl",
      },
      {
        number: "N° 02 · The Host",
        name: "The Three-Piece in Bone",
        detail: "Notch lapel · Waistcoat · Tonal lining",
        image: media.white2,
        layout: "lg",
      },
      {
        number: "N° 03",
        name: "Dinner Jacket, Ivory",
        detail: "Shawl collar · Evening-facing",
        image: media.white3,
        layout: "md",
      },
      {
        number: "N° 04",
        name: "The Morning Coat",
        detail: "Cut-away front · Ceremony weight cloth",
        image: media.white4,
        layout: "md2",
      },
      {
        number: "N° 05",
        name: "The Bone Waistcoat",
        detail: "Six-button · Silk back",
        image: media.white5,
        layout: "md3",
      },
      {
        number: "N° 06 · The Evening Tail",
        name: "The Ivory Tailcoat",
        detail: "Hand-sewn buttonholes · Built for formal dress codes",
        image: media.white6,
        layout: "xl2",
      },
      {
        number: "N° 07",
        name: "The Charcoal Tuxedo",
        detail: "Peak lapel · Grosgrain trim",
        image: media.white7,
        layout: "md4",
      },
    ],
    seoTitle: "White Dreams Collection",
    seoDescription:
      "Formal tailoring from Kyris Kustoms: ivory suiting, soft structure, and ceremonial wardrobe pieces built around the fitting.",
  },
  grey: {
    route: "/grey-spirit-collection",
    label: "Collection · N° II · Business Wear",
    title: "Grey",
    emphasis: "Spirit.",
    description:
      "A business wardrobe built around charcoal, flannel, and the slower confidence of suiting that travels well, holds shape, and never needs to raise its voice.",
    meta: [
      { label: "Pieces", value: "10 garments" },
      { label: "Cloth", value: "Worsteds, flannels, travel suiting" },
      { label: "Construction", value: "Half and full canvas options" },
      { label: "Lead time", value: "10–14 weeks" },
    ],
    garments: [
      {
        number: "N° 01 · Boardroom",
        name: "Charcoal Double-Breasted",
        detail: "Peak lapel · Structured chest · Travel-ready",
        image: media.showcaseGrey,
        layout: "xl",
      },
      {
        number: "N° 02 · First Flight",
        name: "The Soft Grey Three-Piece",
        detail: "Business waistcoat · Mid-weight wool",
        image: media.editorial5,
        layout: "lg",
      },
      {
        number: "N° 03",
        name: "Single-Breasted in Flannel",
        detail: "Notch lapel · Natural shoulder",
        image: media.white7,
        layout: "md",
      },
      {
        number: "N° 04",
        name: "Mid-Grey Windowpane",
        detail: "Soft check · Full day wear",
        image: media.editorial4,
        layout: "md2",
      },
      {
        number: "N° 05",
        name: "The Slate Waistcoat",
        detail: "Five-button · Layering piece",
        image: media.editorial3,
        layout: "md3",
      },
      {
        number: "N° 06 · Late Meeting",
        name: "Ink Travel Suit",
        detail: "Wrinkle-resistant cloth · Built for movement",
        image: media.editorial6,
        layout: "xl2",
      },
      {
        number: "N° 07",
        name: "The Workday Jacket",
        detail: "Soft tailoring · Trouser separate",
        image: media.editorial2,
        layout: "md4",
      },
    ],
    seoTitle: "Grey Spirit Collection",
    seoDescription:
      "Business tailoring from Kyris Kustoms: charcoal suiting, travel cloths, and quiet power for the weekly rotation.",
  },
  casual: {
    route: "/men-s-casual-wear",
    label: "Collection · N° III · Casual Wear",
    title: "Men’s",
    emphasis: "Casual Wear.",
    description:
      "Relaxed tailoring for weekends, travel, and the hours after meetings: soft jackets, knitwear, and lighter layers that keep the line without keeping the stiffness.",
    meta: [
      { label: "Pieces", value: "9 garments" },
      { label: "Cloth", value: "Cotton, linen, knit blends" },
      { label: "Construction", value: "Soft shoulder, unstructured" },
      { label: "Lead time", value: "8–12 weeks" },
    ],
    garments: [
      {
        number: "N° 01 · Off Duty",
        name: "The Unstructured Blazer",
        detail: "Patch pocket · Easy shoulder · Linen blend",
        image: media.showcaseCasual,
        layout: "xl",
      },
      {
        number: "N° 02 · Resort",
        name: "The Sand Overshirt",
        detail: "Soft layering · Open collar",
        image: media.editorial1,
        layout: "lg",
      },
      {
        number: "N° 03",
        name: "Knitted Polo Jacket",
        detail: "Lightweight knit · Travel friendly",
        image: media.editorial6,
        layout: "md",
      },
      {
        number: "N° 04",
        name: "Stone Trousers",
        detail: "Single pleat · Leisure cut",
        image: media.editorial5,
        layout: "md2",
      },
      {
        number: "N° 05",
        name: "The Weekend Waistcoat",
        detail: "Textured cloth · Layered or standalone",
        image: media.editorial3,
        layout: "md3",
      },
      {
        number: "N° 06 · After Hours",
        name: "Washed Linen Suit",
        detail: "Unlined coat · Drawstring option",
        image: media.editorial4,
        layout: "xl2",
      },
      {
        number: "N° 07",
        name: "The Easy Jacket",
        detail: "Casual tailoring · Soft pocket construction",
        image: media.editorial2,
        layout: "md4",
      },
    ],
    seoTitle: "Men’s Casual Wear",
    seoDescription:
      "Casual tailoring from Kyris Kustoms: soft jackets, knit layers, and relaxed pieces that retain the line of proper bespoke work.",
  },
};

export const ARCHIVE_PRODUCT: ProductData = {
  route: "/archive/the-ivory-double-breasted",
  label: "White Dreams · N° 01",
  title: "The Ivory",
  emphasis: "Double-Breasted.",
  tagline: "Cut for the moment that becomes a memory.",
  description:
    "A 6x2 double-breasted in ceremonial wool-silk, built with a soft shoulder, confident lapel, and a quiet amount of occasion. The line is formal without becoming theatrical, and the finish is designed to read best in person rather than at a distance.",
  specs: [
    { term: "Cloth", value: "Ceremonial wool-silk suiting" },
    { term: "Weight", value: "Mid-weight · year-round formal use" },
    { term: "Canvas", value: "Full canvas, hand-shaped" },
    { term: "Lining", value: "Cream cupro satin" },
    { term: "Buttons", value: "Mother-of-pearl" },
    { term: "Lead time", value: "14 weeks" },
  ],
  swatches: [
    { name: "Ivory", color: "#eee6d6" },
    { name: "Bone", color: "#d8cdb5" },
    { name: "Silver", color: "#bfb5a0" },
    { name: "Stone", color: "#8a8172" },
    { name: "Charcoal", color: "#2a2520" },
  ],
  images: {
    main: media.productMain,
    detailA: media.productA,
    detailB: media.productB,
    wide: media.productWide,
  },
  collectionRoute: COLLECTIONS.white.route,
  collectionLabel: "White Dreams",
  seoTitle: "The Ivory Double-Breasted",
  seoDescription:
    "Archive detail for the Ivory Double-Breasted from the White Dreams formal collection by Kyris Kustoms.",
};

export const NOTABLE_CLIENTS: NotableClient[] = [
  {
    number: "01",
    name: "Mike Espy",
    role: "Former Secretary of Agriculture",
    piece: "Public service",
    image: media.notable1,
  },
  {
    number: "02",
    name: "Jabari O. Edwards",
    role: "Founder/Chairman of J5 GBL",
    piece: "Business leadership",
    image: media.notable2,
  },
  {
    number: "03",
    name: "Mahmoud Abdul Rauf",
    role: "NBA legend and global activist",
    piece: "Sport and advocacy",
    image: media.notable3,
  },
  {
    number: "04",
    name: "Mike Espy",
    role: "Former Ole Miss and Washington Redskins receiver",
    piece: "Football",
    image: media.notable4,
  },
  {
    number: "05",
    name: 'Andre "Gorgeous Dre" Taylor',
    role: "Activist, author, Seattle Street Czar",
    piece: "Community leadership",
    image: media.notable5,
  },
  {
    number: "06",
    name: "Larry Belton",
    role: "Former university dean and legendary fashion savant",
    piece: "Education and style",
    image: media.notable6,
  },
  {
    number: "07",
    name: "Carlos Moore, Esq.",
    role: "Managing partner, The Cochran Firm, Mississippi Delta",
    piece: "Law",
    image: media.notable7,
  },
  {
    number: "08",
    name: "Johnnathan Abram",
    role: "2019 first-round draft pick and starting safety, Las Vegas Raiders",
    piece: "Professional football",
    image: media.notable8,
  },
  {
    number: "09",
    name: "Jesse Mitchell III, Esq.",
    role: "Former Baltimore Raven and founder of The Mitchell Firm, PLLC",
    piece: "Sport and law",
    image: media.notable9,
  },
  {
    number: "10",
    name: "William McCurdy II",
    role: "Nevada State Assemblyman and chair of the Nevada Democratic Party",
    piece: "Public service",
    image: media.notable1,
  },
  {
    number: "11",
    name: "Comedian KDubb",
    role: "MTV’s Wild ’N Out, Bad Boys of Comedy, T.I. & Tiny’s: The Family Hustle",
    piece: "Entertainment",
    image: media.notable2,
  },
  {
    number: "12",
    name: "Halbert Dockins, Esq.",
    role: "Co-founder and managing partner of Dockins Turnage & Banks, PLLC",
    piece: "Law",
    image: media.notable3,
  },
  {
    number: "13",
    name: "Dr. Darryl Brister",
    role: "Bishop, author, and founder of Beacon Light International Baptist Cathedral",
    piece: "Faith leadership",
    image: media.notable4,
  },
  {
    number: "14",
    name: "Terrell Buckley",
    role:
      "Florida State and College Football Hall of Fame inductee, Jim Thorpe Awardee, Heisman Trophy candidate, Super Bowl champion",
    piece: "Football legacy",
    image: media.notable5,
  },
  {
    number: "15",
    name: "Bishop Paul Morton",
    role:
      "Co-founder of Full Gospel Baptist Church Fellowship, author, bishop, recording artist",
    piece: "Faith and music",
    image: media.notable6,
  },
];

export const ABOUT_CONTENT = {
  heroImage: media.about,
  label: "The Man & The Brand",
  title: "A",
  emphasis: "tailor",
  titleSuffix: "and the men he dresses.",
  quote:
    '"A good suit should feel considered before it feels noticed. The line comes first; the drama can stay quiet."',
  signature: "— Kyris",
  signatureCaption: "Founder, cutter, final fitting",
  story: [
    "Kyris Kustoms is built around a slower way of dressing: one conversation at a time, one fitting at a time, one garment that earns a permanent place in the wardrobe instead of a short season in it.",
    "The studio works on a deliberately limited commission calendar. The purpose is not scale but attention: cloth selection, balance corrections, and repeated fittings until the silhouette reads naturally on the client rather than impressively on a hanger.",
    "The rule of the house is simple: the garment should serve the wearer first. The photographs, if any follow, can arrive later.",
  ],
  stats: [
    { number: "14", label: "weeks, delivery window" },
    { number: "32", label: "hand measurements, baseline" },
    { number: "04", label: "key fitting moments, max" },
    { number: "01", label: "studio pace, one commission at a time" },
  ],
  seoTitle: "The Man & The Brand",
  seoDescription:
    "Learn about Kyris Kustoms, the studio philosophy, and the slow bespoke process behind the brand.",
};

export const BOOKING_CONTENT = {
  label: "Bookings · Spring ’26",
  title: "Reserve a",
  emphasis: "fitting.",
  description:
    "First consultations run ninety minutes and are exploratory. Bring a jacket you trust, or one you never quite understood; both are useful starting points.",
  options: [
    {
      title: "First consultation",
      description: "A first conversation, no obligation",
    },
    {
      title: "Bespoke commission",
      description: "Begin a new garment",
    },
    {
      title: "Returning fitting",
      description: "Baste, forward, or final fitting",
    },
    {
      title: "Wardrobe review",
      description: "Refinement, edits, and direction",
    },
  ] satisfies AppointmentOption[],
  availability: [
    {
      isoDate: "2026-04-24",
      label: "Fri, 24 Apr 2026",
      summaryLabel: "Fri, 24 April 2026",
      times: ["11:00", "14:00", "16:30"],
    },
    {
      isoDate: "2026-04-25",
      label: "Sat, 25 Apr 2026",
      summaryLabel: "Sat, 25 April 2026",
      times: ["09:30", "12:00", "15:00"],
    },
    {
      isoDate: "2026-04-29",
      label: "Wed, 29 Apr 2026",
      summaryLabel: "Wed, 29 April 2026",
      times: ["11:00", "13:00", "16:00"],
    },
    {
      isoDate: "2026-04-30",
      label: "Thu, 30 Apr 2026",
      summaryLabel: "Thu, 30 April 2026",
      times: ["10:30", "13:00", "17:30"],
    },
  ] satisfies AppointmentAvailability[],
  summaryStudio: "Details shared on confirmation",
  summaryNote:
    "A confirmation will be shared the same day with arrival notes and any fitting references worth bringing along.",
  seoTitle: "Book a Fitting",
  seoDescription:
    "Reserve a fitting with Kyris Kustoms. Consultations are by appointment and the booking flow remains studio-led.",
};

export const FOOTER_CONTENT = {
  brandBody:
    "A small atelier for formal, business, and relaxed bespoke dressing. Commissioned slowly, fitted properly, and built to stay in rotation longer than the occasion that started it.",
  collections: [
    { label: "White Dreams — Formal", href: COLLECTIONS.white.route },
    { label: "Grey Spirit — Business", href: COLLECTIONS.grey.route },
    { label: "Men’s Casual Wear", href: COLLECTIONS.casual.route },
    { label: "The Archive", href: ARCHIVE_PRODUCT.route },
  ],
  studio: [
    { label: "The Man & The Brand", href: "/the-man-and-the-brand" },
    { label: "Notable Clients", href: "/as-seen-on" },
    { label: "Book a fitting", href: "/book-a-fitting" },
    { label: "@kyriskustoms", href: INSTAGRAM_URL, external: true },
  ],
  contact: [
    "By appointment only",
    "Consultation details shared on confirmation",
    "Instagram for studio updates",
  ],
};

export const NOTABLE_PAGE_CONTENT = {
  backgroundImage: media.notableBg,
  label: "Index · Public acknowledgements",
  title: "A quiet list of men who",
  emphasis: "refuse the obvious",
  intro:
    "Drawn from the studio’s own acknowledgements, this page spans public office, sport, law, ministry, and entertainment without flattening the men behind the names.",
  outro:
    "This page reflects the names the studio has chosen to acknowledge publicly, and leaves the rest of the private client record where it belongs.",
  seoTitle: "Notable Clients",
  seoDescription:
    "A discreet overview of the kinds of clients Kyris Kustoms dresses, from diplomatic wardrobes to ceremony commissions.",
};
