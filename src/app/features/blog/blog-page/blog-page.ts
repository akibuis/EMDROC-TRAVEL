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
  protected readonly heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiRICT3aK-2WPc-NWj-f8dic9_GYmp_kjXq0kiSY0kLQ0_27wzrvLFxVonNXMWe2sNDNj5G6uJmmu7Ufa6ze4bZKj7qoR3KzQnCbIErzZAS-HrMQzjEH5ycH98gJFISBo_IyHnVIGsqCXMZV_xRmwdvpwczj9m1JSc9xYHe0c339UFt1J1vx-rio1AP2rKwkT8_Ei-6hCJbMIKdz7pq8MySm3mGxsn9KtxGgEXjvlzMQcHRh7pr_ugLQ';

  protected readonly articles: Article[] = [
    {
      id: 'featured',
      title: 'The Silent Ascent: Redefining Ultra-Private Corporate Aviation in 2025',
      excerpt: 'In an era where time is the ultimate currency, the world\'s elite are pivoting toward decentralized travel logistics. Explore how the next generation of C-suite mobility merges sovereign security with boutique hospitality.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGYKa2HL3j6b1zaJzwv1KrcfWVglziv9_xc7DQE-h92OSMxkYgpPVYD8EaQD_o8Vwdgam9M1uSSWpbtSTZU_ORJDpBqNQB2kxg-ObyPLi0UYd4oRRWlWzYEGK-q9MfhYoAA73mBc7k2Iy86Y6yId4xC_3h9iRB9wB8cmj1VC4rAaBmN1Ry44Uqtw2oudlE9wiMiNecx8GA9Il3Qo_n5sVDzpOiW4afSAhLlwoc-_9Yf0kg74_V9Qo5Ig',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGYKa2HL3j6b1zaJzwv1KrcfWVglziv9_xc7DQE-h92OSMxkYgpPVYD8EaQD_o8Vwdgam9M1uSSWpbtSTZU_ORJDpBqNQB2kxg-ObyPLi0UYd4oRRWlWzYEGK-q9MfhYoAA73mBc7k2Iy86Y6yId4xC_3h9iRB9wB8cmj1VC4rAaBmN1Ry44Uqtw2oudlE9wiMiNecx8GA9Il3Qo_n5sVDzpOiW4afSAhLlwoc-_9Yf0kg74_V9Qo5Ig',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAArNTDR0_RirPrs2nvgITCHAHdQQtK1TDyOzBlBs6nsseuYuFMp0Ew5AI_RqIdcwM9tl4nTGBsTBwwXNQOToHMr4ofE5tLHqExqkhgODhZlAQNLPdHQ_-mx3Ohb974XfrfXDDx4NY5bmLRcUn0BqXGQc0CbZxfLQheUTzn8Q3LhXD58xrquOJ51YC-SOCaVvtRYPnwtzbQfX7pNgEFBHL1CjNbkXJqoQ24qpPtj91ShkGXk9LSV7SADw',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdjEgyvui_c9OEKtn2jr7CTPeqM_ZL7vZsAcEDQHb0wzMqHqzXkdIctMz7KeVPDiye4Fk87308AdwSMmQwNR-jeHok3G-X6dkObnzB072czyFjNbTYjJjLZoGu3bUX-Ho6qgy6psRQiOoSLq2tzs_-0sDbP1TdfSu2YVI8serQTGRlfZTBSqrlk8zWT_6BOqg0Ea2HUkqeeYMpg1ZjI2vryCD8YU4lUcXwals9w8s8OuBpI21MW0rp7A',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcVE7H8-oJK-SprKhAgWieE_Rbp73iPZ9fZNUmM5t2G5XRrvTphtzqEC-1rjyrCmLoHhlRpL1sP1VIcmc1KEkUHb6GQ945PzEPVbRQ5Jdf7fyoigYp5cTxMGus8abksmn01V8Luqu6sZeYAW4SxEGcs3FF54iGxIWWQcxnVCDUAWfIHoMPuwsXPx7oyeJWqcN6K99ZDQhIKJ6yD7z3IaMaxY3baMBqgRtWnsNL9cqZVhNLNQy-Pv5HAA',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpaWbME6st48SuFjidMmyQzgUwl0cKZyxQMG99qvLV49lh4DPPjXusFxecC-3dol0KLJW3Dtz_yha8G_aQRSqJs_NrYhNBtJO57Bghx1veaY-YaGB2bT1DLqh7DfpP5dHcqST12NeG9ErBesj2e3TjkaENnpGbqLrJxh903m2goEUfjyPQeMmm3HznrAmo_Sjzkye1cu7qWNP_Q3_CPzbKk1hrElJ7vglqzJsTazUY5JVHLS_IFdSZnA',
      date: 'August 12, 2024',
      author: 'Kofi Mensah',
      authorInitials: 'KM',
      category: 'Industry Trends',
      readTime: '5 min read',
    },
  ];
}
