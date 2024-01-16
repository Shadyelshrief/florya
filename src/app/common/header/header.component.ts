import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { DataService } from '../services/data.service';

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
  toggleLang: string = 'ar';
  imageSource = this.languages[0].icon;
  constructor(public translate: TranslateService,
    private cd: ChangeDetectorRef,
    private dataService: DataService) { }
  changeLanguage(languageCode: string) {
    this.translate.use(languageCode);
    localStorage.setItem('language', languageCode);
    const htmlElement = document.querySelector('html') as HTMLElement;
    languageCode === 'ar' ? htmlElement.dir = 'rtl' : htmlElement.dir = 'ltr';
    languageCode === 'ar' ? htmlElement.lang = 'ar' : htmlElement.lang = 'en';
    languageCode === 'ar' ? this.imageSource = this.languages[1].icon : this.imageSource = this.languages[0].icon;
    languageCode === 'ar' ? this.toggleLang = 'en' : this.toggleLang = 'ar';
    this.cd.detectChanges(); // Refresh view
    this.dataService.pageChanged.next()
  }
}
