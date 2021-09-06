import MusicAlbum from "../music";
import Book from "../books";
import Cart from "../carts";
import Movie from "../movie";

const album = new MusicAlbum(11, 'Meteora', 'Linkin park', 1500, );

const book = new Book(1001, 'War and piece', 'Leo Tolstoy', 1500, 1225);

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

test('add movie in basket', () => {
    const cart = new Cart();
    cart.add(movie);
    expect(cart.getAll().includes(movie)).toBeTruthy();
    });

test('product in basket', () => {
const cart = new Cart();
cart.add(album);
cart.add(book);
expect(cart.getTotalPrice()).toBe(3000);
});

test('product in basket with discount', () => {
const cart = new Cart();
cart.add(album);
cart.add(book);
cart.getTotalPrice();
expect(cart.getDiscountPrice(15)).toBe(2550);
});

test('delete an product by index', () => {
const cart = new Cart();
cart.add(album);
cart.add(book);
expect(cart.deleteItems(1)).toBeTruthy;
});

test('cart remove', () => {
    const cart = new Cart();
    const book = new Book(1001, 'War and piece', 'Leo Tolstoy', 1500, 1225);
    const album = new MusicAlbum(11, 'Meteora', 'Linkin park', 1500, );
    const movie = new Movie(1,'The Avengers', true, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1000, 'avengers.png',);
    cart.add(book);
    cart.add(album);
    cart.add(movie);
    cart.deleteItems(11);
    expect(cart.getAll()).toEqual([book, movie]);
  });