import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';


function StackedExample(props) {

  return props.path === '/books/admin' ?
    (
      <Navbar bg='dark' variant='dark'>
        <Nav defaultActiveKey="/home">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar>
    ) : (
      <Navbar className='justify-content-between' bg='dark' variant='dark'>
        <Nav defaultActiveKey="/home">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Genres">Genres</Nav.Link>
          <Nav.Link href="/BestSelling">BestSelling</Nav.Link>
          <Nav.Link href="/TopRated">TopRated</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/books/admin'>Admin</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default StackedExample;