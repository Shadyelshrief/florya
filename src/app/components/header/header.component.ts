import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languages = [
    { code: 'en', icon: './assets/img/en.png' },
    { code: 'ar', icon: './assets/img/ar.png' },
    // ... other languages
  ];
  imageSource = this.languages[0].icon;
  constructor(public translate: TranslateService,
    private cd: ChangeDetectorRef) { }
  changeLanguage(languageCode: string) {
    this.translate.use(languageCode);
    const htmlElement = document.querySelector('html') as HTMLElement;
    const imgChange = document.querySelector('.language-change img') as HTMLElement;
    languageCode === 'ar' ? htmlElement.dir = 'rtl' : htmlElement.dir = 'ltr';
    languageCode === 'ar' ? htmlElement.lang = 'ar' : htmlElement.lang = 'en';
    languageCode === 'ar' ? this.imageSource = this.languages[1].icon : this.imageSource = this.languages[0].icon;;
    this.cd.detectChanges(); // Refresh view
  }
}
