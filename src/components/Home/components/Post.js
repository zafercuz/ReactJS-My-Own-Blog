import { Button, Card, Col } from "react-bootstrap";
import { CustomPlaceholder } from "react-placeholder-image";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const Post = (props) => {
  return (
    <Col md={4} sm={6} className="mb-5">
      <Card>
        <Card.Body>
          <Link to={`/detail/${props.post.id}`}>
            <CustomPlaceholder
              width={500}
              height={400}
              text="Image Placeholder"
              className="img-fluid"
            />
          </Link>
          <Card.Title className="mt-2">{props.post.title}</Card.Title>
          <Card.Text>{props.post.description}</Card.Text>
          <Link to={`/detail/${props.post.id}`}>
            <Button variant="info">Read Post</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="mr-2 mb-lg-0 mb-md-1 mb-xl-0"><FaEdit className="mb-1" /> Edit</Button>
          <Button variant="danger"><FaTrashAlt className="mb-1" /> Delete</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
