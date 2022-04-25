import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';
import './_loginScreen.scss'

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const accessToken =useSelector(state=>state.auth.accessToken);
  const handleLogin = ()=>{
    dispatch(login());
  }
  useEffect(()=>{
    if(accessToken){
      navigate("/", { replace: true });
    }
  },[accessToken,navigate])
  return (
    <div className='loginContainer'>
            <div className="loginWrapper">
                    <h2>Youtube Clone</h2>
                    <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="logo" />
                    <button onClick={handleLogin}>Login With Google</button>
            </div>
    </div>
  )
}

export default LoginScreen