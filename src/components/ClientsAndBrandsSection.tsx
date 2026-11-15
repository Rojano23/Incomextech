import React, { useState } from 'react';
import { BRANDS, CLIENTS, HERO_MEDIA } from '@/src/data/incomexData';

export function ClientsAndBrandsSection() {
  const [skidImgError, setSkidImgError] = useState(false);

  return (
    <section id="clientes" className="scroll-mt-16 border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Top intro + Metering skid showcase */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wide text-sky-700">
              Respaldo y relaciones estratégicas
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
              Clientes que confían su infraestructura crítica a nuestra ingeniería
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Consideramos a cada cliente un socio estratégico. Construimos relaciones de largo plazo basadas en cumplimiento técnico, tiempos de respuesta confiables y valor operativo medible.
            </p>

            {/* Clean symmetric grid of client plaques featuring real extracted logos */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="flex min-h-[82px] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-center transition-colors duration-150 hover:border-slate-300"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      referrerPolicy="no-referrer"
                      className="max-h-11 w-auto max-w-[135px] object-contain"
                    />
                  ) : (
                    <>
                      <span className="font-display text-sm font-bold tracking-tight text-slate-900">
                        {client.name}
                      </span>
                      <span className="mt-0.5 text-xs text-slate-500">
                        {client.sector}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
              {!skidImgError ? (
                <img
                  src={HERO_MEDIA.skid}
                  alt="Patín de medición de flujo de acero inoxidable e instrumentación industrial"
                  referrerPolicy="no-referrer"
                  onError={() => setSkidImgError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-800 p-6 text-center text-sm font-semibold text-white">
                  Patines de Medición e Instrumentación Certificada
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent p-5">
                <p className="text-xs font-medium text-sky-300">
                  Ingeniería de transferencia y medición
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Patines de medición modular con instrumentación certificada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Brands Strip with clean edge fade & real extracted brand logos */}
        <div className="mt-14 border-t border-slate-200 pt-10">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="font-display text-lg font-semibold text-slate-900">
              Marcas y plataformas tecnológicas que integramos
            </h3>
            <p className="text-xs font-medium text-slate-500">
              Equipamiento certificado de clase industrial
            </p>
          </div>

          <div className="marquee-mask relative mt-6 overflow-hidden py-2">
            <div className="animate-marquee flex w-max items-center gap-4">
              {[...BRANDS, ...BRANDS].map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="flex h-16 min-w-[185px] shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 transition-colors duration-150 hover:border-sky-300"
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      referrerPolicy="no-referrer"
                      className="max-h-10 w-auto max-w-[145px] object-contain"
                    />
                  ) : (
                    <span className="font-display text-sm font-semibold tracking-tight text-slate-700">
                      {brand.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
