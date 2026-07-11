import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { Cta } from '../../../shared/components/cta/cta';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  authorInitials: string;
  category: string;
  readTime: string;
}

@Component({
  selector: 'app-blog-page',
  imports: [RouterLink, PageHeader, Cta],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.css',
})
export class BlogPage {
  protected readonly heroImage = '/about/lagos-aerial.jpg';

  protected readonly articles: Article[] = [
    {
      id: 'featured',
      title: 'The Silent Ascent: Redefining Ultra-Private Corporate Aviation in 2025',
      excerpt: 'In an era where time is the ultimate currency, the world\'s elite are pivoting toward decentralized travel logistics. Explore how the next generation of C-suite mobility merges sovereign security with boutique hospitality.',
      image: '/blog/corporate-aviation.jpg',
      date: 'Oct 12, 2024',
      author: 'EMDROC Editorial',
      authorInitials: 'EE',
      category: 'Featured Insight',
      readTime: '8 min read',
    },
    {
      id: '2',
      title: 'The Vertical Frontier: Neo-Luxury in the Middle Eastern Hubs',
      excerpt: 'How urban infrastructure is evolving to accommodate the seamless transition from international transit to high-stakes boardroom environments.',
      image: '/blog/dubai-luxury.jpg',
      date: 'October 05, 2024',
      author: 'Emeka Okafor',
      authorInitials: 'EO',
      category: 'Destination Spotlights',
      readTime: '6 min read',
    },
    {
      id: '3',
      title: 'Risk Mitigation in Global Executive Mobility',
      excerpt: 'A strategic framework for protecting human capital during complex multi-national itineraries in volatile economic climates.',
      image: '/about/business-handshake.jpg',
      date: 'September 28, 2024',
      author: 'Sarah Bakare',
      authorInitials: 'SB',
      category: 'Corporate Advisory',
      readTime: '7 min read',
    },
    {
      id: '4',
      title: 'The ESG Pivot: Sustainable Private Long-Haul Travel',
      excerpt: 'Analyzing the shift towards carbon-neutral flight protocols and how the corporate sector is leading the sustainability charge.',
      image: '/blog/sustainable-nature.jpg',
      date: 'September 15, 2024',
      author: 'John Doe',
      authorInitials: 'JD',
      category: 'Industry Trends',
      readTime: '5 min read',
    },
    {
      id: '5',
      title: 'Beyond the Boardroom: Luxury Isolation Retreats',
      excerpt: 'Why today\'s CEOs are opting for extreme privacy and natural immersion for their strategic quarterly planning sessions.',
      image: '/blog/luxury-retreat.jpg',
      date: 'August 30, 2024',
      author: 'Chioma Adewale',
      authorInitials: 'CA',
      category: 'Executive Logistics',
      readTime: '6 min read',
    },
    {
      id: '6',
      title: 'The Hybrid Traveler: Blending Work and Heritage',
      excerpt: 'Examining the rise of \'Heritage Travel\' among senior executives—tracing roots while maintaining global operational control.',
      image: '/blog/african-heritage.jpg',
      date: 'August 12, 2024',
      author: 'Kofi Mensah',
      authorInitials: 'KM',
      category: 'Industry Trends',
      readTime: '5 min read',
    },
  ];
}
