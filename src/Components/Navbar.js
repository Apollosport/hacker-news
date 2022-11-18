import "./Navbar.css";
import icon from "../H.TEAL.png";
import { useEffect, useState } from "react";

export default function Navbar({ setUrl }) {
  const [input, setInput] = useState("");
  const [see, setsee] = useState(false);
  const day = 86400000;
  const month = 2629800000;
  const year = 31556952000;
  let date = Date.now() - day;
  let date2 = date - day * 2;

  /*   let temp = date.parse(); */

  const startUrl =
    "http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50";
  const searchUrl = `http://hn.algolia.com/api/v1/search?query=${input}&tags=story&hitsPerPage=50`;
  const newUrl =
    "http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50";
  const commentUrl =
    "http://hn.algolia.com/api/v1/search?tags=comment&hitsPerPage=50";
  const askUrl =
    "http://hn.algolia.com/api/v1/search?tags=ask_hn&hitsPerPage=50";
  const showUrl =
    "http://hn.algolia.com/api/v1/search?tags=show_hn&hitsPerPage=50";
  const pastUrl = `http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3e${parseInt(
    date2 / 1000
  )},created_at_i%3c${parseInt(date / 1000)}&hitsPerPage=50`;

  useEffect(() => {
    setUrl(searchUrl);
  }, [input]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const setDay = (direction) => {
    if (direction) {
      date += day;
      date2 += day;
    } else {
      date -= day;
      date2 -= day;
    }
    console.log("date ", date, " pastUrl ", pastUrl);
    setUrl(pastUrl);
  };

  const setMonth = (direction) => {
    if (direction) {
      date += month;
      date2 += month;
    } else {
      date -= month;
      date2 -= month;
    }
    setUrl(pastUrl);
  };

  const setYear = (direction) => {
    if (direction) {
      date += year;
      date2 += year;
    } else {
      date -= year;
      date2 -= year;
    }
    setUrl(pastUrl);
  };

  const pastUrlFinder = () => {
    setsee((e) => !e);
    if (!see) {
      setUrl(pastUrl);
      /* date.setDate(date.getDate() - 1);*/
      /*       console.log(pastUrl); */
      console.log(parseInt(date2 / 1000));
    }
  };

  const urlFunction = (urlInput) => {
    setUrl(urlInput);
    setsee(false);
  };

  return (
    <div className="navbar-outer">
      <div className="navbar">
        <img
          src={icon}
          alt="H Icon"
          className="icon"
          onClick={() => setUrl(startUrl)}
        />
        <h4 className="HN" onClick={() => urlFunction(startUrl)}>
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
          <li onClick={() => urlFunction(newUrl)} className="clickLI">
            new
          </li>
          <p className="navP">|</p>
          <li onClick={() => pastUrlFinder()} className="clickLI">
            past
          </li>
          <p className="navP">|</p>
          <li onClick={() => urlFunction(commentUrl)} className="clickLI">
            comments
          </li>
          <p className="navP">|</p>
          <li onClick={() => urlFunction(askUrl)} className="clickLI">
            ask
          </li>
          <p className="navP">|</p>
          <li onClick={() => urlFunction(showUrl)} className="clickLI">
            show
          </li>
          <p className="navP">|</p>
          <li>jobs</li>
        </ul>
      </div>
      <div className={`${see ? "visible" : "invisible"} button-div`}>
        <button
          className="button-past"
          onClick={() => {
            setDay(false);
          }}
        >
          -d
        </button>
        <button
          className="button-past"
          onClick={() => {
            setMonth(false);
          }}
        >
          -m
        </button>
        <button
          className="button-past"
          onClick={() => {
            setYear(false);
          }}
        >
          -y
        </button>
        <button
          className="button-past"
          onClick={() => {
            setDay(true);
          }}
        >
          +d
        </button>
        <button
          className="button-past"
          onClick={() => {
            setMonth(true);
          }}
        >
          +m
        </button>
        <button
          className="button-past"
          onClick={() => {
            setYear(true);
          }}
        >
          +y
        </button>
      </div>
    </div>
  );
}
