import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import Stack from "react-bootstrap/Stack"

import Container from 'react-bootstrap/Container';
import AnimalPostViewModal from './AnimalPostViewModal';

import AnimalCard from './AnimalCard';

import { useState } from 'react';

export default () => {

  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

  const [showModal, setShowModal] = useState(false)

  const [selectedAnimal, setSelectedAnimal] = useState(null)

  const [animals, setAnimals] = useState([
    {
      name: "Lion",
      location: "Africa",
      description: "The lion (Panthera leo) is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"
    },
    {
      name: "Eagle",
      location: "Eurasia",
      description: "Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/About_to_Launch_%2826075320352%29.jpg"
    },
    {
      name: "Lion",
      location: "Africa",
      description: "The lion (Panthera leo) is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"
    },
    {
      name: "Eagle",
      location: "Eurasia",
      description: "Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/About_to_Launch_%2826075320352%29.jpg"
    }
  ])

  return (
    <>
      <Stack
        fluid
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "clip"
        }}
      >
        <Row
          style={{
            marginTop: "5%",
            marginBottom: "5%"
          }}
        >
          <Col><h1>{address}</h1></Col>
        </Row>
        <Row>
          <h3>My Animals</h3>
        </Row>
        <Row style={{
          overflowY: "scroll",
          paddingTop: "1%",
          height: "95%"
        }}>
          {animals.map((animal, index) => (
            <AnimalCard
              animal={animal}
              onClick={() => {
                setSelectedAnimal(animal)
                setShowModal(true)
              }}
            />
          ))}
        </Row>
      </Stack>
      <AnimalPostViewModal
        show={showModal}
        onHide={() => setShowModal(false)}
        animal={selectedAnimal}
      />

    </>
  )
}