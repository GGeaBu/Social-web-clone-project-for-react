import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar() {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/gift.png" alt="" />
            <span className="birthText">
              <b>Pola Foster</b> and <b>3 other friends</b> hav a birthday
              today.
            </span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u => (
              <Online key={u.id} user={u}/>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Rightbar;