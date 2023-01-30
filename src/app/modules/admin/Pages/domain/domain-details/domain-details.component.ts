import { Component } from '@angular/core';
import {  DomainRegistrationService } from '../../../../../services/domain-registration.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-domain-details',
  templateUrl: './domain-details.component.html',
  styleUrls: ['./domain-details.component.css']
})
export class DomainDetailsComponent {
  data:any;
  domainData:any;
  id:any;
  constructor(private selectedDomain: DomainRegistrationService, private router :ActivatedRoute) {
  this.id = this.router.snapshot.paramMap.get('id')

    selectedDomain.getDomainDetails(this.id).subscribe(data=> {
         this.data = data;
         //this.domainData=this.data[0];
          this.domainData=this.data;
      });
    
  }
}
