import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import FormModal from "./FormModal";

const CreateButton = () => {
  const MySwal = withReactContent(Swal);
  const [modalShow, setModalShow] = useState(false);

  // const onClickEvt = () => {
  //   MySwal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Your work has been saved',
  //     showConfirmButton: true,
  //     timer: 1500
  //   });
  // };

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
      />
    </>
  );
};

export default CreateButton;
