import { Component } from '@angular/core';
import { CommonSidebarComponent } from '../../common/common-sidebar/common-sidebar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-company-overview-details',
  standalone: true,
  imports: [CommonSidebarComponent, TranslateModule],
  templateUrl: './company-overview-details.component.html',
  styleUrl: './company-overview-details.component.scss'
})
export class CompanyOverviewDetailsComponent {

}
