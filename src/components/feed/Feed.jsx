import "./feed.css";

export default function Feed({ className, ...props }) {
  return (
    <div className={"feed " + className}>
      <div className="feedWrapper">Feed</div>
    </div>
  );
}
