import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BookDataService} from '../services/book-data.service';
import {Book} from '../models/book';
import {map, pluck, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface RouterParams {
  isbn: string;
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book: Book;

  book$: Observable<Book>;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly bookDataService: BookDataService) {
  }

  ngOnInit(): void {
    // ToDo get isbn out of url
  }
}
