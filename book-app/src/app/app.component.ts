import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
    appTitle = 'book-app';


    ngOnInit(): void {
    }

    pingHandler(ping: { eventData: string }): void {
        console.log(ping);
    }
}
