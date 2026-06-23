import { useCallback, useRef, useState } from "react";
import beforeImg from "@/assets/sunlight_standard.png";
import afterImg from "@/assets/sunlight_nova.png";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label="Control de comparación: pantalla estándar (izquierda) vs NOVA PRO (derecha). Usa las flechas del teclado para mover el divisor."
      tabIndex={0}
      className="relative aspect-[3/2] w-full overflow-hidden select-none cursor-ew-resize bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setPos((p) => Math.max(0, p - 5));
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setPos((p) => Math.min(100, p + 5));
        }
      }}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={(e) => {
        dragging.current = false;
        if ((e.target as HTMLElement).hasPointerCapture(e.pointerId)) {
          (e.target as HTMLElement).releasePointerCapture(e.pointerId);
        }
      }}
      onPointerCancel={(e) => {
        dragging.current = false;
        if ((e.target as HTMLElement).hasPointerCapture(e.pointerId)) {
          (e.target as HTMLElement).releasePointerCapture(e.pointerId);
        }
      }}
    >
      {/* After (base) */}
      <img
        src={afterImg}
        alt="Pantalla NOVA PRO legible bajo el sol"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        draggable={false}
        loading="lazy"
        width={1400}
        height={960}
      />
      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeImg}
          alt="Pantalla estándar ilegible bajo el sol"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          draggable={false}
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          loading="lazy"
          width={1400}
          height={960}
        />
      </div>

      {/* Labels */}
      <span className="eyebrow absolute top-5 left-5 rounded-sm bg-foreground/80 px-3 py-1.5 text-background backdrop-blur-sm">
        Estándar
      </span>
      <span className="eyebrow absolute top-5 right-5 rounded-sm bg-background/80 px-3 py-1.5 text-foreground backdrop-blur-sm">
        NOVA PRO
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-background"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/20 bg-background shadow-xl">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l-6 6 6 6M15 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
