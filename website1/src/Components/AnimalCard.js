
import Container from "react-bootstrap/esm/Container";

import Card from "react-bootstrap/Card"

export default (
  {
    animal,
    onClick
  }
) => {

  return (
    <Container style={{ padding: "1%", width: "20rem" }}>
      <a style={{ cursor: 'pointer' }} onClick={onClick}>
        <Card style={{
          height: "28rem",
          boxShadow: "0px 4px 8px 0px rgba(25,135,84,0.28)",
        }}>
          <Card.Img variant="top" src={animal.image} />
          <Card.Body>
            <Card.Title>{animal.name}</Card.Title>
            <Card.Subtitle>{animal.location}</Card.Subtitle>
            <Card.Text style={{
              fontSize: "14px"
            }}>
              {animal.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Container >
  )

}