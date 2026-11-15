import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, Wrench, X } from 'lucide-react';
import type { ServiceItem } from '@/src/data/incomexData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export function ServiceDetailModal({
  service,
  onClose,
  onRequestQuoteForService,
}: ServiceDetailModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [service?.id]);

  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top image header */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-900 sm:h-60">
          {!imgError ? (
            <img
              src={service.image}
              alt={service.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300">
              <Wrench className="mb-2 h-8 w-8 text-sky-400" aria-hidden="true" />
              <span className="text-sm font-medium">{service.title}</span>
            </div>
          )}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-slate-950/70 text-white transition-colors hover:bg-slate-900 cursor-pointer"
            aria-label="Cerrar detalle del servicio"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute inset-x-6 bottom-5">
            <p className="font-mono text-xs font-medium text-sky-300">
              {service.number} {service.categoryLabel} · {service.specs}
            </p>
            <h3
              id="service-modal-title"
              className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl"
            >
              {service.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {service.summary}
          </p>

          <div className="mt-6">
            <h4 className="font-display text-sm font-semibold text-slate-900">
              Alcance técnico y capacidades incluidas
            </h4>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {service.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
                    aria-hidden="true"
                  />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[42px] rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 cursor-pointer"
            >
              Cerrar
            </button>

            <button
              type="button"
              onClick={() => onRequestQuoteForService(service.title)}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 cursor-pointer"
            >
              Cotizar este servicio
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
