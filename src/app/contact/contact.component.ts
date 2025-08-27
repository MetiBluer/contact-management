import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  showForm = false;
  contacts: Contact[] = [];
  constructor(private contactService: ContactService) { }

   toggleForm() {
    this.showForm = !this.showForm;
  }
  ngOnInit() {
    this.loadContact();
  }
  loadContact(): void{
    this.contactService.getContacts()
    .subscribe(contacts => this.contacts = contacts);
  }
  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    });
  }
  saveContact(contact: Contact): void {

}
}
