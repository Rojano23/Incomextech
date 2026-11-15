import React, { useEffect, useState } from 'react';
import { ArrowRight, Expand, Wrench, X } from 'lucide-react';
import {
  PROJECTS,
  type ProjectItem,
  type ServiceCategory,
} from '@/src/data/incomexData';

interface ProjectsSectionProps {
  onRequestQuoteForService: (serviceTitle: string) => void;
}

const PROJECT_FILTERS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'Todos los proyectos (9)' },
  { id: 'automatizacion', label: 'Automatización y SCADA' },
  { id: 'medicion', label: 'Medición e Hidrocarburos' },
  { id: 'seguridad', label: 'Seguridad y Mantenimiento' },
];

export function ProjectsSection({
  onRequestQuoteForService,
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="proyectos"
      className="scroll-mt-16 border-b border-slate-800 bg-[#0B1221] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-sky-300">
              Galería de proyectos y casos destacados
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Implementaciones reales en planta y terminales operativas
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Proyectos ejecutados en Amozoc, Manzanillo, San Luis Potosí, Veracruz y terminales de almacenamiento en México.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div
            role="group"
            aria-label="Filtrar galería de proyectos"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 p-1"
          >
            {PROJECT_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${
                    isActive
                      ? 'bg-sky-500 text-slate-950'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Bento Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const isHeroSpan = activeFilter === 'all' && index === 0;
            const isImageFailed = failedImages[project.id];

            return (
              <article
                key={project.id}
                className={`group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 transition-colors duration-150 hover:border-sky-500/60 ${
                  isHeroSpan ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Media Container */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className={`relative w-full overflow-hidden bg-slate-950 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 ${
                    isHeroSpan ? 'h-64 sm:h-80' : 'h-56'
                  }`}
                  aria-label={`Ampliar detalles de ${project.title}`}
                >
                  {!isImageFailed ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 p-6 text-center text-slate-400">
                      <Wrench className="mb-2 h-8 w-8 text-sky-400" aria-hidden="true" />
                      <span className="text-sm font-medium text-slate-200">
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"
                  />

                  <span className="absolute top-3.5 right-3.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-slate-950/70 text-slate-200 transition-colors group-hover:border-sky-400/50 group-hover:text-white">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>

                  <div className="absolute inset-x-5 bottom-4">
                    <p className="font-mono text-xs font-medium text-sky-300">
                      {project.code} · {project.location}
                    </p>
                  </div>
                </button>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      {project.specialty}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {project.scope}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">
                    <span className="text-xs font-medium text-slate-400">
                      {project.deliverable}
                    </span>

                    <button
                      type="button"
                      onClick={() => onRequestQuoteForService(project.serviceMatch)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 transition-colors hover:text-sky-200 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Cotizar similar
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Project Inspection Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-800 bg-[#0B1221] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 w-full overflow-hidden bg-slate-950 sm:h-80">
              {!failedImages[selectedProject.id] ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(selectedProject.id)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-900">
                  <Wrench className="h-10 w-10 text-sky-400" aria-hidden="true" />
                </div>
              )}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-slate-950/75 text-white transition-colors hover:bg-slate-900 cursor-pointer"
                aria-label="Cerrar vista de proyecto"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs font-semibold text-sky-300">
                {selectedProject.code} · {selectedProject.location} · {selectedProject.specialty}
              </p>
              <h3
                id="project-modal-title"
                className="mt-2 font-display text-2xl font-bold text-white"
              >
                {selectedProject.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {selectedProject.scope}
              </p>
              <p className="mt-4 border-t border-slate-800 pt-4 text-xs font-medium text-slate-400">
                Entregable operativo: {selectedProject.deliverable}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="min-h-[42px] rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 cursor-pointer"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const match = selectedProject.serviceMatch;
                    setSelectedProject(null);
                    onRequestQuoteForService(match);
                  }}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400 cursor-pointer"
                >
                  Solicitar proyecto similar
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
