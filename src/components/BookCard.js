import React from 'react';
import { Card } from 'react-bootstrap';

export default function BookCard(props) {
  const details = (e) => {
    const desc = e.target.parentNode.parentNode.querySelector('.bookDesc');
    if (desc.classList.contains('lessDetails')) {
      desc.classList.remove('lessDetails');
      e.target.innerHTML = 'Read less';
      return;
    }
    desc.classList.add('lessDetails');
    e.target.innerHTML = 'Read more';
  };

  const buyButton = (
    <form method="POST" action={`/books/${props.book.isbn}/buy`}>
      <button type="submit" onClick={handleClick}>
        Buy
      </button>
    </form>
  );

  const handleClick = (amount_available) => {
    alert('Thanks for your purchase!');
  };

  if (props.book) {
    return (
      <Card className="card">
        <div className="coverContainer">
          <Card.Img
            className="bookCover"
            variant="top"
            src={
              props.book.img_url
                ? props.book.img_url
                : 'https://noobchan.xyz/wp-content/uploads/2022/05/no-book-cover-available.jpg'
            }
            alt="Book Cover"
          />
        </div>
        <Card.Body className="bookInfo">
          <div className="bookContainer">
            <Card.Title className="bookTitle">{props.book.title}</Card.Title>
            <Card.Text>⭐{props.book.rating}</Card.Text>
          </div>
          <Card.Text className="bookAuthor">
            <i>{props.book.author}</i>
          </Card.Text>
          <Card.Text className="bookDesc lessDetails">
            {props.book.description}
          </Card.Text>
          <p className="details">
            <i onClick={details}>Read more</i>
          </p>
        </Card.Body>
        <Card.Footer>
          <div className="bookContainer">
            {props.book.amount_available != 0 ? buyButton : <p></p>}
            <Card.Text className="bookSold">
              {props.book.amount_sold === 0
                ? 'Be the first to buy!'
                : props.book.amount_sold + ' Books Sold'}
            </Card.Text>
          </div>
          <div className="bookContainer">
            <Card.Text>
              <b>${props.book.price}</b>
            </Card.Text>
            <Card.Text>
              {props.book.amount_available ? 'In Stock!' : 'Unavailable'}
            </Card.Text>
          </div>
        </Card.Footer>
      </Card>
    );
  }
}
