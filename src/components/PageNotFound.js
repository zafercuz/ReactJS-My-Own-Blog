import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container>
      <h1>404 Page Not Found</h1>
      <Link to="/">Home Page</Link>
    </Container>
  )
}

export default PageNotFound
