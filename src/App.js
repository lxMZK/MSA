import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [returnedData, setReturnedData] = useState()

  const fetchData = async () => {
    const newData = await fetch('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'applicaiton/json'
      }
    })
      .then(res => res.json())
    setReturnedData(newData)
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
    </div>
  );
}

export default App;
