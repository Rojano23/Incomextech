import React, { useState } from 'react';
import { MonitorCheck } from 'lucide-react';
import { CHARACTERISTICS, HERO_MEDIA } from '@/src/data/incomexData';
import { RecVapMark, RepseMark } from './BrandMarks';

export function AboutPartnersSection() {
  const [scadaError, setScadaError] = useState(false);

  return (
    <section id="nosotros" className="scroll-mt-16 border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left column: Value Pillars */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-wide text-sky-700">
              Por qué Incomex-Tech
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
              Ingeniería confiable para operaciones que no pueden detenerse
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Combinamos experiencia de campo en terminales de hidrocarburos con integración tecnológica certificada para entregar proyectos eficientes, seguros y auditables.
            </p>

            <div className="mt-8 divide-y divide-slate-200 border-t border-b border-slate-200">
              {CHARACTERISTICS.map((item) => (
                <div key={item.number} className="py-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm font-semibold text-sky-700 tabular-nums">
                      {item.number}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 pl-8 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: SCADA/Field Visual + RecVap USA & REPSE Authority */}
          <div className="flex flex-col gap-5 lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
              {!scadaError ? (
                <img
                  src={HERO_MEDIA.scada}
                  alt="Centro de operaciones SCADA monitoreando flujo de ductos y tanques"
                  referrerPolicy="no-referrer"
                  onError={() => setScadaError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 p-8 text-center text-white">
                  <MonitorCheck className="mb-3 h-9 w-9 text-sky-400" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold">
                    Integración SCADA y Telemedición
                  </p>
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-5">
                <p className="text-xs font-medium text-sky-300">
                  Supervisión en tiempo real
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Arquitecturas SCADA SCAZEN y control volumétrico multiplataforma
                </p>
              </div>
            </div>

            {/* RecVap USA + REPSE Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0B1221] p-5 text-white">
                <RecVapMark />
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  Suministro, integración y soporte autorizado de unidades de recuperación de vapores para terminales y estaciones de carga.
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div>
                  <RepseMark />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Cumplimiento fiscal y laboral vigente ante la STPS para la ejecución segura de obras y servicios especializados en planta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
