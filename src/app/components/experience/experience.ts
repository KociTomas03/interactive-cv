import { Component, signal } from '@angular/core';
import { EXPERIENCES } from '../../data/experience.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [ScrollRevealDirective],
  templateUrl: './experience.html',
})
export class Experience {
  readonly experiences = EXPERIENCES;
  expandedIds = signal(new Set<string>());

  toggle(id: string) {
    this.expandedIds.update(s => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
}
