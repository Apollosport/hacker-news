import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
function App() {
  //const url = "http://hn.algolia.com/api/v1/search?tags=front_page";

  const [posts, setPosts] = useState([]);
  const [onLoading, setOnloading] = useState(false);
  const [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?tags=front_page"
  );

  function fetchData() {
    setOnloading(true);
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          //console.log("Response:", response);
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        /* .then((response) => response.json()) */
        .then((data) => {
          setPosts(data.hits);
          setOnloading(false);
        })
        .catch((e) => alert(e.message));
    }, 3000);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="App">
      <Navbar setPosts={setPosts} setUrl={setUrl} />
      {onLoading ? (
        <div className="spinnerDiv">
          <p>Loading12345......................</p>
          <SpinnerCircular />
        </div>
      ) : (
        <News posts={posts} />
      )}
      <Footer />
    </div>
  );
}

export default App;
