import { Component } from '@angular/core';
import { EDUCATION } from '../../data/education.data';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
})
export class Education {
  readonly entries = EDUCATION;
}
