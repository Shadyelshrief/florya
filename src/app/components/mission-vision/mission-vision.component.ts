import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeaderComponent } from '../../common/header/header.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { MissionVisionDetailsComponent } from '../mission-vision-details/mission-vision-details.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, BreadcrumbComponent, FooterComponent, MissionVisionDetailsComponent, TranslateModule],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.scss'
})
export class MissionVisionComponent {
  title: string | undefined;
  pageTitle: string | undefined;
  pageTitle1: string | undefined;
  missionVision: string | undefined;
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
    this.translate.get('ABOUT.OUR_MISSION').subscribe((translated: string) => {
      this.title = translated;
      this.pageTitle = this.translate.instant('ABOUT.TITLE_DESC');
      this.pageTitle1 = this.translate.instant('ABOUT.TITE_DESC1');
      this.missionVision = this.translate.instant('ABOUT.VISION_MISSION');
    })

  }

}
