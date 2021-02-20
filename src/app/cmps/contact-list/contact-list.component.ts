import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact.model';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[] = [];
  constructor(private router: Router) {}
  selectedContact: any;
  ngOnInit(): void {}

  selectContact(contactId) {
    this.router.navigateByUrl(`/contact/${contactId}`);
  }

  ngAfterViewChecked() {
    if (this.selectedContact) {
      this.selectContact(this.selectedContact[0]._id);
    }
  }
}
