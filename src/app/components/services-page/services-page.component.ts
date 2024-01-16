import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeaderComponent } from '../../common/header/header.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { ServicesDetailsComponent } from '../services-details/services-details.component';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, BreadcrumbComponent, FooterComponent, ServicesDetailsComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  title: string | undefined;
  pageTitle: string | undefined;
  pageTitle1: string | undefined;
  services: string | undefined;
  constructor(private translate: TranslateService,
    private dataService: DataService) {
    this.getTranslation()
    setTimeout(() => {
      this.dataService.pageChanged.subscribe(() => {
        this.getTranslation()
      })
    })
  }

  getTranslation() {
    this.translate.get('HOME.SERVICES').subscribe((translated: string) => {
      this.title = translated;
      this.pageTitle = this.translate.instant('ABOUT.TITLE_DESC');
      this.pageTitle1 = this.translate.instant('ABOUT.TITE_DESC1');
      this.services = this.translate.instant('HOME.SERVICES');
    })

  }
}
