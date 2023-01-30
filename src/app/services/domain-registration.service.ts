import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DomainRegistrationService {

  apiurl='http://localhost:8000/api/getregistereddomain';

  apiurldomaindetails='http://localhost:8000/api/getdomaindetails';

  constructor(private http:HttpClient){};

    getregisteredDomain(){
        
        return this.http.get(this.apiurl);

    }

    getDomainDetails(id:string){
        
      return this.http.get(`${this.apiurldomaindetails}/${id}`);
   }
  
    
  }


