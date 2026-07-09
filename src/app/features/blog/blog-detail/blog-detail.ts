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
    summary: 'Expert tips on navigating visa-on-arrival protocols and fast-track clearance for high-frequency travelers across West Africa.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Navigating Africa\'s diverse border protocols requires more than just a valid passport. The modern executive must be equipped with real-time intelligence on visa policies, health requirements, and diplomatic clearances that vary dramatically from one jurisdiction to the next.',
      },
      {
        type: 'paragraph',
        text: 'Our analysis of 2,000+ cross-border movements in Q1 2024 reveals that pre-cleared travelers save an average of 4.7 hours per trip. This is time that directly impacts deal flow and operational readiness. The era of the "hassle-free corridor" is no longer a luxury — it\'s a competitive necessity.',
      },
      {
        type: 'blockquote',
        text: 'The difference between a deal won and a deal lost often comes down to whether your executive arrives fresh and prepared, or frazzled and delayed. Border intelligence is now a boardroom priority.',
        author: 'Chioma Eze',
        title: 'VP Operations, Pan-African Capital Group',
      },
      {
        type: 'heading',
        text: 'The Rise of Fast-Track Clearance Programs',
      },
      {
        type: 'paragraph',
        text: 'Countries like Rwanda, Kenya, and Ghana have pioneered digital pre-clearance systems that allow enrolled executives to bypass traditional immigration lines entirely. These programs, once reserved for diplomats, are now accessible to frequent business travelers through accredited concierge services.',
      },
      {
        type: 'imageGrid',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80',
            alt: 'Modern airport immigration hall with digital kiosks',
          },
          {
            url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
            alt: 'Global network connections map',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'EMDROC\'s proprietary clearance tracking system monitors real-time policy changes across 22 African jurisdictions, ensuring our clients\' itineraries are never disrupted by bureaucratic surprises. From visa-on-arrival letters to airport fast-track meeters, every detail is pre-arranged.',
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
    summary: 'Why the world\'s leading hotel chains are prioritizing carbon-neutrality without compromising on the 5-star experience.',
    blocks: [
      {
        type: 'paragraph',
        text: 'The intersection of luxury hospitality and environmental stewardship is no longer a contradiction. Leading hotel chains across Africa are redefining what it means to offer a 5-star experience that is also carbon-neutral.',
      },
      {
        type: 'paragraph',
        text: 'From solar-powered safari lodges in the Maasai Mara to zero-waste urban hotels in Cape Town, the continent is emerging as a laboratory for sustainable luxury. The shift is not merely philosophical — it is being driven by C-suite travelers who increasingly demand that their accommodation reflects their corporate ESG commitments.',
      },
      {
        type: 'blockquote',
        text: 'Our clients no longer ask just about thread counts and room service menus. They want to know our carbon offset programs, our water recycling ratios, and our community employment impact. Sustainability is the new luxury standard.',
        author: 'James Omondi',
        title: 'Director of Hospitality, EMDROC Concierge',
      },
      {
        type: 'heading',
        text: 'Certifications That Matter',
      },
      {
        type: 'paragraph',
        text: 'The landscape of eco-certifications can be bewildering. Our advisory team has curated a shortlist of properties that meet the Gold Standard — verified carbon neutrality, local sourcing exceeding 60%, and demonstrable community investment. These are not marketing claims but independently audited benchmarks.',
      },
      {
        type: 'imageGrid',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80',
            alt: 'Eco-luxury safari lodge overlooking savannah',
          },
          {
            url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80',
            alt: 'Lush green forest canopy from above',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'As COP commitments trickle down to corporate travel policy, we anticipate that by 2026, over 70% of premium corporate travel bookings will include a sustainability audit. EMDROC is positioning at the forefront of this transformation, offering clients a seamless way to align their travel footprint with their environmental values.',
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
    summary: 'From tech safeguards to wellness supplements, we audit the kits of the world\'s most frequent business travelers.',
    blocks: [
      {
        type: 'paragraph',
        text: 'What a CMO carries in their carry-on reveals as much about their strategy as their boardroom presentation. We examined the travel kits of 50 global marketing leaders to identify the essentials that keep them productive at 35,000 feet.',
      },
      {
        type: 'paragraph',
        text: 'The findings challenged our assumptions. While tech gadgets dominated — noise-cancelling headphones, portable monitors, and multi-device charging hubs were universal — the unexpected commonality was a focus on bio-optimization: supplements, compression wear, and hydration systems designed to combat the cognitive toll of back-to-back long-haul flights.',
      },
      {
        type: 'blockquote',
        text: 'I treat my body like I treat my balance sheet. Every hour of jet lag costs my company measurable cognitive performance. My carry-on is my most important business asset.',
        author: 'Aisha Diallo',
        title: 'CMO, Helios Media Group',
      },
      {
        type: 'heading',
        text: 'The New Trinity: Tech, Wellness, Security',
      },
      {
        type: 'paragraph',
        text: 'Three categories dominated every kit we audited. First, cybersecurity — portable VPN routers and encrypted SSDs were universal. Second, circadian management — blue-light blocking glasses, melatonin regimens, and apps that algorithmically adjust sleep schedules. Third, the analog edge — leather-bound notebooks and premium pens, a surprising constant among digital natives.',
      },
      {
        type: 'imageGrid',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
            alt: 'Leather travel accessories on dark marble',
          },
          {
            url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80',
            alt: 'Minimalist sneakers and travel gear',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'For the CMO who needs to arrive ready to present, the carry-on is not an afterthought — it is a strategic investment. EMDROC now offers a pre-flight consultation service that audits and optimizes our clients\' travel kits based on destination, duration, and mission criticality.',
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
