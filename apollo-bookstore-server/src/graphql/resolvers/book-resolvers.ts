import { dataSources } from '../../datasources';
import { pubsub } from '../pubsub';

const BOOK_MUTATED = 'bookMutated';

export default {
    Query: {
        books() {
            return dataSources.bookService.getBooks();
        },
        book(parent, args) {
            return dataSources.bookService.getBook(args.id);
        }
    },

    Mutation: {
        createBook(parent, args) {
            const { genreId, ...rest } = args.book;
            return dataSources.bookService
                .createBook(
                    {
                        ...rest
                    },
                    genreId
                )
                .then(book => book);
        },
        updateBook(parent, args) {
            const { genreId, ...rest } = args.book;
            return dataSources.bookService
                .updateBook(
                    args.bookId,
                    {
                        ...rest
                    },
                    genreId
                )
                .then(book => book);
        },
        deleteBook(parent, args) {
            return dataSources.bookService
                .deleteBook(
                    args.bookId,
                )
                .then(removed => removed);
        }
    },

    Book: {
        genre(parent) {
            return dataSources.bookService.getBookGenre(parent.id);
        }
    }
};
