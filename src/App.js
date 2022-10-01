import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/Navbar";
import Home from "./components/Home";
import BestSelling from "./components/BestSelling";
import Genres from "./components/Genres";
import TopRated from "./components/TopRated";
import Admin from "./components/admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [returnedData, setReturnedData] = useState([])

  const fetchData = async () => {
    const response = await fetch('/books', {
      method: 'POST'
    })
    const resData = await response.json()
    setReturnedData(resData)
  }

  useEffect(() => {
    fetchData()
  })

  return (

    <div className="App">
      <Router>
        <NavbarComp path={window.location.pathname} />
        {/* <h1>Bookstore Library & Stock keeping app</h1>
              <h4>coming soon . . .</h4>
              <br />
              <br />
              <h3>Tavoy Walls / Alex Mizak / Quenton Powell</h3>
              <br />
              <br /> */}


        <Routes>
          <Route path="/" element={<Home books={returnedData} />} />
          <Route path="/BestSelling" element={<BestSelling />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/Books/Admin" element={<Admin books={returnedData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;