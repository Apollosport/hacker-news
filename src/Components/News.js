import "./News.css";
import Post from "./Posts/Post";
export default function News({ posts, setUrl }) {
  /*  console.log("posts in News:", posts); */
  return (
    <div className="News">
      <ol className="News-ol">
        {posts.length === 0 ? (
          <div className="noData">No data Found</div>
        ) : (
          posts.map((element) => <Post posts={element} setUrl={setUrl} />)
        )}
      </ol>
    </div>
  );
}
