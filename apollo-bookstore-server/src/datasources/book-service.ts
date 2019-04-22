import { DataSource } from 'apollo-datasource';

export class BookService extends DataSource {
    constructor() {
        super();
    }

    initialize() {}

    getGenres() {
        return Promise.resolve(genres);
    }

    getGenre(id) {
        return Promise.resolve(findGenre(id));
    }

    getGenreBooks(genreId) {
        return Promise.resolve(
            books.filter(book => book.genreId === genreId)
        );
    }

    createGenre(genreInput) {
        const genre = Object.assign({}, genreInput, { id: newId() });
        genres.push(genre);
        return Promise.resolve(genre);
    }

    updateGenre(genreId, genreInput) {
        let genre = findGenre(genreId);
        genre = genre ? Object.assign(genre, genreInput) : null;
        return Promise.resolve(genre);
    }

    deleteGenre(genreId) {
        genres = genres.reduce((acc, genre) => {
            if (genre.id !== genreId) acc.push(genre);
            return acc;
        }, []);
        return Promise.resolve(true);
    }

    getBooks() {
        return Promise.resolve(books);
    }

    getBook(id) {
        return Promise.resolve(findBook(id));
    }

    getBookGenre(bookId) {
        const book = findBook(bookId);
        const genre = book ? findGenre(book.genreId) : null;
        return Promise.resolve(genre);
    }

    createBook(bookInput, genreId) {
        const book = Object.assign({}, bookInput, { id: newId(), genreId });
        books.push(book);
        return Promise.resolve(book);
    }

    updateBook(bookId, bookInput, genreId) {
        let book = findBook(bookId);

        book = book ? Object.assign(book, bookInput) : null;
        if (book) {
            book = Object.assign(book, bookInput, { genreId: genreId });
        }
        return Promise.resolve(book);
    }

    deleteBook(bookId: string) {
        books = books.reduce((acc, book) => {
            if (book.id !== bookId) acc.push(book);
            return acc;
        }, []);
        return Promise.resolve(true);
    }

}

// ----- Helper Functions -----
function newId() {
    return Math.random()
        .toString(36)
        .substring(7);
}

function findGenre(id) {
    return genres.find(genre => genre.id === id);
}

function findBook(id) {
    return books.find(book => book.id === id);
}

// ----- Initial Data -----

let genres = [
    {
        "id": "0",
        "name": "Software Enginnering",
        "books": ["1"]
    },
    {
        "id": "1",
        "name": "Deportes",
        "books": ["1", "2"]
    },
    {
        "id": "2",
        "name": "Ciencia ficción",
        "books": ["3", "4"]
    }
];

let books = [
    {
        "id": "0",
        "name": "You don't know JS",
        "description": "Clousure",
        "price": "10.00",
        "genreId": "0",
        "img": "you_dont_know_js.jpg"
    },
    {
        "id": "1",
        "name": "Solo en la pared",
        "description": "Escalada en solitario de grandes paredes",
        "price": "25.00",
        "genreId": "1",
        "img": "alex_honold.jpg"
    },
    {
        "id": "2",
        "name": "Entrenamiento para la escalada",
        "description": "El manual definitivo para mejorar tu rendimiento",
        "price": "30.00",
        "genreId": "1",
        "img": "entrenamiento_escalada.jpg"
    },
    {
        "id": "3",
        "name": "El abominable hombre de las nieves",
        "description": "Elige tu aventura favorita con 28 finales posibles",
        "price": "13.00",
        "genreId": "2",
        "img": "hombre_de_las_nieves.jpg"
    },
    {
        "id": "4",
        "name": "Viaje bajo el mar",
        "description": "Elige tu aventura favorita con 42 finales posibles",
        "price": "13.00",
        "genreId": "2",
        "img": "viaje_bajo_el_mar.jpg"
    }
];
