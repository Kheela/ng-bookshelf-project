import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
  }

  getBook(bookId: string) {
    //TODO
  }

  hasBook(book: Book): boolean {
    //TODO
    return false;
  }

  addBook(book: Book) {
    //TODO
  }

  removeBook(book: Book) {
    //TODO
  }
}
