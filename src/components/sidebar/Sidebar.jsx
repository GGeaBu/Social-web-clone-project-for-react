import "./sidebar.css";
import { RssFeed, Chat, PlayCircleFilledWhite,
    Group, Bookmark, HelpOutline, WorkOutline,
    Event, School} from "@material-ui/icons";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledWhite className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>

                <hr className="sidebarHr"/>

                {/* 친구가 늘어날수록 뷰포트 전체의 스크롤이 생기게 하지 않고 
                해당 sidebar에만 스크롤 바가 생기도록 한다.
                .sidebar의 css에 overflow-y를 scroll로 한다. */}
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;