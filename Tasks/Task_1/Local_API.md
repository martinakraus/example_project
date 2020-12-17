# Load data from local API
1. Start our HTTP-Server bookmonkey-api in your shell
2. Load data from local API in BookData service via http.get(URL)
3. Don't forget to unsubscribe

## Hints

`return this.http.get<Book[]>('http://localhost:4730/books')`

`this.bookDataService.getBooks().subscribe(successFn);`

[Solution](https://stackblitz.com/github/angularjs-de/angular-workshop/tree/Load-data-from-local-API)
