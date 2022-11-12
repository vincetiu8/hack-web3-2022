
import Container from "react-bootstrap/esm/Container";

import Card from "react-bootstrap/Card"

import { useState } from "react"

export default (
  {
    animal,
    onClick
  }
) => {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Container style={{ padding: "1%", width: "20rem" }}>
      <a style={{ cursor: 'pointer' }} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Card style={{
          height: "28rem",
          boxShadow: isHover ? "0px 4px 8px 6px rgba(25,135,84,0.28)" : "0px 4px 8px 0px rgba(25,135,84,0.28)",
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