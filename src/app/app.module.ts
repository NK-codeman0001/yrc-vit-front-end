import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPopper } from 'angular-popper';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import {SharedService} from './services/shared.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TeamComponent } from './components/team/team.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BloodDonationComponent } from './components/blood-donation/blood-donation.component';
import { RecentUpdatesComponent } from './components/recent-updates/recent-updates.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blood-donation', component: BloodDonationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    TeamComponent,
    HeaderComponent,
    FooterComponent,
    BloodDonationComponent,
    RecentUpdatesComponent,
    AwardsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPopper,
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
