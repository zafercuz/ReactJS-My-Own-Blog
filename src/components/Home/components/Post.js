import { Button, Card, Col } from 'react-bootstrap'
import Holder from 'react-holder-component'

const Post = (props) => {
  return (
    <Col md={4} sm={6} className="mb-5">
      <Card>
        <Card.Body>
          <Holder
            width="100%"
            height="200px"
            updateOnResize={true}
          />
          <Card.Title className="mt-2">{props.post.title}</Card.Title>
          <Card.Text>
            {props.post.description}
          </Card.Text>
          <Button variant="info">Read Post</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Post
