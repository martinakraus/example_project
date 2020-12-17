import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../models/book';

@Component({
  selector: 'app-book-row',
  templateUrl: './book-row.component.html',
  styleUrls: ['./book-row.component.scss'],
})
export class BookRowComponent implements OnInit {
  @Input() book: Book;

  constructor() {
  }

  ngOnInit(): void {
  }
}
