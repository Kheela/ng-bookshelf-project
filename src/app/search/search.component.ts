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

  private term: string = "";

  constructor(
    private route: ActivatedRoute,
    private googleBooksService: GoogleBooksService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      if (params['term']) {
        this.term = params['term'];
        this.onSearch(this.term);
      }
    });
  }

  doSearch() {
    this.router.navigate(['search', { term: this.term }]);
  }

  onSearch(term: string) {
    this.googleBooksService.searchBooks(term);
  }

  ngOnInit() {
  }

}
