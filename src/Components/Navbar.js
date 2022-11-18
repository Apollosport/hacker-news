import "./Navbar.css";
import icon from "../H.TEAL.png";
import { useEffect, useState } from "react";

export default function Navbar({ setUrl }) {
  const [input, setInput] = useState("");
  const startUrl =
    "http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50";
  const searchUrl = `http://hn.algolia.com/api/v1/search?query=${input}&tags=story`;
  const newUrl =
    "http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50";
  const commentUrl =
    "http://hn.algolia.com/api/v1/search?tags=comment&hitsPerPage=50";
  const askUrl =
    "http://hn.algolia.com/api/v1/search?tags=ask_hn&hitsPerPage=50";
  const showUrl =
    "http://hn.algolia.com/api/v1/search?tags=show_hn&hitsPerPage=50";
  const pastUrl =
    "http://hn.algolia.com/api/v1/search?created_at_i=2022-11-15T&hitsPerPage=50";

  useEffect(() => {
    setUrl(searchUrl);
  }, [input]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

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
      <form>
        <input
          className="search-input"
          type="text"
          size="18"
          placeholder="Search"
          onChange={changeHandler}
          value={input}
        />
      </form>

      <ul className="navbar-list">
        <li onClick={() => setUrl(newUrl)} className="clickLI">
          new
        </li>
        <p className="navP">|</p>
        <li onClick={() => setUrl(commentUrl)} className="clickLI">
          past
        </li>
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
