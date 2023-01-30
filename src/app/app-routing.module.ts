import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainRegistrationComponent} from './modules/admin/Pages/domain/domain-registration/domain-registration.component';
import { DomainDetailsComponent} from './modules/admin/Pages/domain/domain-details/domain-details.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  {
    path :'admin', component:AdminComponent,children:[
     
        {path: 'domain-registration', component: DomainRegistrationComponent},
        {path: 'domain-details/:id', component: DomainDetailsComponent}
     
    ]
    

   },
{ path: 'login', component: LoginComponent},
{ path: '' ,redirectTo:'/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
