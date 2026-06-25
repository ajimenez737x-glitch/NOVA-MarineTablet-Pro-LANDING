import { useState, type ReactNode } from "react";
import type { Lang } from "@/i18n/translations";

interface FAQItem {
  q: string;
  a: ReactNode;
}

const itemsEn: FAQItem[] = [
  {
    q: "Is the NOVA tablet water and dust resistant?",
    a: <p>Yes, the NOVA The Marine Tablet Pro has an IP68 rating, providing full dust protection and water resistance up to 1.5 meters for 30 minutes.</p>,
  },
  {
    q: "What type and size of screen does it have?",
    a: <p>It features a 10-inch IPS touchscreen with high brightness for optimal visibility even in direct sunlight and from side angles. It is also anti-reflective, anti-smudge, and roll-resistant, offering the maximum touch responsiveness possible (10/10 on the measurement scale used). Overall, it is the best screen currently available on the market.</p>,
  },
  {
    q: "What operating system does it use?",
    a: <p>The tablet runs on Android, optimized for marine applications — Android NOVA Marine Edition. It is unique in the world and allows more efficient battery management, greater app stability to prevent crashes, and includes highly interesting navigation-specific features such as split screen, which lets you divide the display into two sections: one app on the left and another on the right. For example, you could have the navigation app on one side and the weather app on the other. Full access to Google Play Store.</p>,
  },
  {
    q: "What connectivity options are available?",
    a: <p>Wi-Fi, Bluetooth, built-in high precision GPS, GSM connectivity and NMEA. The GPS is a high-precision, multi-constellation GPS (called GNSS) with sub-meter accuracy down to centimetres and global coverage.</p>,
  },
  {
    q: "How long does the battery last?",
    a: <p>The battery provides up to 10 hours of continuous use, perfect for full days at sea. With efficient battery management, as specified in the manuals, the average battery life is 15–16 hours.</p>,
  },
  {
    q: "Can I use the tablet with gloves?",
    a: <p>Yes, the touchscreen is designed to work perfectly even when wearing marine gloves and even with the screen wet. The buttons are designed for easy use, even while wearing gloves.</p>,
  },
  {
    q: "Is it compatible with navigation apps?",
    a: <p>Yes, it supports any Android app: navigation, weather, fishing apps… such as Navionics, iNavX, Windy, and more.</p>,
  },
  {
    q: "Does it come with mounting accessories for the boat?",
    a: <p>Mounting supports for fixed or mobile installation are sold separately and specially designed for the NOVA tablet, for motor yachts and for sailing yachts.</p>,
  },
  {
    q: "What is the product warranty?",
    a: <p>The tablet comes with a 2-year official warranty and specialized technical support 24/7. One year extended warranty is included for free: 36 months total.</p>,
  },
  {
    q: "Can the software and apps be updated?",
    a: <p>Yes, the tablet receives automatic OTA updates for the operating system and installed applications from Google Play Store.</p>,
  },
  {
    q: "Can I use the tablet in extreme temperatures?",
    a: <p>Yes, it operates from -10°C to 50°C.</p>,
  },
  {
    q: "Is the tablet compatible with external sensors?",
    a: <p>Yes, it supports NMEA 2000 and 0183 devices: fish finders, wind sensors, autopilots, etc.</p>,
  },
  {
    q: "Does the tablet have sound capabilities?",
    a: <p>Yes, built-in high-quality stereo speakers and supports external audio via Bluetooth or USB-C.</p>,
  },
  {
    q: "Can I charge the tablet while using it on the boat?",
    a: <p>Yes, USB-C fast charging supported; can connect to boat 12V/24V supply with proper adapter.</p>,
  },
  {
    q: "Is the screen readable in sunlight?",
    a: <p>Yes, high brightness and anti-reflective coating ensure perfect visibility even in direct sunlight.</p>,
  },
  {
    q: "Does the tablet have security features?",
    a: <p>Yes, supports fingerprint unlock, PIN codes, and secure boot.</p>,
  },
  {
    q: "Can I install third-party apps?",
    a: <p>Yes, full access to Google Play Store.</p>,
  },
  {
    q: "Is there a protective case included?",
    a: <p>No, waterproof and shockproof cases are available separately.</p>,
  },
  {
    q: "Can I connect multiple devices to it?",
    a: <p>Yes, supports multiple simultaneous Wi-Fi, Bluetooth, GPS, NMEA, and GSM connections.</p>,
  },
  {
    q: "What languages are available on the tablet?",
    a: <p>All major Android languages: Spanish, English, French, German, Italian, etc.</p>,
  },
  {
    q: "Does the tablet support offline navigation?",
    a: <p>Yes, offline maps can be used with apps like Navionics and iNavX.</p>,
  },
  {
    q: "Is there a backup power option?",
    a: <p>Yes, external power banks and solar charging accessories are compatible.</p>,
  },
  {
    q: "Can the tablet be used underwater?",
    a: <p>No, it is IP68 water-resistant but not designed for continuous underwater use. You can take photos from the surface of the sea, but not dive with the tablet.</p>,
  },
  {
    q: "Can I use it for video conferencing or calls?",
    a: <p>Yes, built-in camera and microphone with noise reduction system allow video calls via apps like Zoom, Teams, or WhatsApp.</p>,
  },
  {
    q: "Is it shock-resistant for rough marine conditions?",
    a: <p>Yes, it is reinforced to withstand vibrations and shocks commonly found on boats. Official certification MIL-STD-810H ensures it can withstand the most extreme marine environments.</p>,
  },
  {
    q: "Can I expand storage?",
    a: <p>Yes, via microSD cards up to 512 GB, plus cloud storage options.</p>,
  },
  {
    q: "Are there navigation-specific features?",
    a: <p>Yes, split-screen, custom widgets, marine chart overlays, tide & wind data, AIS, NMEA, fishing sonar integration and much more.</p>,
  },
  {
    q: "Can the tablet be mounted outdoors exposed to sun and saltwater?",
    a: <p>Yes, it is designed for marine environments, but prolonged exposure without protection may reduce longevity.</p>,
  },
  {
    q: "What maintenance is required?",
    a: <p>Clean with freshwater after exposure to saltwater, check seals, and follow manual instructions for optimal performance.</p>,
  },
];

