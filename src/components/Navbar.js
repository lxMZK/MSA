import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';


function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/Genres">Genres</Nav.Link>
      <Nav.Link href="/BestSelling">BestSelling</Nav.Link>
      <Nav.Link href="/TopRated">TopRated</Nav.Link>
    </Nav>
  );
}

export default StackedExample;