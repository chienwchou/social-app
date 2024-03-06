import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./share.css";

export default function Share() {
  return (
    <div className="share m-4 shadow-xl rounded-md">
      <div className="shareWrapper flex flex-col mx-4 my-8">
        <div className="shareTop flex items-center py-4">
          <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom py-4 px-4">
          <div className="shareOptions flex gap-4">
            <div className="shareOption flex items-center gap-2">
              <PermMedia htmlColor="tomato" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption flex items-center gap-2">
              <Label htmlColor="blue" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption flex items-center gap-2">
              <Room htmlColor="green" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption flex items-center gap-2">
              <EmojiEmotions htmlColor="goldenrod" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
        </div>
        <button
          className="shareButton
           bg-blue-500 py-2 px-4 rounded-md text-white font-semibold m-2"
        >
          Share
        </button>
      </div>
    </div>
  );
}
