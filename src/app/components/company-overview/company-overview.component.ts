import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeaderComponent } from '../../common/header/header.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { CompanyOverviewDetailsComponent } from '../company-overview-details/company-overview-details.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-company-overview',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, BreadcrumbComponent, FooterComponent, CompanyOverviewDetailsComponent, TranslateModule],
  templateUrl: './company-overview.component.html',
  styleUrl: './company-overview.component.scss'
})
export class CompanyOverviewComponent implements OnInit {
  title: string | undefined;
  pageTitle: string | undefined;
  pageTitle1: string | undefined;
  companyOverView: string | undefined;
  @ViewChild(HeaderComponent) headerComp!: HeaderComponent;
  constructor(private translate: TranslateService,
    private dataService: DataService) {
  }
  ngOnInit(): void {
    this.translate.get('ABOUT.THE_COMPANY').subscribe((translated: string) => {
      this.title = translated;
      this.pageTitle = this.translate.instant('ABOUT.TITLE_DESC');
      this.pageTitle1 = this.translate.instant('ABOUT.TITE_DESC1');
      this.companyOverView = this.translate.instant('ABOUT.COMPANY_OVERVIEW');
    })
    setTimeout(() => {
      this.dataService.pageChanged.subscribe(() => {
        this.translate.get('ABOUT.THE_COMPANY').subscribe((translated: string) => {
          this.title = translated;
          this.pageTitle = this.translate.instant('ABOUT.TITLE_DESC');
          this.pageTitle1 = this.translate.instant('ABOUT.TITE_DESC1');
          this.companyOverView = this.translate.instant('ABOUT.COMPANY_OVERVIEW');
        })
      })
    })
  }
}
