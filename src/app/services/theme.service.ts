import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'dark' | 'light'>(this.getInitialTheme());

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('dark', this.theme() === 'dark');
      localStorage.setItem('theme', this.theme());
    });
  }

  toggle() {
    this.theme.update(t => (t === 'dark' ? 'light' : 'dark'));
  }

  private getInitialTheme(): 'dark' | 'light' {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
