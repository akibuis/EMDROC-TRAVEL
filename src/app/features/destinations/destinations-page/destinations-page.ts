import { Component, inject } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { SeoService } from '../../../core/services/seo.service';

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
      image: '/Hero-slider/0cd70f09a5b1fad7ee9f29f12dbd1c5e.jpg',
      cols: 'md:col-span-8',
    },
    {
      id: 'swiss-alps',
      name: 'Swiss Alps',
      subtitle: 'Advisory Retreats',
      category: 'Advisory Retreats',
      categoryColor: 'bg-brand-accent/20 text-brand-accent',
      description: 'Precision planning in the peaks. Private chalets and confidential strategy environments.',
      image: '/Hero-slider/7c6c5cdb3979e2b4bcbebb538fd1757b.jpg',
      cols: 'md:col-span-4',
    },
    {
      id: 'maldives',
      name: 'Maldives',
      subtitle: 'Executive Escape',
      category: 'Executive Escape',
      categoryColor: 'bg-[#a6cdd9]/20 text-[#a6cdd9]',
      description: 'Total digital detox. Private island coordination with secure logistics.',
      image: '/Hero-slider/ffa611281d20c406337ae73729a34b92.jpg',
      cols: 'md:col-span-4',
    },
    {
      id: 'santorini',
      name: 'Santorini',
      subtitle: 'Refined Culture',
      category: 'Refined Culture',
      categoryColor: 'bg-brand-teal/20 text-brand-teal',
      description: 'Asymmetric beauty meets structural advisory. Private yacht charters only.',
      image: '/about/modern-office-building.jpg',
      cols: 'md:col-span-4',
    },
    {
      id: 'serengeti',
      name: 'Serengeti',
      subtitle: 'Expeditionary Luxury',
      category: 'Expeditionary Luxury',
      categoryColor: 'bg-brand-accent/20 text-brand-accent',
      description: 'Unfiltered wilderness with five-star encampments. Tailored wildlife advisory.',
      image: '/about/businessman-phone.jpg',
      cols: 'md:col-span-4',
    },
  ];

  constructor() {
    inject(SeoService).setData({
      title: 'Destinations',
      description: 'Explore EMDROC\'s curated destinations — Dubai, Swiss Alps, Maldives, Santorini, and Serengeti — for luxury corporate travel and executive retreats.',
      url: 'https://emdroc.com/destinations',
      type: 'website',
    });
  }
}
