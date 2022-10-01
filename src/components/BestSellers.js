import React from 'react'

export default function BestSellers(props) {
  return (
    <div>
      <h1>Check Out Our Best Sellers!</h1>
      <div className='gallery'>
        {props.books}
      </div>
    </div>
  )
}