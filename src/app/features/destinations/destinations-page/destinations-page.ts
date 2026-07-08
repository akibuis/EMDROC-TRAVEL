import { Component } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  description: string;
  image: string;
  cols: string;
}

@Component({
  selector: 'app-destinations-page',
  imports: [PageHeader],
  templateUrl: './destinations-page.html',
  styleUrl: './destinations-page.css',
})
export class DestinationsPage {
  protected readonly destinations: Destination[] = [
    {
      id: 'dubai',
      name: 'Dubai, UAE',
      subtitle: 'Luxury Corporate',
      category: 'Luxury Corporate',
      categoryColor: 'bg-brand-teal/20 text-brand-teal',
      description: 'An EMDROC Experience: Exclusive boardroom access at DIFC paired with high-altitude dining and desert dunes navigation.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      cols: 'md:col-span-8',
    },
    {
      id: 'swiss-alps',
      name: 'Swiss Alps',
      subtitle: 'Advisory Retreats',
      category: 'Advisory Retreats',
      categoryColor: 'bg-brand-accent/20 text-brand-accent',
      description: 'Precision planning in the peaks. Private chalets and confidential strategy environments.',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
      cols: 'md:col-span-4',
    },
    {
      id: 'maldives',
      name: 'Maldives',
      subtitle: 'Executive Escape',
      category: 'Executive Escape',
      categoryColor: 'bg-[#a6cdd9]/20 text-[#a6cdd9]',
      description: 'Total digital detox. Private island coordination with secure logistics.',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      cols: 'md:col-span-4',
    },
    {
      id: 'santorini',
      name: 'Santorini',
      subtitle: 'Refined Culture',
      category: 'Refined Culture',
      categoryColor: 'bg-brand-teal/20 text-brand-teal',
      description: 'Asymmetric beauty meets structural advisory. Private yacht charters only.',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      cols: 'md:col-span-4',
    },
    {
      id: 'serengeti',
      name: 'Serengeti',
      subtitle: 'Expeditionary Luxury',
      category: 'Expeditionary Luxury',
      categoryColor: 'bg-brand-accent/20 text-brand-accent',
      description: 'Unfiltered wilderness with five-star encampments. Tailored wildlife advisory.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      cols: 'md:col-span-4',
    },
  ];
}
