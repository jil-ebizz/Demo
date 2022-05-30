import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  createContact(newFormData: { // }
    id: any; firstName: any; lastName: any;
  }) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  getContacts(){
    
    // headers
    const httpClient = new HttpHeaders();
   // httpHeaders.append('content-type', 'application/json');


    return this.httpClient.get('http://localhost:3000/contacts');
  }

  createContact(createBody){
    const httpClient = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post('http://localhost:3000/contacts', createBody, {headers: httpHeaders});
  }

  // getContacts(){
  //   return this.HttpClient.get("http://localhost:3000/contacts");
  // }

  
}
