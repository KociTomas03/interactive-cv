import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Hero, Experience, Education, Projects, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
