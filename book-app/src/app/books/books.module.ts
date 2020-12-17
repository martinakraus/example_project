import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksRoutingModule} from './books-routing.module';
import {BooksComponent} from './books/books.component';
import {BookRowComponent} from './book-row/book-row.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

@NgModule({
  declarations: [BooksComponent, BookRowComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
  ],
  exports: [BooksComponent],
})
export class BooksModule {
}
