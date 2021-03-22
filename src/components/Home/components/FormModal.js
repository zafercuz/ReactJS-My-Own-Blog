import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormContent from "./FormContent";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const FormModal = (props) => {
  console.log(props);
  const MySwal = withReactContent(Swal);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!description) {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Description must not be empty!",
      });
      return
    }
    if (!title) {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title must not be empty!",
      });
      return
    }
    if (!title && !description) {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fields must not be empty!",
      });
      return
    }
    console.log("COntinue??");
    // If no errors
    props.createpost({title, description});
    setTitle("");
    setDescription("");
    MySwal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Blog successfully created',
      showConfirmButton: true,
      timer: 1000
    });
    props.onHide();
  };

  return (
    <Modal
      show={props.show} onHide={props.onHide}
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
        {/* HERE IS THE FORM */}
        <FormContent
          onSubmit={onSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Create Post
        </Button>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
