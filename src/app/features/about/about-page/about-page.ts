import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { Cta } from '../../../shared/components/cta/cta';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink, PageHeader, Cta],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  constructor() {
    inject(SeoService).setData({
      title: 'About Us',
      description: 'Learn about EMDROC Travel & Tours — our heritage, philosophy of precision, and commitment to redefining corporate travel for the African elite.',
      url: 'https://emdroc.com/about',
      type: 'website',
    });
  }
}
