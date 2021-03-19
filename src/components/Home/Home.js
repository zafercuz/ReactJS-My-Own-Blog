import { Row, Spinner, Col } from "react-bootstrap";
import HomeHeader from "./components/HomeHeader";
import Posts from "./components/Posts";

const Home = (props) => {
  console.log(props);
  return (
    <>
      <HomeHeader />
      {props.loading ? (
        <Row className="mt-5">
          <Col className="row justify-content-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      ) : (
        <Posts posts={props.posts} />
      )}
    </>
  );
};

export default Home;
