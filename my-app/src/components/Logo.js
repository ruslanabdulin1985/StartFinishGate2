import React from 'react';
import Logoimg from '../assets/CarsLogo.png'
import './Logo.css';
import { useNavigate } from "react-router-dom";


const Logo = () => {
    const navigate = useNavigate();
    return (<div className='logo' onClick={() => navigate('/')}>
        <img src={Logoimg} alt="Cars" width="500" />
    </div>)
}

export default Logo;