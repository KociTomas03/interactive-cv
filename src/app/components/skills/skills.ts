import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
})
export class Skills {
  readonly groups = SKILLS;
}
