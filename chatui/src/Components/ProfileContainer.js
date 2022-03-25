import Profile from "./Profile/ProfileCard";
import Conversation from "./Profile/Conversation";
import './Container.css';
import chatLogo from "../chatLogo.png";


const ProfileContainer = () => {
  return (
    <div className="profileContainer">
        <div className="quickChat">
            <img src={chatLogo} alt="chatLogo" className="chatLogo" />
            <h4>QuickChat</h4>
            </div>
        <Profile />
        <Conversation />

    </div>
  )
}

export default ProfileContainer