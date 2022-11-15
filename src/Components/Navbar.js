import "./Navbar.css";
import icon from "../H.TEAL.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="top" className="ahrefIcon">
        <img src={icon} alt="H Icon" className="icon" />
      </a>
      <h4>
        <a href="top" className="ahrefHN">
          Hacker News
        </a>
      </h4>
      <form className="search">
        <input
          className="search-input"
          type="text"
          size="18"
          placeholder="Search"
        ></input>
      </form>
      <ul className="navbar-list">
        <li className="liElement">new</li>
        <li>past</li>
        <li>comments</li>
        <li>ask</li>
        <li>show</li>
        <li>jobs</li>
      </ul>
    </div>
  );
}
