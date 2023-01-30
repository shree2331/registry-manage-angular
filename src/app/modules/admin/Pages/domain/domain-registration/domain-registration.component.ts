import { Component } from '@angular/core';
import {  DomainRegistrationService } from '../../../../../services/domain-registration.service';

@Component({
  selector: 'app-domain-registration',
  templateUrl: './domain-registration.component.html',
  styleUrls: ['./domain-registration.component.css'],
})
export class DomainRegistrationComponent {
  domains: any;
  searchDomain:any;
  result:any;
  p:number=1;
  itemsPerPage:number=5;
  constructor(private registeredDomain: DomainRegistrationService) {};

      ngOnInit():void {
      
        this.registeredDomain
          .getregisteredDomain()
          .subscribe((data) => {
            
            this.domains = data;
          });
        
      }
  getReadyforProcess(){
    console.log("here");
  }

  domainSearch(){

    if(this.searchDomain == ""){
   
     this.ngOnInit();
    }else{
     this.domains= this.domains.filter ((result:any) => {
      return result.domainid.toLocaleLowerCase().match(this.searchDomain.toLocaleLowerCase());
     })
    }

  }
}
