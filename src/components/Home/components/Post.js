import { Button, Card, Col } from "react-bootstrap";
import { CustomPlaceholder } from "react-placeholder-image";

const Post = (props) => {
  return (
    <Col md={4} sm={6} className="mb-5">
      <Card>
        <Card.Body>
          <CustomPlaceholder
            width={500}
            height={400}
            text="Image Placeholder"
            className="img-fluid"
          />
          <Card.Title className="mt-2">{props.post.title}</Card.Title>
          <Card.Text>{props.post.description}</Card.Text>
          <Button variant="info">Read Post</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
