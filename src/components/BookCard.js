import React from 'react'
import { Card } from 'react-bootstrap'

export default function BookCard(props) {
    if (props.book) {
        return (
            <Card className='card'>
                <Card.Img variant="top" src="https://media.wiley.com/product_data/coverImage300/82/15095467/1509546782.jpg" />
                <Card.Body>
                    <Card.Title>Title: {props.book.title}</Card.Title>
                    <Card.Text>author: {props.book.author}</Card.Text>
                    <Card.Text>Description . . .</Card.Text>
                    <Card.Text>Rating: {props.book.rating}</Card.Text>
                    <Card.Text>Price: {props.book.price}</Card.Text>
                    <Card.Text>amount available: {props.book.amount_available}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}