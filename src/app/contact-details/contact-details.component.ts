import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id'); // get id from URL
    this.contactService.getContact(id).subscribe(contact => {
      this.contact = contact;
    });
  }

}
