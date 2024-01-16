import { Component } from '@angular/core';
import { CommonSidebarComponent } from '../../common/common-sidebar/common-sidebar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mission-vision-details',
  standalone: true,
  imports: [CommonSidebarComponent, TranslateModule],
  templateUrl: './mission-vision-details.component.html',
  styleUrl: './mission-vision-details.component.scss'
})
export class MissionVisionDetailsComponent {

}
