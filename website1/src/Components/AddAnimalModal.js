import Modal from "react-bootstrap/Modal"

import Form from "react-bootstrap/Form"

import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"

import Button from "react-bootstrap/Button"

import Container from "react-bootstrap/Container"

import { useState } from "react"

export default ({ show, onHide, onSubmit }) => {

  const [animal, setAnimal] = useState({
    location: null,
    organization: null,
    species: null,
    description: null,
    sponsorshipStart: null,
    sponsorshipEnd: null,
    price: null,
    uri: null
  })


  return (
    <Modal
      show={show}
      onHide={onHide}
    >
      <Modal.Header>
        <h3>Create New Sponsorship Listing</h3>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Col>
            <Form.Group>
              <Row style={{ padding: "2%" }}>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(event) => {
                    animal.price = event.target.value
                  }}
                />
              </Row>
              <Row style={{ padding: "2%" }}>
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    animal.organization = event.target.value
                  }}
                />
              </Row>
              <Row style={{ padding: "2%" }}>
                <Form.Label>Species</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    animal.species = event.target.value
                  }}
                />
              </Row>
            </Form.Group>
            <Form.Group>
              <Row style={{ padding: "2%" }}>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    animal.location = event.target.value
                  }}
                />
              </Row>
            </Form.Group>
            <Form.Group>
              <Row style={{ padding: "2%" }}>
                <Form.Label>Image URI</Form.Label>
                <Form.Control
                  placeholder="https://"
                  onChange={(event) => {
                    animal.uri = event.target.value
                  }}
                />
              </Row>
            </Form.Group>
            <Form.Group>
              <Row style={{ padding: "2%" }}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(event) => {
                    animal.description = event.target.value
                  }}
                />
              </Row>
            </Form.Group>
            <Form.Group>
              <Row style={{ padding: "2%" }}>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  placeholder="YYYY-MM-DD"
                  onChange={(event) => {
                    animal.sponsorshipStart = event.target.value
                  }}
                />
              </Row>
            </Form.Group>
            <Form.Group>
              <Row style={{ padding: "2%" }}>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  placeholder="YYYY-MM-DD"
                  onChange={(event) => {
                    animal.sponsorshipEnd = event.target.value
                  }}
                />
              </Row>
            </Form.Group>
          </Col>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Button
            variant="secondary"
            onClick={onHide}
          >
            Close
          </Button>
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              width: "fit-content",
              marginLeft: "0",
              marginRight: "0"
            }}
          >
            <Button
              variant="success"
              onClick={() => {
                onSubmit(animal)
              }}
            >
              List
            </Button>
          </Container>
        </Container>

      </Modal.Footer>
    </Modal>
  )
}