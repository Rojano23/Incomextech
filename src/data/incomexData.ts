import incomexLogoWhite from '@/src/assets/real/incomex_blanco.png';
import recvapLogoWhite from '@/src/assets/real/recvap.png';
import repseLogo from '@/src/assets/real/repse.png';

import tecnicoMultimetroImg from '@/src/assets/extracted/tecnico_multimetro.jpg';

import projDipplaAmp from '@/src/assets/real/proj_dippla_amp.jpeg';
import projDipplaPci from '@/src/assets/real/proj_dippla_pci.jpeg';
import projDipplaPatines from '@/src/assets/real/proj_dippla_patines.jpeg';
import projScadaManzanillo from '@/src/assets/real/proj_scada_manzanillo.jpeg';
import projTransloaderElite from '@/src/assets/real/proj_transloader_elite.jpeg';
import projPatinSlp from '@/src/assets/real/proj_patin_slp.jpeg';
import projTeleManzanillo from '@/src/assets/real/proj_tele_manzanillo.jpeg';
import projUcl from '@/src/assets/real/proj_ucl.jpeg';
import projCctvGallega from '@/src/assets/real/proj_cctv_gallega.jpeg';
import projIncendioDidipsa from '@/src/assets/real/proj_incendio_didipsa.jpeg';

import clientePemex from '@/src/assets/real/cliente_pemex.jpeg';
import clienteFerromex from '@/src/assets/real/cliente_ferromex.png';
import clienteDippla from '@/src/assets/real/cliente_dippla.jpeg';
import clienteGasopipas from '@/src/assets/real/cliente_gasopipas.jpeg';
import clienteAemsa from '@/src/assets/real/cliente_aemsa.jpeg';
import clienteSagarpa from '@/src/assets/real/cliente_sagarpa.jpeg';
import clienteAje from '@/src/assets/real/cliente_aje.jpeg';
import clienteNieto from '@/src/assets/real/cliente_nieto.jpeg';
import clientePinsa from '@/src/assets/real/cliente_pinsa.jpeg';

import marcaEmerson from '@/src/assets/real/marca_emerson.jpg';
import marcaFmc from '@/src/assets/real/marca_fmc.jpg';
import marcaRecvap from '@/src/assets/real/marca_recvap.jpg';
import marcaMagnetic from '@/src/assets/real/marca_magnetic.jpg';
import marcaClearscada from '@/src/assets/real/marca_clearscada.jpg';
import marcaScazen from '@/src/assets/real/marca_scazen.jpg';
import marcaSchneider from '@/src/assets/real/marca_schneider.jpg';
import marcaScully from '@/src/assets/real/marca_scully.jpg';
import marcaSiemens from '@/src/assets/real/marca_siemens.jpg';

export type ServiceCategory = 'all' | 'automatizacion' | 'medicion' | 'seguridad';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  specs: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  location: string;
  category: Exclude<ServiceCategory, 'all'>;
  specialty: string;
  serviceMatch: string;
  scope: string;
  deliverable: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface ClientItem {
  name: string;
  sector: string;
  logo: string;
}

export interface BrandItem {
  name: string;
  logo: string;
}

export const BRAND_ASSETS = {
  incomexLogoWhite,
  recvapLogoWhite,
  repseLogo,
};

export const HERO_MEDIA = {
  terminal: projDipplaAmp,
  tecnicoReal: tecnicoMultimetroImg,
  scada: projScadaManzanillo,
  skid: projPatinSlp,
};

export const COMPANY_METRICS = [
  {
    value: '15+',
    target: 15,
    suffix: '+',
    label: 'Años de experiencia',
    detail: 'Trayectoria comprobada en hidrocarburos e industria',
  },
  {
    value: '15+',
    target: 15,
    suffix: '+',
    label: 'Socios estratégicos',
    detail: 'Alianzas con fabricantes líderes globales',
  },
  {
    value: '12+',
    target: 12,
    suffix: '+',
    label: 'Proyectos ejecutados',
    detail: 'Instalaciones automatizadas en operación',
  },
  {
    value: '12+',
    target: 12,
    suffix: '+',
    label: 'Servicios especializados',
    detail: 'Ingeniería, control y mantenimiento integral',
  },
];

