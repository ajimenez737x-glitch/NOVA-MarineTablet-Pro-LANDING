import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      /* ── Primary SEO ── */
      {
        title: "Nautical Tablet NOVA Marine PRO | Best Marine Navigation Device — Pre-Order",
      },
      {
        name: "description",
        content:
          "NOVA The Marine Tablet PRO — the best nautical tablet for sea professionals. Sub-metric GPS ±1.5 cm, 1,000 nit sunlight display, IP68, MIL-STD-810H. Pre-order now and save €400. Only 100 units.",
      },
      {
        name: "keywords",
        content:
          "nautical tablet, marine tablet, NOVA The Marine Tablet PRO, marine navigation device, chartplotter, nautical chartplotter, Raymarine, Garmin, Simrad, buy nautical tablet online, best tablet for sailing, nautical tablet pre-order offer, marine GPS tablet, IP68 tablet, rugged marine tablet",
      },
      { name: "author", content: "NOVA Marine" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0b1f3b" },

      /* ── Open Graph ── */
      {
        property: "og:title",
        content: "NOVA The Marine Tablet PRO | Best Nautical Tablet — Pre-Order & Save €400",
      },
      {
        property: "og:description",
        content:
          "The ultimate marine navigation device: sub-metric GPS, 1,000 nit sunlight-readable display, IP68 waterproof, 24h battery. Pre-order the best nautical tablet and save €400. Only first 100 units.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://novamarinestablet.com/" },
      { property: "og:site_name", content: "NOVA Marine" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: "https://novamarinestablet.com/og-image.jpg" },
      { property: "og:image:alt", content: "NOVA The Marine Tablet PRO — nautical tablet in sunlight on a yacht deck" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },

      /* ── Twitter / X Card ── */
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "NOVA Marine Tablet PRO | Best Nautical Tablet — Pre-Order & Save €400",
      },
      {
        name: "twitter:description",
        content:
          "Sub-metric GPS, 1,000 nit display, IP68 & MIL-STD-810H. The best marine navigation device for sea professionals. Pre-order now — only 100 units.",
      },
      { name: "twitter:image", content: "https://novamarinestablet.com/og-image.jpg" },
      { name: "twitter:image:alt", content: "NOVA The Marine Tablet PRO nautical tablet" },

      /* ── Structured Data ── */
      {
        "script:ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "NOVA The Marine Tablet PRO",
              "description": "Professional nautical tablet with sub-metric RTK GNSS GPS ±1.5 cm, 1,000 nit sunlight-readable display, IP68 waterproofing, MIL-STD-810H military certification and 24-hour battery life. The best marine navigation device for sea professionals.",
              "brand": { "@type": "Brand", "name": "NOVA Marine" },
              "image": "https://novamarinestablet.com/og-image.jpg",
              "sku": "NOVA-PRO-001",
              "category": "Marine Electronics > Nautical Tablets",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "GPS Accuracy", "value": "±1.5–2 cm RTK GNSS" },
                { "@type": "PropertyValue", "name": "Screen Brightness", "value": "1,000 nits" },
                { "@type": "PropertyValue", "name": "Waterproof Rating", "value": "IP68" },
                { "@type": "PropertyValue", "name": "Military Standard", "value": "MIL-STD-810H" },
                { "@type": "PropertyValue", "name": "Battery Life", "value": "24 hours active navigation" },
                { "@type": "PropertyValue", "name": "Operating System", "value": "Android 14 Marine Edition" },
              ],
              "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "price": "595",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/LimitedAvailability",
                "itemCondition": "https://schema.org/NewCondition",
                "seller": { "@type": "Organization", "name": "NOVA Marine" },
                "description": "Pre-order launch price. Includes €400 discount, free Super Charger and Ergonomic Handle. Only 100 units available.",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "3",
                "bestRating": "5",
                "worstRating": "1",
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Ray Armenteros" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "NOVA PRO is an essential tool for safe and comfortable navigation. Impressed with total comfort, outstanding ruggedness and maximum precision.",
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Captain J. Fuentes" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "We use it across our entire fishing fleet. Screen perfectly readable under the summer sun, battery holds up for 12-hour shifts. A truly nautical tablet.",
                },
              ],
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which nautical navigation apps are compatible with NOVA Marine Tablet PRO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NOVA operates on Android 14 with full Google Play Store access, compatible with Navionics Boating, Orca, C-MAP, TimeZero, Aqua Map, OpenCPN, PredictWind, SailGrib WR, and Savvy Navvy. Via NMEA 2000 and NMEA 0183, it interfaces with Raymarine, B&G, Simrad, Garmin, and Lowrance marine electronics.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Is the screen really readable in direct sunlight?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The 10.1-inch IPS display delivers 1,000 nits of brightness with an advanced anti-glare coating and wet-touch / glove-touch technology, ensuring full readability and touch response even in intense midday sunlight, rain, or when wearing sailing gloves.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How accurate is the built-in GPS on the NOVA marine tablet?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The multi-constellation GNSS receiver tracks GPS, GLONASS, Galileo, and BeiDou simultaneously, achieving positioning accuracy under 1.5 meters with ultra-fast time-to-first-fix. This makes it the most accurate GPS of any nautical tablet on the market.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Is NOVA waterproof and resistant to impact?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The NOVA Marine Tablet PRO is IP68 certified (submersible to 1.5 m for 30 minutes) and MIL-STD-810H military certified for shock, vibration, and drops from 1.2 m. Built with corrosion-resistant components for prolonged salt spray exposure.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "What does the nautical tablet pre-order offer include?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The pre-order launch bundle includes: NOVA The Marine Tablet PRO, Heavy-Duty Protective Case, Premium Charging Dock & Power Kit, Tempered Glass Screen Protector, 36-Month Extended Warranty, and NOVA Skippers Care+ lifetime support program. Price: €595 (RRP €995). Only 100 units available.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "What warranty does the NOVA Marine Tablet PRO carry?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Every NOVA Marine Tablet PRO includes a 3-Year (36-Month) Official Extended Warranty free of charge, backed by the NOVA Skippers Care+ program with priority technical support and rapid hardware replacement.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "What certifications does the NOVA nautical tablet hold?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CE Marking, IP68 waterproof certification, MIL-STD-810H military standard, NMEA 2000 and NMEA 0183 compatibility, Wi-Fi and Bluetooth certified. Designed specifically for professional marine environments.",
                  },
                },
              ],
            },
            {
              "@type": "WebSite",
              "name": "NOVA Marine",
              "url": "https://novamarinestablet.com/",
              "description": "Official website of NOVA The Marine Tablet PRO — the best nautical tablet and marine navigation device for sea professionals.",
            },
          ],
        }),
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://novamarinestablet.com/" },
      { rel: "preload", href: "/frames/23456_000.jpg", as: "image" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
