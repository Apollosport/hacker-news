import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h4>Hacker News</h4>
      <form className="search">
        <input
          className="search-input"
          type="text"
          size="18"
          placeholder="Search"
        ></input>
      </form>
      <ul className="navbar-list">
        <li>new</li>
        <li>past</li>
        <li>comments</li>
        <li>ask</li>
        <li>show</li>
        <li>jobs</li>
        <li>submit</li>
      </ul>
    </div>
  );
}
