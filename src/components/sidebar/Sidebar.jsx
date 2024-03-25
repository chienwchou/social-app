import {
  Bookmark,
  Chat,
  Event,
  People,
  QuestionAnswer,
  RssFeed,
  School,
  VideoCall,
  Work,
} from "@mui/icons-material";
import "./sidebar.css";

export default function Sidebar({ className, ...props }) {
  return (
    <div className={"sidebar px-5 overflow-y-scroll sticky " + className}>
      <div className="sidebarWrapper mt-5 font-semibold">
        <ul className="sidebarList flex flex-col gap-6">
          <li className="sidebarListItem flex items-center gap-3">
            <RssFeed />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem flex items-center gap-3">
            <Chat />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem flex items-center gap-3">
            <VideoCall />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem flex items-center gap-3">
            <People />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem flex items-center gap-3">
            <Bookmark />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem flex items-center gap-3">
            <QuestionAnswer />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem flex items-center gap-3">
            <Work />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem flex items-center gap-3">
            <Event />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem flex items-center gap-3">
            <School />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="my-3 py-1 px-16 font-normal bg-gray-200 rounded-sm">
          Show More
        </button>
        <hr className="my-2 w-9/12" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend flex items-center gap-2 pb-3">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="sidebarFriendImg w-10 h-10 rounded-full"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend flex items-center gap-2 pb-3">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="sidebarFriendImg w-10 h-10 rounded-full"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend flex items-center gap-2 pb-3">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="sidebarFriendImg w-10 h-10 rounded-full"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend flex items-center gap-2 pb-3">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="sidebarFriendImg w-10 h-10 rounded-full"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend flex items-center gap-2 pb-3">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="sidebarFriendImg w-10 h-10 rounded-full"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend flex items-center gap-2 pb-3">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="sidebarFriendImg w-10 h-10 rounded-full"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend flex items-center gap-2 pb-3">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="sidebarFriendImg w-10 h-10 rounded-full"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend flex items-center gap-2 pb-3">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="sidebarFriendImg w-10 h-10 rounded-full"
            />
            <span className="sidebarFriendName">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
