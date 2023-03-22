import Messages from "./Messages";
import styles from "./css/Chat.module.css"
import {FaVideo, FaUserPlus, FaEllipsisH, FaUser } from "react-icons/fa"
import Input from "./Input"

function Chat() {
    return ( 
        <div className={styles.chat}>
            <div className={styles.chatInfo}>
                <span>Jane</span>
                <div className={styles.chatIcons}>
                    <FaUser      style={{padding:"0 5px"}}/>
                    <FaVideo     style={{padding:"0 5px"}}/>
                    <FaUserPlus  style={{padding:"0 5px"}}/>
                    <FaEllipsisH style={{padding:"0 5px"}}/>
                </div>
            </div>
            <Messages />
            <Input/>
        </div>
     );
}

export default Chat;