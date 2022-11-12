import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'

import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"

import Image from 'react-bootstrap/Image'
import Form from "react-bootstrap/Form";
import {useState} from "react";
import {Container} from "react-bootstrap";

export default ({show, onHide, animal, onAdopt}) => {
    const [name, setName] = useState("")

    if (animal == null) {
        return (
            <></>
        )
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
        >
            <Modal.Header>
                <h3>{animal.name}</h3>
                <br/>
                <h5>{animal.location}</h5>
            </Modal.Header>
            <Modal.Body>
                <Image src={animal.uri} fluid/>
                <br/>
                <Row>
                    <Col style={{float: "right"}}><h5>{"Organization:\t" + animal.organization}</h5></Col>
                    <Col style={{float: "left"}}><span style={{color: "#198754"}}>&#10003;</span></Col>
                </Row>
                <Row><h5>{"Species:\t" + animal.species}</h5></Row>
                <Row><p>{animal.description}</p></Row>
                <Row><p>{"Start:\t" + animal.sponsorshipStart + "\nEnd:\t" + animal.sponsorshipEnd}</p></Row>
                <Row><p>{"Price:\t" + animal.price + " TRX"}</p></Row>
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
                        <Form.Control
                            placeholder="Name"
                            as="input"
                            style={{width: "fit-content", marginRight: "10px"}}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Button
                            variant="success"
                            onClick={() => {
                                if (name !== "") {
                                    onAdopt(name);
                                    onHide()
                                }
                            }}
                        >
                            ADOPT!
                        </Button>
                    </Container>
                </Container>
            </Modal.Footer>
        </Modal>
    )
}
