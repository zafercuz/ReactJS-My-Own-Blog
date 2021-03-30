import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import Loading from "../Loading";
import DetailHeader from "./components/DetailHeader";

const PostDetail = ({ fetchPost }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  let match = useRouteMatch();

  useEffect(() => {
    const getPost = async () => {
      const postFromServer = await fetchPost(match.params.id);
      setPost(postFromServer);
      setLoading(false);
    }

    setLoading(true);
    getPost();
  }, []);

  return (
    <>
      <DetailHeader />
      {loading ?
        <Loading />
        :
        <div className="mt-5">
          <h3>Title: {post.title}</h3>
          <div className="mt-5">
            <h4>Description:</h4>
            <p>{post.description}</p>
          </div>
        </div>
      }

    </>
  )
}

export default PostDetail
