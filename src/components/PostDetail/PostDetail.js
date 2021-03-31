import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import Loading from "../Loading";
import DetailHeader from "./components/DetailHeader";
import axios from "axios";
import Swal from "sweetalert2";

const PostDetail = ({ fetchPost, deletePost, setPosts, posts }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  let match = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    const getPost = async () => {
      const postFromServer = await fetchPost(match.params.id);
      setPost(postFromServer);
      setLoading(false);
    }

    setLoading(true);
    getPost();
  }, []);

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
          await deletePost(match.params.id);
          let newPosts = setPosts(posts.filter((post) => post.id !== match.params.id));
          console.log(newPosts);
        } catch (error) {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          );
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        setPosts(posts.filter((post) => post.id !== match.params.id));
        Swal.fire("Deleted!", "Blog Post has been deleted.", "success");
        history.push("/");
      }
    });
  }

  return (
    <>
      <DetailHeader deletePost={localDeletePost} post={post} />
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
