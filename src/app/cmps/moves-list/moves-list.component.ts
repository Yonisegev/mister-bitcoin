import { Component, Input, OnInit } from '@angular/core';
import { Move } from '../../model/move.model';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss'],
})
export class MovesListComponent implements OnInit {
  constructor() {}

  @Input() moves: Move[] = [];
  ngOnInit(): void {}
}
