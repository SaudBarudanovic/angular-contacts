import { Component, OnInit } from '@angular/core';
import { ContactsServiceService } from '../contacts-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-contact-single',
  templateUrl: './contact-single.component.html',
  styleUrls: ['./contact-single.component.css']
})
export class ContactSingleComponent implements OnInit {

  contacts: any[] = [];
  contactId: string = '';


  constructor(
    private contactService: ContactsServiceService,
  ) {

  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts: any[]) => this.contacts = contacts);
  }
}
