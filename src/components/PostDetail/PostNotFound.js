import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostNotFound = () => {
  return (
    <Container>
      <h1>Post Not Found</h1>
      <Link to="/"></Link>
    </Container>
  )
}

export default PostNotFound
