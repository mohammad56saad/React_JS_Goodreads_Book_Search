import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [books, setBooks] = useState([]);
  const [fetchedBooks, setFetchedBooks] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:7000/books");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const handleClick = () => {
    setFetchedBooks(true)
  }

  const handleChange = (e) => {
    const input = e.target.value;
    const filteredBooks = books.filter((book) => book.title.includes(input))
    setFilteredBooks(filteredBooks);
    setFetchedBooks(false)
    setFilteredStatus(true);
  }

  return (
    <div className="home">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAysFZcWYTHiuLdEaV2oNKcs5XU8PqUGbznQ&s"
        alt="Logo-image"
      />

      <div className="search-bar">
        <div className="search-input">
          <input type="text" placeholder="GoodReads Search" onClick={handleClick} onChange={(e) => { handleChange(e) }} />
          <i className="bi bi-caret-down-fill">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </i>
        </div>
        <button>SEARCH</button>
      </div>

      {fetchedBooks && (
        <div className="book-searched">
          {books.map((book, index) => (
            <Link to={`/detail/${book.id}`} state={book} key={index}>
              {book.title}
            </Link>

          ))}
        </div>
      )}

      {filteredStatus && (
        <div className="book-searched">
          {filteredBooks.map((book, index) => (
            <Link to={`/detail/${book.id}`} state={book} key={index}>
              {book.title}
            </Link>

          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
