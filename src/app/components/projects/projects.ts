import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective],
  templateUrl: './projects.html',
})
export class Projects {
  readonly projects = PROJECTS;
}
