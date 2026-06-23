import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";

const FRAME_COUNT = 40;
const FRAME_PATH = "/frames/23456_";

function getFrameSrc(index: number): string {
  return `${FRAME_PATH}${String(index).padStart(3, "0")}.jpg`;
}

interface HeroCanvasProps {
  onProgress?: (progress: number) => void;
  children?: ReactNode;
}

export function HeroCanvas({ onProgress, children }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => { prefersReducedMotion.current = e.matches; };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
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

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Preload frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    const loadImage = (index: number): Promise<HTMLImageElement> =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => { loaded++; resolve(img); };
        img.onerror = reject;
        img.src = getFrameSrc(index);
      });

    loadImage(0).then((firstImg) => {
      images[0] = firstImg;
      imagesRef.current = images;
      resizeCanvas();
      drawFrame(0);
    });

    const loadRemaining = async () => {
      const promises = [];
      for (let i = 1; i < FRAME_COUNT; i++) {
        promises.push(loadImage(i).then((img) => { images[i] = img; }));
      }
      await Promise.all(promises);
      imagesRef.current = images;
      setIsLoaded(true);
    };

    loadRemaining();
    return () => { images.length = 0; };
  }, [drawFrame, resizeCanvas]);

  // Native scroll listener — works reliably with CSS sticky (no GSAP pin needed)
  useEffect(() => {
    if (!isLoaded) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    resizeCanvas();

    if (prefersReducedMotion.current) {
      drawFrame(0);
      container.style.height = "100dvh";
      return;
    }

    const update = () => {
      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      // -rect.top = how many px we've scrolled past the container's top edge
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / totalScrollable);

      // Frames complete at 75% of scroll; last 25% holds final frame (linger)
      const frameProgress = Math.min(progress / 0.75, 1);
      const frameIndex = Math.min(Math.floor(frameProgress * FRAME_COUNT), FRAME_COUNT - 1);

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
      }

      onProgress?.(progress);
    };

    const handleResize = () => resizeCanvas();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", handleResize);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isLoaded, drawFrame, resizeCanvas, onProgress]);

  return (
    <div ref={scrollContainerRef} className="hero-scroll-container">
      <div className="hero-sticky">
        <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

        {children}
      </div>
    </div>
  );
}
