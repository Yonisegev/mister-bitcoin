import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { OrderListModule } from 'primeng/orderlist';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AppHeaderComponent } from './app-header/app-header.component';
import { InputTextModule } from 'primeng/inputtext';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    ChartComponent,
    AppHeaderComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TabMenuModule,
    GoogleChartsModule,
    OrderListModule,
    BadgeModule,
    AvatarModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
