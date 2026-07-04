import { Component, inject } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Footer } from './components/footer/footer';
import { Nav } from './components/nav/nav';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, Experience, Education, Projects, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Injecting ThemeService here ensures it's instantiated and applies
  // the correct .dark class to <html> before the first render.
  readonly theme = inject(ThemeService);
}
