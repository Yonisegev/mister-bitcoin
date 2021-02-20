import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../model/contact.model';
import { Move } from '../../model/move.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss'],
})
export class ContactDetailsPageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  contact: Contact;
  contactMoves: Move[];

  ngOnInit(): void {
    this.contact = this.route.snapshot.data.contact;
    this.getContactMoves();
  }

  onGoBack() {
    this.router.navigateByUrl('/contact');
  }

  onEditContact() {
    this.router.navigate(['edit', this.contact._id]);
  }

  getContactMoves() {
    if (!this.contact) return;
    this.contactMoves = this.userService.getContactMoves(this.contact._id);
  }
}
