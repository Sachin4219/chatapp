import styles from "./css/Register.module.css"
import Add from"../img/addAvatar.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase"

function Register() {

    const [err, setErr] = useState(false)

    async function submitHandler(e){


        e.preventDefault()

        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        try{
        const res = await createUserWithEmailAndPassword(auth, email, password)

        const storageRef = ref(storage, displayName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            setErr(true)
          }, 
          () => { 

            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                await updateProfile(res.user, {
                    displayName,
                    photoURL:downloadURL,
                });
            const docdata = {
                    uid:res.user.uid,
                    displayName,
                    photoURL:downloadURL,
                    email
                }
                console.log(res.user)

                await setDoc(doc(db, "users", res.user.uid), docdata);
            });
          }
        );   
        }
        catch(err){
            setErr(true)
        }

    }

    return ( 
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <h1 className={styles.logo}>Yelp chat</h1>
                <h2 className={styles.title}>Register</h2>
                <form  onSubmit={submitHandler}>
                    <input name="username" type="text" placeholder="display name" />
                    <input name="email"    type="email" placeholder="email" />
                    <input name="password" type="password" placeholder="CkNgP2#" />
                    <input style={{display:"none"}} id="file" type="file" />
                    <label htmlFor="file">
                        <img src={Add} alt=""></img>
                        <span>Add an avatar</span>
                    </label>
                    <button className={styles.btn}>Sign Up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p className={styles.external}>You do have an account? <NavLink to="/login">Login</NavLink></p>
            </div>
        </div>
     );
}

export default Register;