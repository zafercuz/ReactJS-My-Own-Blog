import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import FormContent from './FormContent'

const FormModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContent />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Create Post
      </Button>
        <Button onClick={props.onHide} variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FormModal
