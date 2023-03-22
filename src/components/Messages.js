import styles from "./css/Messages.module.css"
import Message from "./Message";

function Messages() {
    return ( 
        <div className={styles.messages}>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
     );
}

export default Messages;