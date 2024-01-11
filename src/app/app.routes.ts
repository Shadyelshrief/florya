import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export const routes: Routes = [{
  path: '', component: HomeComponent, data: {
    providers: [importProvidersFrom(TranslateModule.forChild({ extend: true }))],
  },
},
{
  path: 'about', component: AboutComponent
},
{
  path: '', component: HomeComponent
}, {
  path: '', component: HomeComponent
}];
