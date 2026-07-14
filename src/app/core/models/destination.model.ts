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

export const HERO_DESTINATIONS: Destination[] = [
  {
    id: 'paris',
    name: 'Eiffel Tower',
    country: 'France',
    rating: '9.4 ★',
    heroTitle: 'Book Paris Now',
    heroSubtitle: 'Iconic Escape Awaits',
    backgroundImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
  },
  {
    id: 'london',
    name: 'Big Ben',
    country: 'United Kingdom',
    rating: '9.3 ★',
    heroTitle: 'Rule the City',
    heroSubtitle: 'London Awaits You',
    backgroundImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
  },
  {
    id: 'tokyo',
    name: 'Shibuya Crossing',
    country: 'Japan',
    rating: '9.1 ★',
    heroTitle: 'Own the Night',
    heroSubtitle: 'Tokyo Calling',
    backgroundImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
  },
  {
    id: 'iguazu',
    name: 'Iguazu Falls',
    country: 'Argentina',
    rating: '9.3 ★',
    heroTitle: 'Witness Majesty',
    heroSubtitle: 'Falls of Wonder',
    backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80',
  },
  {
    id: 'rome',
    name: 'Colosseum',
    country: 'Italy',
    rating: '9.3 ★',
    heroTitle: 'Live the Legacy',
    heroSubtitle: 'Rome Beckons',
    backgroundImage: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&q=80',
  },
  {
    id: 'serengeti',
    name: 'Serengeti Plains',
    country: 'Tanzania',
    rating: '9.7 ★',
    heroTitle: 'Roam the Wild',
    heroSubtitle: 'Safari Awaits',
    backgroundImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
  },
  {
    id: 'giza',
    name: 'Pyramids of Giza',
    country: 'Egypt',
    rating: '9.6 ★',
    heroTitle: 'Unlock Eternity',
    heroSubtitle: 'Egypt Calls',
    backgroundImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=80',
  },
  {
    id: 'kenya-safari',
    name: 'Luxury Safari Lodge',
    country: 'Kenya',
    rating: '9.5 ★',
    heroTitle: 'Unwind in the Wild',
    heroSubtitle: 'Kenya Beckons',
    backgroundImage: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80',
  },
];