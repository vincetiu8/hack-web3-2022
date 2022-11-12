import Modal from 'react-bootstrap/Modal'


import Image from 'react-bootstrap/Image'
import {Col, Row} from "react-bootstrap";

export default ({show, onHide, animal}) => {

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
            </Modal.Body>
            <Modal.Footer>
                <h5>Thank you for adopting {animal.name}!</h5>
            </Modal.Footer>
        </Modal>
    )
}
