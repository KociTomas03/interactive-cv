import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
})
export class Projects {
  readonly projects = PROJECTS;
}
