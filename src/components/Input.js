import styles from "./css/Input.module.css"
import {FaChevronRight, FaImage, FaPaperclip} from "react-icons/fa"

function Input() {
    return ( 
        <div className={styles.input}>
            <input type="text" placeholder="Type Something"/>
            <div className={styles.send}>
                <FaImage style={{color:"gray"}}/>
                <input type="file" style={{display:"none"}} id="file"></input>
                <label htmlFor="file" >
                    <FaPaperclip  style={{color:"gray"}}/>
                </label>
                <button>Send</button>
            </div>
        </div>
     );
}

export default Input;