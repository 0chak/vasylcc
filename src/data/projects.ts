export type Project = {
  id: string;
  index: string;
  name: string;
  url: string;
  status: 'live' | 'soon';
  year: string;
  tag: string;
  description: string;
  stack: string[];
  role: string;
  isCompany?: boolean;
};

export const projects: Project[] = [
  {
    id: 'hydralabs',
    index: '01',
    name: 'HydraLabs',
    url: 'https://hydralabs.it',
    status: 'live',
    year: '2022 →',
    tag: '',
    description:
      'Software house che fondo e dirigo. Sviluppo web su misura, gestionali cloud ed e-commerce ad alte prestazioni — dall’analisi dei requisiti alla messa in produzione, su infrastruttura gestita internamente.',
    stack: ['Laravel', 'VueJS', 'TailwindCSS', 'Docker', 'Linux'],
    role: 'Founder · Full Stack',
    isCompany: true,
  },
  {
    id: 'labeldoo',
    index: '02',
    name: 'Labeldoo',
    url: 'https://labeldoo.com',
    status: 'live',
    year: '2019 →',
    tag: 'Preventivatore online per etichette',
    description:
      'Configuratore di preventivi in tempo reale per la stampa di etichette. Backend ibrido WooCommerce + Laravel, front-end reattivo in VueJS. Sviluppo continuo di funzionalità, integrazioni e ottimizzazioni di performance.',
    stack: ['Laravel', 'VueJS', 'WooCommerce', 'Livewire', 'TailwindCSS'],
    role: 'Full Stack · Webmaster',
  },
  {
    id: 'negestionale',
    index: '03',
    name: 'NeGestionale',
    url: 'https://negestionale.it',
    status: 'live',
    year: '2022 →',
    tag: 'SaaS noleggio & gestione flotte',
    description:
      'SaaS multi-tenant per società di noleggio veicoli: gestione flotte e manutenzioni, tracciamento GPS in tempo reale, pricing dinamico, contratti PDF, abbonamenti Stripe e API REST di prenotazione pubblica per web/mobile.',
    stack: ['Laravel', 'Filament', 'Inertia', 'Stripe', 'MapLibre'],
    role: 'Full Stack · Architetto',
  },
  {
    id: 'molihost',
    index: '04',
    name: 'Molihost',
    url: 'https://molihost.com',
    status: 'live',
    year: '2022 →',
    tag: 'Hosting cloud ad alte prestazioni',
    description:
      'Piattaforma di hosting cloud che progetto e gestisco: server Linux con servizi dockerizzati, deploy e backup automatici, ottimizzata per app Laravel e siti WordPress dei clienti.',
    stack: ['Linux', 'Docker', 'Nginx', 'Cloudflare', 'MySQL'],
    role: 'Founder · DevOps',
  },
  {
    id: 'cgs',
    index: '05',
    name: 'CGS',
    url: '#cgs',
    status: 'soon',
    year: '2022 →',
    tag: 'Spedizioni multi-corriere',
    description:
      'Piattaforma di spedizioni che aggrega GLS, BRT, SDA, DPD, DHL e Amazon: generazione automatica di lettere di vettura/manifest PDF, etichette QR, tracking ed elaborazione dati Excel↔XML.',
    stack: ['Laravel', 'Filament', 'Guzzle', 'Sentry'],
    role: 'Full Stack',
  },
  {
    id: 'kivato',
    index: '06',
    name: 'Kivato',
    url: '#kivato',
    status: 'soon',
    year: 'In arrivo',
    tag: 'Piattaforma gestionale modulare',
    description:
      'Piattaforma modulare di gestione aziendale: magazzino, CRM, documenti e fatturazione. Architettura a moduli indipendenti su Laravel 12 e pannello di amministrazione Filament 4.',
    stack: ['Laravel 12', 'Filament 4', 'Livewire', 'MySQL'],
    role: 'Founder · Full Stack',
  },
];
