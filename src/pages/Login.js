import { NavLink } from "react-router-dom";
import styles from "./css/Register.module.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    function submitHandler(e){
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }






    return ( 
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <h1 className={styles.logo}>Yelp chat</h1>
                <h2 className={styles.title}>Login</h2>
                <form>
                    <input name="email"    type="email" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input name="password" type="password" placeholder="CkNgP2#" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    <button className={styles.btn} onClick={submitHandler}>Sign in</button>
                </form>
                <p className={styles.external}>Don't have an account? <NavLink to="/register">Signup</NavLink></p>
            </div>
        </div>
     );
}

export default Login;