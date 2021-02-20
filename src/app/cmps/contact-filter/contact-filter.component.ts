import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  constructor() {}
  @Output() onFilterBy = new EventEmitter();
  filterBy = { term: '' };

  ngOnInit(): void {}
}
