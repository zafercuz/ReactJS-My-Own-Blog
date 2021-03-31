import { Button, Card, Col } from "react-bootstrap";
import { CustomPlaceholder } from "react-placeholder-image";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Swal from "sweetalert2";

const Post = (props) => {
  const localDeletePost = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          await props.deletePost(props.post.id);
        } catch (error) {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          );
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Blog Post has been deleted.", "success");
      }
    });
  }

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
          <Button variant="danger" onClick={localDeletePost}><FaTrashAlt className="mb-1" /> Delete</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
