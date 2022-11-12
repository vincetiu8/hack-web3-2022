import React, { useState } from "react"

import Button from "react-bootstrap/Button"

import Container from "react-bootstrap/Container"

import { Link } from "react-router-dom"

export default () => {

  return (
    <Container style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <Container>
        <h1>Animal Sponsor</h1>
      </Container>
      <Container>
        <Link to="/home">
          <Button
            onClick={() => { }}
            variant="success"
          >
            Enter
          </Button>
        </Link>
      </Container>
    </Container >
  )
}