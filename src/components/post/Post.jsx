import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const user = Users.filter((u) => u.id === post.userId)[0];

  console.log(user);
  return (
    <div className="post m-4 shadow-xl rounded-md">
      <div className="postWrapper mx-4 my-8">
        <div className="postTop flex justify-between items-center py-2">
          <div className="postTopLeft flex items-center gap-4">
            <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
            <span className="postUsername font-bold">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate text-sm">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter pb-2">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom flex pb-4 justify-between">
          <div className="postBottomLeft flex items-center gap-2">
            <div className="flex gap-1">
              <img className="likeIcon" src="/assets/like.png" alt="" />
              <img className="heartIcon" src="/assets/heart.png" alt="" />
            </div>
            <span className="postLikeCounter font-bold">
              {post.like} people liked it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
