import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
})
export class Nav {
  readonly theme = inject(ThemeService);
}
