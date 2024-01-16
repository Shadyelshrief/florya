import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { ContactUsDetailsComponent } from '../contact-us-details/contact-us-details.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, BreadcrumbComponent, ContactUsDetailsComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  title: string | undefined;
  pageTitle: string | undefined;
  pageTitle1: string | undefined;
  contact: string | undefined;
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
    this.translate.get('HOME.CONTACT').subscribe((translated: string) => {
      this.title = translated;
      this.pageTitle = this.translate.instant('ABOUT.TITLE_DESC');
      this.pageTitle1 = this.translate.instant('ABOUT.TITE_DESC1');
      this.contact = this.translate.instant('HOME.CONTACT');
    })
  }
}
