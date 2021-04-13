import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import {login} from './features/userSlice'
import './Login.css'

const Login = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [name,setName]=useState("");
const [profilePic,setProfilepic]=useState("");
const dispatch = useDispatch();

    const register =()=>{
        if(!name){
            return alert("please Enter a full Name");
        }

        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=> {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic,
                    })
                );
            });
        }).catch(error => alert(error));
         alert("profile created Successfully")

     
    };

    const loginToApp=(e)=>{
        e.preventDefaults();
        alert("looged Successfully")
        

    };
    return (
        <div className='login'>
            <img src="data:image/png;base64,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" alt="Lin" />
            

            <form>
                <input 
                    value={name} 
                    onChange={e =>setName(e.target.value)} 
                    placeholder="Full Name" type="text"/>
                <input 
                    value={profilePic} 
                    onChange={e =>setProfilepic(e.target.value)} 
                    placeholder="DP Url" type="text"/>
                <input 
                    value={email} 
                    onChange={e =>setEmail(e.target.value)} 
                    placeholder="abc@gmail.com" 
                    type="email"/>
                <input 
                    value={password} 
                    onChange={e =>setPassword(e.target.value)} 
                
                    placeholder="********" type="password"/>
                <button type='submit' onClick={loginToApp}>Sign In</button>

            </form>
            <p> Not a Member?
                 <button className="login_register" onClick={register}> Register Now</button>
            </p>

        </div>
    )
}

export default Login
