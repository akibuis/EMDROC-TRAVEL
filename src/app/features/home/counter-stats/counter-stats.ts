import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-stats',
  templateUrl: './counter-stats.html',
})
export class CounterStats {
  protected readonly stats = [
    { icon: 'workspace_premium', value: '15+', label: 'Years of Experience' },
    { icon: 'groups', value: '3,500+', label: 'Happy Clients' },
    { icon: 'public', value: '40+', label: 'Countries Covered' },
    { icon: 'explore', value: '2,500+', label: 'Tours Completed' },
  ];
}
