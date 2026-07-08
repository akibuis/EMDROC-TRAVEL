export interface Slide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  packageCount: number;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  currency: string;
  image: string;
  highlights: string[];
  isFeatured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  trip: string;
}

export interface AirlinePartner {
  id: string;
  name: string;
  logo: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  route: string;
  children?: NavLink[];
}

export interface FooterSection {
  title: string;
  links: { label: string; route: string }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

