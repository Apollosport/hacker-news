import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import { useState, useEffect } from "react";

function App() {
  const url = "http://hn.algolia.com/api/v1/search?tags=front_page";
  const [posts, setPosts] = useState([]);
  function fetchData() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      /* .then((response) => response.json()) */
      .then((data) => setPosts(data.hits))
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <News posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
