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
  { file: '0ac063cf43554c04b070e480da4a6de3.jpg', name: 'Big Ben', country: 'United Kingdom', rating: '9.3 Γÿà', heroTitle: 'Royal Heritage', heroSubtitle: 'London Calling' },
  { file: '0cd70f09a5b1fad7ee9f29f12dbd1c5e.jpg', name: 'Shibuya Crossing', country: 'Japan', rating: '9.1 Γÿà', heroTitle: 'Neon Nights', heroSubtitle: 'Tokyo Lights' },
  { file: '7c6c5cdb3979e2b4bcbebb538fd1757b.jpg', name: 'Iguazu Falls', country: 'Argentina', rating: '9.3 Γÿà', heroTitle: 'Nature\'s Power', heroSubtitle: 'Iguazu Falls' },
];

export const HERO_DESTINATIONS: Destination[] = [
  {
    id: 'paris',
    name: 'Eiffel Tower',
    country: 'France',
    rating: '9.4 Γÿà',
    heroTitle: 'City of Light',
    heroSubtitle: 'Parisian Elegance',
    backgroundImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
  },
  ...SLIDER_IMAGES.map((s, i) => ({
    id: `slide-${i}`,
    name: s.name,
    country: s.country,
    rating: s.rating,
    heroTitle: s.heroTitle,
    heroSubtitle: s.heroSubtitle,
    backgroundImage: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80',
    ][i],
    cardImage: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80',
    ][i],
  })),
  {
    id: 'rome',
    name: 'Colosseum',
    country: 'Italy',
    rating: '9.3 Γÿà',
    heroTitle: 'Eternal City',
    heroSubtitle: 'Roman Grandeur',
    backgroundImage: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&q=80',
  },
];
