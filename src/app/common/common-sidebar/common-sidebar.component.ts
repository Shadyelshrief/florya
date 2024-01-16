import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-common-sidebar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './common-sidebar.component.html',
  styleUrl: './common-sidebar.component.scss'
})
export class CommonSidebarComponent {

}
