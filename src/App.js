import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/Navbar";
import Home from "./components/Home";
import BestSelling from "./components/BestSelling";
import Genres from "./components/Genres";
import TopRated from "./components/TopRated";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import  Dashboard  from "./pages/Dashboard";
import Profile  from "./pages/Profile";
    function App() {
      const [user, setUser] = useState(null);
useEffect(() => {
  const u = localStorage.getItem("user");
  u && JSON.parse(u) ? setUser(true) : setUser(false);
},[]);

      useEffect(() => {
    localStorage.setItem("user", user)
}, [user])

      const [returnedData, setReturnedData] = useState();

      const fetchData = async () => {
        const newData = await fetch("/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => res.json());
        setReturnedData(newData);
      };

      useEffect(() => {
        fetchData();
      });

      const [value, setValue] = useState("");

      const onChange = (event) => {
        setValue(event.target.value);
      };

      const onSearch = (searchTerm) => {
        // our api fetch the search results
        console.log("search ", searchTerm);
      };

      return ( 
     
        <div className="App"> 
        <Router>
        <div className="search-container">
            <div className="search-inner">
              <input type="text" value={value} onChange={onChange} />
              <button onClick={() => onSearch(value)}> Search</button>
            </div>
          </div>
          <NavbarComp />
          {/* <h1>Bookstore Library & Stock keeping app</h1>
              <h4>coming soon . . .</h4>
              <br />
              <br />
              <h3>Tavoy Walls / Alex Mizak / Quenton Powell</h3>
              <br />
              <br /> */}
          
         
            <Routes>
              {!user && (
              <Route
                path="/Auth"
                element={<Auth authenticate={() => setUser(true)} />}
              />
              )}
              {user && (
                <>
              <Route
                path="/profile"
                element={<profile logout={() => setUser(false)} />} 
              />
              <Route path="/Dashboard" element={<Dashboard />}/>
              </>
              )}

                <Route path="*" element={<Navigate to={user ? "/Profile" : "/Auth"} />} />

              <Route path="/Home" element={<Home />}></Route>
              <Route path="/BestSelling" element={<BestSelling />}></Route>
              <Route path="/Genres" element={<Genres />}></Route>
              <Route path="/TopRated" element={<TopRated />}></Route>
              </Routes>
          </Router>
        </div>
      );
    }

export default App;
