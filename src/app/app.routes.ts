import {Routes} from '@angular/router';
import {LibraryComponent} from './library/library.component';
import {SearchComponent} from './search/search.component';
import { BookComponent } from 'app/book/book.component';
import { BookListComponent } from 'app/book-list/book-list.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:term', component: SearchComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'book/:id', component: BookComponent},
  {path: '**', component: SearchComponent}
];
