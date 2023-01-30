import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { SidebarMenuComponent } from '../../includes/sidebar/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from '../../includes/footer/footer.component';
import { HeaderComponent } from '../../includes/header/header.component';
import { NavbarLeftComponent } from '../../includes/header/navbar-left/navbar-left.component';
import { NavbarRightComponent } from '../../includes/header/navbar-right/navbar-right.component';
import { DomainRegistrationComponent } from './Pages/domain/domain-registration/domain-registration.component';
import { DomainDetailsComponent } from './Pages/domain/domain-details/domain-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared.module';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    SidebarMenuComponent,
    FooterComponent,
    HeaderComponent,
    NavbarLeftComponent,
    NavbarRightComponent,
    DashboardComponent,
    DomainRegistrationComponent,
    DomainDetailsComponent,
    AdminComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    
   
  ],
  exports: [ 
    AdminComponent
    ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
