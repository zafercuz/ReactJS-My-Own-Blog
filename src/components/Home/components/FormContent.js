import { Form, Button } from "react-bootstrap";

const FormContent = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Blog Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
};

export default FormContent;
