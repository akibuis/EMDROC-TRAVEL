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
      image: '/Hero-slider/0cd70f09a5b1fad7ee9f29f12dbd1c5e.jpg',
      description: 'Seamless business integration meeting world-class leisure in the heart of the desert.',
      featured: true,
    },
    {
      id: 'paris',
      name: 'Parisian Elegance',
      tag: 'Europe',
      image: '/Hero-slider/0ac063cf43554c04b070e480da4a6de3.jpg',
      description: '',
      featured: false,
    },
    {
      id: 'maldives',
      name: 'Maldivean Retreats',
      tag: 'Island Paradise',
      image: '/Hero-slider/ffa611281d20c406337ae73729a34b92.jpg',
      description: '',
      featured: false,
    },
    {
      id: 'santorini',
      name: 'Santorini Dreams',
      tag: 'Greece',
      image: '/Hero-slider/7c6c5cdb3979e2b4bcbebb538fd1757b.jpg',
      description: '',
      featured: false,
    },
    {
      id: 'bali',
      name: 'Bali Paradise',
      tag: 'Indonesia',
      image: '/about/modern-office-building.jpg',
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
