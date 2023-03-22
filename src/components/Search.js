import styles from "./css/Search.module.css"

function Search() {
    return ( 
        <div className={styles.search}>
            <div className={styles.searchForm}>
                <input type="text" placeholder="find a user"/>
            </div>
            <div className={styles.chat}>
                <img src="avatar1.jpg" alt=""/>
                <div className={styles.userChatInfo}>
                    <span>Jane</span>
                </div>
            </div>
        </div>
     );
}

export default Search;