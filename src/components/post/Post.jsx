import { MoreVert } from "@mui/icons-material";
import "./post.css";

export default function Post() {
  return (
    <div class="post m-4 shadow-xl rounded-md">
      <div class="postWrapper mx-4 my-8">
        <div class="postTop flex justify-between items-center py-2">
          <div class="postTopLeft flex items-center gap-4">
            <img class="postProfileImg" src="/assets/person/1.jpg" alt="" />
            <span class="postUsername font-bold">Safak Kocaoglu</span>
            <span class="postDate text-sm">5 mins ago</span>
          </div>
          <div class="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div class="postCenter pb-2">
          <span class="postText">Hey! it's my first post</span>
          <img class="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div class="postBottom flex pb-4 justify-between">
          <div class="postBottomLeft flex">
            <img class="likeIcon" src="/assets/like.png" alt="" />
            <img class="heartIcon" src="/assets/heart.png" alt="" />
            <span class="postLikeCounter font-bold">32 people liked it</span>
          </div>
          <div class="postBottomRight">
            <span class="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
