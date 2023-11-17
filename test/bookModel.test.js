import BookModel from '../models/bookModel.js';

describe('Checking bookModel', () => {
    it('should return an array', () => {
        const books = BookModel.getAll();
        // expect books to be an array
        expect(Array.isArray(books)).toBeTruthy();
    });

    it('should return a book', () => {
        const book = BookModel.getById(1);
        // expect an instance of BookModel
        expect(book).toBeInstanceOf(BookModel);
    });

    it('should return the insert book', () => {
        const book = BookModel.create('title', 'author', 10);
        // expect an instance of BookModel
        expect(book).toBeInstanceOf(BookModel);
        // expect the book to have an id
        expect(book.id).toBeDefined();
        // expect the book to have the correct title
        expect(book.title).toBe('title');
        // expect the book to have the correct author
        expect(book.author).toBe('author');
        // expect the book to have the correct price
        expect(book.price).toBe(10);
    });

    it('should return the updated book', () => {
        const book = BookModel.update(1, 'title', 'author', 10);
        // expect an instance of BookModel
        expect(book).toBeInstanceOf(BookModel);
        // expect the book to have an id
        expect(book.id).toBe(1);
        // expect the book to have the correct title
        expect(book.title).toBe('title');
        // expect the book to have the correct author
        expect(book.author).toBe('author');
        // expect the book to have the correct price
        expect(book.price).toBe(10);
    });

    it('should return null', () => {
        const book = BookModel.delete(1);
        // expect null
        expect(book).toBeNull();
    });
});