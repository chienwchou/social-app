import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer flex justify-around">
        <Sidebar className="basis-3/12" />
        <Feed className="basis-5/12" />
        <Rightbar className="basis-4/12" />
      </div>
    </>
  );
}
