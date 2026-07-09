import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ArticleContent {
  id: string;
  title: string;
  heroImage: string;
  category: string;
  date: string;
  readTime: string;
  tag: string;
  summary: string;
  blocks: ContentBlock[];
}

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'blockquote'; text: string; author: string; title: string }
  | { type: 'imageGrid'; images: { url: string; alt: string }[] };

interface TrendingLink {
  label: string;
  time: string;
  title: string;
}

interface RelatedArticle {
  title: string;
  image: string;
  tag: string;
  excerpt: string;
}

const ARTICLES: ArticleContent[] = [
  {
    id: 'featured',
    title: 'The Future of Post-Pandemic Corporate Travel in Africa',
    heroImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
    category: 'Advisory Insight',
    date: 'March 15, 2024',
    readTime: '8 min read',
    tag: 'Strategy',
    summary:
      'As global markets recalibrate, the African corporate travel landscape is witnessing a profound transformation.',
    blocks: [
      {
        type: 'paragraph',
        text: 'As global markets recalibrate, the African corporate travel landscape is witnessing a profound transformation. No longer defined solely by mining and energy corridors, a new era of tech-driven expansion and regional integration is demanding a more sophisticated, agile approach to logistics.',
      },
      {
        type: 'paragraph',
        text: "The traditional hubs of Lagos, Nairobi, and Johannesburg are being supplemented by emerging tech ecosystems in Kigali and Accra. For the modern C-suite executive, travel is no longer a routine expense but a strategic lever. Reliability, security, and high-stakes precision are the new benchmarks of success in cross-border operations.",
      },
      {
        type: 'blockquote',
        text: 'EMDROC has transformed our regional expansion strategy. Their attention to detail in high-stakes logistics is simply unmatched in the West African market.',
        author: 'Olumide Adebayo',
        title: 'COO, West-Atlantic Conglomerate',
      },
      {
        type: 'heading',
        text: 'Strategic Decoupling of Logistics',
      },
      {
        type: 'paragraph',
        text: "Infrastructure gaps once viewed as insurmountable barriers are now being bridged by private aviation and bespoke concierge services. Our data indicates a 40% increase in demand for 'seamless corridor' travel, where the transition from private terminal to boardroom is managed as a single, uninterrupted workflow.",
      },
      {
        type: 'imageGrid',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
            alt: 'Modern airport terminal at twilight',
          },
          {
            url: 'https://images.unsplash.com/photo-1544507888-56d73eb6046e?w=600&q=80',
            alt: 'Luxury travel itinerary on marble',
          },
        ],
      },
      {
        type: 'paragraph',
        text: "Moving forward, the integration of real-time security intelligence with premium hospitality will differentiate market leaders. At EMDROC, we are not just booking flights; we are architecting the physical connectivity of Africa's future leaders.",
      },
    ],
  },
  {
    id: '2',
    title: 'Mastering the Art of Seamless Border Crossings',
    heroImage: 'https://images.unsplash.com/photo-1556388158-7ea5b7e71d5c?w=1200&q=80',
    category: 'Travel Logistics',
    date: 'June 12, 2024',
    readTime: '5 min read',
    tag: 'Logistics',
    summary: 'Expert tips on navigating visa-on-arrival protocols and fast-track clearance.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Navigating Africa\'s diverse border protocols requires more than just a valid passport. The modern executive must be equipped with real-time intelligence on visa policies, health requirements, and diplomatic clearances that vary dramatically from one jurisdiction to the next.',
      },
      {
        type: 'paragraph',
        text: 'Our analysis of 2,000+ cross-border movements in Q1 2024 reveals that pre-cleared travelers save an average of 4.7 hours per trip. This is time that directly impacts deal flow and operational readiness.',
      },
    ],
  },
  {
    id: '3',
    title: 'Sustainable Luxury: The Rise of Eco-Advisory',
    heroImage: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=80',
    category: 'Hospitality',
    date: 'June 08, 2024',
    readTime: '8 min read',
    tag: 'Sustainability',
    summary: 'Why the world\'s leading hotel chains are prioritizing carbon-neutrality.',
    blocks: [
      {
        type: 'paragraph',
        text: 'The intersection of luxury hospitality and environmental stewardship is no longer a contradiction. Leading hotel chains across Africa are redefining what it means to offer a 5-star experience that is also carbon-neutral.',
      },
    ],
  },
  {
    id: '4',
    title: 'The Curated Carry-On: Essentials for the Global CMO',
    heroImage: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=1200&q=80',
    category: 'Lifestyle',
    date: 'May 30, 2024',
    readTime: '4 min read',
    tag: 'Lifestyle',
    summary: 'From tech safeguards to wellness supplements, we audit the kits of frequent travelers.',
    blocks: [
      {
        type: 'paragraph',
        text: 'What a CMO carries in their carry-on reveals as much about their strategy as their boardroom presentation. We examined the travel kits of 50 global marketing leaders to identify the essentials that keep them productive at 35,000 feet.',
      },
    ],
  },
];

const TRENDING: TrendingLink[] = [
  {
    label: 'Logistics',
    time: '5 min',
    title: 'The New Silk Road: East African Hubs',
  },
  {
    label: 'Security',
    time: '12 min',
    title: 'Cyber-Security for Executive Enclaves',
  },
  {
    label: 'Hospitality',
    time: '7 min',
    title: 'Redefining Luxury in the Sahel',
  },
];

const RELATED: RelatedArticle[] = [
  {
    title: 'Regenerative Hospitality in Sub-Saharan Frontiers',
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800&q=80',
    tag: 'Sustainability',
    excerpt: 'Exploring eco-luxury retreats that blend conservation with corporate retreat programming.',
  },
  {
    title: 'The Protocol of Discretion: Security in Nairobi',
    image: '',
    tag: 'Concierge',
    excerpt: 'Understanding the nuances of high-profile movement in East Africa\'s economic heart.',
  },
];

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetail {
  private route = inject(ActivatedRoute);

  protected articles = ARTICLES;
  protected trending = TRENDING;
  protected related = RELATED;

  protected get article(): ArticleContent | undefined {
    const id = this.route.snapshot.paramMap.get('id');
    return this.articles.find((a) => a.id === id);
  }

  protected get snippet(): string {
    return this.article?.summary ?? '';
  }
}
