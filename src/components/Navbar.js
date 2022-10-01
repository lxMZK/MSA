import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';


export default function Navigation(props) {

  return props.path === '/books/admin' ?
    (
      <Navbar fixed='top' bg='dark' variant='dark'>
        <Nav defaultActiveKey="/home">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar>
    ) : (
      <Navbar fixed='top' className='justify-content-between' bg='dark' variant='dark'>
        <Nav defaultActiveKey="/home">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/BestSellers">Best Sellers</Nav.Link>
          <Nav.Link href="/TopRated">Top Rated</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/books/admin'>Admin</Nav.Link>
        </Nav>
      </Navbar>
    )
}