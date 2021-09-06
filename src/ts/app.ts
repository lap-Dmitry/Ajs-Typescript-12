import Cart from "./carts";
import Movie from "./movie";
import Book from "./books";
import MusicAlbum from "./music";

const movie = new Movie(
    1,
    'The Avengers',
    true,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    1000,
    'avengers.png',
);

const album = new MusicAlbum(11, 'Meteora', 'Linkin park', 1500, );

const book = new Book(1001, 'War and piece', 'Leo Tolstoy', 1500, 1225);

const cart = new Cart();

cart.add(movie);
cart.add(album);
cart.add(book);
cart.getAll();