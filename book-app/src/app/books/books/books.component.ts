import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookDataService} from '../services/book-data.service';
import {Book} from '../models/book';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private readonly bookDataService: BookDataService) {
  }

  ngOnInit(): void {
    // ToDo get Data from book-data Service
  }
}
