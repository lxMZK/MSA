import React from 'react'

export default function Prices(props) {
    return (
        <div>
            <h1>Check Out These Amazing Prices!</h1>
            <div className='gallery'>
                {props.books}
            </div>
        </div>
    )
}