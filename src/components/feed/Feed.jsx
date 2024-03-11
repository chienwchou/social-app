import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({ className, ...props }) {
  return (
    <div className={"feed " + className}>
      <div className="feedWrapper">
        <div>
          <Share />
          <Post />
        </div>
      </div>
    </div>
  );
}
