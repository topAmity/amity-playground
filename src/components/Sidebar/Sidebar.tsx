// App.js

import './Sidebar.css'
import logo from "./Amity.svg";
import { IoPeopleSharp, IoChatbubbles } from "react-icons/io5";
import { CgFeed } from "react-icons/cg";
import { FaIcons } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();

  const onClickNavigate =(pageName: string)=>{

    navigate(`/${pageName}`);

  }

  return (
    <nav className='container'>
      <div>
        <img className="logo-img" src={logo} alt="amity-logo" />
      </div>

      <div className='user-area'>
        <div className='avatar'><p className='text-display'>T</p></div>
        <div className='user'>
          <p className='user-name'>Top Thanaphon</p>
        </div>
      </div>

      <p className='group-title'>PLAYGROUND</p>
      <div className='title'>
        <p className='title-row' onClick={()=>onClickNavigate('social')}> <FaIcons className='icon' /><p className='title-name'>Social UIKit</p></p>
      </div>
      <div className='title'>
      <p className='title-row' onClick={()=>onClickNavigate('chat')}> <IoChatbubbles className='icon' /><p className='title-name'>Chat UIKit</p></p>
      </div>

    </nav>
  );
};

export default Sidebar;
