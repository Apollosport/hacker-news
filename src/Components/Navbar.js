import "./Navbar.css";
import icon from "../H.TEAL.png";
import { useEffect, useState } from "react";

export default function Navbar({ setUrl, setPosts }) {
  const [input, setInput] = useState("");
  const startUrl = "http://hn.algolia.com/api/v1/search?tags=front_page";
  const searchUrl = `http://hn.algolia.com/api/v1/search?query=${input}&tags=story`;
  const newUrl = "http://hn.algolia.com/api/v1/search_by_date?tags=story";
  const commentUrl = "http://hn.algolia.com/api/v1/search_by_date?tags=comment";
  const askUrl = "http://hn.algolia.com/api/v1/search?tags=ask_hn";
  const showUrl = "http://hn.algolia.com/api/v1/search?tags=show_hn";

  /*   function searchFunction() {
    fetch(searchIUrl)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.hits);
        console.log("articles:", data.hits);
      })
      .catch((e) => console.error(e));
  } */
  useEffect(() => {
    /* searchFunction(); */
    setUrl(searchUrl);
  }, [input]);
  // function submitHandler(e) {
  //   e.preventDefault();
  // }
  function changeHandler(e) {
    setInput(e.target.value);
  }

  return (
    <div className="navbar">
      <img
        src={icon}
        alt="H Icon"
        className="icon"
        onClick={() => setUrl(startUrl)}
      />

      <h4 className="HN" onClick={() => setUrl(startUrl)}>
        Hacker News
      </h4>
      <input
        className="search-input"
        type="text"
        size="18"
        placeholder="Search"
        onChange={changeHandler}
        value={input}
      />

      <ul className="navbar-list">
        <li onClick={() => setUrl(newUrl)} className="clickLI">
          new
        </li>
        <p className="navP">|</p>
        <li>past</li>
        <p className="navP">|</p>
        <li onClick={() => setUrl(commentUrl)} className="clickLI">
          comments
        </li>
        <p className="navP">|</p>
        <li onClick={() => setUrl(askUrl)} className="clickLI">
          ask
        </li>
        <p className="navP">|</p>
        <li onClick={() => setUrl(showUrl)} className="clickLI">
          show
        </li>
        <p className="navP">|</p>
        <li>jobs</li>
      </ul>
    </div>
  );
}
