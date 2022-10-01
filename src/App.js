import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import Home from "./components/Home";
import BestSellers from "./components/BestSellers";
import TopRated from "./components/TopRated";
import Admin from "./components/admin";
import BookCard from "./components/BookCard";

function App() {
  const [booksDefault, setBooksDefault] = useState([])
  const [booksBySale, setBooksBySale] = useState([])
  const [booksByRating, setBooksByRating] = useState([])

  const fetchData = async () => {
    // Sort By Default
    let response = await fetch('/books', {
      method: 'POST'
    })
    let resData = await response.json()
    setBooksDefault(resData)

    // Sort By Sales
    response = await fetch('/books/bestsellers', {
      method: 'POST'
    })
    resData = await response.json()
    setBooksBySale(resData)

    // Sort By Rating
    response = await fetch('/books/toprated', {
      method: 'POST'
    })
    resData = await response.json()
    setBooksByRating(resData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const booksFormatted = (books) =>{
    return books.map(book => {
      return (
        <BookCard book={book} />
      )
    })
  }

  return (

    <div className="App">
      <Router>
        <NavbarComp path={window.location.pathname} />
        <Routes>
          <Route path="/" element={<Home books={booksFormatted(booksDefault)} />} />
          <Route path="/BestSellers" element={<BestSellers books={booksFormatted(booksBySale)} />} />
          <Route path="/TopRated" element={<TopRated books={booksFormatted(booksByRating)} />} />
          <Route path="/Books/Admin" element={<Admin books={booksDefault} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;