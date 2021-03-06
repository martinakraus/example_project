import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/about',
    },
    {
        path: 'books',
        loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {}
