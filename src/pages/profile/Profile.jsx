import "./profile.css"; 
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile() {
    return (
        // jsx태그를 여러개 쓸땐 반드시 어떠한 jsx태그 즉, 열린태그와 닫힌태그
        // 사이에 있어야 하기에 아래와 같이 사용해줌
        <>
            <Topbar />
            {/* flex형태로 나타내주기 위해 container로 감싸줌 */}
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                            <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />                            
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
