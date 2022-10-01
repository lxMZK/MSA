import React from 'react'

export default function TopRated(props) {
  return (
    <div>
      <h1>Check Out Our Top Rated Books!</h1>
      <div className='gallery'>
        {props.books}
      </div>
    </div>
  )
}