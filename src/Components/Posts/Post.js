import "./Post.css";
export default function Post({ posts, setUrl }) {
  const authUrl = `http://hn.algolia.com/api/v1/search?tags=story,author_${posts.author}`;
  //console.log("Posts in Post: ", posts);

  function extractDate() {
    const date = new Date();
    /* console.log(
      posts.created_at.substr(11, 2),
      " seconds ",
      Date.UTC(
        posts.created_at.substr(0, 4),
        posts.created_at.substr(5, 2),
        posts.created_at.substr(8, 2),
        posts.created_at.substr(11, 2),
        posts.created_at.substr(14, 2),
        posts.created_at.substr(17, 2)
      ) 
    );*/
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

  function getDate() {
    const current = new Date();
    const date = `${current.getFullYear()}/${
      current.getMonth() + 1
    }/${current.getDate()}`;
    console.log("hier ", current);
    return date;
  }

  function time() {
    const date1 = new Date(
      posts.created_at.substr(0, 4) +
        "/" +
        posts.created_at.substr(5, 2) +
        "/" +
        posts.created_at.substr(8, 2)
    );
    const current = new Date();
    const date2 = `${current.getFullYear()}/${
      current.getMonth() + 1
    }/${current.getDate()}`;
    console.log("date2 ", " date1 ", date1.substr(8, 2));
    const time1 = date1 - current;
    console.log("time ", time1);
    time1 = time1 / (1000 * 3600 * 24);
    return time1;
  }

  function diffTime(date2, date1) {
    return Math.abs(date2 - date1);
  }

  function diffDays(date2, date1) {
    return Math.ceil(diffTime(date2, date1) / (1000 * 60 * 60 * 24));
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
          <p>{posts.points} points | article by: </p> <p> </p>
          <p onClick={() => setUrl(authUrl)} className="clickComment">
            {" "}
            {posts.author}
            {` `}
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
