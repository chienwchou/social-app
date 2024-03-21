import { Posts } from "../../dummyData";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({ className, ...props }) {
  console.log(Posts);
  return (
    <div className={"feed " + className}>
      <div className="feedWrapper">
        <div>
          <Share />
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
