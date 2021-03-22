import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import FormModal from "./FormModal";

const CreateButton = (props) => {
  const MySwal = withReactContent(Swal);
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
