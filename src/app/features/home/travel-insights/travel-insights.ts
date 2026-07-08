import { Component } from '@angular/core';
import { BlogPost } from '../../../core/models';

@Component({
  selector: 'app-travel-insights',
  imports: [],
  templateUrl: './travel-insights.html',
  styleUrl: './travel-insights.css',
})
export class TravelInsights {
  protected readonly posts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Post-Pandemic Corporate Travel in Africa',
      excerpt: 'Navigating the new landscape of business mobility with efficiency and safety.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEZFPxHu5ZgPH7w_NgyuLo8KYUF-RIsm6PglXm5cpAcEkQZa9wMjTmeBiCVeKrvvk9a3ftns9jQPOlK5s8QyLksdEIuo-0fuVk_Lo8BwaOYWn6oj6NFK4qGVTbBIPDgPJtNllaRZA94d3Lfizs9qu4o3gpgX-2a-gwI79lKOLXKZ8viPN-86gk4HN98cgXv6krTuYJOMDWprroYw4ZPmuwX01yGNktgJepOZj_tegjVChmGsVx5FAFaA',
      date: 'March 15, 2024',
      author: 'EMDROC Travel Desk',
      category: 'ADVISORY',
    },
    {
      id: '2',
      title: 'Exclusive Hotels for the Modern Executive in London',
      excerpt: 'A curated selection of the finest stays near Mayfair and The City.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd8JoWt_q1zrqXi7XOzFmfNKJrejvaT6FVtQDiMQVZ38O-5DnBByqYRf7-JbfvBsY85GY7u2COUhZ4XZ0k0BVPYqrJHkJ9UUQU2on9GVYFXflwgAA5kDl4dIqeU3sUSWuZv5ChUiH-jQyf5i3KXF797ZeTyzD5_pDxi0TYA9yE_i094jLQN59EtbvySAbr2JdF9eiKg4Nu4rbGAgDoP7mkrjq8HgdNaukUFKRZd_PqD_xEKU4TyZJ9eA',
      date: 'March 08, 2024',
      author: 'EMDROC Travel Desk',
      category: 'DESTINATION',
    },
    {
      id: '3',
      title: 'How Biometric Travel is Revolutionizing Global Entry',
      excerpt: 'Understanding the shift towards contactless and faster international border crossing.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_6vNHQBQKC0Oh30r_mBuZ7C01WZ1B68czgmuQjXrvH9mxghpb-Jk7yZBxhyiIn_Cd2ee0_cMdcNgZmYP3I5tt0jRX-2oo9mYe4oIoS3H0PAK5aAG4pxAI5aXtCWoLRKmBcVb57g2R3mJkWb0iF18zqrY_xkvMsxOZn5jOwzl_HHvfscA9gw165FIL4Tfiaj4SSfHW9JTY1KFqV6iGLP8iuqahVIv4x4DrMMsFB6_GfHol1HhIyOPw8w',
      date: 'February 28, 2024',
      author: 'EMDROC Travel Desk',
      category: 'TECH',
    },
  ];
}
