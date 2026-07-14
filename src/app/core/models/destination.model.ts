export interface Destination {
  id: string;
  name: string;
  country: string;
  rating: string;
  heroTitle: string;
  heroSubtitle: string;
  backgroundImage: string;
  cardImage: string;
}

const SLIDER_IMAGES: { file: string; name: string; country: string; rating: string; heroTitle: string; heroSubtitle: string }[] = [
  { file: '0ac063cf43554c04b070e480da4a6de3.jpg', name: 'Global Summit', country: 'Singapore', rating: '9.2 ★', heroTitle: 'Connect Globally', heroSubtitle: 'Corporate Summit' },
  { file: '0cd70f09a5b1fad7ee9f29f12dbd1c5e.jpg', name: 'Desert Oasis', country: 'Dubai', rating: '9.1 ★', heroTitle: 'Experience Dubai', heroSubtitle: 'Desert Oasis' },
  { file: '7c6c5cdb3979e2b4bcbebb538fd1757b.jpg', name: 'Mountain Escape', country: 'Switzerland', rating: '9.0 ★', heroTitle: 'Conquer the Alps', heroSubtitle: 'Mountain Escape' },
  { file: 'ffa611281d20c406337ae73729a34b92.jpg', name: 'Golden Horizon', country: 'Maldives', rating: '8.8 ★', heroTitle: 'Sunset Dreams', heroSubtitle: 'Golden Horizon' },
];

export const HERO_DESTINATIONS: Destination[] = [
  {
    id: 'bali',
    name: 'Bali Paradise',
    country: 'Indonesia',
    rating: '9.2 ★',
    heroTitle: 'Discover Bali',
    heroSubtitle: 'Tropical Paradise',
    backgroundImage: '/Hero-slider/0ac063cf43554c04b070e480da4a6de3.jpg',
    cardImage: '/Hero-slider/0ac063cf43554c04b070e480da4a6de3.jpg',
  },
  ...SLIDER_IMAGES.map((s, i) => ({
    id: `slide-${i}`,
    name: s.name,
    country: s.country,
    rating: s.rating,
    heroTitle: s.heroTitle,
    heroSubtitle: s.heroSubtitle,
    backgroundImage: `/Hero-slider/${s.file}`,
    cardImage: `/Hero-slider/${s.file}`,
  })),
];