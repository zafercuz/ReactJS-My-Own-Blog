import Loading from "../Loading";
import HomeHeader from "./components/HomeHeader";
import Posts from "./components/Posts";

const Home = (props) => {
  return (
    <>
      <HomeHeader createpost={props.createpost} />
      {props.loading ? (
        <Loading />
      ) : (
        <Posts posts={props.posts} />
      )}
    </>
  );
};

export default Home;
