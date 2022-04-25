import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import {Routes, Route, useNavigate} from 'react-router-dom'
import './_app.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScreen from './screens/searchScreen/SearchScreen'

const Layout=({children})=>{
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const handleSideBar=()=>{
    setSideBarOpen(value=>!value);
  }

  return(
  <>
    <Header  handleSideBar={handleSideBar} />
    <div className='app_container'>
        <SideBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} className="border border-success"/>
        <Container fluid className='app_main'>
          {children}
        </Container>
    </div> 
  </>
  )
}

const App = () => {
  const navigate=useNavigate();
  const {accessToken,loading} = useSelector(state=>state.auth)
  useEffect(()=>{
    if(!accessToken && !loading){
      navigate("/login", { replace: true });
    }
  },[accessToken,loading,navigate])
  return (
    <Routes>
      <Route exact path="/" element={
        <Layout><HomeScreen/></Layout>
         
      }/>
      <Route path='/watch/:id' element={
        <Layout><WatchScreen/></Layout>
         
      }/>
      <Route path='/search/:query' element={
        <Layout><SearchScreen/></Layout>
         
      }/>
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="*" element={<HomeScreen/>} />
    </Routes>
  )
}

export default App