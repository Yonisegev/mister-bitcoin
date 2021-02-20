import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../../model/contact.model';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss'],
})
export class ContactEditPageComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  contact: Contact;
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.contact = data.contact || this.contactService.getEmptyContact();
    });
  }

  onAddContact() {
    if (!this.contact.name || !this.contact.email || !this.contact.phone)
      return;
    this.contactService.saveContact({ ...this.contact });
    this.contact = this.contactService.getEmptyContact();
    this.goBack();
  }

  onRemoveContact() {
    this.contactService.deleteContact(this.contact._id);
    this.goBack();
  }

  goBack() {
    this.router.navigateByUrl('/contact');
  }
}
