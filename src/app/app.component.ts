import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  languages = [
    { code: 'en', icon: 'assets/icons/en.svg' },
    { code: 'es', icon: 'assets/icons/es.svg' },
    // ... other languages
  ];
  constructor(private translate: TranslateService,) {

  }
  ngOnInit(): void {

    let language = localStorage.getItem('language');
    if (language == null || language == 'null') {
      language = 'en';
    }
    this.translate.setDefaultLang(language);
  }
  title = 'florya';
}
