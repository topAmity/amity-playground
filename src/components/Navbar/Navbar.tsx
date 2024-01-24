// App.js

import { Button } from 'antd';
import './Navbar.css'
import { IoCode, IoReloadCircle } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";

const Navbar = ({ children }: any) => {


    return (
        <div className='nav-container'>
            <div className='nav-row'>
                <p className='playground-title'>Playground</p>
                <div className='btn-row'>
                    <button className='custom-btn'>
                        <FaCode className='button-icon' />
                        Inspect Code
                    </button>
                    <button className='reset-btn'>
                        <IoReloadCircle className='reset-icon' />
                        Reset
                    </button>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Navbar;
