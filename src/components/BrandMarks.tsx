import React, { useState } from 'react';
import { BRAND_ASSETS } from '@/src/data/incomexData';

export function IncomexWordmark({
  variant = 'dark',
}: {
  variant?: 'dark' | 'light';
}) {
  const [imgError, setImgError] = useState(false);

  if (variant === 'light' && !imgError) {
    return (
      <img
        src={BRAND_ASSETS.incomexLogoWhite}
        alt="INCOMEX-TECH — Ingeniería, Control y Mantenimiento Industrial"
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className="h-9 w-auto object-contain shrink-0 sm:h-10"
      />
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          variant === 'light' ? 'text-white' : 'text-slate-900'
        }`}
      >
        INCOMEX-TECH
      </span>
    </span>
  );
}

export function RecVapMark() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4">
      {!imgError ? (
        <img
          src={BRAND_ASSETS.recvapLogoWhite}
          alt="RecVap USA — Distribuidor Autorizado"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-14 w-auto object-contain"
        />
      ) : (
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-bold tracking-tight text-white">
              RecVap
            </span>
            <span className="font-mono text-xs font-semibold text-sky-400">USA</span>
          </div>
          <p className="text-xs font-medium text-slate-300">
            Distribuidor Autorizado · Recuperación de Vapores
          </p>
        </div>
      )}
    </div>
  );
}

export function RepseMark() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5">
      {!imgError ? (
        <img
          src={BRAND_ASSETS.repseLogo}
          alt="REPSE — Registro de Prestadoras de Servicios Especializados u Obras Especializadas"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-10 w-auto object-contain"
        />
      ) : (
        <div className="leading-tight">
          <div className="font-display text-sm font-bold tracking-wide text-slate-900">
            REPSE
          </div>
          <div className="text-[11px] font-medium text-slate-600">
            Registro de Servicios Especializados · STPS
          </div>
        </div>
      )}
    </div>
  );
}
