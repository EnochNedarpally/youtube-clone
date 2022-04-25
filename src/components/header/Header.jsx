import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({handleSideBar}) => {
  const [input, setInput] = useState("")
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/search/${input}`, { replace: true });

  }
  return (
    <div className="header">
      <div className="header__left">
        <div className="hamburger">
          <FaBars size={28} onClick={handleSideBar}/>
        </div>
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="logo"
        />
      </div>
      <form onSubmit={handleSubmit} className="header__center">
        <input type="text" placeholder="Search" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button>
        <AiOutlineSearch />
        </button>
      </form>
      <div className="header__right">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="/images/avatar.png" alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
