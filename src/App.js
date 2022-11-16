import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
function App() {
  const url = "http://hn.algolia.com/api/v1/search?tags=front_page";
  const [posts, setPosts] = useState([]);
  const [onLoading, setOnloading] = useState(false);

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
        .catch((e) => console.error(e));
    }, 2000);
  }

  // function fetchData2() {
  //   fetch("http://hn.algolia.com/api/v1/items/:id")
  //     .then((res) => res.json())
  //     .then((data) => console.log("hello", data))
  //     .catch((e) => console.error(e));
  // }
  // fetchData2();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar posts={posts} setPosts={setPosts} />
      {onLoading && (
        <div className="spinnerDiv">
          <SpinnerCircular />
        </div>
      )}
      <News posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
