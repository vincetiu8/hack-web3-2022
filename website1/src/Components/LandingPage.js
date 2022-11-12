import React, { useState } from "react"

import Button from "react-bootstrap/Button"

import Container from "react-bootstrap/Container"

import Text from "react"

export default ({ onEnterButton }) => {

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
        <Button
          onClick={onEnterButton}
          variant="success"
        >
          Enter
        </Button>
      </Container>
    </Container >
  )
}