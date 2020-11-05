import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: [ './books.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {
    title = 'TypeScript for the win';

    constructor() {}

    ngOnInit(): void {
    }

    changeTitle(): void {
        this.title = 'TypeScript for the win!!!!!';
    }
}
