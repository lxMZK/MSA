import React from 'react'
import BookCard from './BookCard'

export default function Home(props) {
  const books = props.books.map(book => {
    return (
      <BookCard book={book} />
    )
  })

  return (
    <div className='home'>
      <h1>Check Out Our Books!</h1>
      <div className='gallery'>
        {books}
      </div>
    </div>
  )
}