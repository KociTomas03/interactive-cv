import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [ScrollRevealDirective],
  templateUrl: './skills.html',
})
export class Skills {
  readonly groups = SKILLS;
}
