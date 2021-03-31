// Packages
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// Components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import PostDetail from "./components/PostDetail/PostDetail";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
      setLoading(false);
    };

    setLoading(true);
    getPosts();
  }, []);

  // Fetch Posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  // Fetch Single Post
  const fetchPost = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  // Create Post
  const createPost = async (post) => {
    try {
      const response = await axios.post(`${BASE_URL}/posts`, {
        ...post,
      });
      setPosts([...posts, response.data]);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  // Update Post
  const updatePost = async (id) => {
    // TODO: Add Update Post Code
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${id}`);
      console.log(posts);
      setPosts(posts.filter((post) => post.id !== id));
      let newPosts = posts.filter((post) => post.id !== id);
      console.log(newPosts);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <Router>
      <Header title="My Blog" />
      <main>
        <Container className="pt-5">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Home
                loading={loading}
                posts={posts}
                setPosts={setPosts}
                createpost={createPost}
                deletePost={deletePost}
              />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/detail/:id">
              <PostDetail fetchPost={fetchPost} deletePost={deletePost}
                setPosts={setPosts} posts={posts}
              />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
