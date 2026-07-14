import { Injectable, inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'organization' | 'contact';
  article?: {
    publishedDate: string;
    author: string;
    category: string;
    readTime: string;
    tags?: string[];
  };
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setData(data: SeoData) {
    this.setMeta(data);
    this.setJsonLd(data);
  }

  private setMeta(data: SeoData) {
    const siteName = 'EMDROC Travel & Tours';
    const fullTitle = `${data.title} | ${siteName}`;
    const defaultImage = 'https://emdroc.com/logos/logo-nobg.png';
    const url = data.url || 'https://emdroc.com';

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: data.description });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: data.image || defaultImage });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: data.type || 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: siteName });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: data.image || defaultImage });

    this.setCanonical(url);
  }

  private setCanonical(url: string) {
    const existing = document.querySelector('link[rel="canonical"]');
    if (existing) {
      existing.setAttribute('href', url);
      return;
    }
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'canonical');
    this.renderer.setAttribute(link, 'href', url);
    this.renderer.appendChild(document.head, link);
  }

  setJsonLd(data: SeoData) {
    const url = data.url || 'https://emdroc.com';

    const graph: Record<string, unknown>[] = [];

    graph.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: this.getBreadcrumbItems(url),
    });

    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'EMDROC Travel & Tours',
      url: 'https://emdroc.com',
      logo: 'https://emdroc.com/logos/logo-nobg.png',
      description: 'Premium corporate travel advisory and executive logistics for the African elite.',
      address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+2348037247497',
        contactType: 'customer service',
      },
      sameAs: ['https://linkedin.com/company/emdroc'],
    });

    if (data.type === 'article' && data.article) {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image,
        datePublished: data.article.publishedDate,
        author: { '@type': 'Person', name: data.article.author },
        publisher: { '@type': 'Organization', name: 'EMDROC Travel & Tours', logo: 'https://emdroc.com/logos/logo-nobg.png' },
        mainEntityOfPage: url,
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.article-summary'] },
      });
    }

    this.injectJsonLd(graph);
  }

  private getBreadcrumbItems(url: string) {
    const parts = url.replace('https://emdroc.com', '').split('/').filter(Boolean);
    const items = [{ name: 'Home', url: 'https://emdroc.com' }];
    let current = 'https://emdroc.com';
    for (const part of parts) {
      current += '/' + part;
      items.push({ name: this.labelize(part), url: current });
    }
    return items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    }));
  }

  private labelize(slug: string) {
    return slug
      .replace(/-/g, ' ')
      .replace(/\//g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  private injectJsonLd(graph: Record<string, unknown>[]) {
    const existing = document.querySelector('script[type="application/ld+json"]');
    if (existing) existing.remove();

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'id', 'seo-jsonld');
    const text = this.renderer.createText(JSON.stringify(graph, null, 2));
    this.renderer.appendChild(script, text);
    this.renderer.appendChild(document.head, script);
  }
}
