import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private readonly STORAGE_KEY = 'contacts';

   constructor() {
      this.contacts = this.loadLocalStorage();
     }

  private savetoLocalStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.contacts));
  }
  private loadLocalStorage() {
    const contacts = localStorage.getItem(this.STORAGE_KEY);
    return contacts ? JSON.parse(contacts) : [];
  }
  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
    }

  getContact(id: number): Observable<Contact> {
    const contact = this.contacts.find(c => c.id === id);
    return of(contact);
  }

  addContact(contact: Contact): Observable<Contact> {
    const newId = Math.max(...this.contacts.map(c => c.id ||  0 )) + 1;
    const newContact = { ...contact, id: newId };
    this.contacts.push(newContact);
    this.savetoLocalStorage();
    return of(newContact);
  }
  deleteContact(id: number): Observable<boolean>{
    this.contacts = this.contacts.filter(c => c.id !== id);
    this.savetoLocalStorage();
    return of(true);
  }
  editContact(contact: Contact): Observable<Contact> {
  const index = this.contacts.findIndex(c => c.id === contact.id); 
  if(index !== -1){
    this.contacts[index] = contact;
    return of(contact);
  }
  }
}
