import {LOAD_USER, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT} from '../actionTypes'
const initialState={
    accessToken:sessionStorage.getItem('yt-accessToken') ? sessionStorage.getItem('yt-accessToken') :null,
    loading:false,
    error:false,
    user:sessionStorage.getItem('yt-user') ? JSON.parse(sessionStorage.getItem('yt-user')) :null,
}
export const authReducer=(prevState=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case LOGIN_START:return{
            ...prevState,
            loading:true,
        };
        case LOGIN_SUCCESS:return{
            ...prevState,
            loading:false,
            accessToken:payload
        }
        case LOGIN_FAIL:return{
            ...prevState,
            loading:false,
            error:payload
        }
        case LOAD_USER:return{
            ...prevState,
            loading:false,
            user:payload
        }
        case LOGOUT:return{
            ...prevState,
            loading:false,
            accessToken:null,
            user:null,
        }
        default:return prevState
    }
}