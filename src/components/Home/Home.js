import Loading from "../Loading";
import HomeHeader from "./components/HomeHeader";
import Posts from "./components/Posts";

const Home = (props) => {
  return (
    <>
      <HomeHeader createpost={props.createpost} />
      {
        (() => {
          if (props.loading)
            return <Loading />
          else
            if (props.posts.length > 0)
              return <Posts posts={props.posts} />
            else
              return <h1 className="mt-5">No Posts to show...</h1>
        })()
      }
    </>
  );
};

export default Home;
