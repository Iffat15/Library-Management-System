const Library = require('../src/Library');
const Book = require('../src/Book');

describe('Library Management System', () => {
  let library;
  let book;

  beforeEach(() => {
    library = new Library();
    book = new Book('123456789', 'Clean Code', 'Robert C. Martin', 2008);
  });

  test('should add a book to the library', () => {
    library.addBook(book);
    expect(library.viewAvailableBooks().length).toBe(1);
    expect(library.viewAvailableBooks()[0].title).toBe('Clean Code');
  });
});
