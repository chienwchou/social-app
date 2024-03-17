import { MoreVert } from "@mui/icons-material";
import "./post.css";

export default function Post() {
  return (
    <div className="post m-4 shadow-xl rounded-md">
      <div className="postWrapper mx-4 my-8">
        <div className="postTop flex justify-between items-center py-2">
          <div className="postTopLeft flex items-center gap-4">
            <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
            <span className="postUsername font-bold">Safak Kocaoglu</span>
            <span className="postDate text-sm">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter pb-2">
          <span className="postText">Hey! it's my first post</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom flex pb-4 justify-between">
          <div className="postBottomLeft flex items-center gap-2">
            <div className="flex gap-1">
              <img className="likeIcon" src="/assets/like.png" alt="" />
              <img className="heartIcon" src="/assets/heart.png" alt="" />
            </div>
            <span className="postLikeCounter font-bold">
              32 people liked it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
