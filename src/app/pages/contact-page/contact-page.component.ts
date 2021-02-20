import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription } from 'rxjs';
import { Contact } from '../../model/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService: ContactService, private router: Router) {}

  contacts$: Observable<Contact[]>;
  onFilterBy = '';

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contacts$ = this.contactService.contacts$;
    this.contactService.loadContacts(this.onFilterBy);
  }

  onFilter(filterBy) {
    this.contactService.loadContacts(filterBy);
  }

  onAddContact() {
    this.router.navigateByUrl('edit');
  }
}
