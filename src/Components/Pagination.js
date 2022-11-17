import Post from "./Posts/Post";
import "./Pagination.css";
export default function Pagination({ totalPosts, postsPerPage, paginate }) {
  //console.log("posts in News:", posts);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagination">
      <a href="#" className="left">
        &laquo;
      </a>
      {pageNumber.map((number, index) => (
        <div>
          <ul className="News-ol">
            <li key={index} className="page">
              <a href="!#" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          </ul>
        </div>
      ))}
      <a href="#" className="left">
        &raquo;
      </a>
    </div>
  );
}
