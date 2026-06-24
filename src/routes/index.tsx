import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useEffect, useRef, type FormEvent } from "react";
import { Nav, CompassIcon } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Compass, Sun, Battery, Shield, Cpu, Sliders, Gift, Zap, Wifi } from "lucide-react";
import { saveLead } from "@/lib/leads";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/i18n/translations";

export const Route = createFileRoute("/")({
  component: Index,
});

// Icons for benefit cards — same for both languages, position-matched to benefitCards array
const BENEFIT_ICONS = [
  <Zap key="zap" className="h-7 w-7 text-primary" />,
  <Shield key="shield" className="h-7 w-7 text-primary" />,
  <Battery key="battery" className="h-7 w-7 text-primary" />,
  <Wifi key="wifi" className="h-7 w-7 text-primary" />,
  <Compass key="compass" className="h-7 w-7 text-primary" />,
  <Sliders key="sliders" className="h-7 w-7 text-primary" />,
  <Sun key="sun" className="h-7 w-7 text-primary" />,
  <Cpu key="cpu" className="h-7 w-7 text-primary" />,
];

function Index() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const lang = useLang();
  const t = translations[lang];

  useEffect(() => {
    const container = marqueeContainerRef.current;
    if (!container) return;
    const marquee = container.querySelector<HTMLElement>(".animate-marquee");
    if (!marquee) return;

    const slow = () => marquee.getAnimations().forEach((a) => a.updatePlaybackRate(0.2));
    const restore = () => marquee.getAnimations().forEach((a) => a.updatePlaybackRate(1));

    container.addEventListener("mouseenter", slow);
    container.addEventListener("mouseleave", restore);
    return () => {
      container.removeEventListener("mouseenter", slow);
      container.removeEventListener("mouseleave", restore);
    };
  }, []);

  const handleCanvasProgress = useCallback((progress: number) => {
    setScrollProgress(progress);
  }, []);

  async function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormLoading(true);
    setFormError(null);
    try {
      const fd = new FormData(e.currentTarget);
      await saveLead({
        data: {
          nombre: fd.get("nombre") as string,
          email: fd.get("email") as string,
          telefono: fd.get("telefono") as string,
          empresa: (fd.get("empresa") as string) || "",
          interes: (fd.get("interes") as string) || "",
        },
      });
      setFormSubmitted(true);
    } catch {
      setFormError(t.form.errorMsg);
    } finally {
      setFormLoading(false);
    }
  }

  const fadeOut = Math.max(0, 1 - scrollProgress / 0.22);
  const fadeIn = Math.max(0, (scrollProgress - 0.78) / 0.22);
  const textOpacity = Math.max(fadeOut, fadeIn);
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollProgress * 8);

  return (
    <div id="top" className="bg-background text-foreground">
      <Nav />

      {/* ─────────── HERO ─────────── */}
      <HeroCanvas onProgress={handleCanvasProgress}>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/30 to-[#0b1f3b]" />

        <div
          className="hero-overlay absolute inset-0 z-10"
          style={{ opacity: textOpacity }}
        >
          <div className="relative mx-auto flex h-full max-w-7xl flex-col px-5 pt-28 pb-12 md:px-10 md:pt-36 xl:pt-44 xl:pb-20">

            <p
              className="eyebrow text-primary animate-rise"
              style={{ animationDelay: "0.1s" }}
            >
              {t.hero.eyebrow}
            </p>

            <p
              className="mt-4 text-sm font-semibold tracking-[0.12em] md:tracking-[0.3em] uppercase text-white/50 animate-rise"
              style={{ animationDelay: "0.25s" }}
            >
              {t.hero.tagline}
            </p>

            <h1
              className="font-display mt-5 max-w-4xl text-[28px] leading-[1.05] text-white animate-rise sm:text-[38px] md:mt-6 md:text-[68px] md:leading-[1.0] xl:text-[96px]"
              style={{ animationDelay: "0.3s" }}
            >
              {t.hero.h1a}{" "}
              <br className="hidden md:block" />
              <em className="not-italic" style={{ color: "var(--sand)" }}>
                {t.hero.h1b}
              </em>
              .
            </h1>

            <div className="mt-auto flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

              <div
                className="animate-rise"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="max-w-md text-base leading-relaxed text-white/85 md:text-lg">
                  {t.hero.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-sm text-white/55 line-through">{t.hero.rrp}</span>
                  <span className="font-display text-2xl text-white md:text-3xl">595€</span>
                  <span className="rounded-full border border-white/20 px-3 py-0.5 text-[11px] tracking-widest uppercase text-white/55">
                    {t.hero.units}
                  </span>
                </div>
              </div>

              <div
                className="animate-rise flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5"
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  href="#contacto"
                  aria-label="Pre-order NOVA Marine Tablet PRO — save 400 euros and get free accessories"
                  className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#0b1f3b] transition-all duration-300 hover:bg-[#b8bec8] hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t.hero.ctaBtn}
                </a>
                <p className="text-sm leading-snug text-white/70 max-w-[220px] sm:max-w-xs">
                  {t.hero.ctaNote}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 rotate-90 origin-right md:block"
          style={{ opacity: textOpacity }}
        >
          <div className="flex items-center gap-3 text-white/80">
            <span className="eyebrow">{t.hero.badgePatent}</span>
            <span className="h-px w-10 bg-white/50" />
            <span className="text-xs tracking-widest uppercase">{t.hero.badgeDesign}</span>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <div className="flex flex-col items-center gap-3 text-white/70">
            <span className="h-12 w-px animate-pulse bg-white/60" />
          </div>
        </div>
      </HeroCanvas>

      {/* ─────────── FEATURES & BENEFITS ─────────── */}
      <section id="caracteristicas" className="border-b border-border bg-background py-16 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <Reveal className="max-w-3xl">
            <p className="eyebrow text-primary">{t.features.eyebrow}</p>
            <h2 className="font-display mt-6 text-4xl leading-[0.98] md:text-7xl">
              {t.features.h2a}
              <br />
              <em className="not-italic" style={{ color: "var(--sand)" }}>
                {t.features.h2b}
              </em>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.benefitCards.map((card, i) => (
              <Reveal
                key={`${lang}-${i}`}
                delay={(i % 3) as 0 | 1 | 2}
                className={[
                  "group rounded-xl border border-border bg-card/40 p-7 shadow-xl",
                  "backdrop-blur-sm transition-colors duration-300",
                  "hover:border-primary/30 hover:shadow-2xl",
                ].join(" ")}
              >
                <div
                  className="benefit-icon inline-flex items-center justify-center rounded-lg border border-border bg-[#091828] p-3 group-hover:border-primary/25 group-hover:bg-primary/10"
                  aria-hidden="true"
                >
                  {BENEFIT_ICONS[i]}
                </div>
                <h3 className="font-display mt-5 text-xl leading-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                  {card.title}
                </h3>
                <span className="eyebrow mt-1.5 block text-[10px] text-primary">
                  {card.detail}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Bonus Accessories card */}
          <Reveal className="mt-5">
            <div className="group relative overflow-hidden rounded-xl border border-primary/40 bg-gradient-to-r from-[#061321] to-[#091828] p-6 shadow-xl transition-all duration-300 hover:border-primary/70 hover:shadow-2xl md:p-8">
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-5">
                  <div
                    className="benefit-icon inline-flex shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 p-3 group-hover:border-primary/60 group-hover:bg-primary/20"
                    aria-hidden="true"
                  >
                    <Gift className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl leading-tight text-foreground md:text-2xl">
                        {t.features.bonusTitle}
                      </h3>
                      <span className="rounded-full bg-primary/20 px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase text-primary">
                        {t.features.bonusFree}
                      </span>
                    </div>
                    <span className="eyebrow mt-1.5 block text-[10px] text-primary">
                      {t.features.bonusSubtitle}
                    </span>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {t.features.bonusDesc}
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="rounded-lg border border-primary/25 bg-primary/10 px-5 py-3 text-center">
                    <p className="text-xs uppercase tracking-widest text-primary/70">{t.features.bonusIncluded}</p>
                    <p className="font-display mt-0.5 text-2xl text-primary">{t.features.bonusValue}</p>
                    <p className="text-xs text-primary/60">{t.features.bonusValueLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Microcopy + CTA */}
          <Reveal className="mt-10 text-center">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t.features.microcopy}{" "}
              <span className="font-semibold text-foreground">{t.features.microcopyBold}</span>{" "}
              <span className="font-semibold text-primary">{t.features.microcopyAccent}</span>
            </p>
            <a
              href="#contacto"
              aria-label="Pre-order NOVA Marine Tablet PRO for 595 euros"
              className="cta-btn mt-8 inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm text-[#0b1f3b] uppercase tracking-widest transition-all duration-300 hover:bg-[#b8bec8] hover:scale-[1.02] hover:shadow-xl"
            >
              {t.features.cta}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section id="testimonios" className="overflow-hidden bg-secondary py-16 md:py-40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-primary">{t.testimonials.eyebrow}</p>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[0.98] md:text-7xl">
              {t.testimonials.h2}
            </h2>
          </Reveal>
        </div>

        <div ref={marqueeContainerRef} className="relative mt-16 md:mt-20 overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 pl-6 md:gap-8 md:pl-10">
            {[...t.testimonials.items, ...t.testimonials.items, ...t.testimonials.items, ...t.testimonials.items].map((testimonial, i) => (
              <figure
                key={i}
                className="w-[85vw] max-w-xl shrink-0 border border-border bg-background p-5 md:w-[480px] md:p-10 rounded-lg shadow-2xl"
              >
                <div
                  className="font-display text-6xl leading-none text-primary"
                  aria-hidden
                >
                  &ldquo;
                </div>
                <blockquote className="-mt-3 text-base md:text-lg font-medium leading-relaxed text-foreground">
                  {testimonial.text}
                </blockquote>
                <figcaption className="mt-8 flex flex-col justify-start border-t border-border pt-5 gap-1">
                  <span className="text-sm font-semibold text-primary">{testimonial.name}</span>
                  <span className="text-xs text-muted-foreground">{testimonial.role}</span>
                  <span className="text-xs tracking-widest mt-1 text-primary">★ ★ ★ ★ ★</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PRE-ORDER FORM ─────────── */}
      <section id="contacto" className="bg-background py-16 md:py-36 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-8 md:gap-14 md:grid-cols-2 xl:gap-24">

            <Reveal>
              <p className="eyebrow text-primary">{t.form.eyebrow}</p>
              <h2 className="font-display mt-6 text-4xl leading-tight text-foreground md:text-5xl xl:text-6xl">
                {t.form.h2a}
                <br />
                <em className="not-italic" style={{ color: "var(--sand)" }}>{t.form.h2b}</em>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                {t.form.description}
              </p>

              <div className="mt-8 flex items-baseline gap-5">
                <span className="text-base line-through text-muted-foreground">{t.form.rrp}</span>
                <span className="font-display text-5xl text-foreground">595€</span>
                <span className="rounded-full border border-primary/40 px-3 py-0.5 text-[11px] tracking-widest uppercase text-primary">
                  {t.form.saveBadge}
                </span>
              </div>

              <ul className="mt-8 space-y-3.5" aria-label="Gifts included with the pre-order">
                {t.form.gifts.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary text-[10px]" aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-3 text-xs text-muted-foreground tracking-widest uppercase">
                <span className="h-px w-8 bg-border" />
                {t.form.trust}
              </div>
            </Reveal>

            <Reveal delay={1}>
              {formSubmitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-border bg-card/40 px-6 py-10 text-center md:px-10 md:py-16"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground" aria-hidden="true">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{t.form.successTitle}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {t.form.successDesc}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleLeadSubmit}
                  aria-label="NOVA Marine Tablet PRO pre-order form"
                  className="rounded-2xl border border-border bg-card/40 p-5 md:p-10"
                  noValidate={false}
                >
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div className="sm:col-span-2">
                      <label htmlFor="lead-nombre" className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                        {t.form.labelName} <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="lead-nombre"
                        name="nombre"
                        type="text"
                        required
                        minLength={2}
                        autoComplete="name"
                        placeholder={t.form.placeholderName}
                        className="lead-input-dark"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-email" className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                        {t.form.labelEmail} <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder={t.form.placeholderEmail}
                        className="lead-input-dark"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-telefono" className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                        {t.form.labelPhone} <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="lead-telefono"
                        name="telefono"
                        type="tel"
                        required
                        pattern="[0-9+\s\-]{7,15}"
                        autoComplete="tel"
                        placeholder={t.form.placeholderPhone}
                        className="lead-input-dark"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="lead-interes" className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                        {t.form.labelUse}
                      </label>
                      <select
                        id="lead-interes"
                        name="interes"
                        className="lead-input-dark appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>{t.form.selectDefault}</option>
                        {t.form.selectOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="lead-empresa" className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                        {t.form.labelCompany}{" "}
                        <span className="normal-case tracking-normal font-normal text-[10px]">{t.form.companyOptional}</span>
                      </label>
                      <input
                        id="lead-empresa"
                        name="empresa"
                        type="text"
                        autoComplete="organization"
                        placeholder={t.form.placeholderCompany}
                        className="lead-input-dark"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-0.5 h-4 w-4 shrink-0 accent-primary cursor-pointer"
                      />
                      <span className="text-xs leading-relaxed text-muted-foreground">
                        {t.form.consentLabel}{" "}
                        <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">
                          {t.form.consentPrivacy}
                        </a>{" "}
                        {t.form.consentAnd}{" "}
                        <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">
                          {t.form.consentTerms}
                        </a>
                        . <span aria-hidden="true" className="text-red-400">*</span>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    aria-label="Submit pre-order for 595 euros"
                    aria-busy={formLoading}
                    className="cta-btn mt-6 w-full rounded-full bg-white px-8 py-4 text-sm tracking-widest text-[#0b1f3b] uppercase transition-all duration-300 hover:bg-primary hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:scale-100"
                  >
                    {formLoading ? t.form.submitting : t.form.submit}
                  </button>

                  {formError && (
                    <p role="alert" className="mt-3 text-center text-sm text-red-400">
                      {formError}
                    </p>
                  )}

                  <p className="mt-5 text-center text-[11px] leading-relaxed text-muted-foreground">
                    {t.form.required}
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── TECHNICAL SPECIFICATIONS ─────────── */}
      <section id="especificaciones" className="bg-background pt-16 pb-10 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <Reveal>
            <p className="eyebrow text-primary">{t.specs.eyebrow}</p>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[0.98] md:text-7xl">
              {t.specs.h2a}
              <br />
              <em className="not-italic" style={{ color: "var(--sand)" }}>
                {t.specs.h2b}
              </em>
            </h2>
          </Reveal>

          <p className="mt-14 mb-2 text-right text-[11px] tracking-widest uppercase text-muted-foreground md:hidden">
            ← desliza →
          </p>
          <Reveal delay={1} className="overflow-x-auto rounded-xl border border-border shadow-2xl">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-6 py-4 text-left font-display text-sm text-primary tracking-wide">{t.specs.thFeature}</th>
                  <th className="px-6 py-4 text-left font-display text-sm text-foreground tracking-wide">{t.specs.thNova}</th>
                  <th className="px-6 py-4 text-left font-display text-sm text-muted-foreground tracking-wide">{t.specs.thStandard}</th>
                </tr>
              </thead>
              <tbody>
                {t.specs.rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border/50 transition-colors hover:bg-primary/5 ${
                      i % 2 === 0 ? "bg-secondary/30" : "bg-background"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-muted-foreground">
                      <span className="mr-2" aria-hidden>{row.icon}</span>
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 font-semibold text-foreground">{row.nova}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="mt-10 flex flex-col items-center gap-6 text-center">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t.specs.microcopy}{" "}
              <span className="text-foreground font-semibold">{t.specs.microcopyBold}</span>{" "}
              {t.specs.microcopyMid}{" "}
              <span className="text-primary font-semibold">{t.specs.microcopyAccent}</span>
            </p>
            <a
              href="#contacto"
              aria-label="Pre-order NOVA Marine Tablet PRO for 595 euros"
              className="cta-btn inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm text-[#0b1f3b] uppercase tracking-widest transition-all duration-300 hover:bg-[#b8bec8] hover:scale-[1.02] hover:shadow-xl"
            >
              {t.specs.cta}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section id="faq" className="bg-secondary border-y border-border py-16 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <Reveal className="mb-16 text-center">
            <p className="eyebrow text-primary">{t.faqSection.eyebrow}</p>
            <h2 className="font-display mt-6 text-4xl leading-[0.98] md:text-7xl">
              {t.faqSection.h2}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
              {t.faqSection.description}
            </p>
          </Reveal>

          <FAQ lang={lang} />
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="bg-background pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 border-b border-border pb-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 font-display text-3xl tracking-tight text-foreground">
                <CompassIcon className="h-9 w-9 text-primary animate-pulse" />
                NOVA <span style={{ color: "var(--sand)" }}>Marine</span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                {t.footer.description}
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="eyebrow text-primary">{t.footer.contact}</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="tel:+34123456789" className="link-underline">+34 123 456 789</a>
                </li>
                <li>
                  <a href="mailto:info@novamarinestablet.com" className="link-underline">
                    info@novamarinestablet.com
                  </a>
                </li>
                <li className="text-muted-foreground">Barcelona · Valencia · Vigo, Spain</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow text-primary">{t.footer.warranty}</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {t.footer.warrantyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow text-primary">{t.footer.followUs}</p>
              <div className="mt-5 flex gap-4">
                <a
                  href="https://www.instagram.com/novathemarinetabletpro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.footer.igAria}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/themarinetabletpro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.footer.fbAria}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@NOVATheMarineTabletPro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.footer.ytAria}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon fill="#0b1f3b" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@novathemarinetabletpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.footer.tkAria}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="my-10 flex flex-col items-center gap-4 rounded-xl border border-border bg-secondary/60 px-6 py-8 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="font-display text-xl text-foreground md:text-2xl">
                {t.footer.ctaText}
              </p>
              <p className="mt-1 text-xs text-primary tracking-widest uppercase">{t.footer.ctaUnits}</p>
            </div>
            <a
              href="#contacto"
              aria-label="Pre-order NOVA Marine Tablet PRO for 595 euros"
              className="cta-btn shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs text-[#0b1f3b] uppercase tracking-widest transition-all duration-300 hover:bg-[#b8bec8] hover:scale-[1.02]"
            >
              {t.footer.ctaBtn}
            </a>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
            <span>
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-6">
              <a href="/legal" className="link-underline">{t.footer.legal}</a>
              <a href="/privacy" className="link-underline">{t.footer.privacy}</a>
              <a href="/terms" className="link-underline">{t.footer.terms}</a>
              <a href="/cookies" className="link-underline">{t.footer.cookies}</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
