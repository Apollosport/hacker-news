import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
import Pagination from "./Components/Pagination";
function App() {
  const [posts, setPosts] = useState([]);
  const [onLoading, setOnloading] = useState(false);
  const [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  /* Get Current posts */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function fetchData() {
    setOnloading(true);
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          setPosts(data.hits);
          setOnloading(false);
        })
        .catch((e) => alert(e.message));
    }, 2000);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="App">
      <Navbar setUrl={setUrl} />
      {onLoading ? (
        <div className="spinnerDiv">
          <p>Loading......................</p>
          <SpinnerCircular />
        </div>
      ) : (
        <News
          posts={currentPosts}
          setUrl={setUrl}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
        />
      )}
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        setPostsPerPage={setPostsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
}

export default App;
