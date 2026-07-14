import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../hero/hero';
import { DestinationGrid } from '../destination-grid/destination-grid';
import { AirlinePartners } from '../airline-partners/airline-partners';
import { Testimonials } from '../testimonials/testimonials';
import { Newsletter } from '../newsletter/newsletter';
import { TravelInsights } from '../travel-insights/travel-insights';
import { CountUpDirective } from '../../../shared/directives/count-up.directive';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    Hero,
    DestinationGrid,
    AirlinePartners,
    Testimonials,
    Newsletter,
    TravelInsights,
    CountUpDirective,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  constructor() {
    inject(SeoService).setData({
      title: 'Home',
      description: 'Premium corporate travel advisory and executive logistics for the African elite. Bespoke travel management, visa consultancy, and 24/7 concierge services.',
      url: 'https://emdroc.com/',
      type: 'website',
    });
  }
}
