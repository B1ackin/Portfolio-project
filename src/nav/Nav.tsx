import React from 'react';
import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">About me</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
        </div>
    );
}

export default Nav;
