import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
})
export class Experience {
  readonly experiences = EXPERIENCES;
}