const itemsEs: FAQItem[] = [
  {
    q: "¿La tableta NOVA es resistente al agua y al polvo?",
    a: <p>Sí, la NOVA The Marine Tablet Pro tiene certificación IP68, que proporciona protección total contra el polvo y resistencia al agua hasta 1,5 metros durante 30 minutos.</p>,
  },
  {
    q: "¿Qué tipo y tamaño de pantalla tiene?",
    a: <p>Cuenta con una pantalla táctil IPS de 10 pulgadas con alto brillo para una visibilidad óptima incluso bajo la luz solar directa y desde ángulos laterales. También es antirreflejo, antihuellas y resistente a golpes, ofreciendo la máxima respuesta táctil posible (10/10 en la escala de medición utilizada). En general, es la mejor pantalla disponible actualmente en el mercado.</p>,
  },
  {
    q: "¿Qué sistema operativo utiliza?",
    a: <p>La tableta funciona con Android, optimizado para aplicaciones marinas — Android NOVA Marine Edition. Es única en el mundo y permite una gestión de batería más eficiente, mayor estabilidad de las apps para evitar cierres inesperados e incluye funciones específicas de navegación muy interesantes, como la pantalla dividida, que permite dividir la pantalla en dos secciones: una app a la izquierda y otra a la derecha. Por ejemplo, la app de navegación en un lado y la de meteorología en el otro. Acceso completo a Google Play Store.</p>,
  },
  {
    q: "¿Qué opciones de conectividad tiene?",
    a: <p>Wi-Fi, Bluetooth, GPS de alta precisión integrado, conectividad GSM y NMEA. El GPS es de alta precisión, multi-constelación (denominado GNSS) con precisión submétrica hasta centímetros y cobertura global.</p>,
  },
  {
    q: "¿Cuánto dura la batería?",
    a: <p>La batería proporciona hasta 10 horas de uso continuo, perfecto para días completos en el mar. Con la gestión eficiente de batería, según se especifica en los manuales, la vida media de la batería es de 15–16 horas.</p>,
  },
  {
    q: "¿Puedo usar la tableta con guantes?",
    a: <p>Sí, la pantalla táctil está diseñada para funcionar perfectamente incluso con guantes de navegación y con la pantalla mojada. Los botones están diseñados para un uso fácil, incluso con guantes puestos.</p>,
  },
  {
    q: "¿Es compatible con apps de navegación?",
    a: <p>Sí, es compatible con cualquier app Android: navegación, meteorología, pesca… como Navionics, iNavX, Windy y más.</p>,
  },
  {
    q: "¿Incluye accesorios de montaje para el barco?",
    a: <p>Los soportes de montaje para instalación fija o móvil se venden por separado y están especialmente diseñados para la tableta NOVA, tanto para yates a motor como para yates de vela.</p>,
  },
  {
    q: "¿Cuál es la garantía del producto?",
    a: <p>La tableta incluye una garantía oficial de 2 años con soporte técnico especializado 24/7. Se incluye un año adicional de garantía extendida gratis: 36 meses en total.</p>,
  },
  {
    q: "¿Se pueden actualizar el software y las apps?",
    a: <p>Sí, la tableta recibe actualizaciones OTA automáticas para el sistema operativo y las aplicaciones instaladas desde Google Play Store.</p>,
  },
  {
    q: "¿Puedo usar la tableta en temperaturas extremas?",
    a: <p>Sí, funciona entre -10°C y 50°C.</p>,
  },
  {
    q: "¿La tableta es compatible con sensores externos?",
    a: <p>Sí, es compatible con dispositivos NMEA 2000 y 0183: sondas de pesca, sensores de viento, autopilots, etc.</p>,
  },
  {
    q: "¿La tableta tiene altavoces?",
    a: <p>Sí, cuenta con altavoces estéreo de alta calidad integrados y admite audio externo vía Bluetooth o USB-C.</p>,
  },
  {
    q: "¿Puedo cargar la tableta mientras la uso en el barco?",
    a: <p>Sí, compatible con carga rápida USB-C; puede conectarse a la alimentación de 12V/24V del barco con el adaptador adecuado.</p>,
  },
  {
    q: "¿La pantalla se ve bien bajo el sol?",
    a: <p>Sí, el alto brillo y el revestimiento antirreflejo garantizan una visibilidad perfecta incluso bajo la luz solar directa.</p>,
  },
  {
    q: "¿La tableta tiene funciones de seguridad?",
    a: <p>Sí, admite desbloqueo por huella dactilar, códigos PIN y arranque seguro.</p>,
  },
  {
    q: "¿Puedo instalar apps de terceros?",
    a: <p>Sí, acceso completo a Google Play Store.</p>,
  },
  {
    q: "¿Se incluye una funda protectora?",
    a: <p>No, las fundas impermeables y resistentes a golpes están disponibles por separado.</p>,
  },
  {
    q: "¿Puedo conectar varios dispositivos a la vez?",
    a: <p>Sí, admite conexiones simultáneas de Wi-Fi, Bluetooth, GPS, NMEA y GSM.</p>,
  },
  {
    q: "¿Qué idiomas están disponibles en la tableta?",
    a: <p>Todos los principales idiomas de Android: español, inglés, francés, alemán, italiano, etc.</p>,
  },
  {
    q: "¿La tableta admite navegación sin conexión?",
    a: <p>Sí, se pueden utilizar mapas sin conexión con apps como Navionics e iNavX.</p>,
  },
  {
    q: "¿Hay opción de energía de respaldo?",
    a: <p>Sí, son compatibles los bancos de energía externos y los accesorios de carga solar.</p>,
  },
  {
    q: "¿Se puede usar la tableta bajo el agua?",
    a: <p>No, tiene resistencia al agua IP68 pero no está diseñada para un uso continuo bajo el agua. Puedes hacer fotos desde la superficie del mar, pero no bucear con la tableta.</p>,
  },
  {
    q: "¿Puedo usarla para videollamadas o llamadas?",
    a: <p>Sí, la cámara y el micrófono integrados con sistema de reducción de ruido permiten videollamadas a través de apps como Zoom, Teams o WhatsApp.</p>,
  },
  {
    q: "¿Es resistente a golpes en condiciones marinas duras?",
    a: <p>Sí, está reforzada para soportar las vibraciones y golpes habituales en los barcos. La certificación oficial MIL-STD-810H garantiza que puede soportar los entornos marinos más extremos.</p>,
  },
  {
    q: "¿Puedo ampliar el almacenamiento?",
    a: <p>Sí, mediante tarjetas microSD de hasta 512 GB, más opciones de almacenamiento en la nube.</p>,
  },
  {
    q: "¿Tiene funciones específicas de navegación?",
    a: <p>Sí, pantalla dividida, widgets personalizados, superposición de cartas marinas, datos de mareas y viento, AIS, NMEA, integración de sonar de pesca y mucho más.</p>,
  },
  {
    q: "¿Se puede montar en el exterior expuesta al sol y al agua salada?",
    a: <p>Sí, está diseñada para entornos marinos, aunque una exposición prolongada sin protección puede reducir su vida útil.</p>,
  },
  {
    q: "¿Qué mantenimiento requiere?",
    a: <p>Limpiar con agua dulce tras la exposición al agua salada, revisar los sellos y seguir las instrucciones del manual para un rendimiento óptimo.</p>,
  },
];

const PREVIEW_COUNT = 7;

export function FAQ({ lang, showAll = false }: { lang: Lang; showAll?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const allItems = lang === "es" ? itemsEs : itemsEn;
  const items = showAll ? allItems : allItems.slice(0, PREVIEW_COUNT);
  const moreLabel = lang === "es" ? "Ver todas las preguntas →" : "See all questions →";

  return (
    <div>
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

      {!showAll && (
        <div className="mt-10 text-center">
          <a
            href="/faq"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {moreLabel}
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            {lang === "es"
              ? `${allItems.length} preguntas frecuentes`
              : `${allItems.length} frequently asked questions`}
          </p>
        </div>
      )}
    </div>
  );
}
