import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Admin from './components/admin';
import BestSellers from './components/BestSellers';
import BookCard from './components/BookCard';
import Home from './components/Home';
import NavbarComp from './components/Navbar';
import TopRated from './components/TopRated';
import UnbeatablePrices from './components/UnbeatablePrices';

function App() {
  const [booksDefault, setBooksDefault] = useState([]);
  const [booksBySale, setBooksBySale] = useState([]);
  const [booksByRating, setBooksByRating] = useState([]);
  const [booksByPrice, setBooksByPrice] = useState([]);

  const fetchData = async () => {
    // Sort By Default
    let response = await fetch('/books', {
      method: 'POST',
    });
    let resData = await response.json();
    setBooksDefault(resData);

    // Sort By Sales
    response = await fetch('/books/bestsellers', {
      method: 'POST',
    });
    resData = await response.json();
    setBooksBySale(resData);

    // Sort By Rating
    response = await fetch('/books/toprated', {
      method: 'POST',
    });
    resData = await response.json();
    setBooksByRating(resData);

    // Sort By Price
    response = await fetch('/books/unbeatableprices', {
      method: 'POST',
    });
    resData = await response.json();
    setBooksByPrice(resData);
  };

  useEffect(() => {
    fetchData();
  });

  const booksFormatted = (books) => {
    return books.map((book, i) => {
      return <BookCard key={i} book={book} />;
    });
  };

  return (
    <div className="App">
      <Router>
        <NavbarComp path={window.location.pathname} />
        <Routes>
          <Route
            path="/"
            element={<Home books={booksFormatted(booksDefault)} />}
          />
          <Route
            path="/BestSellers"
            element={<BestSellers books={booksFormatted(booksBySale)} />}
          />
          <Route
            path="/TopRated"
            element={<TopRated books={booksFormatted(booksByRating)} />}
          />
          <Route
            path="/UnbeatablePrices"
            element={<UnbeatablePrices books={booksFormatted(booksByPrice)} />}
          />
          <Route path="/Books/Admin" element={<Admin books={booksDefault} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
