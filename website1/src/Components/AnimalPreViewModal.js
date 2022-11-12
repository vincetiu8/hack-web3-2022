import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'

import Image from 'react-bootstrap/Image'

export default ({ show, onHide, animal, onAdopt }) => {

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
        <br />
        <h5>{animal.location}</h5>
      </Modal.Header>
      <Modal.Body>
        <Image src={animal.image} fluid />
        <p>{animal.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onHide}
        >
          Close
        </Button>
        <Button
          variant="success"
          onClick={onAdopt}
        >
          ADOPT!
        </Button>
      </Modal.Footer>
    </Modal>
  )
}