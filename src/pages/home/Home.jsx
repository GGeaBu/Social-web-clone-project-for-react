import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

function Home() {
    return (
        // jsx태그를 여러개 쓸땐 반드시 어떠한 jsx태그 즉, 열린태그와 닫힌태그
        // 사이에 있어야 하기에 아래와 같이 사용해줌
        <>
            <Topbar />
            {/* flex형태로 나타내주기 위해 container로 감싸줌 */}
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    );
}

export default Home;