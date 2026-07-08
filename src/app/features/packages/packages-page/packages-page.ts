import { Component } from '@angular/core';
import { Package } from '../../../core/models';
import { PageHeader } from '../../../shared/components/page-header/page-header';

@Component({
  selector: 'app-packages-page',
  imports: [PageHeader],
  templateUrl: './packages-page.html',
  styleUrl: './packages-page.css',
})
export class PackagesPage {
  protected readonly packages: Package[] = [
    { id: 'eu-explorer', title: 'European Explorer', destination: 'Multi-City', duration: '12 Days / 11 Nights', price: 4500, currency: 'USD', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80', highlights: [], isFeatured: true },
    { id: 'dubai-luxury', title: 'Dubai Luxury Escape', destination: 'Dubai, UAE', duration: '7 Days / 6 Nights', price: 3200, currency: 'USD', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', highlights: [], isFeatured: true },
    { id: 'safari-kenya', title: 'Kenya Safari Adventure', destination: 'Nairobi, Kenya', duration: '10 Days / 9 Nights', price: 3800, currency: 'USD', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80', highlights: [], isFeatured: false },
    { id: 'tokyo-wonders', title: 'Tokyo Wonders', destination: 'Tokyo, Japan', duration: '8 Days / 7 Nights', price: 4100, currency: 'USD', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', highlights: [], isFeatured: false },
    { id: 'santorini-romance', title: 'Santorini Romantic Getaway', destination: 'Santorini, Greece', duration: '6 Days / 5 Nights', price: 2900, currency: 'USD', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', highlights: [], isFeatured: true },
    { id: 'bali-retreat', title: 'Bali Wellness Retreat', destination: 'Bali, Indonesia', duration: '9 Days / 8 Nights', price: 2600, currency: 'USD', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', highlights: [], isFeatured: false },
  ];
}
