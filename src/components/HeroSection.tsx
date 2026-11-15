import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_METRICS, HERO_MEDIA } from '@/src/data/incomexData';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

function AnimatedMetricValue({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }

    const durationMs = 1350;
    let animationFrameId = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease-out cubic for natural deceleration onto the final total
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [active, target]);

  return (
    <span aria-label={`${target}${suffix}`}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function HeroSection({ onRequestQuote }: HeroSectionProps) {
  const [heroImgError, setHeroImgError] = useState(false);
  const [fieldImgError, setFieldImgError] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const kpiStripRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = kpiStripRef.current;
    if (!node) {
      setCountersStarted(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setCountersStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCountersStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      className="relative scroll-mt-16 overflow-hidden bg-[#0B1221] text-white"
    >
      {/* Background facility photograph with measured contrast scrim */}
      {!heroImgError && (
        <img
          src={HERO_MEDIA.terminal}
          alt="Terminal automatizada de hidrocarburos e instrumentación industrial"
          referrerPolicy="no-referrer"
          onError={() => setHeroImgError(true)}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1221]/90 via-[#0B1221]/85 to-[#0B1221]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 pt-12 pb-14 sm:px-6 lg:px-8 lg:pt-16 lg:pb-16">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="mb-4 text-xs font-medium tracking-wide text-sky-300">
              Ingeniería, Control y Mantenimiento Industrial · Huejotzingo, Puebla
            </p>

            <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.08] font-bold tracking-tight text-white [text-wrap:balance]">
              Automatización y control de precisión para hidrocarburos e industria
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Integramos tableros PLC, sistemas SCADA, controles volumétricos conforme a normativa SAT, telemedición y patines de medición con ejecución llave en mano y soporte preventivo en campo.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Solicitar cotización
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#servicios"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors duration-150 hover:border-slate-500 hover:bg-slate-800/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 whitespace-nowrap shrink-0"
              >
                Explorar servicios
              </a>
            </div>
          </div>

          {/* Right column: Field Engineering Showcase */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900">
              {!fieldImgError ? (
                <img
                  src={HERO_MEDIA.tecnicoReal}
                  alt="Técnico de Incomex-Tech realizando diagnóstico con multímetro digital en tablero eléctrico"
                  referrerPolicy="no-referrer"
                  onError={() => setFieldImgError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-center">
                  <ShieldCheck className="mb-3 h-10 w-10 text-sky-400" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold text-white">
                    Ingeniería en Campo y Control PLC
                  </p>
                </div>
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-transparent p-5">
                <p className="text-xs font-medium text-sky-300">
                  Mantenimiento preventivo y correctivo
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Calibración de instrumentación, tableros PLC y equipos de bombeo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Dynamic KPI Strip directly below hero split */}
        <div
          ref={kpiStripRef}
          className="mt-12 grid grid-cols-2 divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-900/70 sm:grid-cols-4 sm:divide-x sm:divide-y-0"
        >
          {COMPANY_METRICS.map((metric) => (
            <div key={metric.label} className="px-5 py-5 sm:px-6">
              <div className="font-mono text-3xl font-semibold tracking-tight text-white tabular-nums sm:text-4xl">
                <AnimatedMetricValue
                  target={metric.target}
                  suffix={metric.suffix}
                  active={countersStarted}
                />
              </div>
              <div className="mt-1 text-sm font-semibold text-sky-300">
                {metric.label}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
