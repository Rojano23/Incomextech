import React from 'react';
import { CONTACT_INFO } from '@/src/data/incomexData';

export function FloatingWhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp al +52 55 2271 0251"
      className="fixed right-4 bottom-4 z-40 inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 whitespace-nowrap shrink-0 sm:right-6 sm:bottom-6"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M12.031 2C6.508 2 2.031 6.477 2.031 12c0 1.763.461 3.485 1.337 5.004L2 22l5.121-1.344A9.947 9.947 0 0 0 12.031 22c5.523 0 10-4.477 10-10S17.554 2 12.031 2Zm5.84 14.122c-.244.687-1.425 1.314-1.972 1.394-.497.074-1.143.105-1.844-.118-.426-.135-.974-.316-1.672-.618-2.942-1.27-4.863-4.234-5.01-4.43-.146-.197-1.194-1.59-1.194-3.034 0-1.443.757-2.152 1.026-2.445.269-.293.587-.366.782-.366.196 0 .391.002.562.01.18.009.422-.068.66.504.244.587.832 2.032.905 2.18.073.146.122.317.024.513-.098.196-.146.318-.293.489-.146.171-.308.382-.44.513-.146.146-.299.305-.129.598.171.293.76 1.254 1.632 2.031 1.121 1 2.067 1.31 2.36 1.456.293.147.464.122.635-.073.171-.196.733-.855.929-1.149.195-.293.391-.244.66-.147.269.098 1.711.807 2.004.954.293.146.489.22.562.342.073.122.073.708-.171 1.395Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
