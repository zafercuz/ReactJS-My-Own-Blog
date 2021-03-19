import { Form, Button } from "react-bootstrap";

const FormContent = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group>
        <Form.Label>Blog Title</Form.Label>
        <Form.Control type="text"
        value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} 
        value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
      </Form.Group>
    </Form>
  );
};

export default FormContent;
