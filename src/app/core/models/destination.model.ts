export interface Destination {
  id: string;
  name: string;
  country: string;
  rating: string;
  backgroundImage: string;
  cardImage: string;
}

export const HERO_DESTINATIONS: Destination[] = [
  {
    id: 'hawaii',
    name: 'Hawaii Beach',
    country: 'USA Hawaii',
    rating: '7.8 ★',
    backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
  },
  {
    id: 'arctic',
    name: 'Arctic Wonders',
    country: 'Norway',
    rating: '8.5 ★',
    backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80',
  },
  {
    id: 'bali',
    name: 'Bali Paradise',
    country: 'Indonesia',
    rating: '9.2 ★',
    backgroundImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  },
  {
    id: 'maldives',
    name: 'Maldives Luxury',
    country: 'Maldives',
    rating: '9.0 ★',
    backgroundImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
  },
  {
    id: 'santorini',
    name: 'Santorini Dreams',
    country: 'Greece',
    rating: '8.8 ★',
    backgroundImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
  },
];