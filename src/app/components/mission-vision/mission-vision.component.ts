import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeaderComponent } from '../../common/header/header.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { MissionVisionDetailsComponent } from '../mission-vision-details/mission-vision-details.component';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, BreadcrumbComponent, FooterComponent, MissionVisionDetailsComponent],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.scss'
})
export class MissionVisionComponent {

}
