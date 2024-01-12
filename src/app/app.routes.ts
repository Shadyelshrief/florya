import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './components/contact/contact.component';
import { CompanyOverviewComponent } from './components/company-overview/company-overview.component';

export const routes: Routes = [{
  path: '', component: HomeComponent, data: {
    providers: [importProvidersFrom(TranslateModule.forChild({ extend: true }))],
  },
},
{
  path: 'company-overview', component: CompanyOverviewComponent
},
{
  path: 'contact', component: ContactComponent
}, {
  path: '', component: HomeComponent
}];
