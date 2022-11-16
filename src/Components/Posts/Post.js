import Datetime from "react-datetime";
import "./Post.css";
export default function Post({ posts }) {
  //console.log("Posts in Post: ", posts);

  return (
    <div className="listDiv">
      <li className="listItem">
        <h4 className="hNews" onClick={() => window.open(posts.url, "_blank")}>
          {posts.title}
        </h4>
        {console.log(posts)}
        <p className="listPara">
          Points {posts.points} | Article by: {posts.author} |Created At:{" "}
          {posts.created_at} |Comments {posts.num_comments}
        </p>
      </li>
    </div>
  );
}
