import { Component, OnInit } from '@angular/core';
import { ContactsServiceService } from '../contacts-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contacts: any[] = [];
  contactId: string = '';
  constructor(
    private contactService: ContactsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactId = params.id;
      this.contactService.getContact(this.contactId).subscribe((contacts: any[]) => this.contacts = contacts);
    });
  }
  updateContact(updateForm) {
    this.contactService.updateContact(this.contactId, updateForm).subscribe((contact: any[]) => this.contacts = contact)
    this.router.navigate(['/']);
    alert('Contact updated!');
  }

  deleteContact(deleteId){
    this.contactService.deleteContact(deleteId).subscribe((contact: any[]) => this.contacts = contact)
    alert('Contact deleted!');
  }
}
