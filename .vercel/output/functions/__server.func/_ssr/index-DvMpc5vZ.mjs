import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as ScrollTrigger, g as gsapWithCSS } from "../_libs/gsap.mjs";
import { C as Compass, b as Sun, B as Battery, S as Shield, a as Cpu, G as Globe } from "../_libs/lucide-react.mjs";
const logoCompass = "/assets/logo_compass-CA3Evb0S.png";
const links = [
  { href: "#caracteristicas", label: "Características" },
  { href: "#pantalla", label: "Pantalla" },
  { href: "#especificaciones", label: "Especificaciones" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" }
];
function CompassIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10", strokeWidth: "1", className: "opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3", strokeWidth: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L14 9H10L12 2Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22L10 15H14L12 22Z", fill: "currentColor", className: "opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 12L15 10V14L22 12Z", fill: "currentColor", className: "opacity-90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12L9 14V10L2 12Z", fill: "currentColor", className: "opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 5L10 10M19 19L14 14M19 5L14 10M5 19L10 14", strokeWidth: "1", className: "opacity-50" })
      ]
    }
  );
}
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoCompass,
                alt: "Logo NOVA Marine",
                className: "h-10 w-auto object-contain transition-transform duration-700 hover:rotate-6"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-display text-xl tracking-tight transition-colors duration-500 ${scrolled || open ? "text-foreground" : "text-white"}`, children: [
              "NOVA ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--sand)" }, children: "Marine" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 hidden text-[10px] tracking-[0.24em] uppercase opacity-70 lg:inline", children: "Tablet Pro" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "nav",
            {
              className: `hidden gap-9 md:flex ${scrolled ? "text-foreground" : "text-white/90"}`,
              children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: "link-underline text-sm font-medium",
                  children: l.label
                },
                l.href
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contacto",
              className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-wider text-primary-foreground uppercase transition-transform hover:scale-[1.02]",
              children: "Pre-reserva"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              "aria-label": "Abrir menú",
              onClick: () => setOpen((v) => !v),
              className: `relative h-10 w-10 md:hidden ${scrolled || open ? "text-foreground" : "text-white"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${open ? "rotate-45" : "-translate-y-1.5"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${open ? "-rotate-45" : "translate-y-1.5"}`
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `fixed inset-0 z-40 bg-foreground text-background transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col px-8 pt-28 pb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-7", children: links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "font-display text-5xl leading-none tracking-tight transition-transform duration-500",
              style: {
                transform: open ? "translateY(0)" : "translateY(20px)",
                opacity: open ? 1 : 0,
                transitionDelay: `${0.1 + i * 0.06}s`
              },
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline bg-background/20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+34688631200",
                className: "block text-sm tracking-widest uppercase opacity-80",
                children: "+34 688 63 12 00"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://wa.me/34688631200",
                className: "inline-flex w-full items-center justify-center rounded-full bg-background px-6 py-4 text-sm font-medium tracking-wider text-foreground uppercase",
                children: "WhatsApp"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal${delayClass} ${className}`, children });
}
const beforeImg = "/assets/sunlight_standard-D1ciJ0pR.png";
const sunlightNovaImg = "/assets/sunlight_nova-Dv2CHVLZ.png";
function BeforeAfter() {
  const [pos, setPos] = reactExports.useState(50);
  const containerRef = reactExports.useRef(null);
  const dragging = reactExports.useRef(false);
  const updateFromClientX = reactExports.useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = (clientX - rect.left) / rect.width * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: "relative aspect-[3/2] w-full overflow-hidden select-none cursor-ew-resize bg-black",
      onPointerDown: (e) => {
        dragging.current = true;
        e.target.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      },
      onPointerMove: (e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      },
      onPointerUp: (e) => {
        dragging.current = false;
        if (e.target.hasPointerCapture(e.pointerId)) {
          e.target.releasePointerCapture(e.pointerId);
        }
      },
      onPointerCancel: (e) => {
        dragging.current = false;
        if (e.target.hasPointerCapture(e.pointerId)) {
          e.target.releasePointerCapture(e.pointerId);
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: sunlightNovaImg,
            alt: "Pantalla NOVA PRO legible bajo el sol",
            className: "absolute inset-0 h-full w-full object-cover pointer-events-none",
            draggable: false,
            loading: "lazy",
            width: 1400,
            height: 960
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 overflow-hidden",
            style: { width: `${pos}%` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: beforeImg,
                alt: "Pantalla estándar ilegible bajo el sol",
                className: "absolute inset-0 h-full w-full object-cover pointer-events-none",
                draggable: false,
                style: { width: `${100 / pos * 100}%`, maxWidth: "none" },
                loading: "lazy",
                width: 1400,
                height: 960
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow absolute top-5 left-5 rounded-sm bg-foreground/80 px-3 py-1.5 text-background backdrop-blur-sm", children: "Estándar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow absolute top-5 right-5 rounded-sm bg-background/80 px-3 py-1.5 text-foreground backdrop-blur-sm", children: "NOVA PRO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-y-0 w-px bg-background",
            style: { left: `${pos}%` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/20 bg-background shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M9 6l-6 6 6 6M15 6l6 6-6 6",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ) }) })
          }
        )
      ]
    }
  );
}
const items = [
  {
    q: "¿Qué aplicaciones de navegación náutica son compatibles?",
    a: "NOVA ejecuta un Android personalizado que es 100% compatible con tus aplicaciones favoritas: Navionics, Orca, Windy, Savvy Navvy, C-MAP, PredictWind, y apps de regatas o pesca. Puedes descargarlas directamente desde Google Play Store."
  },
  {
    q: "¿Se ve realmente bien bajo el sol directo?",
    a: "Sí. NOVA incorpora una pantalla de alto brillo que ofrece el doble de luminancia (2x) que un smartphone convencional. Cuenta con recubrimiento antirreflejos y tecnología táctil optimizada para funcionar con guantes o con la pantalla mojada."
  },
  {
    q: "¿Qué tan preciso es el GPS integrado?",
    a: "Nuestra tablet cuenta con un receptor GPS GNSS submétrico de alta precisión y tecnología de multiconstelación (GPS, Galileo, GLONASS, BeiDou) y correcciones en tiempo real (RTK), logrando una precisión posicional y angular de ±1.5–2 cm, muy superior al GPS estándar de cualquier móvil."
  },
  {
    q: "¿Es resistente a condiciones extremas de agua y golpes?",
    a: "Totalmente. Cuenta con certificación de estanqueidad IP68 (totalmente sumergible en agua) y cumple con el estándar militar MIL-STD-810H. Es resistente a caídas sobre roca, barro, vibraciones extremas de motor y salinidad marina sin necesidad de fundas adicionales."
  },
  {
    q: "¿Qué incluye la oferta de lanzamiento de la prerreserva?",
    a: "La prerreserva te otorga 400 € de descuento directo sobre el precio final y el regalo exclusivo de nuestro Navigation Pack, que incluye soporte náutico premium para timón/consola, cargador rápido marino y cartas de navegación básicas listas para usar."
  }
];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border-y border-border", children: items.map((it, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setOpen(isOpen ? null : i),
          className: "group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors",
          "aria-expanded": isOpen,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl leading-tight md:text-3xl", children: it.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 ${isOpen ? "rotate-45 bg-foreground text-background" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute h-px w-3.5 bg-current" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute h-3.5 w-px bg-current" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          style: {
            gridTemplateRows: isOpen ? "1fr" : "0fr"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl pb-7 text-base leading-relaxed text-muted-foreground", children: it.a }) })
        }
      )
    ] }, i);
  }) });
}
gsapWithCSS.registerPlugin(ScrollTrigger);
const FRAME_COUNT = 40;
const FRAME_PATH = "/frames/23456_";
function getFrameSrc(index) {
  return `${FRAME_PATH}${String(index).padStart(3, "0")}.jpg`;
}
function HeroCanvas({ onProgress, children }) {
  const canvasRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const imagesRef = reactExports.useRef([]);
  const currentFrameRef = reactExports.useRef(0);
  const rafIdRef = reactExports.useRef(null);
  const [loadProgress, setLoadProgress] = reactExports.useState(0);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  const prefersReducedMotion = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    const handler = (e) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  const drawFrame = reactExports.useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete || !img.naturalWidth) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);
  const resizeCanvas = reactExports.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);
  reactExports.useEffect(() => {
    let loaded = 0;
    const images = [];
    const loadImage = (index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loaded++;
          setLoadProgress(loaded / FRAME_COUNT);
          resolve(img);
        };
        img.onerror = reject;
        img.src = getFrameSrc(index);
      });
    };
    loadImage(0).then((firstImg) => {
      images[0] = firstImg;
      imagesRef.current = images;
      resizeCanvas();
      drawFrame(0);
    });
    const loadRemaining = async () => {
      const promises = [];
      for (let i = 1; i < FRAME_COUNT; i++) {
        promises.push(
          loadImage(i).then((img) => {
            images[i] = img;
          })
        );
      }
      await Promise.all(promises);
      imagesRef.current = images;
      setIsLoaded(true);
    };
    loadRemaining();
    return () => {
      images.length = 0;
    };
  }, [drawFrame, resizeCanvas]);
  reactExports.useEffect(() => {
    if (!isLoaded) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    resizeCanvas();
    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);
    if (prefersReducedMotion.current) {
      drawFrame(0);
      return () => window.removeEventListener("resize", handleResize);
    }
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const frameIndex = Math.min(
          Math.floor(progress * FRAME_COUNT),
          FRAME_COUNT - 1
        );
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          if (rafIdRef.current !== null) {
            cancelAnimationFrame(rafIdRef.current);
          }
          rafIdRef.current = requestAnimationFrame(() => {
            drawFrame(frameIndex);
          });
        }
        onProgress?.(progress);
      }
    });
    return () => {
      trigger.kill();
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isLoaded, drawFrame, resizeCanvas, onProgress]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "hero-canvas-container", children: [
    !isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-loader", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-loader__track", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hero-loader__bar",
          style: { width: `${loadProgress * 100}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hero-loader__text", children: [
        Math.round(loadProgress * 100),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "canvas",
      {
        ref: canvasRef,
        className: "hero-canvas",
        "aria-hidden": "true"
      }
    ),
    children
  ] });
}
const ctaImg = "/assets/tablet_casing-DAn2HK1j.png";
const captainImg = "/assets/captain_yacht_v2-CiM18D9d.png";
const androidNovaImg = "/assets/android_nova_v2-Df1DRqYa.png";
const ruggedTabletImg = "/assets/rugged_tablet-BemaNKoI.png";
const tabletCasingImg = "/assets/tablet_casing-DAn2HK1j.png";
const services = [{
  title: "Pantalla Ultra Brillo",
  desc: "Una pantalla 2 veces más luminosa que la de un smartphone convencional. Legible bajo sol directo, incluso con guantes o mojada. Diseñada para exteriores extremos.",
  img: sunlightNovaImg
}, {
  title: "Precisión GNSS Submétrica",
  desc: "GPS con precisión 5 veces mayor. Gracias a su multiconstelación y correcciones en tiempo real (RTK), obtendrás una exactitud de ±1.5-2 cm en mar y tierra.",
  img: ctaImg
}, {
  title: "5x Más Autonomía",
  desc: "Diseñada para jornadas náuticas intensas y travesías de larga duración sin depender de enchufes ni cables inestables. Batería inteligente de alta densidad.",
  img: captainImg
}, {
  title: "Estándar Militar Rugerizado",
  desc: "Certificación de estanqueidad IP68 y militar MIL-STD-810H. Totalmente resistente al agua, caídas en roca, vibraciones de motor, barro y salinidad.",
  img: ruggedTabletImg
}];
const trust = [{
  k: "2x",
  v: "Brillo de pantalla bajo sol directo"
}, {
  k: "±1.5cm",
  v: "Precisión de posición GPS (GNSS RTK)"
}, {
  k: "5x",
  v: "Mayor capacidad de batería"
}, {
  k: "IP68",
  v: "Protección total al agua y golpes"
}];
const testimonials = [{
  name: "Ray Armenteros",
  role: "Capitán de Yate Profesional | 35 años de experiencia",
  text: "Como regatista profesional y capitán de grandes esloras, he usado muchas tablets y la NOVA Marine Tablet PRO me ha sorprendido: comodidad total, seguridad, resistencia y precisión máxima. Es mi compañera indispensable en cada travesía."
}, {
  name: "Manuel A.",
  role: "Navegante de recreo",
  text: "He cambiado infinidad de pantallas por caídas y agua. Esta tablet me sirve para todo: navegar, trabajar, casa y niños. Y lo mejor: cuesta mucho menos que un plotter náutico, que no bajan de 1.500 € por pantalla similar."
}];
const specCards = [{
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-7 w-7 text-primary" }),
  title: "GPS GNSS Submétrico",
  detail: "±1,5 – 2 cm",
  desc: "Multiconstelación activa (GPS, Galileo, GLONASS, BeiDou) con correcciones RTK en tiempo real para una precisión de posición y ángulo profesional en alta mar."
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-7 w-7 text-primary" }),
  title: "Pantalla Ultra Brillo",
  detail: "Brillo 2x",
  desc: "Pantalla de 10 pulgadas legible bajo el sol más intenso. Tratamiento antirreflejos, Wet-Touch para usar con manos mojadas y soporte para guantes."
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Battery, { className: "h-7 w-7 text-primary" }),
  title: "Batería de Alta Densidad",
  detail: "5x Más Capacidad",
  desc: "Autonomía de jornada extendida (+24 horas de navegación activa continua) diseñada para travesías largas y exigentes sin depender de enchufes."
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-7 w-7 text-primary" }),
  title: "Certificación Militar",
  detail: "MIL-STD-810H + IP68",
  desc: "Chasis rugerizado anticaídas y estanqueidad militar total. Resistente a barro, golpes extremos del oleaje, vibraciones de motor y salinidad marina."
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-7 w-7 text-primary" }),
  title: "Android Marine Edition",
  detail: "Potencia Fluida",
  desc: "Procesador optimizado con sistema operativo Android náutico adaptado. Sin bloqueos, navegación fluida y compatible con Navionics, Orca y Windy."
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-7 w-7 text-primary" }),
  title: "Antena & Cobertura",
  detail: "Global",
  desc: "Máxima sensibilidad de recepción satelital en mar abierto y zonas remotas. Conectividad 4G/5G y antenas internas reforzadas de gran alcance."
}];
function Index() {
  const [scrollProgress, setScrollProgress] = reactExports.useState(0);
  const handleCanvasProgress = reactExports.useCallback((progress) => {
    setScrollProgress(progress);
  }, []);
  const textOpacity = Math.max(0, 1 - scrollProgress * 2.5);
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollProgress * 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HeroCanvas, { onProgress: handleCanvasProgress, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-black/25 to-[#020813]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-overlay absolute inset-0 z-10", style: {
        opacity: textOpacity
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex h-full max-w-7xl flex-col px-6 pt-32 pb-16 md:px-10 md:pt-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary animate-rise", style: {
          animationDelay: "0.1s"
        }, children: "NOVA The Marine Tablet PRO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-6 max-w-5xl text-[44px] leading-[1.02] text-white md:text-[80px] lg:text-[96px] animate-rise", style: {
          animationDelay: "0.3s"
        }, children: [
          "La tablet que redefine",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "la ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
            color: "var(--sand)"
          }, children: "navegación marina" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-col gap-10 md:flex-row md:items-end md:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-base leading-relaxed text-white/90 animate-rise md:text-lg", style: {
            animationDelay: "0.55s"
          }, children: "Potencia profesional, GPS submétrico y pantalla ultra brillante visible en condiciones extremas. El estándar definitivo para profesionales y navegantes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 animate-rise", style: {
            animationDelay: "0.75s"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contacto", className: "inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-xs font-semibold tracking-widest text-primary-foreground uppercase transition-all hover:bg-[var(--sand)] hover:text-foreground", children: [
              "Prerreserva Oferta",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#caracteristicas", className: "inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-4 text-xs font-semibold tracking-widest text-white uppercase transition-all hover:bg-white/10", children: "Ver características" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 rotate-90 origin-right md:block", style: {
        opacity: textOpacity
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-white/85", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "★ Patente Registrada" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-white/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest uppercase", children: "Diseño Español" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block", style: {
        opacity: scrollIndicatorOpacity
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-3 text-white/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-12 w-px animate-pulse bg-white/60" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-[#030d1c]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4", children: trust.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-foreground/15 pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl leading-none text-primary md:text-6xl", children: t.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-[16ch] text-sm text-muted-foreground", children: t.v })
    ] }) }, i)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "concepto", className: "bg-background py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-12 md:grid-cols-12 md:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "— Una obra maestra de ingeniería" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 text-5xl leading-[0.98] md:text-7xl", children: "Tecnología sin concesiones en alta mar." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img-hover overflow-hidden rounded-lg border border-border shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tabletCasingImg, alt: "Chasis y botones físicos de la NOVA Marine Tablet PRO", className: "aspect-[5/4] w-full object-cover", loading: "lazy", width: 1280, height: 1600 }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 max-w-xl text-lg leading-relaxed text-foreground/85", children: [
            "La ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-primary", children: "NOVA The Marine Tablet PRO" }),
            " es mucho más que una herramienta náutica. Combina la robustez de un plotter profesional con la versatilidad de un dispositivo de alta gama para toda la familia."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground", children: "Desde su carcasa exclusiva de aleación patentada con una tonalidad Pantone única, hasta la selección rigurosa de cada componente... un dispositivo diseñado para regatas, pesca y travesías extremas que se adapta a tu día a día en casa o el trabajo." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "caracteristicas", className: "border-y border-border bg-secondary py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "— Características Pro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl", children: "Tres tablets en una: Navega, Trabaja, Disfruta." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-base text-muted-foreground", children: "Planifica rutas con precisión, mantén videollamadas de alta calidad o trabaja desde el mar. Olvídate de renovar el plotter y ahorra espacio con un solo dispositivo." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "img-hover relative aspect-[4/5] rounded-lg border border-border shadow-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "h-full w-full object-cover", loading: "lazy", width: 1280, height: 1600 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex items-start justify-between gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl leading-tight md:text-4xl text-primary", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground", children: s.desc })
        ] }) })
      ] }) }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mt-20 grid gap-6 border-t border-slate-800 pt-10 text-sm text-muted-foreground md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Conectividad Global GNSS Submétrica" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Pantalla Antirreflejos con Wet-Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Homologación de Resistencia Militar MIL-STD-810H" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pantalla", className: "bg-background py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "— Legibilidad en Luz Solar Directa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl", children: [
          "Una pantalla 2x más luminosa.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", style: {
            color: "var(--sand)"
          }, children: "Legible donde otras fallan." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 1, className: "mt-14 md:mt-20 max-w-4xl mx-auto rounded-lg overflow-hidden border border-border shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-center text-xs tracking-widest text-muted-foreground uppercase", children: "Arrastra el control deslizante para comparar la visibilidad" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "especificaciones", className: "border-y border-border bg-secondary py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "— Ficha técnica" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 text-5xl leading-[0.98] md:text-7xl", children: "Ficha Técnica Profesional." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base text-muted-foreground", children: "Diseñada para capitanes y regatistas que exigen la máxima precisión, visibilidad y resistencia en condiciones extremas." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: specCards.map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i % 3, className: "bg-card/40 border border-slate-900 p-8 rounded-xl backdrop-blur-sm hover:border-slate-800 transition-all duration-300 shadow-xl group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-[#0a1529] rounded-lg border border-border group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300", children: spec.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-300", children: spec.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold eyebrow text-primary mt-1 block", children: spec.detail })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground", children: spec.desc })
      ] }, spec.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "testimonios", className: "overflow-hidden bg-secondary py-24 md:py-40 border-y border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "— Testimonios de Navegantes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl", children: "Calidad y resistencia avaladas en alta mar." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-16 md:mt-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-6 pl-6 md:gap-8 md:pl-10", children: [...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "w-[85vw] max-w-xl shrink-0 border border-slate-800 bg-[#0c162b] p-8 md:w-[480px] md:p-10 rounded-lg shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl leading-none text-primary", "aria-hidden": true, children: "“" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "-mt-3 text-base md:text-lg font-medium leading-relaxed text-slate-50", children: t.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 flex flex-col justify-start border-t border-slate-800 pt-5 gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-300", children: t.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest mt-1 text-primary", children: "★ ★ ★ ★ ★" })
        ] })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "— Potencia de software" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 text-5xl leading-[0.98] md:text-7xl", children: "Android NOVA Marine Edition." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-md text-lg leading-relaxed text-muted-foreground", children: "Desarrollada con patente europea registrada y diseño premium. Incorpora un Android específico para uso náutico: resistente a ralentizaciones, extremadamente fluido y optimizado para el consumo energético de la antena GPS GNSS." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm", children: ["Diseño europeo con patente propia", "Lanzamiento inminente en 64 países", "Compatible con mapas globales", "Certificado militar antichoque", "Actualizaciones vía satélite/OTA", "Soporte profesional 24/7"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full", style: {
            background: "var(--sand)"
          } }),
          c
        ] }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square w-full overflow-hidden rounded-xl bg-card border border-border shadow-xl flex items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: androidNovaImg, alt: "Android NOVA Marine Edition Seal", className: "h-auto max-h-[85%] w-auto object-contain transition-transform duration-700 hover:scale-105", loading: "lazy" }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "bg-secondary border-y border-border py-24 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "— Preguntas Frecuentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 text-5xl leading-[0.98] md:text-6xl", children: "Resolvemos tus dudas." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xs text-sm text-muted-foreground", children: "Si deseas conocer más especificaciones o realizar una consulta personalizada, ponte en contacto con nosotros." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contacto", className: "relative overflow-hidden bg-foreground py-32 text-background md:py-48", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ctaImg, alt: "", "aria-hidden": true, className: "absolute inset-0 h-full w-full object-cover opacity-20", loading: "lazy", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#020813]/85 via-[#020813]/70 to-[#020813]/95" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[60%] -translate-y-1/2 blur-3xl", style: {
        background: "radial-gradient(60% 50% at 50% 50%, rgba(14,165,233,0.15), transparent 70%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center md:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", style: {
          color: "var(--sand)"
        }, children: "— Oferta exclusiva de lanzamiento" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-5xl leading-[0.98] md:text-8xl text-foreground", children: [
          "Prerreserva hoy y ahorra",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-primary", children: "400 € Directos." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed", children: "Consigue tu NOVA The Marine Tablet PRO con descuento de prerreserva y llévate de regalo el **Navigation Pack** (soporte náutico a consola + cartas de navegación listas para usar)." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/34688631200?text=Hola,%20quiero%20reservar%20mi%20NOVA%20Marine%20Tablet%20PRO%20con%20descuento%20y%20el%20Navigation%20Pack%20de%20regalo.", className: "inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-semibold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-[1.02] sm:w-auto", children: "Prerreserva por WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+34688631200", className: "inline-flex w-full items-center justify-center gap-3 rounded-full border border-background/40 px-8 py-4 text-xs font-medium tracking-widest text-foreground uppercase transition-colors hover:bg-foreground/10 sm:w-auto", children: "Llamar ahora" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-background pt-20 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 border-b border-slate-900 pb-14 md:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-display text-3xl tracking-tight text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CompassIcon, { className: "h-9 w-9 text-primary animate-pulse" }),
            "NOVA ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "var(--sand)"
            }, children: "Marine" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm text-muted-foreground", children: "La tablet náutica que redefine los estándares de la navegación. Tecnología europea patentada y diseñada para profesionales del mar." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "Contacto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+34688631200", className: "link-underline", children: "+34 688 63 12 00" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@novamarinestablet.com", className: "link-underline", children: "info@novamarinestablet.com" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: "Barcelona - Valencia - Vigo, España" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "Garantía" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "3 años de garantía" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Soporte Técnico Oficial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Homologación CE & FCC" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "Síguenos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Instagram" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Facebook" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "YouTube Marine" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-4 pt-8 text-xs text-muted-foreground md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " NOVA Marine. Todos los derechos reservados. Diseño e innovación con patente propia registrada."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Aviso legal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Privacidad" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "link-underline", children: "Cookies" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/34688631200?text=Hola,%20estoy%20interesado%20en%20recibir%20información%20sobre%20NOVA%20Marine%20Tablet%20PRO.", "aria-label": "WhatsApp", className: "fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-2xl transition-transform hover:scale-105 md:right-8 md:bottom-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 005.74 1.46h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.07 21.6h-.01a9.7 9.7 0 01-4.95-1.35l-.36-.21-3.75.98 1-3.65-.23-.37a9.7 9.7 0 01-1.5-5.1c0-5.36 4.37-9.73 9.74-9.73 2.6 0 5.04 1.01 6.88 2.85a9.66 9.66 0 012.85 6.88c0 5.37-4.37 9.73-9.73 9.73zm5.34-7.28c-.29-.15-1.74-.86-2-.96-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.14-1.24-.46-2.36-1.45-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.49-.5-.66-.5l-.57-.01c-.2 0-.52.07-.79.37-.27.29-1.03 1-1.03 2.45 0 1.44 1.06 2.84 1.2 3.04.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.27.17-1.4-.07-.13-.27-.2-.56-.34z" }) }) })
  ] });
}
export {
  Index as component
};
