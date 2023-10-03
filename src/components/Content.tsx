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

export default function Content() {
  const books: Book[] = data?.library?.map((data) => data.book);
  console.log(books);
  return (
    <>
      <article className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
        {books?.map((book) => (
          <div key={book.ISBN}>
            <img
              className="aspect-[9/14] object-cover"
              src={book.cover}
              alt={book.title}
            />
            <p>{book.title}</p>
          </div>
        ))}
      </article>
    </>
  );
}

{
  /* <article className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))]"> */
}
