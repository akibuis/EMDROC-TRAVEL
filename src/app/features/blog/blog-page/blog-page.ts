import { Component } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';

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
  isFeatured?: boolean;
}

@Component({
  selector: 'app-blog-page',
  imports: [PageHeader],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.css',
})
export class BlogPage {
  protected readonly articles: Article[] = [
    {
      id: 'featured',
      title: 'The Future of Executive Travel in Africa: 2025 Outlook',
      excerpt: 'How emerging tech hubs and infrastructure projects are reshaping the landscape for continental corporate expansion.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8u5uYFY6hp_8DmkuIpD0oJF-5cij4wWa37l0b1NiCao7BVkXCFZakzPbHuU6ajZ1bYxAMRZ3kOw9VvPWYjQhtSBI61nzfmGWK2pUmfBFolqoX74yVN9wfZnqoqKFXwgms3mdyBGgzOOF7thNj7Gqoq5P5RYieivwXQyosVW65kEC3eAiXwOPv5dyqgEYjE692J2VYLjGPAMEHHQWL6sK35IeYtqy9xg2uK_8ypxyTT410ToUts0FjSw',
      date: 'June 12, 2024',
      author: 'EMDROC Editorial',
      authorInitials: 'EE',
      category: 'Strategic Advisory',
      readTime: '5 min read',
      isFeatured: true,
    },
    {
      id: '2',
      title: 'Mastering the Art of Seamless Border Crossings',
      excerpt: 'Expert tips on navigating visa-on-arrival protocols and fast-track clearance for high-frequency travelers across West Africa.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZfKhNGEI82RzQb8fZhzbVLHNmKUyylw7lxpl9Xt4SmD70A5LrjfHIUCoOEmijn4GG0fTciUxWiNaLNGVQjdDB8wseSz2RVkOA6SHzCB8lkE_QNv3bw-JXYN76Dboj3pvhjE1lg9S4nzriBBC7piPdF4V12Qx4rfA6qxegkgm6UJm-0ZvBj1hiKVR19lUAcUOM7PD9Yf5b-MVSdQtwDBNZU4bhxQ8E48ozAYzmatGbc6nQAUtuOMrqFQ',
      date: 'June 12, 2024',
      author: 'Emeka Okafor',
      authorInitials: 'EO',
      category: 'Travel Logistics',
      readTime: '5 min read',
    },
    {
      id: '3',
      title: 'Sustainable Luxury: The Rise of Eco-Advisory',
      excerpt: 'Why the world\'s leading hotel chains are prioritizing carbon-neutrality without compromising on the 5-star experience.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpcsVCxyUWQXkArsrq6Y0w-dOoWofRQCSbxWaH3rAuKB2yCEmh1Jc4cvnz7WK3dFRJfTFybJul0IStKATIn_I6_TjsUIcwfNERgW9Y7GChfHHRL-VItkHvJTOTFK4LFe4gQU_JTUR1p_DDjT4KX3q6_A1jrFuQN-QP1TThaqu7CjETD4zxKMhwOxa_kkfegg2O7geoDuQW_97MTgisIp7EOUK8MLSNzI4GZSW1rTl9QaA8arvZQj-r4A',
      date: 'June 08, 2024',
      author: 'Sarah Bakare',
      authorInitials: 'SB',
      category: 'Hospitality',
      readTime: '8 min read',
    },
    {
      id: '4',
      title: 'The Curated Carry-On: Essentials for the Global CMO',
      excerpt: 'From tech safeguards to wellness supplements, we audit the kits of the world\'s most frequent business travelers.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtEzIuwPWpiZoJu-dmdkSRDGyRHmcrTXIGS9QB6maOh8dnKrYC71wELuIG002vS3Dnh2wvcYVNotalrmMCY_faqEaLpwsKvMMd-fmUr2kqEEZqxON-RdlzPWkE5n1YDACnWuxNlcl2_YRu5r4XufkT9fYci3OERkXppjKpqCT4hxIr8EZCYoeLIyxT6ax7JSc4jM6pi6s34wjqI2BbaAdxv0mOyqY4S8OhPopzT5ollx3vl-5WiozPKg',
      date: 'May 30, 2024',
      author: 'John Doe',
      authorInitials: 'JD',
      category: 'Lifestyle',
      readTime: '4 min read',
    },
  ];

  protected readonly sideArticles: { title: string; category: string; excerpt: string }[] = [
    {
      category: 'Company Update',
      title: 'EMDROC Expands VIP Concierge Services to Lusaka and Kigali',
      excerpt: 'Following record growth in 2024, we are proud to announce the formal launch of our full-spectrum hospitality suites in two of Africa\'s fastest-growing business hubs.',
    },
    {
      category: 'Destination Spotlight',
      title: 'Hidden Gems: Private Island Retreats for Corporate Wellness',
      excerpt: 'Discover why the Seychelles and Zanzibar are becoming the preferred choices for executive burnout recovery.',
    },
  ];
}
