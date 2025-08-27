import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  phone: string = '';
  
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }
  addContact(name: string, email: string, phone: string): void {
    const newContact: Contact ={
      name: this.name,
      email: this.email,
      phone: this.phone
    }

    this.contactService.addContact(newContact).subscribe(contact => {
      alert('New contact added:');
    });
    
  }

}
