import styles from "./css/Navbar.module.css"

function Navbar() {
    return ( 
        <div className={styles.navbar}>
            <span className={styles.title}>Lama Chat</span>
            <div className={styles.user}>
                <img src="userimg.webp" alt=""/>
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
     );
}

export default Navbar;