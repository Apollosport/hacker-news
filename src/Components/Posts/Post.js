import Datetime from "react-datetime";
import "./Post.css";
export default function Post({ posts }) {
  //console.log("Posts in Post: ", posts);

  /* const getTime = () => {
    const current = new Date();
    console.log("Now is ", current);
    return current;
  }; */
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  console.log("Now is ", current);

  return (
    <div className="listDiv">
      <li className="listItem">
        <a href={posts.url}>
          <h4 className="hNews">{posts.title}</h4>
        </a>
        <p className="listPara">
          {posts.points} points | by {posts.author} | {posts.created_at} | Now
          is {posts.num_comments} comments | date: {date}
        </p>
      </li>
    </div>
  );
}
