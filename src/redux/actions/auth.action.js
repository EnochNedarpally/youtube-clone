// import firebase from 'firebase/compat/app'
import { auth } from '../../firebase'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { LOAD_USER, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from '../actionTypes';
export const login = ( ) => async dispatch =>{
    try {
        dispatch({
            type:LOGIN_START,
        })
        const provider = new GoogleAuthProvider()
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
        const res = await signInWithPopup(auth, provider)
        const accessToken=res.user.accessToken;
        const profile={
            name:res.user.displayName,
            photoURL:res.user.photoURL
        };
        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })
        dispatch({
            type:LOAD_USER,
            payload:profile
        })
        sessionStorage.setItem("yt-accessToken",accessToken);
        sessionStorage.setItem("yt-user",JSON.stringify(profile));
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message
        })
        
    }
}

export const logout=()=>async dispatch=>{
    dispatch({
        type:LOGOUT,
    })
    sessionStorage.removeItem("yt-accessToken");
    sessionStorage.removeItem("yt-user");
}