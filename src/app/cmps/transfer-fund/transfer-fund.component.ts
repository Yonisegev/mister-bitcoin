import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Contact } from '../../model/contact.model';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferFundComponent implements OnInit {
  constructor(private userService: UserService) {}
  @Input() contact: Contact;
  amount: number = 0;
  loggedUser: User;
  msg: string = '';

  ngOnInit(): void {
    this.loggedUser = this.userService.getLoggedUser();
  }

  onTransferFunds() {
    this.msg = this.userService.transferFunds(this.contact, this.amount);
  }
}
