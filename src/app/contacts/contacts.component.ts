import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  

  constructor(public contactsService: ContactsService) { }
  msgTrue: boolean = false;
  contactList: any;

  ngOnInit(): void {

       this.contactsService.getContacts().subscribe(data => {
       this.contactList = data;
     });
    
  }

  addNewContact(form: any){

   // const newFormData = { id: 6, firstName: 'Raj', lastName: 'p'};

    //Dynamic Data from Form
    console.log(form.vlue.id);
    console.log(form.value.firstName);
    console.log(form.value.lastName);
 
    const newFormData = { id: form.vlue.id, firstName: form.value.firstName, lastName: form.value.lastName};

    this.contactsService.createContact(newFormData).subscribe
    (data => {
      console.log(data);
      this.msgTrue = true;
    });
  }

}
