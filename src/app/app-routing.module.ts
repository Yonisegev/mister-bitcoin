import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { LoggedinResolverService } from './services/loggedinuser-resolver';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolverService },
    runGuardsAndResolvers: 'paramsChange',
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    resolve: { user: LoggedinResolverService },
    runGuardsAndResolvers: 'always',
  },
  { path: 'statistics', component: ChartComponent },
  {
    path: 'edit/:id',
    resolve: { contact: ContactResolverService },
    runGuardsAndResolvers: 'paramsChange',
    component: ContactEditPageComponent,
  },
  {
    path: 'edit',
    resolve: { contact: ContactResolverService },
    runGuardsAndResolvers: 'paramsChange',
    component: ContactEditPageComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    resolve: { user: LoggedinResolverService },
    runGuardsAndResolvers: 'always',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
