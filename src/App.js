import './App.css';
import React, { useState, useEffect } from 'react'
import BookCard from './components/BookCard'

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
      <h1>Bookstore Library & Stock keeping app</h1>
      <h4>coming soon . . .</h4>
      <br />
      <br />
      <h3>Tavoy Walls / Alex Mizak / Quenton Powell</h3>
      <br />
      <br />
      <BookCard book={returnedData[0]}/>
      <BookCard book={returnedData[1]}/>
    </div>
  );
}

export default App;
