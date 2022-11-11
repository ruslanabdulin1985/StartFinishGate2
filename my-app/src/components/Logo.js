import React from 'react';
import Logoimg from '../assets/CarsLogo.png'
import './Logo.css';

const Logo = () => {
    return (<div className='logo'>
        <img src={Logoimg} alt="Cars" width="500" />
    </div>)
}

export default Logo;