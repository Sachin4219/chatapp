import styles from "./css/Message.module.css"

function Message() {
    return ( 
        <div className={styles['message']+" "+styles['owner']}>
            <div className={styles.messageInfo}>
                <img src="avatar1.jpg" alt="chat participant"/>
                <span>Just Now</span>
            </div>
            <div className={styles.messageContent}>
                <p>hello</p>
                <img src="avatar5.jpg"/>
            </div>
        </div>
     );
}

export default Message;