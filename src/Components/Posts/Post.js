import "./Post.css";
import moment from "moment";

export default function Post({ posts, setUrl }) {
  const authUrl = `http://hn.algolia.com/api/v1/search?tags=story,author_${posts.author}`;
  //console.log("Posts in Post: ", posts);
  const timeago = moment(posts.created_at).fromNow();

  function extractDate() {
    const date = new Date();
    return (
      Date.now() -
      Date.UTC(
        posts.created_at.substr(0, 4),
        posts.created_at.substr(5, 2),
        posts.created_at.substr(8, 2),
        posts.created_at.substr(11, 2),
        posts.created_at.substr(14, 2),
        posts.created_at.substr(17, 2)
      )
    );
  }

  return (
    <div className="listDiv">
      <li className="listItem">
        <h4 className="hNews" onClick={() => window.open(posts.url, "_blank")}>
          {posts.title}
        </h4>
        {/* {console.log(posts)} */}
        {/* <p className="listPara">
          {posts.points} points | article by: {posts.author} | created at:{" "}
          {posts.created_at} | {posts.num_comments} comments
        </p> */}
        <div className="listPara">
          <p>{posts.points} points | article by: </p> <div>&nbsp;</div>
          <p onClick={() => setUrl(authUrl)} className="clickComment">
            {posts.author}
          </p>
          <p
            onClick={() => console.log(extractDate())}
            className="clickComment"
          >
            {" "}
            | created at: {posts.created_at} | {posts.num_comments} comments{" "}
          </p>
        </div>
      </li>
    </div>
  );
}
