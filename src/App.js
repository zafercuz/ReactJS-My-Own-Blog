// Packages
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from 'react-bootstrap';

// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const BASE_URL = 'http://localhost:5000';

  // Used to initialize data
  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    }

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

  return (
    <Router>
      <Header title="My Blog" />
      <main>
        <Container className="pt-5">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/about" exact><About /></Route>
          </Switch>
        </Container>
      </main>
      
    </Router>
  );
}

export default App;
