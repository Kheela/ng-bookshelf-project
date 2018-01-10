import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { GoogleBooksService } from '../shared/google-books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private noSearches: boolean = true;
  private isLoading: boolean = false;
  private books: Book[];

  constructor(
    private route: ActivatedRoute,
    private googleBooksService: GoogleBooksService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      if (params['term']) {
        this.doSearch(params['term']);
      }
    });
  }

  doSearch(term: string) {
    console.log('doSearch: ' + term);

    this.isLoading = true;
    this.googleBooksService.searchBooks(term);
    this.books = this.googleBooksService.books;
    this.isLoading = false;
    this.noSearches = false;
  }

  onSearch(term: string) {
    console.log('onSearch: ' + term);

    this.router.navigate(['search', { term: term }]);
  }

  ngOnInit() {
  }

}
