import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar({ className, ...props }) {
  return (
    <div className={"rightbar " + className}>
      <div className="rightbarWrapper">
        <div className="birthdayContainer flex items-center gap-4 my-4">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img
          className="rightbarAd mb-4 p-4 rounded-3xl overflow-hidden"
          src="/assets/ad.png"
          alt=""
        />
        <h4 className="rightbarTitle font-bold mb-2">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
