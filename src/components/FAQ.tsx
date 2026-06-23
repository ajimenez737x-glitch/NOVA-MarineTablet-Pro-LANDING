import { useState, type ReactNode } from "react";
import type { Lang } from "@/i18n/translations";

interface FAQItem {
  q: string;
  a: ReactNode;
}

const itemsEn: FAQItem[] = [
  {
    q: "Which nautical navigation apps are compatible?",
    a: (
      <div className="space-y-3">
        <p>
          The NOVA Marine Tablet PRO operates on an open Android 14 ecosystem with full access to the Google Play Store, making it compatible with virtually all major maritime navigation, routing, and weather apps:
        </p>
        <ul className="space-y-1.5 pl-1">
          {["Navionics Boating (Garmin)", "Orca / C-MAP", "TimeZero (TZ iBoat)", "Aqua Map / OpenCPN", "PredictWind / SailGrib WR", "Savvy Navvy"].map((app) => (
            <li key={app} className="flex items-center gap-2">
              <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              {app}
            </li>
          ))}
        </ul>
        <p>
          Thanks to integrated NMEA 2000 and NMEA 0183 compatibility, the tablet seamlessly interfaces with Raymarine, B&amp;G, Simrad, Garmin, and Lowrance via Wi-Fi or Bluetooth, letting you display real-time instrument data, radar, sonar, and autopilot controls directly on screen.
        </p>
      </div>
    ),
  },
  {
    q: "Is the screen really readable in direct sunlight?",
    a: (
      <div className="space-y-3">
        <p>
          Yes, absolutely. The tablet features a premium 10.1-inch IPS display specifically engineered for open-sea conditions. It boasts an ultra-high brightness of <strong className="text-foreground">1,000 nits</strong>, ensuring crisp, high-contrast visuals even under intense midday sunlight.
        </p>
        <p>
          The screen is equipped with an advanced anti-glare (AG) coating that drastically reduces reflections and mirror-effects from the water. It also includes a specialized <strong className="text-foreground">wet-touch and glove-touch</strong> algorithm — the capacitive touchscreen remains fully responsive even covered in sea spray, rain, or when wearing heavy sailing gloves.
        </p>
      </div>
    ),
  },
  {
    q: "How accurate is the built-in GPS?",
    a: (
      <div className="space-y-3">
        <p>
          The built-in navigation system provides professional-grade, multi-constellation tracking. It connects simultaneously to four major satellite networks: <strong className="text-foreground">GPS, GLONASS, Galileo, and BeiDou</strong>.
        </p>
        <p>
          By tracking multiple frequencies at once, the tablet achieves a positioning accuracy of <strong className="text-foreground">under 1.5 meters</strong> with an ultra-fast time-to-first-fix (TTFF). This redundant setup guarantees stable, uninterrupted position fixes even during blue-water crossings, remote ocean routes, or severe storms where standard consumer tablets lose signal.
        </p>
      </div>
    ),
  },
  {
    q: "Is it resistant to extreme water and impact conditions?",
    a: (
      <div className="space-y-3">
        <p>Yes. The NOVA Marine Tablet PRO is a fully ruggedized, military-grade device built to withstand the harshest environments:</p>
        <ul className="space-y-2 pl-1">
          {[
            { label: "IP68 Waterproof & Dustproof", detail: "Hermetically sealed against dust and sand. Withstands complete submersion up to 1.5 m for 30 minutes." },
            { label: "MIL-STD-810H Military Certification", detail: "Certified for extreme shock, vibration, thermal shock, and drops from up to 1.2 m onto hard surfaces." },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              <span><strong className="text-foreground">{label}:</strong> {detail}</span>
            </li>
          ))}
        </ul>
        <p>Corrosion-resistant components counteract the degrading effects of prolonged salt spray and marine humidity.</p>
      </div>
    ),
  },
  {
    q: "What does the pre-order launch offer include?",
    a: (
      <div className="space-y-3">
        <p>The exclusive pre-order package includes a comprehensive bundle:</p>
        <ul className="space-y-2 pl-1">
          {[
            { label: "NOVA Marine Tablet PRO", detail: "The flagship 10.1\" ruggedized marine tablet." },
            { label: "Heavy-Duty Protective Case", detail: "Reinforced casing with multi-position kickstand and ergonomic hand-strap." },
            { label: "Premium Charging Dock & Power Kit", detail: "Marine-grade high-speed charger with reinforced braided cable." },
            { label: "Tempered Glass Screen Protector", detail: "Pre-installed high-hardness shield for impact and scratch resistance." },
            { label: "36-Month Extended Warranty", detail: "An extra year of official coverage completely free of charge." },
            { label: "NOVA Skippers Care+ Program", detail: "Lifetime 24/7 maritime technical support, remote setup, automated backups, and anti-theft GPS pre-configuration." },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              <span><strong className="text-foreground">{label}:</strong> {detail}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    q: "What warranty does the NOVA Marine Tablet PRO carry?",
    a: (
      <div className="space-y-3">
        <p>
          Every NOVA Marine Tablet PRO purchased through the launch campaign comes with a <strong className="text-foreground">3-Year (36-Month) Official Extended Warranty</strong> completely free — one year more than the industry standard.
        </p>
        <p>
          It covers manufacturing defects, hardware malfunctions, and unexpected component failures under normal operating conditions. Backed by our <strong className="text-foreground">NOVA Skippers Care+</strong> service, you get direct priority technical support and rapid-turnaround hardware replacement or repair to minimize downtime at sea.
        </p>
      </div>
    ),
  },
  {
    q: "Will it receive software and app updates?",
    a: (
      <div className="space-y-3">
        <p>
          Yes. The tablet launches on a clean, optimized version of <strong className="text-foreground">Android 14</strong>. NOVA guarantees regular Over-The-Air (OTA) updates delivering critical security patches, OS refinements, and system optimizations.
        </p>
        <p>
          Full, official Google Play Store access means all your installed marine navigation apps — Navionics, Orca, PredictWind — receive automatic updates directly from their developers, ensuring you always have the latest charting features and bug fixes.
        </p>
      </div>
    ),
  },
  {
    q: "What marine and safety certifications does it hold?",
    a: (
      <div className="space-y-3">
        <p>The tablet has been rigorously tested and certified across both electronics and maritime industry standards:</p>
        <ul className="space-y-2 pl-1">
          {[
            { label: "CE Marking & Declaration of Conformity", detail: "Complies with European health, safety, and environmental protection legislation." },
            { label: "IP68 Certification", detail: "Internationally certified for total dust tightness and continuous water immersion." },
            { label: "MIL-STD-810H Compliance", detail: "Certified military standard for shock, drop, and vibration resistance." },
            { label: "NMEA Standards Compatibility", detail: "Built to interface within NMEA 2000 and NMEA 0183 protocols for safe integration into a vessel's data network." },
            { label: "Wi-Fi & Bluetooth Certified", detail: "Meets international wireless standards for stable, interference-free connectivity with onboard marine sensors." },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              <span><strong className="text-foreground">{label}:</strong> {detail}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

const itemsEs: FAQItem[] = [
  {
    q: "¿Con qué apps de navegación náutica es compatible?",
    a: (
      <div className="space-y-3">
        <p>
          La NOVA Marine Tablet PRO funciona sobre un ecosistema Android 14 abierto con acceso completo a Google Play Store, siendo compatible con prácticamente todas las principales apps de navegación, routing y meteorología marítima:
        </p>
        <ul className="space-y-1.5 pl-1">
          {["Navionics Boating (Garmin)", "Orca / C-MAP", "TimeZero (TZ iBoat)", "Aqua Map / OpenCPN", "PredictWind / SailGrib WR", "Savvy Navvy"].map((app) => (
            <li key={app} className="flex items-center gap-2">
              <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              {app}
            </li>
          ))}
        </ul>
        <p>
          Gracias a la compatibilidad integrada con NMEA 2000 y NMEA 0183, la tableta se conecta directamente con equipos Raymarine, B&amp;G, Simrad, Garmin y Lowrance vía Wi-Fi o Bluetooth, permitiéndote visualizar en pantalla datos de instrumentos en tiempo real, radar, sonar y controles del autopiloto.
        </p>
      </div>
    ),
  },
  {
    q: "¿La pantalla se ve realmente en plena luz solar?",
    a: (
      <div className="space-y-3">
        <p>
          Sí, absolutamente. La tableta incorpora una pantalla IPS de 10,1 pulgadas diseñada específicamente para condiciones de mar abierto. Ofrece un brillo ultra-alto de <strong className="text-foreground">1.000 nits</strong>, garantizando imágenes nítidas y de alto contraste incluso bajo el intenso sol del mediodía.
        </p>
        <p>
          La pantalla está equipada con un avanzado revestimiento antirreflejo (AG) que reduce drásticamente los reflejos y el efecto espejo del agua. También incluye un algoritmo especializado de <strong className="text-foreground">wet-touch y glove-touch</strong> — la pantalla táctil responde con total precisión incluso cubierta de salpicaduras marinas, lluvia o cuando llevas guantes de navegación gruesos.
        </p>
      </div>
    ),
  },
  {
    q: "¿Qué precisión tiene el GPS integrado?",
    a: (
      <div className="space-y-3">
        <p>
          El sistema de navegación integrado ofrece seguimiento de precisión profesional y multirrecepción. Se conecta simultáneamente a cuatro grandes redes de satélites: <strong className="text-foreground">GPS, GLONASS, Galileo y BeiDou</strong>.
        </p>
        <p>
          Al rastrear múltiples frecuencias a la vez, la tableta alcanza una precisión de posicionamiento de <strong className="text-foreground">menos de 1,5 metros</strong> con un tiempo de primera fijación (TTFF) ultrarrápido. Esta configuración redundante garantiza fijaciones de posición estables e ininterrumpidas incluso durante travesías de altura, rutas oceánicas remotas o tormentas severas donde las tabletas de consumo estándar pierden señal.
        </p>
      </div>
    ),
  },
  {
    q: "¿Resiste condiciones extremas de agua e impactos?",
    a: (
      <div className="space-y-3">
        <p>Sí. La NOVA Marine Tablet PRO es un dispositivo completamente ruggerizado, de grado militar, construido para soportar los entornos más hostiles:</p>
        <ul className="space-y-2 pl-1">
          {[
            { label: "IP68 Resistente al Agua y al Polvo", detail: "Sellada herméticamente contra polvo y arena. Soporta inmersión completa hasta 1,5 m durante 30 minutos." },
            { label: "Certificación Militar MIL-STD-810H", detail: "Certificada para choque extremo, vibración, choque térmico y caídas desde 1,2 m sobre superficies duras." },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              <span><strong className="text-foreground">{label}:</strong> {detail}</span>
            </li>
          ))}
        </ul>
        <p>Los componentes resistentes a la corrosión contrarrestan los efectos degradantes de la exposición prolongada al spray salino y la humedad marina.</p>
      </div>
    ),
  },
  {
    q: "¿Qué incluye la oferta de reserva anticipada?",
    a: (
      <div className="space-y-3">
        <p>El paquete exclusivo de reserva incluye un bundle completo:</p>
        <ul className="space-y-2 pl-1">
          {[
            { label: "NOVA Marine Tablet PRO", detail: "La tableta marina rugosa insignia de 10,1\"." },
            { label: "Funda Protectora Reforzada", detail: "Carcasa reforzada con soporte multiposición y correa ergonómica de mano." },
            { label: "Dock de Carga Premium y Kit de Alimentación", detail: "Cargador de alta velocidad de grado marino con cable trenzado reforzado." },
            { label: "Protector de Pantalla de Vidrio Templado", detail: "Escudo de alta dureza preinstalado para resistencia a impactos y arañazos." },
            { label: "Garantía Extendida de 36 Meses", detail: "Un año extra de cobertura oficial completamente gratis." },
            { label: "Programa NOVA Skippers Care+", detail: "Soporte técnico marítimo 24/7 de por vida, configuración remota, copias de seguridad automatizadas y preconfiguración GPS antirrobo." },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              <span><strong className="text-foreground">{label}:</strong> {detail}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    q: "¿Qué garantía tiene la NOVA Marine Tablet PRO?",
    a: (
      <div className="space-y-3">
        <p>
          Cada NOVA Marine Tablet PRO adquirida a través de la campaña de lanzamiento incluye una <strong className="text-foreground">Garantía Oficial Extendida de 3 Años (36 Meses)</strong> completamente gratis — un año más que el estándar de la industria.
        </p>
        <p>
          Cubre defectos de fabricación, fallos de hardware y averías inesperadas de componentes bajo condiciones normales de uso. Respaldada por nuestro servicio <strong className="text-foreground">NOVA Skippers Care+</strong>, obtienes soporte técnico prioritario directo y sustitución o reparación de hardware con entrega urgente para minimizar el tiempo de inactividad en el mar.
        </p>
      </div>
    ),
  },
  {
    q: "¿Recibirá actualizaciones de software y apps?",
    a: (
      <div className="space-y-3">
        <p>
          Sí. La tableta se lanza con una versión limpia y optimizada de <strong className="text-foreground">Android 14</strong>. NOVA garantiza actualizaciones OTA (Over-The-Air) periódicas que incluyen parches de seguridad críticos, refinamientos del SO y optimizaciones del sistema.
        </p>
        <p>
          El acceso completo y oficial a Google Play Store significa que todas tus apps de navegación marina instaladas — Navionics, Orca, PredictWind — reciben actualizaciones automáticas directamente de sus desarrolladores, garantizando que siempre tengas las últimas funciones de cartografía y correcciones de errores.
        </p>
      </div>
    ),
  },
  {
    q: "¿Qué certificaciones marinas y de seguridad tiene?",
    a: (
      <div className="space-y-3">
        <p>La tableta ha sido rigurosamente probada y certificada tanto en estándares electrónicos como de la industria marítima:</p>
        <ul className="space-y-2 pl-1">
          {[
            { label: "Marcado CE y Declaración de Conformidad", detail: "Cumple con la legislación europea de salud, seguridad y protección del medio ambiente." },
            { label: "Certificación IP68", detail: "Certificada internacionalmente para total estanqueidad al polvo e inmersión continua en agua." },
            { label: "Cumplimiento MIL-STD-810H", detail: "Estándar militar certificado para resistencia a choques, caídas y vibraciones." },
            { label: "Compatibilidad con Estándares NMEA", detail: "Construida para integrarse en redes de datos de embarcaciones mediante protocolos NMEA 2000 y NMEA 0183." },
            { label: "Certificación Wi-Fi y Bluetooth", detail: "Cumple con los estándares internacionales de comunicaciones inalámbricas para conectividad estable con sensores marinos a bordo." },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              <span><strong className="text-foreground">{label}:</strong> {detail}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export function FAQ({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = lang === "es" ? itemsEs : itemsEn;

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={`${lang}-${i}`}>
            <button
              id={`faq-btn-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors md:gap-6 md:py-7"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="font-display text-base leading-tight sm:text-xl md:text-2xl">
                {it.q}
              </span>
              <span
                className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 ${
                  isOpen ? "rotate-45 bg-foreground text-background" : ""
                }`}
              >
                <span className="absolute h-px w-3.5 bg-current" />
                <span className="absolute h-3.5 w-px bg-current" />
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className="grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-7 text-base leading-relaxed text-muted-foreground">
                  {it.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
