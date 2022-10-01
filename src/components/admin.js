import React, { useState } from 'react'

export default function Admin(props) {
    const [isbn, setIsbn] = useState()

    const handleClick = (e) => {
        setIsbn(e.target.value)
    }

    const books = props.books.map(book => {
        return (
            <div>
                <label>{book.title}</label>
                <button value={book.isbn} onClick={handleClick}>Delete</button>
            </div>
        )
    })

    return (
        <div className='admin'>
            <h1>Admin Page</h1>

            <iframe id='results' name='results' />
            <h3>Add New Book:</h3>
            <form className='addForm' method={'POST'} target='results'>
                <div className='container'>
                    <label htmlFor='isbn'>ISBN: </label>
                    <input type='number' id='isbn' name='isbn' min='0' required />
                </div>
                <div className='container'>
                    <label htmlFor='title'>Title: </label>
                    <input type='text' id='title' name='title' required />
                </div>
                <div className='container'>
                    <label htmlFor='author'>Author: </label>
                    <input type='text' id='author' name='author' required />
                </div>
                <div className='container'>
                    <label htmlFor='description'>Description: </label>
                    <input type='text' id='description' name='description' />
                </div>
                <div className='container'>
                    <label htmlFor='rating'>Rating: </label>
                    <input type='number' step={.1} id='rating' name='rating' min='0' max='5' required />
                </div>
                <div className='container'>
                    <label htmlFor='price'>Price: </label>
                    <input type='number' step={.01} id='price' name='price' min='.01' required />
                </div>
                <div className='container'>
                    <label htmlFor='amount_available'>Amount Available: </label>
                    <input type='number' id='amount_available' name='amount_available' min='0' required />
                </div>
                <div className='container'>
                    <label htmlFor='img_url'>Cover Image (URL): </label>
                    <input type='url' id='img_url' name='img_url' />
                </div>
                <div className='container'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <br />
            <h3>Delete Books:</h3>
            <form className='deleteForm' action={`/books/admin/${isbn}`} method={'POST'} target='results'>
                {books.length ? books : <p>No books currently in database</p>}
            </form>
        </div>
    )
}