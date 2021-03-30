import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import FormModal from "./FormModal";

const CreateButton = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="success"
        className="align-content-right"
        size="sm"
        onClick={() => setModalShow(true)}
      >
        <FontAwesomeIcon icon={faPlus} /> Create Post
      </Button>
      <FormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        createpost={props.createpost}
      />
    </>
  );
};

export default CreateButton;
