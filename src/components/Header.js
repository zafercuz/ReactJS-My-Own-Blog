// Packages
import PropTypes from "prop-types";
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Link to="/"><Navbar.Brand>{title}</Navbar.Brand></Link>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  )
}

Header.defaultProps = {
  title: 'My Blog'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
