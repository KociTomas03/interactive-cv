import { Component } from '@angular/core';
import { EDUCATION } from '../../data/education.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  imports: [ScrollRevealDirective],
  templateUrl: './education.html',
})
export class Education {
  readonly entries = EDUCATION;
}
