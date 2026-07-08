import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { DestinationGrid } from '../destination-grid/destination-grid';
import { WhyChooseUs } from '../why-choose-us/why-choose-us';
import { AirlinePartners } from '../airline-partners/airline-partners';
import { Testimonials } from '../testimonials/testimonials';
import { Newsletter } from '../newsletter/newsletter';
import { TravelInsights } from '../travel-insights/travel-insights';
import { CountUpDirective } from '../../../shared/directives/count-up.directive';

@Component({
  selector: 'app-home-page',
  imports: [
    Hero,
    DestinationGrid,
    WhyChooseUs,
    AirlinePartners,
    Testimonials,
    Newsletter,
    TravelInsights,
    CountUpDirective,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
