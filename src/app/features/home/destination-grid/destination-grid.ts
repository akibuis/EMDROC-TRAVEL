import { Component } from '@angular/core';

interface Destination {
  id: string;
  name: string;
  tag: string;
  image: string;
  description: string;
  featured: boolean;
}

@Component({
  selector: 'app-destination-grid',
  imports: [],
  templateUrl: './destination-grid.html',
  styleUrl: './destination-grid.css',
})
export class DestinationGrid {
  protected readonly destinations: Destination[] = [
    {
      id: 'dubai',
      name: 'Dubai: The Corporate Oasis',
      tag: 'Middle East',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      description: 'Seamless business integration meeting world-class leisure in the heart of the desert.',
      featured: true,
    },
    {
      id: 'paris',
      name: 'Parisian Elegance',
      tag: 'Europe',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      description: '',
      featured: false,
    },
    {
      id: 'maldives',
      name: 'Maldivean Retreats',
      tag: 'Island Paradise',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
      description: '',
      featured: false,
    },
    {
      id: 'santorini',
      name: 'Santorini Dreams',
      tag: 'Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
      description: '',
      featured: false,
    },
    {
      id: 'bali',
      name: 'Bali Paradise',
      tag: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
      description: '',
      featured: false,
    },
  ];

  protected get featured(): Destination | undefined {
    return this.destinations.find(d => d.featured);
  }

  protected get small(): Destination[] {
    return this.destinations.filter(d => !d.featured);
  }
}
