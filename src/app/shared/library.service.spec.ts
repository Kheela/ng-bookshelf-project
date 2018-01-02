/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {LibraryService} from './library.service';
import {Book} from "./book";

function createBookFixture(book_id) {
  return new Book(
    book_id,
    "title",
    "subTitle",
    ["authors"],
    "publisher",
    "publishDate",
    "description",
    ["categories"],
    "thumbnail",
    "smallThumbnail"
  )
}

fdescribe('LibraryService', () => {
  let libraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryService]
    });
    libraryService = TestBed.get(LibraryService);
  });


  it('can add a book to the library', () => {
    let book = createBookFixture('bookId');
    libraryService.addBook(book);

    expect(libraryService.books.length).toBe(1);
    expect(libraryService.books[0].id).toBe('bookId');
    expect(libraryService.books[0].title).toBe("title");
    expect(libraryService.books[0].subTitle).toBe('subTitle');
    expect(libraryService.books[0].authors.length).toBe(1);
    expect(libraryService.books[0].authors[0]).toBe("authors");
    expect(libraryService.books[0].publisher).toBe("publisher");
    expect(libraryService.books[0].publishDate).toBe("publishDate");
    expect(libraryService.books[0].description).toBe("description");
    expect(libraryService.books[0].categories.length).toBe(1);
    expect(libraryService.books[0].categories[0]).toBe("categories");
    expect(libraryService.books[0].thumbnail).toBe("thumbnail");
    expect(libraryService.books[0].smallThumbnail).toBe("smallThumbnail");
});

  it('can remove a book to the library', () => {
    let book = createBookFixture('bookId');
    libraryService.removeBook(book);

    expect(libraryService.books.length).toBe(0);
  });

  it('checks if a book is already in the library', () => {
    //TODO
  });

  it('can save and load the books', () => {
    //TODO
  });
});
