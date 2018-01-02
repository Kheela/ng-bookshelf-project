import {Routes} from "@angular/router";
import {LibraryComponent} from './library/library.component';
import {SearchComponent} from './search/search.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'library', component: LibraryComponent},  
  {path: '**', component: SearchComponent}
];
