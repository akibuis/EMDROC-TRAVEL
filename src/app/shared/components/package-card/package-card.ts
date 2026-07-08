import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Package } from '../../../core/models';

@Component({
  selector: 'app-package-card',
  imports: [RouterLink],
  templateUrl: './package-card.html',
  styleUrl: './package-card.css',
})
export class PackageCard {
  readonly packageData = input.required<Package>();
}
