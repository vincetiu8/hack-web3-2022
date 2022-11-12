import { useState } from 'react'

import AnimalCard from './AnimalCard'

import Container from "react-bootstrap/Container"

import Image from 'react-bootstrap/Image'

import Stack from "react-bootstrap/Stack"

import Form from "react-bootstrap/Form"

import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"
import AnimalPreViewModal from './AnimalPreViewModal'

export default ({ onAdopt, onProfilePicClicked }) => {

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

  const [selectedAnimal, setSelectedAnimal] = useState(null)

  const [showModal, setShowModal] = useState(false)




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
        <Row style={{
          height: "10%",
          borderBottom: "1px",
          boxShadow: "0px 4px 8px 0px rgba(25,135,84,0.28)",
          alignItems: "center"
        }}>
          <Col />
          <Col xs={6}>
            <Form.Control
              placeholder="Search"
              as="input"
            />
          </Col>
          <Col>
            <Image
              scr="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              fluid
            />
          </Col>
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
      <AnimalPreViewModal
        show={showModal}
        onHide={() => setShowModal(false)}
        animal={selectedAnimal}
        onAdopt={onAdopt}
      />
    </>
  )
}