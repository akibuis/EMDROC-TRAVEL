import { Component, inject } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { Cta } from '../../../shared/components/cta/cta';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-services-page',
  imports: [PageHeader, Cta],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
  constructor() {
    inject(SeoService).setData({
      title: 'Services',
      description: 'EMDROC offers corporate travel, flight ticketing, visa consultancy, hotel reservations, group travel, and bespoke tour packages for the African elite.',
      url: 'https://emdroc.com/services',
      type: 'website',
    });
  }
}
