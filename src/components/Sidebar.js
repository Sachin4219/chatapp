import styles from "./css/Sidebar.module.css"
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

function Sidebar() {
    return ( 
        <div className={styles.sidebar}>
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
     );
}

export default Sidebar;