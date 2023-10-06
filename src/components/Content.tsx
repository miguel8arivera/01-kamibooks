import { useMemo, useState } from 'react';
import data from '../books.json';

export interface Author {
  name: string;
  otherBooks: string[];
}
export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}
const books: Book[] = data?.library?.map((data) => data.book);
const genres: string[] = Array.from(new Set(books?.map((book) => book.genre)));

console.log(books);
export default function Content() {
  const [genre, setGenre] = useState<string>('');

  /*   const matches = genre
    ? books?.filter((book) => {
        if (book.genre !== genre) return false;
        return true;
      })
    : books; una forma mas simple de hacer, pero no es la mas optima*/

  /*  const matches = useMemo(
    () =>
      genre
        ? books?.filter((book) => {
            if (book.genre !== genre) return false;
            return true;
          })
        : books,
    [genre]
  ); Otra manera de mejor caliad pero no tan legible, tu decides cual usar */

  const matches = useMemo(() => {
    if (!genre) return books;

    return books?.filter((book) => {
      if (book.genre !== genre) return false;
      return true;
    });
  }, [genre]);
  return (
    <article className="grid gap-4">
      <nav>
        <select
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        >
          <option value="">Todos</option>
          {genres?.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </nav>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
        {matches?.map((book) => (
          <li key={book.ISBN}>
            <img
              className="aspect-[9/14] object-cover"
              src={book.cover}
              alt={book.title}
            />
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

{
  /* <article className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))]"> */
}
