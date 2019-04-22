import { dataSources } from '../../datasources';
import { pubsub } from '../pubsub';

const PUBLISHER_MUTATED = 'genreMutated';

export default {
    Query: {
        genres() {
            return dataSources.bookService.getGenres();
        },
        genre(parent, args) {
            return dataSources.bookService.getGenre(args.id);
        }
    },

    Mutation: {
        createGenre(parent, args) {
            return dataSources.bookService
                .createGenre({
                    name: args.name
                })
                .then(genre => genre);
        },
        updateGenre(parent, args) {
            return dataSources.bookService
                .updateGenre(args.genreId, {
                    name: args.name
                })
                .then(genre => genre);
        },
        deleteGenre(parent, args) {
            return dataSources.bookService
                .deleteGenre(
                    args.genreId,
                )
                .then(removed => removed);
        }
    },

    Genre: {
        books(parent) {
            return dataSources.bookService.getGenreBooks(parent.id);
        }
    }
};
