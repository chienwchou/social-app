import { Person, Search, Chat, Notifications } from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer flex justify-between items-center px-10 py-5 bg-blue-500 w-full">
      <div className="topbarLeft font-bold text-xl basis-3/12">
        <span className="logo text-white">Social App</span>
      </div>
      <div className="topbarCenter basis-5/12">
        <div className="searchbar flex flex-row bg-white p-1 rounded-full">
          <Search />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput w-full bg-transparent outline-none border-none"
          />
          <i className="searchIcon fas fa-search"></i>
        </div>
      </div>
      <div className="topbarRight flex px-5 basis-4/12 text-white items-center">
        <div className="topbarLinks basis-4/12 flex gap-10">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons flex basis-8/12 justify-center gap-5">
          <div className="topbarIconItem cursor-pointer relative">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem cursor-pointer relative">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem cursor-pointer relative">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpg"
          alt=""
          className="topbarImg w-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
