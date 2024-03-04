import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer flex">
        <Sidebar className="basis-3" />
        <Feed className="basis-5" />
        <Rightbar className="basis-4" />
      </div>
    </>
  );
}
