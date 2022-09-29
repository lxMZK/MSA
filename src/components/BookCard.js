import React from 'react'
import { Card } from 'react-bootstrap'

export default function BookCard(props) {
    if (props.book) {
        return (
            <Card className='card'>
                <div className='coverContainer'>
                    <Card.Img className='bookCover' variant="top" src="https://media.wiley.com/product_data/coverImage300/82/15095467/1509546782.jpg" />
                </div>
                <Card.Body className='bookInfo'>
                    <div className='bookContainer'>
                        <Card.Title className='bookTitle'>{props.book.title}</Card.Title>
                        <Card.Text>⭐{props.book.rating}</Card.Text>
                    </div>
                    <Card.Text className='bookAuthor'><i>{props.book.author}</i></Card.Text>
                    <Card.Text className='bookDesc'>Description . . .</Card.Text>
                    <div className='bookContainer'>
                        <Card.Text><b>${props.book.price}</b></Card.Text>
                        <Card.Text>{props.book.amount_available ? 'In Stock!' : 'Unavailable'}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}