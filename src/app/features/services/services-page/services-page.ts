import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../../shared/components/page-header/page-header';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink, PageHeader],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
}
