import "./rightbar.css";

export default function Rightbar({ className, ...props }) {
  return (
    <div className={"rightbar " + className}>
      <ul className="rightbarList"></ul>
    </div>
  );
}
