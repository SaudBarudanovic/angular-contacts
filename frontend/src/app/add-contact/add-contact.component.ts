import { Component, OnInit } from '@angular/core';
import { ContactsServiceService } from '../contacts-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contacts: any[] = [];
  // contactId: string = '';
  constructor(
    private contactService: ContactsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.contactId = params.id;
    //   this.contactService.getContact(this.contactId).subscribe((contacts: any[]) => this.contacts = contacts);
    // });
  }
  createContact(createForm) {
    this.contactService.createContact(createForm).subscribe((contact: any[]) => this.contacts = contact)
    this.router.navigate(['/']);
    alert('Contact created!');
  }

}
