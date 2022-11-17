import "./Post.css";
export default function Post({ posts, setUrl }) {
  const authUrl = `http://hn.algolia.com/api/v1/search?tags=story,author_${posts.author}`;

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
          <div>&nbsp;</div>
          <p onClick={() => console.log("hello")} className="clickComment">
            | created at: {posts.created_at} | {posts.num_comments} comments{" "}
          </p>
        </div>
      </li>
    </div>
  );
}
