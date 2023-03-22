import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import styles from "./css/Home.module.css"

function Home() {
    return ( 
        <div className={styles.home}>
            <div className={styles.container}>
                <Sidebar/>
                <Chat/>
            </div>
        </div>
     );
}

export default Home;
