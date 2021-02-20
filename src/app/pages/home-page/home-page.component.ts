import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';
import { Move } from '../../model/move.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private router: Router
  ) {}
  user: User;
  currRate: any;
  moves: Move[];
  userBtcToUsd: number;

  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();
    this.getCurrRate();
    this.getLastMoves();
  }

  async getCurrRate() {
    if (!this.user) return;
    const res: any = await this.bitcoinService.getBtcToUsd().toPromise();
    this.currRate = res.bpi.USD.rate_float;
    this.userBtcToUsd = this.currRate * this.user.coins;
  }

  getLastMoves() {
    this.moves = this.userService.getLastThreeMoves();
  }
}
