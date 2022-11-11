import React from 'react';
import './Menu.css';

const Menu = () => {
    return (<div className='menublock'>
        <ul className='menu'>
            <li className='menuitem'><a href="race">Race</a></li>
            <li className='menuitem'><a href="scores">Scores</a></li>

        </ul>
    </div>)
}

export default Menu;