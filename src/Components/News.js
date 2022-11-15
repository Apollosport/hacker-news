import "./News.css";
import Post from "./Posts/Post";
export default function News({ posts }) {
  console.log("posts in News:", posts);
  return (
    <div className="News">
      <ol className="News-ol">
        {posts.map((element) => (
          <Post posts={element} />
        ))}
      </ol>
    </div>
  );
}
