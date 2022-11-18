import "./Navbar.css";
import icon from "../H.TEAL.png";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function Navbar({ setUrl, comments }) {
  const [input, setInput] = useState("");
  const [see, setsee] = useState(false);
  const day = 86400;
  const month = 2628000;
  const year = 31536000;
  let date = parseInt(DateTime.now().toSeconds()) - day;
  let date2 = date - day * 2;

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

  useEffect(() => {
    setUrl(searchUrl);
  }, [input]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const setDay = (direction) => {
    /*     let date = parseInt(DateTime.now().toSeconds()) - day;
    let date2 = date - day * 2; */
    console.log("before date ", date, " date2 ", date2);
    if (direction) {
      date += day;
      date2 += day;
    } else {
      date -= day;
      date2 -= day;
    }
    console.log("after date ", date, " date2 ", date2);
    /* setUrl(pastUrl); */
    setUrl(
      `http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3e${date2},created_at_i%3c${date}&hitsPerPage=50`
    );
  };

  const setMonth = (direction) => {
    /* if (direction) {
      date += month;
      date2 += month;
    } else {
      date -= month;
      date2 -= month;
    }
    setUrl(pastUrl); */
  };

  const setYear = (direction) => {
    /* if (direction) {
      date += year;
      date2 += year;
    } else {
      date -= year;
      date2 -= year;
    }
    setUrl(pastUrl); */
  };

  const pastUrlFinder = () => {
    setsee((e) => !e);
    if (!see) {
      /* let date = parseInt(DateTime.now().toSeconds()) - day;
      let date2 = date - day * 2; */
      setUrl(
        `http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3e${date2},created_at_i%3c${date}&hitsPerPage=50`
      );
      /* date.setDate(date.getDate() - 1);*/
      /*       console.log(pastUrl); */
    }
  };

  const urlFunction = (urlInput) => {
    setUrl(urlInput);
    setsee(false);
  };

  const showDate = () => {
    let date3 = DateTime.now().toSeconds();
    /* console.log(parseInt(date.toSeconds())); */
    console.log(parseInt(date3));
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
        <button
          className="button-past"
          onClick={() => {
            showDate();
          }}
        >
          showdate
        </button>
      </div>
    </div>
  );
}
