import React from 'react'

export default function Home(props) {
  return (
    <div className='home'>
      <h1>Check Out Our Books!</h1>
      <div className='gallery'>
        {props.books}
      </div>
    </div>
  )
}