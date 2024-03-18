import "./rightbar.css";

export default function Rightbar({ className, ...props }) {
  return (
    <div className={"rightbar " + className}>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="/assets/person/1.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
