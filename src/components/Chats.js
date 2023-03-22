import styles from "./css/Chats.module.css"

function Chats() {
    return ( 
        <div className={styles.chats}>
            <div className={styles.chat}>
                <img src="avatar1.jpg" alt=""/>
                <div className={styles.userChatInfo}>
                    <span>Jane</span>
                    <p>
                        Hello
                    </p>
                </div>
            </div>
            <div className={styles.chat}>
                <img src="avatar2.jpg" alt=""/>
                <div className={styles.userChatInfo}>
                    <span>John</span>
                    <p>
                        Hallo
                    </p>
                </div>
            </div>
            <div className={styles.chat}>
                <img src="avatar3.jpg" alt=""/>
                <div className={styles.userChatInfo}>
                    <span>Kip</span>
                    <p>
                        Yo
                    </p>
                </div>
            </div>
            <div className={styles.chat}>
                <img src="avatar4.jpg" alt=""/>
                <div className={styles.userChatInfo}>
                    <span>Jenny</span>
                    <p>
                        Hi
                    </p>
                </div>
            </div>
            <div className={styles.chat}>
                <img src="avatar5.jpg" alt=""/>
                <div className={styles.userChatInfo}>
                    <span>Joe</span>
                    <p>
                        Hi
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Chats;