import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend flex items-center gap-3 pb-3">
      <div className="rightbarProfileImgContainer relative">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername font-bold">{user.username}</span>
    </li>
  );
}
