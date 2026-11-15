import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/src/data/incomexData';
import { IncomexWordmark, RepseMark } from './BrandMarks';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0B1221] text-slate-300">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand + REPSE high-contrast badge */}
          <div className="lg:col-span-4">
            <IncomexWordmark variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Ingeniería, control y mantenimiento industrial con soluciones certificadas para el sector energético e industrial.
            </p>
            <div className="mt-6">
              <RepseMark />
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold text-white">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="text-slate-400 transition-colors hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-slate-400 transition-colors hover:text-white">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-slate-400 transition-colors hover:text-white">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 transition-colors hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-slate-400 transition-colors hover:text-white">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-400 transition-colors hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-semibold text-white">
              Contacto y ubicación
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              {CONTACT_INFO.emails.map((item) => (
                <li key={item.address}>
                  <a
                    href={`mailto:${item.address}`}
                    className="inline-flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                    <span>{item.address}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-slate-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                <div>
                  <div>{CONTACT_INFO.hoursWeek}</div>
                  <div>{CONTACT_INFO.hoursSat}</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold text-white">
              Canales directos
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  WhatsApp · {CONTACT_INFO.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Facebook · {CONTACT_INFO.facebookHandle}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Instagram · {CONTACT_INFO.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>© 2026 Incomex-Tech. Todos los derechos reservados.</p>
          <p className="font-medium text-slate-300">Diseñado por RX23 digital</p>
        </div>
      </div>
    </footer>
  );
}