export const CHARACTERISTICS = [
  {
    number: '01.',
    title: 'Especialización en el sector hidrocarburos',
    description:
      'Diseñamos e integramos soluciones de automatización para terminales de almacenamiento, reparto y entornos industriales críticos, con plena adaptación a cualquier planta productiva.',
  },
  {
    number: '02.',
    title: 'Tecnología de punta e integración total',
    description:
      'Implementamos arquitecturas con equipos certificados de primera línea, unificando instrumentación de campo, PLC, DCS, UCL y plataformas SCADA en sistemas confiables y escalables.',
  },
  {
    number: '03.',
    title: 'Cumplimiento normativo y Anexo 30 y 31 del SAT',
    description:
      'Respondemos a los requerimientos técnicos de cada proyecto cumpliendo estrictamente el Código Fiscal de la Federación, los Anexos 30 y 31 del SAT y las normas de seguridad industrial.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'automatizacion',
    number: '01.',
    title: 'Automatización',
    category: 'automatizacion',
    categoryLabel: 'Automatización y Control',
    summary:
      'Diseño e implementación de tableros de control, arquitecturas PLC/DCS, unidades locales UCL e integración IoT.',
    specs: 'PLC · DCS · UCL · IoT Industrial',
    image: projUcl,
    imageAlt: 'Unidad de Control Local (UCL) configurada en campo por Incomex-Tech',
    capabilities: [
      'Tableros de control fabricados bajo especificación industrial',
      'Control de accesos para instalaciones operativas',
      'Diseño e implementación de sistemas DCS y PLC',
      'Montaje de unidad de control local (UCL)',
      'Implementación y enlace con sistemas SCADA',
      'Integración con sensores de campo y dispositivos IoT',
    ],
  },
  {
    id: 'scada',
    number: '02.',
    title: 'Integración de Sistemas SCADA',
    category: 'automatizacion',
    categoryLabel: 'Automatización y Control',
    summary:
      'Supervisión operativa centralizada con SCADA SCAZEN multiplataforma, reportes de carga/descarga y trazabilidad.',
    specs: 'SCADA SCAZEN · Web & Móvil · Multi-SO',
    image: projScadaManzanillo,
    imageAlt: 'Plataforma SCADA SCAZEN monitoreando tanques verticales en Manzanillo',
    capabilities: [
      'Implementación del sistema SCADA SCAZEN',
      'Plataforma web y móvil para monitoreo continuo',
      'Reportes automatizados de carga y descarga',
      'Generación de información estructurada para facturación',
      'Servicios continuos de soporte y mantenimiento',
      'Independencia de plataforma (multi-sistema operativo)',
    ],
  },
  {
    id: 'controles-volumetricos',
    number: '03.',
    title: 'Controles Volumétricos (SAT)',
    category: 'medicion',
    categoryLabel: 'Medición e Hidrocarburos',
    summary:
      'Sistemas modulares y escalables en estricto apego a los Anexos 30 y 31 del SAT con reportes diarios y mensuales.',
    specs: 'Anexo 30 y 31 SAT · XML/JSON/PDF · Web & Móvil',
    image: projDipplaPatines,
    imageAlt: 'Sistema de control volumétrico y despacho en autotanque en planta DIPPLA',
    capabilities: [
      'Asesoría técnica y normativa conforme a Anexos 30 y 31 del SAT',
      'Arquitectura modular, flexible y escalable',
      'Carga automática de archivos XML y reportes PDF, XML y JSON',
      'Aplicación web y móvil para consulta operativa',
      'Generación de reportes regulatorios e información para facturación',
      'Selección de producto y cálculo de litros totales en tanques',
      'Registro detallado de eventos y alarmas operativas en tiempo real',
    ],
  },
  {
    id: 'patines-medicion',
    number: '04.',
    title: 'Patines de Medición',
    category: 'medicion',
    categoryLabel: 'Medición e Hidrocarburos',
    summary:
      'Diseño y construcción modular con medidores de flujo y densímetros de alta precisión listos para transferencia de custodia.',
    specs: 'Flujo Másico · Densímetros · Diseño Modular',
    image: projPatinSlp,
    imageAlt: 'Patín de carga y descarga instalado en San Luis Potosí por Incomex-Tech',
    capabilities: [
      'Integración transparente a su sistema de monitoreo actual',
      'Diseño y construcción a medida según necesidades del cliente',
      'Entrenamiento y asistencia en la operación de equipos',
      'Mantenimiento preventivo y correctivo especializado',
      'Medidores de flujo, densímetros e instrumentos de alta precisión',
      'Automatización integral de procesos de transferencia',
      'Estructura modular de fácil instalación y expansión',
      'Pleno cumplimiento normativo aplicable',
    ],
  },
  {
    id: 'telemedicion',
    number: '05.',
    title: 'Telemedición',
    category: 'medicion',
    categoryLabel: 'Medición e Hidrocarburos',
    summary:
      'Suministro, configuración y puesta en marcha de sensores e infraestructura de comunicación para tanques verticales.',
    specs: 'Monitoreo Remoto · Sondas · Telemetría',
    image: projTeleManzanillo,
    imageAlt: 'Instrumentación de telemedición en tanque vertical de almacenamiento en Manzanillo',
    capabilities: [
      'Suministro de equipos certificados de telemedición',
      'Instalación de instrumentación de última generación',
      'Configuración y calibración de equipos de telemedición',
      'Puesta en marcha e integración con sistemas existentes',
      'Implementación de monitoreo en tiempo real',
      'Instalación de sensores de nivel, presión y temperatura',
      'Sistemas de medición remota para múltiples sitios',
      'Despliegue de infraestructura de comunicación industrial',
    ],
  },
  {
    id: 'transloaders',
    number: '06.',
    title: 'Transloaders',
    category: 'medicion',
    categoryLabel: 'Medición e Hidrocarburos',
    summary:
      'Diseño y fabricación de equipos de trasvase 24/7 (hasta 500 GPM) con medición fiscal certificada e integración a SCADA.',
    specs: 'Load Skid 200 / 600 / 700 · 500 GPM · SCADA',
    image: projTransloaderElite,
    imageAlt: 'Transloader Load Skid Elite 700 diseñado y construido por Incomex-Tech',
    capabilities: [
      'Integración a su sistema de monitoreo actual',
      'Diseño y construcción de sistemas de trasvase a medida',
      'Capacitación y soporte técnico durante la puesta en marcha',
      'Mantenimiento preventivo y correctivo programado',
      'Integración con sistemas SCADA para monitoreo remoto',
      'Cumplimiento estricto de estándares de seguridad y ambientales',
      'Instrumentación avanzada para control de procesos',
      'Montaje completo de equipos de control y automatización',
    ],
  },
  {
    id: 'mantenimiento-control',
    number: '07.',
    title: 'Mantenimiento y Control',
    category: 'seguridad',
    categoryLabel: 'Seguridad y Mantenimiento',
    summary:
      'Mantenimiento preventivo y correctivo a instalaciones eléctricas, equipos de bombeo, medición y calibración.',
    specs: 'Preventivo & Correctivo · Calibración · Bombeo',
    image: tecnicoMultimetroImg,
    imageAlt: 'Técnico de Incomex-Tech realizando mediciones eléctricas en tablero de control',
    capabilities: [
      'Mantenimiento preventivo y correctivo industrial',
      'Reemplazo oportuno de componentes críticos',
      'Mantenimiento a instalaciones eléctricas industriales',
      'Mantenimiento a equipos de medición y sistemas de bombeo',
      'Calibración y mantenimiento de instrumentos de campo',
      'Optimización de sistemas avanzados de control de procesos',
    ],
  },
  {
    id: 'sistema-cctv',
    number: '08.',
    title: 'Sistema CCTV',
    category: 'seguridad',
    categoryLabel: 'Seguridad y Mantenimiento',
    summary:
      'Videovigilancia industrial resistente a entornos adversos con NVR, visión nocturna y monitoreo remoto en tiempo real.',
    specs: 'NVR Industrial · Visión Nocturna · Monitoreo 24/7',
    image: projCctvGallega,
    imageAlt: 'Centro de monitoreo CCTV en Terminal Marítima Bajos de la Gallega',
    capabilities: [
      'Suministro de cámaras y equipamiento industrial certificado',
      'Instalación de grabadores de video en red (NVR)',
      'Monitoreo remoto en tiempo real desde centro de control',
      'Tecnología de visión nocturna de alto alcance',
      'Almacenamiento y gestión avanzada de respaldos de video',
      'Equipos resistentes a condiciones ambientales adversas',
      'Acondicionamiento técnico para áreas clasificadas y entornos específicos',
      'Control remoto de cámaras PTZ y perímetros',
    ],
  },
  {
    id: 'contra-incendio',
    number: '09.',
    title: 'Sistemas Contra Incendio',
    category: 'seguridad',
    categoryLabel: 'Seguridad y Mantenimiento',
    summary:
      'Redes hidráulicas y eléctricas, detección de humo, calor y llama, cámaras de espuma AFFP y mantenimiento a bombas.',
    specs: 'Detección · Red Hidráulica · Espuma AFFP',
    image: projIncendioDidipsa,
    imageAlt: 'Red hidráulica de sistema contra incendio instalada por Incomex-Tech en DIDIPSA',
    capabilities: [
      'Instalación de detectores de humo, calor y llama',
      'Instalación integral de equipos y monitores contra incendios',
      'Montaje de redes de tuberías (sistemas hidráulicos y eléctricos)',
      'Implementación de alarmas sonoras y visuales',
      'Mantenimiento a equipos y tanques de almacenamiento para bombeo',
      'Instalación y ajuste de bombas, válvulas y cámaras formadoras de espuma',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proyecto-ampliacion-dippla',
    code: 'PRY-01',
    title: 'Ampliación de Planta DIPPLA y Patines de Medición',
    location: 'Amozoc, Puebla · Marzo – Septiembre 2024',
    category: 'medicion',
    specialty: 'Ingeniería Integral · Patines & SCADA',
    serviceMatch: 'Patines de Medición',
    scope:
      'Renovación integral de planta de almacenamiento y distribución de combustibles con diseño mecánico, eléctrico y civil, rehabilitación de 3 patines con control UCL TG5-3000 y sistema de paros de emergencia.',
    deliverable: '3 patines automatizados · Control UCL TG5-3000 y cuarto de control',
    image: projDipplaAmp,
    imageAlt: 'Planta de almacenamiento y patines de medición DIPPLA en Amozoc, Puebla',
    featured: true,
  },
  {
    id: 'proyecto-scada-manzanillo',
    code: 'PRY-02',
    title: 'Sistema SCADA SCAZEN para Tanques Verticales',
    location: 'Manzanillo, Colima',
    category: 'automatizacion',
    specialty: 'Integración SCADA · Telemetría',
    serviceMatch: 'Integración de Sistemas SCADA',
    scope:
      'Implementación de software SCADA SCAZEN 100% web para supervisión y control en tiempo real de tanques verticales de diésel, optimizando la gestión de inventario y la seguridad operativa.',
    deliverable: 'Supervisión web en tiempo real · Control de inventarios y alarmas',
    image: projScadaManzanillo,
    imageAlt: 'Interfaz SCADA SCAZEN de tanques de almacenamiento en Manzanillo',
  },
  {
    id: 'proyecto-transloader-elite',
    code: 'PRY-03',
    title: 'Transloader Load Skid Elite 700 (500 GPM)',
    location: 'Operación 24/7 · Trasvase Certificado',
    category: 'medicion',
    specialty: 'Transloaders · Medición Fiscal',
    serviceMatch: 'Transloaders',
    scope:
      'Diseño y construcción de unidad móvil para transvase continuo de hidrocarburos con capacidad de 500 GPM, succión, trasiego, medición fiscal certificada e impresión local de tickets.',
    deliverable: 'Capacidad 500 GPM · Operación 24/7 con registro fiscal',
    image: projTransloaderElite,
    imageAlt: 'Equipo Transloader Load Skid Elite 700 fabricado por Incomex-Tech',
  },
  {
    id: 'proyecto-patin-slp',
    code: 'PRY-04',
    title: 'Patín de Carga y Descarga de Alta Capacidad',
    location: 'San Luis Potosí',
    category: 'medicion',
    specialty: 'Patines de Medición · Bombeo',
    serviceMatch: 'Patines de Medición',
    scope:
      'Montaje de gabinete de control eléctrico, cableado de las tres tuberías principales, pruebas de hermeticidad, calibración de equipos y verificación de descarga logrando flujo de 1,050 litros por minuto.',
    deliverable: 'Flujo comprobado de 1,050 L/min · Pruebas de hermeticidad y calibración',
    image: projPatinSlp,
    imageAlt: 'Patín de carga y descarga con gabinete eléctrico en San Luis Potosí',
  },
  {
    id: 'proyecto-contraincendio-dippla',
    code: 'PRY-05',
    title: 'Sistema Contraincendio con Cámaras de Espuma AFFP',
    location: 'Planta DIPPLA · Amozoc, Puebla',
    category: 'seguridad',
    specialty: 'Contra Incendio · Tanques Verticales',
    serviceMatch: 'Sistemas Contra Incendio',
    scope:
      'Instalación completa de sistema contraincendio en planta distribuidora: cámaras formadoras de espuma, tanque vertical AFFP, monitores contraincendio, canastillas y pruebas funcionales.',
    deliverable: 'Sistema AFFP completo · Monitores y pruebas funcionales certificadas',
    image: projDipplaPci,
    imageAlt: 'Tanque vertical con red contraincendio y andamios de instalación en DIPPLA',
  },
  {
    id: 'proyecto-ucl-automatizacion',
    code: 'PRY-06',
    title: 'Gabinetes de Unidad de Control Local (UCL)',
    location: 'Terminales de Almacenamiento',
    category: 'automatizacion',
    specialty: 'Automatización · PLC & UCL',
    serviceMatch: 'Automatización',
    scope:
      'Configuración e instalación de gabinetes electrónicos para control automático de arranque/paro de bombas, apertura de válvulas y regulación de flujos y niveles en islas de carga.',
    deliverable: 'Control automático de islas · Detección rápida de fallas en proceso',
    image: projUcl,
    imageAlt: 'Gabinete electrónico de Unidad de Control Local UCL instalado en campo',
  },
  {
    id: 'proyecto-telemedicion-manzanillo',
    code: 'PRY-07',
    title: 'Sistema de Telemedición en Tanques Verticales',
    location: 'Manzanillo · Parral · Veracruz · Amozoc',
    category: 'medicion',
    specialty: 'Telemedición · Sondas de Nivel',
    serviceMatch: 'Telemedición',
    scope:
      'Levantamiento de trayectorias eléctricas de fuerza y señal, aterrizaje de equipos, instalación de sondas de temperatura y configuración de instrumentos de telemedición en tanques verticales.',
    deliverable: 'Medición remota precisa · Cumplimiento normativo de tanques',
    image: projTeleManzanillo,
    imageAlt: 'Equipo de telemedición instalado en domo de tanque vertical en Manzanillo',
  },
  {
    id: 'proyecto-cctv-gallega',
    code: 'PRY-08',
    title: 'Sistema CCTV en Terminal Marítima Bajos de la Gallega',
    location: 'Veracruz · Muelle y Terminal Marítima',
    category: 'seguridad',
    specialty: 'Sistema CCTV · NVR Industrial',
    serviceMatch: 'Sistema CCTV',
    scope:
      'Instalación de 15 cámaras industriales en muelle y bajos de la gallega, fabricación de tubería eléctrica, canalización UTP y configuración de grabador NVR para monitoreo continuo.',
    deliverable: '15 cámaras operativas · Respaldo NVR y cobertura perimetral',
    image: projCctvGallega,
    imageAlt: 'Muro de monitoreo CCTV de 15 cámaras en Terminal Marítima Bajos de la Gallega',
  },
  {
    id: 'proyecto-mantenimiento-tableros',
    code: 'PRY-09',
    title: 'Mantenimiento Eléctrico y Calibración en Campo',
    location: 'Plantas Industriales y TADs',
    category: 'seguridad',
    specialty: 'Mantenimiento y Control · Diagnóstico',
    serviceMatch: 'Mantenimiento y Control',
    scope:
      'Mantenimiento preventivo y correctivo a tableros eléctricos, reemplazo de componentes críticos, inspección de válvulas y bombas, y calibración de detectores e instrumentos de medición.',
    deliverable: 'Continuidad operativa · Diagnóstico eléctrico y calibración certificada',
    image: tecnicoMultimetroImg,
    imageAlt: 'Técnico de Incomex-Tech diagnosticando tablero de control con multímetro digital',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Recepción y análisis de solicitud',
    description:
      'Levantamiento inicial de requerimientos operativos, normativos y alcance técnico del proyecto.',
  },
  {
    step: '02',
    title: 'Investigación y planeación detallada',
    description:
      'Ingeniería conceptual, selección de instrumentación y definición de arquitectura de control.',
  },
  {
    step: '03',
    title: 'Análisis de propuesta con el cliente',
    description:
      'Revisión conjunta de alcances técnicos, cronograma de ejecución y optimización de inversión.',
  },
  {
    step: '04',
    title: 'Evaluación y entrega de proyecto',
    description:
      'Instalación, pruebas de comisionamiento, capacitación operativa y entrega llave en mano.',
  },
];

export const CLIENTS: ClientItem[] = [
  { name: 'PEMEX', sector: 'Hidrocarburos', logo: clientePemex },
  { name: 'Ferromex', sector: 'Logística ferroviaria', logo: clienteFerromex },
  { name: 'DIPPLA', sector: 'Infraestructura industrial', logo: clienteDippla },
  { name: 'GasoPipas', sector: 'Transporte de combustible', logo: clienteGasopipas },
  { name: 'AEMSA', sector: 'Productos energéticos', logo: clienteAemsa },
  { name: 'Energéticos Nieto', sector: 'Distribución energética', logo: clienteNieto },
  { name: 'PINSA', sector: 'Asociado Pemex', logo: clientePinsa },
  { name: 'AJE', sector: 'Manufactura y bebidas', logo: clienteAje },
  { name: 'SAGARPA', sector: 'Sector agroalimentario', logo: clienteSagarpa },
];

export const BRANDS: BrandItem[] = [
  { name: 'Emerson', logo: marcaEmerson },
  { name: 'FMC Technologies', logo: marcaFmc },
  { name: 'RecVap USA', logo: marcaRecvap },
  { name: 'Magnetic Autocontrol', logo: marcaMagnetic },
  { name: 'SCADA Expert ClearSCADA', logo: marcaClearscada },
  { name: 'SCAZEN', logo: marcaScazen },
  { name: 'Schneider Electric', logo: marcaSchneider },
  { name: 'Scully', logo: marcaScully },
  { name: 'Siemens', logo: marcaSiemens },
];

export const CONTACT_INFO = {
  phoneDisplay: '(227) 688-1019',
  phoneHref: 'tel:2276881019',
  whatsappHref: 'https://wa.me/525522710251',
  whatsappDisplay: '+52 55 2271 0251',
  email: 'ventas@incomex-tech.com',
  emails: [
    {
      role: 'Dirección e Ingeniería',
      address: 'ricardo.poblano@incomex-tech.com',
    },
    {
      role: 'Administración',
      address: 'administracion@incomex-tech.com',
    },
    {
      role: 'Ventas y Cotizaciones',
      address: 'ventas@incomex-tech.com',
    },
  ],
  hoursWeek: 'Lunes a viernes · 8:00 AM – 6:00 PM',
  hoursSat: 'Sábados · 8:00 AM – 1:00 PM',
  location: 'Huejotzingo, Puebla, México',
  facebook: 'https://www.facebook.com/IncomexTech',
  facebookHandle: 'Incomex-Tech',
  instagram: 'https://www.instagram.com/incomextech/?igshid=y0n13fysxiz2',
  instagramHandle: '@incomextech',
};
