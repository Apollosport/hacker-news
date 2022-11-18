import "./SingleComment.css";
import moment from "moment";

export default function SingleComment({ articles }) {
  const timeago = moment(articles.created_at).fromNow();
  return (
    <>
      {articles.map((article) => (
        <div>
          <h4>{article.story_title}</h4>
          <p>{article.comment_text}</p>
          <p>
            Comment by: {article.author} | created_at : {timeago} | Points{" "}
            {article.points}
          </p>
        </div>
      ))}
    </>
  );
}
