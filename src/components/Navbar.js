import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';


function StackedExample(props) {

  return props.path === '/books/admin' ?
    (<Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>) :
    (<Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Genres">Genres</Nav.Link>
      <Nav.Link href="/BestSelling">BestSelling</Nav.Link>
      <Nav.Link href="/TopRated">TopRated</Nav.Link>
    </Nav>)
}

export default StackedExample;