import React from 'react'
import { Row, Spinner, Col } from "react-bootstrap";

const Loading = () => {
  return (
    <Row className="mt-5">
      <Col className="row justify-content-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Col>
    </Row>
  )
}

export default Loading
