import React, { useState } from 'react';
import {
  ArrowUpRight,
  Cpu,
  Flame,
  Fuel,
  Gauge,
  Layers,
  Monitor,
  Truck,
  Video,
  Wrench,
} from 'lucide-react';
import {
  SERVICES,
  type ServiceCategory,
  type ServiceItem,
} from '@/src/data/incomexData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

const FILTER_OPTIONS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'Todos los servicios (9)' },
  { id: 'automatizacion', label: 'Automatización y SCADA' },
  { id: 'medicion', label: 'Medición e Hidrocarburos' },
  { id: 'seguridad', label: 'Seguridad y Mantenimiento' },
];

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  automatizacion: Cpu,
  scada: Monitor,
  'controles-volumetricos': Fuel,
  'patines-medicion': Layers,
  telemedicion: Gauge,
  transloaders: Truck,
  'mantenimiento-control': Wrench,
  'sistema-cctv': Video,
  'contra-incendio': Flame,
};

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section id="servicios" className="scroll-mt-16 border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-sky-700">
              Capacidades técnicas
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
              Soluciones especializadas de ingeniería y control
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Selecciona cualquier área para consultar el alcance técnico completo, entregables y normativa aplicable.
            </p>
          </div>

          {/* Interactive Filter Segmented Controls */}
          <div
            role="group"
            aria-label="Filtrar servicios por especialidad"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-1"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeCategory === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveCategory(option.id)}
                  className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean 3x3 / Balanced Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => {
            const IconComponent = SERVICE_ICONS[service.id] ?? Cpu;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => onSelectService(service)}
                className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 text-left transition-colors duration-150 hover:border-sky-500/60 hover:bg-slate-50/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-slate-500 tabular-nums">
                      {service.number} {service.categoryLabel}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition-colors duration-150 group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-medium text-slate-500">
                    {service.specs}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-sky-700 transition-transform duration-150 group-hover:translate-x-0.5">
                    Ver especificaciones
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
