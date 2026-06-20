export const site = {
  name: 'Vasyl Halushchak',
  handle: 'vasyl.cc',
  role: 'Senior Full-Stack Engineer',
  roleLong: 'Senior Full-Stack Engineer · SaaS Architect',
  email: 'info@vasyl.pw',
  linkedin: 'https://www.linkedin.com/in/vasyl-halushchak-b8113631/',
  location: 'Isernia · Italia',
  available: true,
  tagline: 'Costruisco gestionali cloud, e-commerce e software su misura. Dallo schema del database al deploy.',
  stack: ['Laravel', 'VueJS', 'Livewire', 'FilamentPHP', 'TailwindCSS', 'MySQL', 'Linux'],
} as const;

export const nav = [
  { id: 'home', label: 'Home', key: '1' },
  { id: 'lavori', label: 'Lavori', key: '2' },
  { id: 'profilo', label: 'Profilo', key: '3' },
  { id: 'contatti', label: 'Contatti', key: '4' },
] as const;
